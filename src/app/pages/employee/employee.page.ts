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
  codeBookLists: any=[]
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
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.loadForm()
    this.getList()
    this.getEmployeeList()
  }

  // getCodeBook() {
  //   this.employeeService.getCodeBook()
  //     .toPromise()
  //     .then((res: any) => {
  //       if (res.content) {
  //         this.codeBookLists = res.content
  //         this.cdf.detectChanges()
  //       }
  //     })
  // }

  loadForm(data?: any) {
    this.searchGroup = new FormGroup({
      searchCodeType: new FormControl(data ? data.searchCodeType : ''),
      searchCodeName: new FormControl(data ? data.searchCodeName : ''),
      searchParentCodeType: new FormControl(data ? data.searchParentCodeType : ''),
    });
  }
  navigateToDetail(editCodeBook: any, status: string) {
    this.router.navigate(['employee/add-new-employee'], {
      queryParams: {
        pageStatus: status,
        codeId: editCodeBook.codeId,
        codeType: editCodeBook.codeType,
        langCd: editCodeBook.languageCode,
      }
    })
  }

  searchCodeBook() {
    this.codeBookLists = []
    this.employeeService.getSearchCodeBook(this.searchGroup.value.searchCodeType, this.searchGroup.value.searchCodeName, this.searchGroup.value.searchParentCodeType, this.currentPage)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.codeBookLists = res.content
          this.cdf.detectChanges()
        }
      })
  }
  getEmployeeList(){
    this.count = Number(this.calculateRowNo(1))
    this.currentPage = 1
    this.employeeService.getEmployee()
      .toPromise()
      .then((res: any) => {
        console.log("emplist", res)
        if (res) {
          
          this.cdf.detectChanges()
        }
      });
  }

  getList() {
    this.count = Number(this.calculateRowNo(1))
    this.currentPage = 1
    this.employeeService.getSearchCodeBook(this.searchGroup.value.searchCodeType, this.searchGroup.value.searchCodeName, this.searchGroup.value.searchParentCodeType, this.currentPage)
      .toPromise()
      .then((res: any) => {
        if (res) {
          this.codeBookLists = res.content
          this.codeBookLists.forEach(element => {
            this.count += 1
            element.count = this.count
          });
          this.totalElements = res.totalElements
          this.totalPages = res.totalPages
          this.selectedPageBtn = this.currentPage
          this.cdf.detectChanges()
        }
      });
  }

  async getDatabyPage(page) {
    this.count = Number(this.calculateRowNo(page))
    this.currentPage = page
    this.employeeService.getSearchCodeBook(this.searchGroup.value.searchCodeType, this.searchGroup.value.searchCodeName, this.searchGroup.value.searchParentCodeType, this.currentPage).toPromise().then((res: any) => {
      if (res) {
        this.codeBookLists = res.content
        this.codeBookLists.forEach(element => {
          this.count += 1
          element.count = this.count
        });
        this.totalElements = res.totalElements
        this.totalPages = res.totalPages
        this.selectedPageBtn = this.currentPage
      }
      this.cdf.detectChanges()
    })
  }

  calculateRowNo(page) {
    let rowNo;
    if (page == 1) {
      rowNo = 0
    }
    if (page == 2) {
      rowNo = 5
    }
    if (page != 1 && page != 2 && page < 4) {
      rowNo = (page - 2) + '0'
    }
    if (page > 4) {
      rowNo = (page - 3) + '5'
    }
    return rowNo
  }

  cancelSearch() {
    this.searchGroup.reset();
    this.getList();
  }

  createCodeBook() {
    this.navigateToDetail("", 'create')
  }

  editCodeBook(editCodeBook: any) {
    this.navigateToDetail(editCodeBook, 'edit')
  }

  deleteCodeBook(codeId?: number, codeType?: number) {
    this.requestData = {
      codeId: codeId,
      codeType: codeType,
    }
    this.employeeService.delete(this.requestData).toPromise().then((res: any) => {
      
    })
  }

}


