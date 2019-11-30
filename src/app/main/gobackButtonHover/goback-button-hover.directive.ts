import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appGobackButtonHover]'
})
export class GobackButtonHoverDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.leaveHover()
  }

  private hover() {
    this.el.nativeElement.children[0].style.opacity = 1
  }

  private leaveHover() {
    this.el.nativeElement.children[0].style.opacity = 0
  }
}
