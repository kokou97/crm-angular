import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public headers: string[];
  public states: string[];
  // public ordersCollection!: Order[];

  public ordersCollection$!: Observable<Order[]>;

  public addLinks!: string[];
  public addLabels!: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list Orders';
    this.states = Object.values(StateOrder);
    this.headers = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.ordersCollection$ = this.ordersService.collection$;
    // PAs nécessaire de faire la subscription
    // this.ordersService.collection$.subscribe(
    //   (data) => (this.ordersCollection = data)
    // );
    this.addLinks = ['add', './../clients/add'];
    this.addLabels = ['Add Order', 'Add Client'];
  }
  // public getTotalHT(order: Order): number {
  //   return order.tjmHt * order.nbJours;
  // }

  // public getTotalTTC(order: Order): number {
  //   return this.getTotalHT(order) * (1 + 0.01 * order.tva);
  // }

  // Nous n'allons pas utiliser cette méthode dans le html car elle est appelé plus de fois que nécesssaire
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService
      .changeState(item, state)
      .subscribe((data) => (item = data));
  }
  ngOnInit(): void {}
}
