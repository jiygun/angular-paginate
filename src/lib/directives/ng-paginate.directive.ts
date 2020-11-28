import { Directive, ViewContainerRef, TemplateRef, OnInit} from '@angular/core';
import { PaginationVeriableModel } from '../models/pagination-veriable';
import { PaginateChangeService } from '../services/paginate-change.service';


@Directive({
  selector: '[ngPaginate]'
})
export class NgLoopDirective implements OnInit {

  constructor(private paginateChangeService:PaginateChangeService,private container:ViewContainerRef,private template:TemplateRef<any>) { }
  ngOnInit(): void {
    this.paginateChangeService.pagineteChangedVeriables.subscribe((paginateVeriableModel:PaginationVeriableModel)=>{
      this.container.clear();
      if(paginateVeriableModel.isPaginationVisible){
        if(paginateVeriableModel.isFirstSectionVisible){
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML=1;
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML=2;
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML="...";
        }
        for (const input of paginateVeriableModel.activePageList) {
          const createdElement=this.container.createEmbeddedView(this.template,{$implicit: input});
          createdElement.rootNodes[0].innerHTML=input;
          if(input===paginateVeriableModel.activePage) createdElement.rootNodes[0].classList.add("active");
        }
        if(paginateVeriableModel.isLastSectionVisible){
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML="...";
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML=paginateVeriableModel.lastPage-1;
          this.container.createEmbeddedView(this.template).rootNodes[0].innerHTML=paginateVeriableModel.lastPage;
        }
      }
    });
  }
}

