import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wallet } from 'src/model/Wallet';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor(private httpClient:HttpClient){} 

  userLogin(wallet:Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8080/auth/login",wallet,{responseType:'json'});
  }
  userLogout(){

  }
  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
   });
   return this.httpClient.get("http://localhost:8080/auth/userinfo", { headers: reqHeader })

  }
}
