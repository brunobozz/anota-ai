import { Component, OnInit } from '@angular/core';
import { ApiAnotaAiService } from 'src/app/services/api-anota-ai/api-anota-ai.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public list: any;
  public filteredList: any;
  public searchTerm: string = '';

  constructor(private apiAnotaAi: ApiAnotaAiService) {}

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    this.apiAnotaAi.getData('cardlist.json').subscribe((res: any) => {
      this.list = res;
      this.filterList();
    });
  }

  public setSearch(value: string) {
    this.searchTerm = value;
    this.filterList();
  }

  public filterList() {
    console.log('termo de busca: ' + this.searchTerm);
    if (this.searchTerm.trim() === '') {
      this.filteredList = this.list; // Se a pesquisa estiver vazia, mostrar todos os itens
    } else {
      this.filteredList = this.list.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    }
  }

  public deleteCall(id: number) {
    this.list = this.list.filter((item: any) => item.id !== id);
    this.filterList();
  }
}
