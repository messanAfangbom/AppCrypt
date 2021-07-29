import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  cryptAction;
  decrypt: boolean = false;
  encrypt: boolean = false;
  key: string;
  message: string;
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      cryptAction: this.cryptAction,
      decrypt: this.decrypt,
      encrypt: this.encrypt,
      key: this.key,
      message: this.message,
    })
  }

  action() {
    console.log(this.messageForm.getRawValue());
  }

  decryptAction() {
    console.log('decrypter');
  }

  encryptAction() {
    console.log('encrypter');
  }
}
