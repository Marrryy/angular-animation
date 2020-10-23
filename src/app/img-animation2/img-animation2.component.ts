import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-animation2',
  templateUrl: './img-animation2.component.html',
  styleUrls: ['./img-animation2.component.css'],
  animations: [
    trigger('photoState',[
      state('move',style({
        transform : 'translateX(10%)',
      })),
      state('spin',style({
        transform : 'rotateY(65deg) rotateZ(40deg)',
      })),
      state('enlarge',style({
        transform : 'scale(1.5)',
      })),
      transition('* => move', animate('2000ms', keyframes([
        style({transform: 'translateX(0) rotateY(0)', offset:0}),
        style({transform: 'translateX(50%) rotateY(70deg)', offset:0.33}),
        style({transform: 'translateX(-30%) rotateY(100deg)', offset:0.66}),
        style({transform: 'translateX(-100%)', offset:1.0}),
      ]))),
      transition('* => *', animate('500ms ease-out')),
    ])
  ]
})
export class ImgAnimation2Component implements OnInit {

  constructor() { }

  position: string;
  photoUrl = 'https://i.pinimg.com/originals/17/66/10/176610315611fc612ed52e8a93798881.jpg';

  ngOnInit(): void {
  }
  changePosition(newPosition : string){
    this.position = newPosition;
  }
  logAnimation($event){
    console.log(`${this.position} animation ${$event.phaseName}`)
  }
}
