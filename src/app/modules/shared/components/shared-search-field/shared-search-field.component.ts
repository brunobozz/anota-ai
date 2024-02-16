import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-field',
  templateUrl: './shared-search-field.component.html',
  styleUrls: ['./shared-search-field.component.scss'],
})
export class SharedSearchFieldComponent {
  @Output() callSearch = new EventEmitter<string>();

  public search(value: string) {
    this.callSearch.emit(value);
  }
}
