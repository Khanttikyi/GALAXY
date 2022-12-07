import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialTableViewComponent } from 'src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component';
import { historyCol, HistoryDisplayCol } from './attendance-const';

@Component({
  selector: 'app-attendance-history',
  templateUrl: './attendance-history.component.html',
  styleUrls: ['./attendance-history.component.scss'],
})
export class AttendanceHistoryComponent implements OnInit {
  historyList: any = []
  ELEMENT_COL: any = historyCol;
  displayedColumns: any = HistoryDisplayCol;
  @ViewChild(MaterialTableViewComponent) matTable: MaterialTableViewComponent
  constructor(private cdf: ChangeDetectorRef) {

  }

  ngOnInit() {
    // console.log(this.historyList);
    // this.getHistory()
  }
  ngAfterViewInit(){
    
  }
  ngAfterContentChecked(): void {
    this.getHistory()
    this.cdf.detectChanges();
  }
  getHistory() {
    let data = [{
      checkIn: '9:00 AM',
      checkOut: '5:00 AM',
      isLate: 'No'
    },
    {
      checkIn: '9:00 AM',
      checkOut: '5:00 AM',
      isLate: 'No'
    }]
    this.historyList = data
  }
  actionBtn(event) {

  }
}
