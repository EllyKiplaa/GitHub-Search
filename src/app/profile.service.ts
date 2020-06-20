import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'

})
export class ProfileService {
private username:string;
private clientid='dcca90a7bb34f53cf6ee';
private clientsecret ='eb259cfd44fa48f477f4b743647832811217805b';

  constructor(private http:HttpClient){
    console.log("service is now ready!");
    this.username ='EllyKiplaa';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
    // return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret = " + this.clientsecret)
    // .map(res => res.json());
  }

    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_secret="+ this.clientsecret)
  }
}
