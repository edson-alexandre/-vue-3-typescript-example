import http from "@/http-common";

class TutorialDataService {
  //eslint-disable-next-line
  getAll(): Promise<any> {
    return http.get("/tutorials");
  }

  //eslint-disable-next-line
  get(id: any): Promise<any> {
    return http.get(`/tutorials/${id}`);
  }

  //eslint-disable-next-line
  create(data: any): Promise<any> {
    return http.post("/tutorials", data);
  }

  //eslint-disable-next-line
  update(id: any, data: any): Promise<any> {
    return http.put(`/tutorials/${id}`, data);
  }

  //eslint-disable-next-line
  delete(id: any): Promise<any> {
    return http.delete(`/tutorials/${id}`);
  }

  //eslint-disable-next-line
  deleteAll(): Promise<any> {
    return http.delete(`/tutorials`);
  }

  //eslint-disable-next-line
  findByTitle(title: string): Promise<any> {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
