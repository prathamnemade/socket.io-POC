import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable()
export class WebsocketService {

  // Our socket connection
  private socket;

  constructor() { }
  data;
  connect(): Rx.Subject<MessageEvent> {
    this.socket = io('http://localhost:5000');
    let observable = new Observable(observer => {
        this.socket.on('message', (data) => {
          console.log("Received message from Websocket Server")
          observer.next(data);
        })
        return () => {
          this.socket.disconnect();
        }
    });
    let observer = {
        next: (data: Object) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };
    return Rx.Subject.create(observer, observable);
  }

}