import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../share-services.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output() pageEvent = new EventEmitter<number>();

  constructor(private sharedService: SharedService) {}
  currentPage = 1;
  nextPage() {
    this.currentPage += 1;
    this.pageEvent.emit(this.currentPage);
    this.sharedService.sendClickEvent();

  }
  prevPage() {
    this.currentPage > 1 ? (this.currentPage -= 1) : (this.currentPage = 1);
    this.pageEvent.emit(this.currentPage);
    this.sharedService.sendClickEvent();
  }
  selectPage(page: number) {
    this.currentPage = page;
    this.pageEvent.emit(this.currentPage);
    this.sharedService.sendClickEvent();

  }
  ngOnInit(): void {}
}
