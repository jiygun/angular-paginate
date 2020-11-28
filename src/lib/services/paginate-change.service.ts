import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginationVeriableModel } from '../models/pagination-veriable';

@Injectable({
  providedIn: 'root'
})
export class PaginateChangeService {
  private _paginateVeriableSource:BehaviorSubject<PaginationVeriableModel>;
  private _pagineteChangedVeriables:Observable<PaginationVeriableModel>;

  constructor() { 
    this._paginateVeriableSource=new BehaviorSubject(new PaginationVeriableModel(new Array(),0,0,0,false,false,false));
    this._pagineteChangedVeriables=this._paginateVeriableSource.asObservable();
  }

  setPaginateVeriableModel(paginateVeriableModel:PaginationVeriableModel){
    this._paginateVeriableSource.next(paginateVeriableModel);
  }
  get pagineteChangedVeriables():Observable<PaginationVeriableModel>{
    return this._pagineteChangedVeriables;
  }
}
