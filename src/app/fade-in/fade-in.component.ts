import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { trigger, state ,stagger,style,animate, transition } from '@angular/animations'

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.css'],
  animations : [
    trigger('fadeInShow',[
      state('show', style({
        opacity:1
      })),
      state('hide', style({
        opacity:0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class FadeInComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }

  get stateName(){
    return this.show ? "show" : 'hide';
  }

  toggle(){
    this.show = !this.show
  }
}
