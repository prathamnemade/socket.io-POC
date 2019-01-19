import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { ChatService } from './chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'app';
  dataToSend;
  constructor(private chat: ChatService){ }
  listToShow=[]
  ngOnInit() {
    this.listToShow.push(this.chat.messages)
  }

  sendMessage(x) {
    this.chat.sendMsg(x);
  }
}
