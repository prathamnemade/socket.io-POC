import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
const ROUTES = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpClientModule,ChatService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
