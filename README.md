# Angular-Paginate

![](https://media.giphy.com/media/KxCTSkBDi2xJ49LaIH/giphy.gif)


![](https://media.giphy.com/media/hWp9MXjQNGWDOS77vf/giphy.gif)

# Usage

```hs

npm install angular-paginate --save

```
  
Import Module


```

import { AngularPaginateModule } from 'angular-paginate';

@NgModule({

imports: [
AngularPaginateModule
]

})

```
In Component

```hs

<angular-paginate  totalPages="100"  maximumShowAblePage="8"  (activePageNumber)="activePage($event)">

<paginate-link  firstPage  margin="5px">

</paginate-link>

<paginate-link  *ngPaginate  margin="5px">

</paginate-link>

<paginate-link  lastPage  margin="5px">

</paginate-link>

</angular-paginate>

```

Default Veriables

```hs
{
DEFAULT_FIRSTPAGE:number=1;
DEFAULT_ACTIVEPAGE:number=1;
DEFAULT_MAXSHOWABLEPAGE:number=7;
DEFAULT_TOTALPAGES:number=0;
}
```