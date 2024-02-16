import { Component, OnInit } from '@angular/core';
import { ApiAnotaAiService } from 'src/app/services/api-anota-ai/api-anota-ai.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list: any;

  constructor(private apiAnotaAi: ApiAnotaAiService) {}

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.apiAnotaAi.getData('cardlist.json').subscribe((res: any) => {
      this.list = res;
    });
  }

  public deleteCall(id: number) {
    this.list = this.list.filter((item: any) => item.id !== id);
  }
}
