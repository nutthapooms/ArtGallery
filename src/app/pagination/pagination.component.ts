import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() pageEvent = new EventEmitter<number>();

  constructor() {}
  currentPage = 1;
  nextPage() {
    this.currentPage += 1;
    this.pageEvent.emit(this.currentPage);

  }
  prevPage() {
    this.currentPage > 1 ? (this.currentPage -= 1) : (this.currentPage = 1);
    this.pageEvent.emit(this.currentPage);
  }
  selectPage(page: number) {
    this.currentPage = page;
    this.pageEvent.emit(this.currentPage);

  }
}
