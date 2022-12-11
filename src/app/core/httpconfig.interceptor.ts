import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AuthService } from "../modules/auth";
import { LoadingService } from "../modules/loading-toast/loading/loading.service";
import { AlertService } from "../modules/loading-toast/alert-model/alert.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor( private authService: AuthService,private loading:LoadingService,private alertService:AlertService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (!this.userProfile.isOnline) {
        // return throwError('Please Check Your Network Connection !');
        //     return EMPTY;
        // }
        // const token: string = this.userProfile.token;

        // if (this.authService.authToken) {
            // this.authService.authToken
            // request = request.clone({ headers: request.headers.set('authorization', "Bearer " +"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjQxZDY2ZC02NDRlLTQ1YmItOTUzOS01MTRkMGMyNDY3ZWEiLCJuYW1lIjoiSnNvbiBXZWIgVG9rZW4iLCJpYXQiOjE2Njk3Mzk4OTI1MjV9.GeEQPhV7iIh9pVvH7D5dw1tsKs7wyiURPaNbSm6bq5k") });
            // let body = request.body
            // request = request.clone({ body: { ...body, userId: this.userProfile.userInfo.userId } });
        // }

        // if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
        // }
        // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin','*')});
        // request = request.clone({ headers: request.headers.set('accept', 'application/json, text/javascript, */*; q=0.01') });
        // request = request.clone({ headers: request.headers.set('X-Tenant-ID', 'kbzms') });
        // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODQyMzI5OCwiaWF0IjoxNjI3ODE4NDk4fQ.K08GdAdgMVisiUjOO8ySxRA68Rj6PWTjRdoOBAnpRiCJ5aAY4pqJPKrhKS0ulK6K9qjU4jpOx2wuFdVi-XHw4A') });

        this.loading.activate()
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // // console.log('event--->>>', event);
                    // if(event.body === null){
                    //     this.authService.logout()
                    // }
                    if (event.body) {
                        return event.clone({
                            body: event.body.body
                        });
                        // return event.body;
                    }
                }
                // // console.log('event--->>>', event);
                return event;
            }),
            // catchError(this.errorHandler)
            catchError(
                (error: HttpErrorResponse) => {
                    this.loading.deactivate()
                    if (error.error) {
                        if (typeof error.error == 'string') {
                            this.alertService.activate("Internal Server error!", "Error")
                        } else {
                            this.alertService.activate(error.error.message || "Internal Server error!", 'error');
                            if(error.error.code == "403"){
                                this.authService.logout()
                                document.location.reload();
                            }
                        }
                    }
                    else
                        this.alertService.activate("Sorry!, Try again later", 'error');

                    return throwError(error)
                }
            ),
            finalize(() => {
                this.loading.deactivate()
            })
        );
    }

}
