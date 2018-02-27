import { Component } from "@angular/core";

import { MessageService } from "./message.service";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  providers: []
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}
  onSave(value: string) {
    console.log(value);
  }

}
