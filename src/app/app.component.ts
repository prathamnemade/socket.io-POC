import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  dataToSend;
  constructor(public chat: ChatService){ }
  listtoshow=[]
  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
      this.listtoshow.push(msg.text)
      console.warn(this.listtoshow);
      
    })
  }

  sendMessage() {
    this.chat.sendMsg("Test Message");
  }

}