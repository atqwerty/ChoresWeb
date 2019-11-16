import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.focus()
  }

  @HostListener('blur') onBlur() {
    this.blur()
  }

  private focus() {
    console.log('asdf')
    this.el.nativeElement.style.boxShadow = '5px 5px #000000';
    this.el.nativeElement.style.transform = 'translateX(-5px)';
    this.el.nativeElement.style.transform = 'translateY(-5px)';
    this.el.nativeElement.style.transition = '0.5s';
  }

  private blur() {
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.transform = 'translateX(5px)';
    this.el.nativeElement.style.transform = 'translateY(5px)';
    this.el.nativeElement.style.transition = '0.5s';
  }

}
