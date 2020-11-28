import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PaginateService } from '../../services/paginate.service';

@Component({
  selector: 'angular-paginate',
  templateUrl: './angular-paginate.component.html',
  styleUrls: ['./angular-paginate.component.scss'],
  host:{"(click)":"onClick($event)"}
})
export class AngularPaginateComponent implements OnChanges {
  
  @Input() totalPages:number;
  @Input() maximumShowAblePage:number;

  @Output() activePageNumber:EventEmitter<number>;

  constructor(private paginateService:PaginateService) { 
    this.activePageNumber=new EventEmitter();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.totalPages) this.paginateService.totalPages=parseInt(changes.totalPages.currentValue);
    if(changes.maximumShowAblePage) this.paginateService.maximumShowAblePage=parseInt(changes.maximumShowAblePage.currentValue);
  }
  onClick($event){
    if($event.target.localName==="paginate-link") {
      if($event.target.textContent==="«") this.paginateService.activePage=this.paginateService.firstPage;
      else if($event.target.textContent==="»") this.paginateService.activePage=this.paginateService.lastPage;
      else if(parseInt($event.target.textContent)) this.paginateService.activePage=parseInt($event.target.textContent);
      this.activePageNumber.emit(this.paginateService.activePage);
    }
  }
}
