import { apiInstanceAuth } from "../utils/apiClient";

export const createContent = async (data) =>
  apiInstanceAuth.post("/courses/content", data).then((res) => res.data);
export const getDetailContent = async (id) =>
  apiInstanceAuth.get(`/courses/content/${id}`).then((res) => res.data);
export const updateContent = async (data, id) =>
  apiInstanceAuth.put(`/courses/content/${id}`, data).then((res) => res.data);
export const deleteDetailContent = async (id) =>
  apiInstanceAuth.delete(`/courses/content/${id}`).then((res) => res.data);
