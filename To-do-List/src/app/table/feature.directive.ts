import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFeature]',
})
export class FeatureDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private render: Renderer2, private elrf: ElementRef) {}

  @HostListener('mouseover') onMouseOver(event: Event) {
    this.backgroundColor = 'gainsboro';
    this.color = 'white';
    //gainsboro
  }
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
