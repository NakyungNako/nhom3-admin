import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/products/find/${id}`;
    return axiosClient.get(url);
  },
  put: (id, body) => {
    const url = `/products/${id}`;
    return axiosClient.put(url, body);
  }
}

export default productApi;