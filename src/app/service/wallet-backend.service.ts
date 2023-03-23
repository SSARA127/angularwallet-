import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from 'src/model/Wallet';
@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  getWalletById(id:number,password:string):Observable<any>{
    return this.httpClient.get("http://localhost:8080/v1/getwallet/"+id+"/"+password);
  }
  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "http://localhost:8080/v1/addwallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  deleteWalletById(id:number,password:string):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/v1/deletewallet/"+id+"/"+password);
  }
  updateWallet(wallet:Wallet,password:string):Observable<any>{
    return this.httpClient.put("http://localhost:8080/v1/updatewallet/"+password,wallet);
  }
  getAllWallets(password:string):Observable<any>{
    return this.httpClient.get("http://localhost:8080/v1/getAllwallet/password/"+password);
  }
  addAmount(id:number,amount:number,password:string){
    let url:string = "http://localhost:8080/v1/addfundstowallet/"+id+"/amount/"+amount+"/password/"+password;
    return this.httpClient.post(url,{responseType:'json'});
  }
  withdrawAmount(id:number,amount:number,password:string){
    let url:string = "http://localhost:8080/v1/withdrawfundsfromwallet/"+id+"/amount/"+amount+"/password/"+password;
    return this.httpClient.post(url,{responseType:'json'});
  }
  transferAmount(fromwalletId:number,towalletId:number,amount:number,password:string){
    let url:string = "http://localhost:8080/v1/transferfundsBywallet/fromwalletId/"+fromwalletId+"/towalletId/"+towalletId+"/amount/"+amount+"/password/"+password;
    return this.httpClient.post(url,{responseType:'json'});
  }
}
