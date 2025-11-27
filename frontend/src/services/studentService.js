import { apiInstanceAuth } from "../utils/apiClient";

export const getStudent = async () =>
  apiInstanceAuth.get("/students").then((res) => res.data);

export const getDetailStudent = async (id) =>
  apiInstanceAuth.get(`/students/${id}`).then((res) => res.data);

export const createStudent = async (data) =>
  apiInstanceAuth
    .post("/students", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const updateStudent = async (data, id) =>
  apiInstanceAuth
    .put(`/students/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const deleteStudent = async (id) =>
  apiInstanceAuth.delete(`/students/${id}`).then((res) => res.data);

export const getStudentCourse = async (id) =>
  apiInstanceAuth.get(`/courses/students/${id}`).then((res) => res.data);