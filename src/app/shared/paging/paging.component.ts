import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagerService } from './paging.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input()
  totalRecords: number;
  @Input()
  pageSize: number;
  @Input()
  showRecordCount: boolean;
  @Output()
  gotoPage: EventEmitter<number> = new EventEmitter<number>();
  pager: any = {};
  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    this.gotoPage.emit(page);
    this.pager = this.pagerService.getPager(this.totalRecords, page, this.pageSize);
}
ngOnChanges() {
    this.pager = this.pagerService.getPager(this.totalRecords, this.pager.currentPage, this.pageSize);
}
}
