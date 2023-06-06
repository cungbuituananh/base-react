import axios, { AxiosInstance } from "axios";

const axiosInstance = axios.create();

export class APICore {
  axiosApi: AxiosInstance = axiosInstance;

  constructor(axiosApi: any) {
    if (axiosApi) {
      this.axiosApi = axiosApi;
    }
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
    this.put = this.put.bind(this);
    //   this.updatePatch = this.updatePatch.bind(this);
  }

  get = (
    url: string,
    params: Record<string, string | number | any>,
    config: any
  ) => {
    let response;
    if (params && Object.keys(params).length !== 0) {
      const queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";

      response = this.axiosApi.get(`${url}?${queryString}`, config);
    } else {
      response = this.axiosApi.get(`${url}`, config);
    }
    return response;
  };
  post = (url: string, data?: any, config?: any) => {
    return this.axiosApi.post(url, data, config);
  };

  put = (url: string, data?: any) => {
    return this.axiosApi.put(url, data);
  };

  delete = (url: string, data?: any) => {
    return this.axiosApi.delete(url, data);
  };
  // postParam = (url, params) => {
  //   const queryString = params
  //     ? Object.keys(params)
  //         .map((key) => key + "=" + params[key])
  //         .join("&")
  //     : "";

  //   return this.axiosApi.post(`${url}?${queryString}`);
  // };
  // postMultiForm = (url, data) => {
  //   const config = {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   };
  //   return this.axiosApi.post(url, data, config);
  // };
  // postDownloadFile = (url, data, config) => {
  //   return this.axiosApi.post(url, data, { ...config, responseType: "blob" });
  // };
  // getDownloadFile = (url, data, config) => {
  //   return this.get(url, data, {
  //     ...config,
  //     responseType: "blob",
  //   });
  // };
  // postFilter = (url, payload) => {
  //   return this.axiosApi.post(url, payload);
  // };
  // getFilter = (url, payload) => {
  //   const { page = 0, size = 10 } = payload || {};
  //   return this.get(url, { ...payload, page, size });
  // };
}
