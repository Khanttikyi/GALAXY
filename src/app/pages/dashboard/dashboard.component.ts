import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { ProductsService } from '../../_metronic/core/services/products.service';
// import { uuid } from 'uuid';
import { Router } from '@angular/router';

import { v4 } from 'uuid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { COLTYPE, TableCol } from '../../_metronic/shared/crud-table/components/material-table-view/table-dto';
import { MaterialTableViewComponent } from '../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { DashboardService } from './dashboard.services';

export interface FromObj {
  id: string
  name: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  constructor(private router: Router,private modalService: NgbModal, private cdRef: ChangeDetectorRef,private dashboardService:DashboardService) { }

  ngOnInit(): void {
   this.getAll()
  }
  getAll(){
    this.dashboardService.getALl().toPromise().then((res)=>{
      console.log(res);
      
    })
  }

  ngOnDestroy(): void {
  }

}
