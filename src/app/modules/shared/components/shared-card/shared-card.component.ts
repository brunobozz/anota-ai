import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss'],
})
export class SharedCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() type?: string;
  @Input() img?: string;
}
