import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'breakdown-nx-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() opaque = false;

  get containerClasses(): string {
    return this.opaque ? 'card-container card-opaque' : 'card-container';
  }
}
