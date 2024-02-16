import { Component } from '@angular/core';

@Component({
  selector: 'shared-search-field',
  templateUrl: './shared-search-field.component.html',
  styleUrls: ['./shared-search-field.component.scss'],
})
export class SharedSearchFieldComponent {
  public searchTerm = 'sdnsdndh sdh sdh';

  public callSearch(value: string) {
    console.log(value);
  }
}
