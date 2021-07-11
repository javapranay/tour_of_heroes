// app-wide MessageService for sending messages to be displayed.
// The service exposes its cache of messages and two methods: 
// one to add() a message to the cache and another to clear() the cache.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
