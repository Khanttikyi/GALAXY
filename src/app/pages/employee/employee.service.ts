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
  searchEmployee(name: string,department:string,status: string) {
    let url = '/searchEmployee?'
    console.log("name", name)
    if (name) {
      url = url + 'employee_name=' + name + '&'
    }
    
    if (department) {
      url = url + 'employee_department=' + department + '&'
    }
   
    if (status) {
      url = url + 'employee_status=' + status 
    }
    
    console.log("ur", url)
    return this.httpClient.get(API_EMPLOYEE_URL  + url )
   // return this.httpClient.get(API_EMPLOYEE_URL + '/employee' + '/searchEmployee' + "/" + (searchObj.employee_status || null) + "/" + (searchObj.employee_name || null) + "/" + (searchObj.employee_department || null))
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

  getDepartment() {
    return this.httpClient.get(API_EMPLOYEE_URL + '/getDepartments')
  }
  addDeparment(requestData) {
    return this.httpClient.post(API_EMPLOYEE_URL + '/department', requestData)
  }
  getPosition() {
    return this.httpClient.get(API_EMPLOYEE_URL + '/getPositions')
  }
  addPosition(requestData) {
    return this.httpClient.post(API_EMPLOYEE_URL + '/position', requestData)
  }

}


