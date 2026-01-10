import PageContent from "../models/PageContent.js";

/**
 * GET content by page (USER)
 */
export const getContentByPage = async (req, res) => {
  try {
    const { page } = req.query;

    if (!page) {
      return res.status(400).json({
        success: false,
        message: "Page is required",
      });
    }

    const content = await PageContent.findOne({ page });

    return res.json({
      success: true,
      htmlCode: content ? content.htmlCode : "",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ADD / UPDATE content (ADMIN)
 */
export const upsertPageContent = async (req, res) => {
  try {
    const { page, htmlCode } = req.body;

    if (!page || !htmlCode) {
      return res.status(400).json({
        success: false,
        message: "Page and htmlCode are required",
      });
    }

    const content = await PageContent.findOneAndUpdate(
      { page },
      {
        page,
        htmlCode,
        updatedBy: req.user._id,
      },
      { new: true, upsert: true }
    );

    res.json({
      success: true,
      message: "Content saved successfully",
      data: content,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/**
 * GET all page contents (ADMIN)
 */
export const getAllPageContents = async (req, res) => {
  try {
    const contents = await PageContent.find({})
      .sort({ updatedAt: -1 });

    res.json({
      success: true,
      data: contents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
