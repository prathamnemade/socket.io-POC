
import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.wsService.connect()
    this.messages = this.wsService.data
  }

  sendMsg(msg) {
    this.wsService.backtobanckend(msg)
  }

}