import http from "../http-common";
import IClassRoomData from "../types/classroom.type"

class TutorialDataService {
  getAll() {
    return http.get<Array<IClassRoomData>>("/classroom");
  }

  get(id: string) {
    return http.get<IClassRoomData>(`/classroom/${id}`);
  }

  create(data: IClassRoomData) {
    return http.post<IClassRoomData>("/classroom", data);
  }

  update(data: IClassRoomData, id: any) {
    return http.post<any>(`/classroom/update/${id}`, data);
  }

  delete(id: any) {
    return http.post<any>(`/classroom/delete/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/classroom`);
  }

  findByTitle(title: string) {
    return http.get<Array<IClassRoomData>>(`/classroom/search/${title}`);
  }
}

export default new TutorialDataService();