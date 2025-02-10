import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dictionary-list-item',
  imports: [CommonModule],
  templateUrl: './dictionary-list-item.component.html',
  styleUrl: './dictionary-list-item.component.scss'
})
export class DictionaryListItemComponent {
  item = input<{ id: number, value: string }>();
}
