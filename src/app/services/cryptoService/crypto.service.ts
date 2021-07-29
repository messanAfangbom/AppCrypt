import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  public encryptWithAES(plaintext:string, key:CryptoJS.lib.WordArray)
  {
    const encrypted = CryptoJS.AES.encrypt(plaintext,key);
    return encrypted;
  }

  public decryptWithDES(cyphertext:string,key :CryptoJS.lib.WordArray)
  {
    return CryptoJS.DES.decrypt(cyphertext,key);
  }

  public encryptWithDES(plaintext:string, key:CryptoJS.lib.WordArray)
  {
    const encrypted = CryptoJS.DES.encrypt(plaintext,key);
    return encrypted;
  }

  public decryptWithAES(cyphertext:string,key :CryptoJS.lib.WordArray)
  {
    return CryptoJS.AES.decrypt(cyphertext,key);
  }
 
  public  getAESKey() : CryptoJS.lib.WordArray
  {
    const salt = CryptoJS.lib.WordArray.random(128 / 8);
    return CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 128 / 32
    });
  }

}
