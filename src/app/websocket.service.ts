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
  connect() {
    this.socket = io('http://localhost:5000');
    this.socket.on('message', (data) => {
      this.data = data
      console.log("Received message from Websocket Server")

    })
  }
  disconnect() {
    //to disconnect
    this.socket.disconnect();
  }
  backtobanckend(data) {
    this.socket.emit('message', JSON.stringify(data));
  }
}