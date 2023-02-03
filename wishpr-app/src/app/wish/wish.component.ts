import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from './wish';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent {
  @Input() wish: Wish | null = null;
  @Output() edit = new EventEmitter<Wish>();
}
