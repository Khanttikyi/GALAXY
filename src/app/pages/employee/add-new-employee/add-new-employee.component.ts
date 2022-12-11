import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getFileReader } from 'src/app/core/get-file-reader';
import { MY_FORMATS } from 'src/app/core/is-json';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { AddNewDepartmentComponent } from '../add-new-department/add-new-department.component';
import { AddNewPositionComponent } from '../add-new-position/add-new-position.component';
import { EmployeeService } from '../employee.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AddNewEmployeeComponent implements OnInit {

  @ViewChild('selectedFile') selectedFile: ElementRef;
  pageStatus: string;
  employeeID: number;
  avatar: any;
  detailFormGroup: FormGroup
  isCollapsedUser = false;
  isCollapsedEmp = false;
  roleOptions: any = []
  positionOptions: any = [
    // { value: 'Select', code: 0 },
    // { value: 'CEO', code: 1 },
    // { value: 'Manager', code: 2 },
    // { value: 'Project Leader', code: 3 },
    // { value: 'Senior Developer', code: 4 },
    // { value: 'Regular Developer', code: 5 },
    // { value: 'Junior Developer', code: 6 },
  ]
  departmentOptions: any = [
    // { value: 'Select', code: 0 },
    // { value: 'Head Office', code: 1 },
    // { value: 'HR Department', code: 2 },
    // { value: 'Software Department', code: 3 },
    // { value: 'Hardware Department', code: 4 },
    // { value: 'Network Department', code: 5 },
    // { value: 'Testing Department', code: 6 },
  ]

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private alertService: AlertService,
    private cdf: ChangeDetectorRef
  ) {
    this.getDepartment()
    this.getPosition()
  }

  ngOnInit(): void {
    //this.getRoles();
    this.loadForm()
    this.route.queryParams
      .subscribe(params => {
        console.log("Route QueryParams: ", params)
        this.pageStatus = params.pageStatus;
        console.log("Page Status: ", this.pageStatus)
        if (this.pageStatus == 'edit') {
          this.employeeID = params.employee_id;
          this.employeeService.getDetailById(this.employeeID).toPromise().then((res) => {
            if (res) {
              console.log("Detail User: ", res)
              this.loadForm(res)
            }
          })
        } else {
          this.loadForm()
        }
      })
  }

  loadForm(data?: any) {
    console.log("User Detail, LoadForm: ", data)
    this.detailFormGroup = new FormGroup({
      // userId: new FormControl(data ? data.userId : 0),
      profile: new FormControl(data ? data.employee_profile : ''),
      employeeName: new FormControl(data ? data.employee_name : ''),
      department: new FormControl(data ? data.employee_department : ''),
      position: new FormControl(data ? data.employee_position : ''),
      status: new FormControl(data ? (data.employee_status) : null),
      salary: new FormControl(data ? data.employee_salary : ''),
      date: new FormControl(data ? moment(data.employee_join_date) : null),
      employeeNo: new FormControl(data ? data.employee_id : null),
      nrc: new FormControl(data ? data.employee_nrc : null),
      fatherName: new FormControl(data ? data.employee_father_name : null),
      dob: new FormControl(data ? moment(data.employee_dob) : null),
      gender: new FormControl(data ? data.employee_gender : null),
      mobileNo: new FormControl(data ? data.employee_phone : ''),
      email: new FormControl(data ? data.employee_email : '', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl(data ? data.employee_address : null),
      createdBy: new FormControl(data ? data.createdBy : null),
      createdDate: new FormControl(data ? data.createdAt : new Date()),
      updatedBy: new FormControl(data ? data.updatedBy : null),
      updatedDate: new FormControl(data ? data.updatedAt : new Date()),
    });
    this.cdf.detectChanges()
  }

  onChanges(): void {
    this.detailFormGroup.valueChanges.subscribe(() => {
      console.log(this.detailFormGroup.value)
    });
  }
  // getRoles() {
  //   this.roleService.getRoles('Y').toPromise().then(
  //     (res: any) => {
  //       this.roleOptions = this.getRoleOptions(res)
  //     })
  // }

  getRoleOptions(res) {
    return res.map(x => {
      return { 'code': x.roleId, 'value': x.roleName }
    })
  }

  addDepartment() {
    const modalRef = this.modalService.open(AddNewDepartmentComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      if (res.data) {
        this.alertService.activate('This record was created.', 'Success Message');
        this.getDepartment()
      }
    }
    );
  }
  addPosition() {
    const modalRef = this.modalService.open(AddNewPositionComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      if (res.data) {
        this.alertService.activate('This record was created.', 'Success Message');
        this.getPosition()
      }
    }
    );
  }
  saveUser() {
    console.log("Save: ", this.detailFormGroup.value)
    let request = {
      // avatar: this.avatar ? this.avatar : null,
      employee_id: Number(this.detailFormGroup.value.employeeNo),
      employee_name: this.detailFormGroup.value.employeeName,
      employee_position: this.detailFormGroup.value.position,
      employee_department: this.detailFormGroup.value.department,
      employee_salary: Number(this.detailFormGroup.value.salary),
      employee_join_date: moment(this.detailFormGroup.value.date).format("MM-DD-YYYY"),
      employee_status: this.detailFormGroup.value.status,
      employee_email: this.detailFormGroup.value.email,
      employee_phone: this.detailFormGroup.value.mobileNo,
      employee_nrc: this.detailFormGroup.value.nrc,
      employee_dob: moment(this.detailFormGroup.value.dob).format("MM-DD-YYYY"),
      employee_gender: this.detailFormGroup.value.gender,
      employee_father_name: this.detailFormGroup.value.fatherName,
      employee_address: this.detailFormGroup.value.address,
    }
    console.log("Request data: ", request)
    if (this.pageStatus == 'create') {
      this.employeeService.save(request).toPromise().then((res) => {
        if (res) {
          console.log("Create: ", res)
          this.alertService.activate('This record was created', 'Success Message');
          this.location.back()
        }
      })
    } else {
      this.employeeService.update(request, request.employee_id).toPromise().then((res) => {
        if (res) {
          console.log("Update: ", res)
          this.alertService.activate('This record was updated', 'Success Message');
          this.location.back()
        }
      })
    }

  }
  clearDate(type) {
    this.detailFormGroup.controls[type].setValue(null)
  }

  cancel() {
    this.location.back()
  }

  //get Picture
  openFile() {
    this.selectedFile.nativeElement.click()
  }

  getPic(event) {
    console.log("getPic", event)
    if (event) {
      const file = event.target.files[0];
      const reader = getFileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          let base64 = reader.result.toString().split(",")[1];
          this.avatar = {
            fileStr: base64,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            fileExtension: file.name.split('.').pop(),
            description: "avatar profile",
          }
          console.log("Avatar: ", this.avatar)
          // this.fileUpload.save(avatar).toPromise().then((res) => {
          //   if (res) {
          //     this.departmentOptions.controls['avator'].setValue(res)
          //   }
          // })
        };
      }
    }
  }


  deletePic() { }

  getDepartment() {
    this.employeeService.getDepartment().toPromise().then(res => {
      if (res) {
        this.departmentOptions = res
        this.cdf.detectChanges()
      }
    })
  }
  getPosition() {
    this.employeeService.getPosition().toPromise().then(res => {
      if (res) {
        this.positionOptions = res
        this.cdf.detectChanges()
      }
    })
  }


  //for view
  isControlValid(controlName: string): boolean {
    const control = this.detailFormGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.detailFormGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.detailFormGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.detailFormGroup.controls[controlName];
    return control.dirty || control.touched;
  }

}
