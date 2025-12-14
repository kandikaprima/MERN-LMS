import { apiInstanceAuth } from "../utils/apiClient";

export const getOverviews = async () =>
  apiInstanceAuth.get("/overviews").then((res) => res.data);
