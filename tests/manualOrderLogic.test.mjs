import * as L from "../src/utils/manualOrderLogic.js";
let pass=0, fail=0;
const ok=(name,cond,extra="")=>{ cond?pass++:fail++; console.log((cond?"PASS ":"FAIL ")+name+(cond?"":"  "+extra)); };
const throws=(name,fn,msg)=>{ try{fn(); ok(name,false,"did not throw");}catch(e){ ok(name,e instanceof L.ManualOrderError && (!msg||e.message.includes(msg)),e.message);} };

const product={ name:"Red Roses", selling_price:1000, original_price:1200, media:{primary_image_url:"x.jpg"}, categorization:{category_name:"Flowers"},
  variations:[{_id:"v1",variant_name:"Large",selling_price:1500,original_price:1800}],
  care_and_logistics:{add_ons:[{_id:"a1",name:"Vase",selling_price:200,image_url:"v.jpg"}]}};

// phones
ok("phone 10 digit", L.normPhone("98765 43210")==="+919876543210");
ok("phone +91 prefix", L.normPhone("+91-9876543210")==="+919876543210");
ok("phone invalid short", L.normPhone("12345")===null);
ok("phone starts 5 invalid", L.normPhone("5876543210")===null);

// lines
let l=L.resolveLine(product,{productId:"P1",quantity:2});
ok("base price x qty", l.lineTotal===2000 && !l.edited);
l=L.resolveLine(product,{productId:"v1",quantity:1});
ok("variant price used", l.lineTotal===1500 && l.cartItem.variant_name==="Large");
l=L.resolveLine(product,{productId:"P1",quantity:2,addOns:[{_id:"a1",quantity:2}]});
ok("add-ons added", l.lineTotal===2400 && l.cartItem.add_ons[0].selling_price===200);
l=L.resolveLine(product,{productId:"P1",quantity:1,price:800});
ok("price override flagged", l.lineTotal===800 && l.edited);
l=L.resolveLine(product,{productId:"P1",quantity:1,price:"1000"});
ok("same price not flagged", !l.edited);
throws("qty zero", ()=>L.resolveLine(product,{productId:"P1",quantity:0}),"quantity");
throws("negative price", ()=>L.resolveLine(product,{productId:"P1",quantity:1,price:-5}),"Invalid price");
throws("unknown add-on", ()=>L.resolveLine(product,{productId:"P1",quantity:1,addOns:[{_id:"zz"}]}),"add-on");

// totals
let p=L.priceOrder({lineTotals:[2000,500],shipping:49,couponDiscount:100,adminDiscount:0,pincodeSurcharge:50,deliverySurcharge:100});
ok("total = subtotal+ship-coupon+surcharges", p.total===2599 && p.subtotal===2500, JSON.stringify(p));
p=L.priceOrder({lineTotals:[1000],shipping:49,adminDiscount:200,discountReason:"loyal customer"});
ok("admin discount applied", p.total===849 && p.adminDiscount===200);
throws("discount needs a reason", ()=>L.priceOrder({lineTotals:[1000],shipping:0,adminDiscount:50}),"reason");
throws("discount that makes the order free is rejected", ()=>L.priceOrder({lineTotals:[1000],shipping:0,adminDiscount:5000,discountReason:"test"}),"more than zero");
p=L.priceOrder({lineTotals:[1000],shipping:49,adminDiscount:5000,discountReason:"test"});
ok("discount capped at product subtotal (shipping still charged)", p.adminDiscount===1000 && p.total===49, JSON.stringify(p));
p=L.priceOrder({lineTotals:[1000],shipping:49,couponDiscount:5000});
ok("coupon capped at subtotal", p.couponDiscount===1000 && p.total===49);
p=L.priceOrder({lineTotals:[1000],shipping:0,pincodeSurcharge:100,deliverySurcharge:50,waiveSurcharges:true,discountReason:"remote area waived"});
ok("waived surcharges are zero", p.pincodeSurcharge===0 && p.deliverySurcharge===0 && p.total===1000);
throws("waiving needs a reason", ()=>L.priceOrder({lineTotals:[1000],shipping:0,pincodeSurcharge:100,waiveSurcharges:true}),"reason");
p=L.priceOrder({lineTotals:[999.99],shipping:49.5});
ok("rounding to paise", p.total===1049.49, String(p.total));
p=L.priceOrder({lineTotals:[100],shipping:999999});
ok("shipping capped at 5000", p.shipping===5000);

const good={firstName:"Asha",street:"12 MG Road, Indiranagar",city:"Bengaluru",state:"Karnataka",postalCode:"560038",phone:"9876543210"};
let a=L.cleanAddress(good);
ok("address ok, phone 10 digits, country India", a.phone==="9876543210" && a.country==="India");
throws("bad pin", ()=>L.cleanAddress({...good,postalCode:"5600"}),"pin code");
throws("bad phone", ()=>L.cleanAddress({...good,phone:"123"}),"phone");
throws("missing name", ()=>L.cleanAddress({...good,firstName:" "}),"name");
throws("short street", ()=>L.cleanAddress({...good,street:"abc"}),"address");

const now=new Date("2026-10-13T10:00:00+05:30");
ok("today allowed", L.parseDeliveryDate("2026-10-13",now) instanceof Date);
ok("future allowed", L.parseDeliveryDate("2026-12-25",now) instanceof Date);
throws("yesterday rejected", ()=>L.parseDeliveryDate("2026-10-12",now),"past");
throws("garbage date", ()=>L.parseDeliveryDate("13-10-2026",now),"delivery date");
const late=new Date("2026-10-13T23:30:00+05:30");
ok("IST day respected at 11:30pm IST", L.parseDeliveryDate("2026-10-13",late) instanceof Date);
const earlyUtc=new Date("2026-10-13T20:00:00Z");
throws("after IST midnight, yesterday-in-IST rejected", ()=>L.parseDeliveryDate("2026-10-13",earlyUtc),"past");

ok("COD ok", L.checkPayment({paymentMode:"COD"}).mode==="COD");
ok("paid offline ok", L.checkPayment({paymentMode:"PAID_OFFLINE",paymentChannel:"UPI",paymentReference:" UTR123 "}).reference==="UTR123");
throws("paid offline needs channel", ()=>L.checkPayment({paymentMode:"PAID_OFFLINE"}),"payment was received");
throws("unknown mode", ()=>L.checkPayment({paymentMode:"CREDIT"}),"how the customer");

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
