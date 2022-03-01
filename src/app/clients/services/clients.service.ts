import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private urlApi: String;
  public collection$: Observable<Client[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;

    this.collection$ = this.httpClient.get<Client[]>(`${this.urlApi}/clients`);
    //console.log(this.collection$);
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client) {
    return this.httpClient.put<Client>(
      `${this.urlApi}/clients/${item.id}`,
      item
    );
  }
}
