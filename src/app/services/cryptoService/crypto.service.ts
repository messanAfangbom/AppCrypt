import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }
  
  public encryptWithAES(plaintext:string, keys:string)
  {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plaintext.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  public decryptWithAES(cyphertext:string,keys :string)
  {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(cyphertext, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  public encryptWithDES(plaintext:string, key:CryptoJS.lib.WordArray)
  {
    const encrypted = CryptoJS.DES.encrypt(plaintext,key);
    return encrypted;
  }

  public decryptWithDES(cyphertext:string,key :CryptoJS.lib.WordArray)
  {
    return CryptoJS.AES.decrypt(cyphertext,key);
  }
 
  public  getKey() : string
  {
    const salt = CryptoJS.lib.WordArray.random(128 / 8);
    return CryptoJS.PBKDF2("Secret Passphrase", salt, {
      keySize: 128 / 32
    }).toString();
  }

}
