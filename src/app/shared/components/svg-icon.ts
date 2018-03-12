import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http'

export interface Icon {
  text: string;
}
@Component({
  selector: 'svg-icon',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input()
  set name(val: string) {
    this.loadSvg(val);
  }

  @Input() alt: string;

  URL = 'assets/images/svg'
  constructor(
    private httpClient: HttpClient,
    private renderer: Renderer,
    private elementRef: ElementRef) { }
  loadSvg(val: string) {
    // this.http.get(`assets/images/svg/${val}.svg`)
    this.httpClient.get(`${this.URL}/${val}.svg`,  {responseType: 'text'})
      .subscribe(
        res => {
          // get our element and clean it out
          const element = this.elementRef.nativeElement;
          element.innerHTML = '';

          const parser = new DOMParser();
          const svg = parser.parseFromString(res, 'image/svg+xml');
          // insert the svg result
          this.renderer.projectNodes(element, [svg.documentElement]);
        },
        err => { console.error(err); });
  }
}
