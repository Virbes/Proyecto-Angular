import { ClassStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
    var element = this.el.nativeElement;
        element.style.background = "blue";
        element.style.padding = "20px";
        element.style.marginTop = "15px";
        element.style.color = "#fff";

    element.innerText = element.innerText.toUpperCase().replace("CONTACTO", "|||");
  }
}
