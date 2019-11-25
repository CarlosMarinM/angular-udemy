import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEvent(event: any) {

  }

}
