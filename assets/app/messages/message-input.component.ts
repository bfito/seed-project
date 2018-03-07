import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    const message = new Message(form.value.content, 'JP');
    this.messageService.addMessage(message);
    form.resetForm();
  }
}
