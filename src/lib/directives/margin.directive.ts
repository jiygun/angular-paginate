import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[margin]'
})
export class MarginDirective implements OnChanges {

  @Input() margin:string;

  constructor(private elementRef:ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.margin)this.elementRef.nativeElement.style.margin=`0 ${this.margin} 0 ${this.margin}`;
  }

}
