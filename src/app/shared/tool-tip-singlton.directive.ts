import { AfterViewInit, ContentChild, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSinglton]'
})
export class ToolTipSingltonDirective implements AfterViewInit {

  @ContentChild(ToolTipDirective, { descendants: true })
  elementsWithToolTips!: QueryList<ToolTipDirective>;

  constructor() { }

  ngAfterViewInit(): void {
  }
}
