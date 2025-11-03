import { apiInstanceAuth } from "../utils/apiClient";

export const getCourses = async () =>
  apiInstanceAuth.get("/courses").then((res) => res.data);

export const getCourseDetail = async (id, isPreview = false) =>
  apiInstanceAuth
    .get(`/courses/${id}${isPreview ? "?preview=true" : ""}`)
    .then((res) => res.data);

export const createCourse = async (data) =>
  apiInstanceAuth
    .post("/courses", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const updateCourse = async (data, id) =>
  apiInstanceAuth
    .put(`/courses/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const deleteCourse = async (id) =>
  apiInstanceAuth.delete(`/courses/${id}`).then((res) => res.data);
