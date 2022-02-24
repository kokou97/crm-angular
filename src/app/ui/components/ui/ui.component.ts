import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public close: boolean;
  // public x: string;
  public numVersion: number;
  //private behave$: BehaviorSubject<any>;

  constructor() {
    this.close = false;
    this.numVersion = 1;
    // this.x = '';
  }

  ngOnInit(): void {}

  public toggle(): void {
    console.log(!this.close);
    this.close = !this.close;

    // if (this.close) this.x = '.tr-btn-nav';
    // this.x = '.tr-btn-close';
  }

}
