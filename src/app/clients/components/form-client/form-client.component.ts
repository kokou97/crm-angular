import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() public submitted!: EventEmitter<Client>;
  public states!: string[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Client>();
    this.states = Object.values(StateClient);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      email: [this.init.email],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }
  public onSubmit() {
    this.submitted.emit(this.form.value);
  }
}
