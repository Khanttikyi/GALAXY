import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getFileReader } from 'src/app/core/get-file-reader';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { AddNewDepartmentComponent } from '../add-new-department/add-new-department.component';
import { AddNewPositionComponent } from '../add-new-position/add-new-position.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss'],
})
export class AddNewEmployeeComponent implements OnInit {

  @ViewChild('selectedFile') selectedFile: ElementRef;
  pageStatus: string;
  userId: number;
  avatar: any;
  detailFormGroup: FormGroup
  isCollapsedUser = false;
  isCollapsedEmp = false;
  roleOptions: any = []
  positionOptions: any = [
    { value: 'Select', code: 0 },
    { value: 'CEO', code: 1 },
    { value: 'Manager', code: 2 },
    { value: 'Project Leader', code: 3 },
    { value: 'Senior Developer', code: 4 },
    { value: 'Regular Developer', code: 5 },
    { value: 'Junior Developer', code: 6 },
  ]
  departmentOptions: any = [
    { value: 'Select', code: 0 },
    { value: 'Head Office', code: 1 },
    { value: 'HR Department', code: 2 },
    { value: 'Software Department', code: 3 },
    { value: 'Hardware Department', code: 4 },
    { value: 'Network Department', code: 5 },
    { value: 'Testing Department', code: 6 },
  ]

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
    //this.getRoles();
    this.route.queryParams
      .subscribe(params => {
        console.log("Route QueryParams: ", params)
        this.pageStatus = params.pageStatus;
        console.log("Page Status: ", this.pageStatus)
        if (this.pageStatus == 'edit') {
          this.userId = params.userId;
          this.employeeService.getDetailById(this.userId).toPromise().then((res) => {
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
      profile: new FormControl(data ? data.profile : ''),
      employeeName: new FormControl({ value: data ? data.loginId : '', disabled: this.pageStatus == 'edit' ? true : false }, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      department: new FormControl({ value: data ? data.department : '', disabled: this.pageStatus == 'edit' ? true : false }, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      position: new FormControl(data ? data.position : ''),
      status: new FormControl(data ? data.useYn : 'Y'),
      salary: new FormControl(data ? data.salary : ''),
     
      date: new FormControl(data ? data.date : 0),
      employeeNo: new FormControl(data ? data.employeeNo : 0),
      nrc: new FormControl(data ? data.nrc : 0),
      fatherName: new FormControl(data ? data.fatherName : 0),
      dob: new FormControl(data ? data.dob : 0),
      gender: new FormControl(data ? data.gender : 0),
      mobileNo: new FormControl(data ? data.mobileNo : ''),
      email: new FormControl(data ? data.email : '', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address: new FormControl(data ? data.address : 0),
      createdBy: new FormControl(data ? data.createdBy : 0),
      createdDate: new FormControl(data ? data.createdAt : new Date()),
      updatedBy: new FormControl(data ? data.updatedBy : 0),
      updatedDate: new FormControl(data ? data.updatedAt : new Date()),
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

  addDepartment(){
    const modalRef = this.modalService.open(AddNewDepartmentComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      if (res.data) {
        this.alertService.activate('This record was created.', 'Success Message');
       // this.getRolesByPage(1)
      }
    }
    );
  }
  addPosition(){
    const modalRef = this.modalService.open(AddNewPositionComponent, { size: 'md', backdrop: false });
    modalRef.result.then(() => { }, (res) => {
      if (res.data) {
        this.alertService.activate('This record was created.', 'Success Message');
       // this.getRolesByPage(1)
      }
    }
    );
  }
  saveUser() {
    console.log("Save: ", this.detailFormGroup.value)
    let request = {
      avatar: this.avatar ? this.avatar : null,
      employeeNo: this.detailFormGroup.value.userNo,
      employeeName: this.detailFormGroup.value.userName,
      loginId: this.detailFormGroup.value.employeeName,
      department: this.detailFormGroup.value.department,
      email: this.detailFormGroup.value.email,
      mobileNo: this.detailFormGroup.value.mobileNo,
      positionId: this.detailFormGroup.value.positionId,
      departmentId: this.detailFormGroup.value.departmentId,
      reportToId: 1,
      roleId: this.detailFormGroup.value.roleId,
      useYn: this.detailFormGroup.value.status,
      userId: this.pageStatus == 'create' ? 0 : this.detailFormGroup.value.userId,
    }
    console.log("Request data: ", request)
    if (this.pageStatus == 'create') {
      this.employeeService.save(request).toPromise().then((res) => {
        if (res) {
          console.log("Create: ", res)
        //  this.alertService.activate('This record was created', 'Success Message');
        }
      })
    } else {
      delete request.department
      this.employeeService.update(request).toPromise().then((res) => {
        if (res) {
          console.log("Update: ", res)
         // this.alertService.activate('This record was updated', 'Success Message');
        }
      })
    }
    this.location.back()
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
