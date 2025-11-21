import { apiInstanceAuth } from "../utils/apiClient";

export const getStudent = async () => apiInstanceAuth.get('/students').then(res => res.data)