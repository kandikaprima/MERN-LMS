import courseModel from "../models/course-model.js";
import userModel from "../models/user-model.js";

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
        manager: req.user._id,
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
        manager: req.user._id,
      })
      .populate({
        path: "details",
        select: "name type",
        match: {
          type: "text",
        },
      });

    const totalTexts = coursesTexts.reduce(
      (acc, curr) => acc + curr.details.length,
      0
    );

    const latestCourses = await courseModel
      .find({
        manager: req.user?._id,
      })
      .select("name thumbnail")
      .populate({
        path: "category",
        select: "name -_id",
      })
      .populate({
        path: "students",
        select: "name",
      });

    const image_url = process.env.APP_URL + "/uploads/courses/";

    const responseLatestCourses = latestCourses.map((item) => {
      return {
        ...item.toObject(),
        thumbnail_url: image_url + item.thumbnail,
        total_students: item.students.length,
      };
    });

    const latestStudents = await userModel
      .find({
        role: "student",
        manager: req.user._id,
      })
      .select("name courses photo");

    const photoUrl = process.env.APP_URL + "/uploads/students/";

    const responseLatestStudent = latestStudents.map((item) => {
      return {
        ...item.toObject(),
        photo_url: photoUrl + item.photo,
      };
    });

    return res.json({
      message: "Get Overview Success",
      data: {
        totalCourse,
        totalStudent,
        totalVideos,
        totalTexts,
        courses: responseLatestCourses,
        students: responseLatestStudent,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
