import courseModel from "../models/course-model.js";

export const getOverviews = async (req, res) => {
  try {
    const totalCourse = await courseModel
      .find({
        manager: req.user._id,
      })
      .countDocuments();

    const courses = await courseModel.find({
      manager: req.user._id,
    });

    const totalStudent = courses.reduce(
      (acc, curr) => acc + curr.students.length,
      0
    );

    const coursesVideos = await courseModel
      .find({
        manager: req.user._di,
      })
      .populate({
        path: "details",
        select: "name type",
        match: {
          type: "video",
        },
      });

    const totalVideos = coursesVideos.reduce(
      (acc, curr) => acc + curr.details.length,
      0
    );

    const coursesTexts = await courseModel
      .find({
        manager: req.user._di,
      })
      .populate({
        path: "details",
        select: "name type",
        match: {
          type: "text",
        },
      });

    const totalTexts = coursesText.reduce(
      (acc, curr) => acc + curr.details.length,
      0
    );

    return res.json({
      message: "Get Overview Success",
      data: {
        totalCourse,
        totalStudent,
        totalVideos,
        totalTexts,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
