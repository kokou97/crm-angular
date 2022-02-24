import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: String;
  private obs$: Observable<any>;
  private subj: Subject<any>;
  private behave$: BehaviorSubject<any>;

  constructor() {
    this.title = 'crm2';
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.subj = new Subject<any>();
    this.behave$ = new BehaviorSubject<any>('toto');

    // this.obs$.subscribe((toto) => console.log(toto));
    // this.obs$.subscribe((toto) => console.log(toto));
    // this.subj.subscribe((data) => console.log(data));

    // this.subj.next('toto');
    // this.subj.next('toto2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('toto3');
    // this.subj.next(Math.random());
    this.behave$.next('toto2');
    this.behave$.subscribe((data) => console.log(data));
    this.behave$.next('toto3');
    this.behave$.next('toto4');
    this.behave$.subscribe((data) => console.log(data));
  }
}
