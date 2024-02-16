import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-badge',
  templateUrl: './shared-badge.component.html',
  styleUrls: ['./shared-badge.component.scss'],
})
export class SharedBadgeComponent implements OnInit {
  @Input() itemType?: string;
  public typeSelected: any = {};
  private types = [
    {
      id: '1',
      text: 'Paisagem',
      color: '#3D83FF',
    },
    {
      id: '2',
      text: 'Flor',
      color: '#FF0345',
    },
    {
      id: '3',
      text: 'Pizza',
      color: '#938b0b',
    },
  ];

  ngOnInit(): void {
    this.getTypeObject();
  }

  getTypeObject() {
    console.log(this.itemType);
    this.typeSelected = this.types.find((type) => type.id === this.itemType);
    console.log(this.typeSelected);
  }
}
