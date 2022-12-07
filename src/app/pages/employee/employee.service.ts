import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


const API_CODEBOOK_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployee() {
    return this.httpClient.get(API_CODEBOOK_URL + '/departmentview/getDepartmentList')
  }

  getCodeBookByCodeType(searchCodeType: string) {
    let url = '/codebookbytypewithid?code_type=' + searchCodeType
    return this.httpClient.get(API_CODEBOOK_URL + '/codebookbytypewithid?code_type=' + searchCodeType)
  }

  getSearchCodeBook(searchCodeType: string, searchCodeName: string, searchParentCodeType: string, page) {
    let url = '/codebook/pager?'

    if (searchCodeName) {
      url = url + 'code_name=' + searchCodeName + '&'
    }
    if (searchCodeType) {
      url = url + 'code_type=' + searchCodeType + '&'
    }
    if (searchParentCodeType) {
      url = url + 'parent_type=' + searchParentCodeType  + '&'
    }
    console.log("[age", page)
    return this.httpClient.get(API_CODEBOOK_URL + url + 'limit=5&offset=' + page)
  }
  

  save(requestData: any) {
    return this.httpClient.post(API_CODEBOOK_URL + '/codebook', requestData)
  }

  update(requestData: any) {
    return this.httpClient.put(API_CODEBOOK_URL + '/codebook', requestData)
  }

  getDetailById(requestObj: any) {
    return this.httpClient.post(API_CODEBOOK_URL + '/codebook/id?', requestObj )
  }

  delete(deleteData: any) {
    return this.httpClient.delete(API_CODEBOOK_URL + '/codebook', deleteData)
  }

}


