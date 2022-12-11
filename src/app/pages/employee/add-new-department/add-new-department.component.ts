import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.scss'],
})
export class AddNewDepartmentComponent implements OnInit {

  newRole: any = []
  newDepartmentForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    public modal: NgbActiveModal,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.newDepartmentForm = new FormGroup({
      departmentName: new FormControl(null),
      departmentDescription: new FormControl(null),

    });
  }

  prepareCreate() {
    this.newRole = {
      department_name: this.newDepartmentForm.value.departmentName,
      department_description: this.newDepartmentForm.value.departmentDescription,
    }
  }

  save() {
    this.prepareCreate()
    this.employeeService.addDeparment(this.newRole).toPromise().then((res: any) => {
      this.modal.dismiss({ data: res })
    })
  }

  cancel() {
    this.modal.dismiss();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.newDepartmentForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.newDepartmentForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.newDepartmentForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.newDepartmentForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
