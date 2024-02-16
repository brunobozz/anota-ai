import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss'],
})
export class SharedCardComponent {
  @Input() id?: number;
  @Input() title?: string;
  @Input() description?: string;
  @Input() type?: string;
  @Input() img?: string;

  @Output() deleteCall = new EventEmitter<number>();

  public deleteItem(id?: number) {
    this.deleteCall.emit(id);
  }
}
