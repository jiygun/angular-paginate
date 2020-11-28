import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularPaginateComponent } from "./components/angular-paginate/angular-paginate.component";
import { PaginateLinkComponent } from './components/paginate-link/paginate-link.component';
import { FirstPageDirective } from './directives/first-page.directive';
import { LastPageDirective } from './directives/last-page.directive';
import { MarginDirective } from './directives/margin.directive';
import { NgLoopDirective } from './directives/ng-paginate.directive';

@NgModule({
  declarations: [
    AngularPaginateComponent,
    PaginateLinkComponent,
    NgLoopDirective,
    FirstPageDirective,
    LastPageDirective,
    MarginDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularPaginateComponent,
    PaginateLinkComponent,
    NgLoopDirective,
    FirstPageDirective,
    LastPageDirective,
    MarginDirective
  ]
})
export class AngularPaginateModule { }
