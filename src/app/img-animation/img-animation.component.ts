import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-animation',
  templateUrl: './img-animation.component.html',
  styleUrls: ['./img-animation.component.css'],
  animations: [
    trigger('photoState',[
      state('move',style({
        transform : 'translateX(25%) translateY(50px)',
      })),
      state('spin',style({
        transform : 'rotateY(45deg) rotateZ(45deg)',
      })),
      state('enlarge',style({
        transform : 'scale(1.5)',
      })),
      transition('spin => move', animate('200ms ease-out')),
      transition('* => *', animate('500ms ease-out')),
    ])
  ]
})
export class ImgAnimationComponent implements OnInit {

  constructor() { }

  position: string;
  photoUrl = 'https://pbs.twimg.com/media/D0XyRv6WkAEgVFN?format=jpg&name=large';

  ngOnInit(): void {
  }
  changePosition(newPosition : string){
    this.position = newPosition;
  }
}
