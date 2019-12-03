import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewPort: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irFinal() {
    this.viewPort.scrollToIndex(this.personas.length);
  }

  irInicio() {
    this.viewPort.scrollToIndex(0);
  }

  irMitad() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }

}
