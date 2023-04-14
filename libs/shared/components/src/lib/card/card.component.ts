import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleProperties } from '@breakdown-nx/core/models';

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
  @Input() clickable = false;
  
  @Output() clicked = new EventEmitter<void>();

  get containerClasses(): string {
    return this.classProperties.filter((property) => property.include).map((property) => property.name).join(' ');
  }

  get classProperties(): StyleProperties[] {
    return [
      { name: 'card-container', include: true },
      { name: 'card-opaque', include: this.opaque },
      { name: 'card-clickable', include: this.clickable }
    ];
  } 

  cardClicked() {
    this.clicked.emit();
  }
}
