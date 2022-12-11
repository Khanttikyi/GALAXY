import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


const API_EMPLOYEE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployee() {
    return this.httpClient.get(API_EMPLOYEE_URL + '/getEmployee')
  }

  getDetailById(employee_id: any) {
    console.log("employee_id", employee_id);

    return this.httpClient.get(API_EMPLOYEE_URL + '/employee/' + employee_id)
  }
  save(requestData: any) {
    return this.httpClient.post(API_EMPLOYEE_URL + '/employee', requestData)
  }

  update(requestData: any, employee_id) {
    return this.httpClient.put(API_EMPLOYEE_URL + '/employee/' + employee_id, requestData)
  }


  delete(deleteData: any) {
    return this.httpClient.delete(API_EMPLOYEE_URL + '/employee/' + deleteData)
  }

}


