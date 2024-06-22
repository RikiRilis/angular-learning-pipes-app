import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'RikiRilis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'him',
    'female': 'her'
  }

  changeClient(): void {
    this.name = 'Melisssa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Hernando', 'Melissa', 'Bernardo'];
  public clientsMap = {
    '=0': 'we have any client waiting.',
    '=1': 'we have 1 client waiting.',
    '=2': 'we have 2 clients waiting.',
    'other': 'we have # clients waiting.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 33,
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public counter: number = 0;
  public myObservableTimer: Observable<number> = interval(1000)
    .pipe(
      tap(value => this.counter = value)
    );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data.');
    }, 3500);
  });
}
