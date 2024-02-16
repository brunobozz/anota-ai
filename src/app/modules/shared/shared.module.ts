import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { SharedBadgeComponent } from './components/shared-badge/shared-badge.component';
import { SharedSearchFieldComponent } from './components/shared-search-field/shared-search-field.component';

const components = [
  SharedCardComponent,
  SharedBadgeComponent,
  SharedSearchFieldComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
