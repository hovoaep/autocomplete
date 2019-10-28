import { GET, BASI_URL } from "../_constants";

export const createRequest = (url, method = GET) => {
  return fetch(`${BASI_URL}${url}`, {
    method
  });
};
