import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BizOperationService } from "src/app/core/biz.operation.service";
import { environment } from "src/environments/environment";

const API_DASHBOARD = `${environment.apiUrl}/users`;

@Injectable({
    providedIn: 'root'
})

export class DashboardService extends BizOperationService<any, number>{
    constructor(protected httpClient: HttpClient) {
        super(httpClient, API_DASHBOARD);
    }
    getALl() {
        return this.httpClient.get(API_DASHBOARD)
    }
}