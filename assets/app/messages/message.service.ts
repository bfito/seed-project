import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.messages.push(message);
    const body = JSON.stringify(message);
    this.http.post('http://localhost:3000/message', body);
  }

  getMessages() {
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
