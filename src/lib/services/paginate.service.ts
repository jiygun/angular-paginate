import { Injectable } from '@angular/core';
import { Pagintion } from '../models/pagination';
import { PaginationVeriableModel } from '../models/pagination-veriable';
import { PaginateChangeService } from './paginate-change.service';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {

  private _pagination:Pagintion;
  private _isPaginationDisable:boolean;

  constructor(private paginateChangeService:PaginateChangeService) {
    this._pagination=new Pagintion();
    this._isPaginationDisable=false;
  }
  set totalPages(totalPages:number){
    if(totalPages<=0){
      this._isPaginationDisable=true;
    }else{
      this._pagination.totalPages=totalPages;
      this.setPageList(this._pagination.activePage);
    }
  }
  set maximumShowAblePage(maximumShowAblePage:number){
    this._pagination.maxShowAblePage=maximumShowAblePage;
    this.setPageList(this._pagination.activePage);
  }
  private setPageList(activePage:number){
    const pageList=this._pagination.getPages(activePage);
    pageList.length<=0?this._isPaginationDisable=false:this._isPaginationDisable=true;
    this.paginateChangeService.setPaginateVeriableModel(new PaginationVeriableModel(pageList,this._pagination.firstPage,
      this._pagination.totalPages,this._pagination.activePage,this._pagination.isFirstSectionVisible,
      this._pagination.isLastSectionVisible,this._isPaginationDisable));
  }
  get activePage():number{
    return this._pagination.activePage;
  }
  get isPaginationDisable():boolean{
    return this._isPaginationDisable;
  }
  get firstPage():number{
    return this._pagination.firstPage;
  }
  get lastPage():number{
    return this._pagination.totalPages;
  }
  set activePage(activePage:number){
    this.setPageList(activePage);
  }
}
