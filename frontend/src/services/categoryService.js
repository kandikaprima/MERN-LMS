import { apiInstanceAuth } from "../utils/apiClient";

export const getCategories = async () => apiInstanceAuth.get('/categories').then(res => res.data)