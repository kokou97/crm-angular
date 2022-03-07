import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title: string;
  public headers: string[];
  public clientsCollection$!: Observable<Client[]>;
  public states: string[];
  public addLinks!: string[];
  public addLabels!: string[];

  constructor(private clientsService: ClientsService) {
    this.addLinks = ['add', './../orders/add'];
    this.addLabels = ['Add Client', 'Add Order'];

    this.title = 'list Clients';
    this.headers = [
      'Action',
      'Name',
      'Tva',
      'Total Ca HT',
      'Total Ca TTC',
      'Comment',
      'email',
      'State',
    ];
    this.clientsCollection$ = this.clientsService.collection$;

    this.states = Object.values(StateClient);
  }

  public totalTTC(client: Client): number {
    return client.totalCaHt * (1 + 0.01 * client.tva);
  }

  public changeState(item: Client, event: any): void {
    const state = event.target.value;
    this.clientsService
      .changeState(item, state)
      .subscribe((data) => (item = data));
  }
  ngOnInit(): void {}
}
