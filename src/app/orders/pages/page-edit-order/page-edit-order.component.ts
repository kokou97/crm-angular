import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public order$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id: number = Number(activatedRoute.snapshot.params['id']);
    this.order$ = this.ordersService.getItemById(id);
    // .subscribe((data) => (this.order = data))
  }

  ngOnInit(): void {}

  public action(item: Order) {
    //console.log(item);
    this.ordersService
      .update(item)
      .subscribe(() => this.router.navigate(['orders']));
    //() =>
  }
}
