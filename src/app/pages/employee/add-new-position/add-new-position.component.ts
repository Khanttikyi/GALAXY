import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-new-position',
  templateUrl: './add-new-position.component.html',
  styleUrls: ['./add-new-position.component.scss'],
})
export class AddNewPositionComponent implements OnInit {
  newPosition: any = []
  newPositionForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    public modal: NgbActiveModal,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.newPositionForm = new FormGroup({
      positionName: new FormControl(null ),
      positionDescription: new FormControl(null),
      
    });
  }

  prepareCreate() {
    this.newPosition = {
      positionName: this.newPositionForm.value.positionName,
      positionDescription: this.newPositionForm.value.positionDescription,
      
    }
  }

  save() {
    this.prepareCreate()
    this.employeeService.save(this.newPosition).toPromise().then((res: any) => {
      this.modal.dismiss({ data: res.data })
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
    const control = this.newPositionForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.newPositionForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.newPositionForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.newPositionForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
