import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatRadioModule} from '@angular/material/radio';
import { AddNewDepartmentComponent } from './add-new-department/add-new-department.component';
import { AddNewPositionComponent } from './add-new-position/add-new-position.component';

@NgModule({
  declarations: [EmployeePage, AddNewEmployeeComponent,AddNewDepartmentComponent,AddNewPositionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    MatRadioModule,
    EmployeePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeePage,
      },
      {
        path: 'add-new-employee',
        component: AddNewEmployeeComponent,
      },
     
    ]),
  ],
  
})
export class EmployeePageModule {}
