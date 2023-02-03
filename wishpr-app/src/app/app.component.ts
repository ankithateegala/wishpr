import { Component, Output } from '@angular/core';
import { Wish } from './wish/wish';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wishpr-app';
  wishes: Wish[] = [
    {
      goal: 'eat well',
      description: 'get groceries',
      durationIn: 'day'
    },
    {
      goal: 'get whealthy',
      description: 'get a PM job',
      durationIn: 'year'
    }
  ];

  editWishes(event: any){console.log("editWishes:" + event)}

  drop(event: CdkDragDrop<Wish[]>){
    moveItemInArray(this.wishes, event.previousIndex, event.currentIndex);
  }
}
