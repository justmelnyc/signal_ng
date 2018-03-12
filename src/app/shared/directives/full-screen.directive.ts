import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from '@angular/core';


@Directive({
  selector: '[sigFullScreen]'
})
export class FullScreenDirective {
  @Output() onCopy = new EventEmitter();

  constructor(private element: ElementRef) {}

  @HostListener('dblclick', ['$event'])
  onDblClick(event) {
    // const selection = getSelection();
    // const range = document.createRange();
    //
    // range.selectNodeContents(this.element);
    // selection.removeAllRanges();
    // selection.addRange(range);
    // document.execCommand('copy');
    //
    // this.onCopy.emit(range);
    // console.log(`Copied ${range} to your clipboard!`);
  }

}
