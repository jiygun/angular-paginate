import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[lastPage]'
})
export class LastPageDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML= "&raquo;";
  }

}
