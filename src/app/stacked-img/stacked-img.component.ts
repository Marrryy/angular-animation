import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-img',
  templateUrl: './stacked-img.component.html',
  styleUrls: ['./stacked-img.component.css'],
  animations: [
    trigger('stackAnimation',[
      transition('* => *', [
        query('img', style({transform: 'translateX(-100%'})),
        query('img', stagger('600ms', [
          animate('900ms', style({transform: 'translateX(0'}))
        ]))
      ])
    ])
  ]
})
export class StackedImgComponent implements OnInit {
  photos = ['https://kpopping.com/uploads/documents/54/4/20180506010144_liv_9076-copy.jpeg',
  'https://imgnews.pstatic.net/image/origin/433/2020/06/01/69047.jpg',
  'https://pbs.twimg.com/media/EW5Yu53U0AAya3I?format=jpg&name=large']
  constructor() { }

  ngOnInit(): void {
  }

}
