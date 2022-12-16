import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  searchGroup: FormGroup
  employeeList: any = []
  requestData: any = []
  postedData: any
  totalElements: any = 10
  totalPages: any = 0
  selectedPageBtn: any = 1
  currentPage: any = 1
  count: number = 0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdf: ChangeDetectorRef,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.loadForm()
    this.getEmployeeList()
  }

  loadForm(data?: any) {
    this.searchGroup = new FormGroup({
      employee_status: new FormControl(data ? data.employee_status : ''),
      employee_name: new FormControl(data ? data.employee_name : ''),
      employee_department: new FormControl(data ? data.employee_department : ''),
    });
  }
  getEmployeeList() {
    this.employeeService.getEmployee().toPromise().then(((res: any) => {
      console.log(res);
      this.employeeList = res
      this.cdf.detectChanges()
    }))


  }
  
  SearchEmployee() {
    console.log("empname", this.searchGroup.value.employee_name)
   // let newEmp = 
    // this.employeeService.searchEmployee(this.searchGroup.value.employee_status,this.searchGroup.value.employee_name,this.searchGroup.value.employee_department).toPromise().then(((res: any) => {
    this.employeeService.searchEmployee(this.searchGroup.value.employee_name,this.searchGroup.value.employee_department,this.searchGroup.value.employee_status).toPromise().then(((res: any) => {
    console.log("employeeService", res);
      this.employeeList = res
      this.cdf.detectChanges()
    }))
  }
  cancel() {

  }
  create() {
    this.navigateToDetail(null, 'create')
  }
  edit(data?) {
    this.navigateToDetail(data, 'edit')
  }
  delete(id) {
    this.employeeService.delete(id).toPromise().then(res => {
      if (res) {
        this.getEmployeeList()
      }
    })
  }
  navigateToDetail(data?: any, status?: string) {
    this.router.navigate(['employee/add-new-employee'], {
      queryParams: {
        pageStatus: status,
        employee_id: data ? data.employee_id : null,
      }
    })
  }

}


