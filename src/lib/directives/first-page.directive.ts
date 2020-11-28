import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[firstPage]'
})
export class FirstPageDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void{
    this.elementRef.nativeElement.innerHTML= "&laquo;";
  }

}
