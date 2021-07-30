import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CryptoService } from '../services/cryptoService/crypto.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  appCrypt;
  key: string = null;
  message: string = null;
  messageForm: FormGroup;
  displayMessage: boolean = true;

  constructor(private fb: FormBuilder, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      appCrypt: this.appCrypt,
      key: this.key,
      message: this.message,
    })
  }

  action() {
    console.log(this.messageForm.getRawValue());
    const value = this.getValue();
    if(value['appCrypt'] === 'decrypt'){
      this.displayMessage = false;
      this.decryptAction(value['key'], value['message']);
    }else{
      this.encryptAction(value['message']);
    }
    
  }

  getValue() {
    return this.messageForm.value;
  }

  decryptAction(key: string, value: string) {
    this.message = this.cryptoService.decryptWithAES(value, key);
  }

  encryptAction(message: string) {
    this.key = this.cryptoService.getKey();
    this.message = this.cryptoService.encryptWithAES(message, this.key);    
  }

}
