import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ChatDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
