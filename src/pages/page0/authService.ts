import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Headers, RequestOptions, Http} from '@angular/http';
import {User} from '../../components/user';

let usersURL = '../../data/users.json';

@Injectable()
export class AuthService {
  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        var users = [];
        var userReq = new XMLHttpRequest();
        userReq.open('GET',usersURL,false);
        userReq.send(null);
        if(userReq.status == 200){
          users = JSON.parse(userReq.responseText).map(function(user){
            return new User(user.nom,user.prenom,user.email,user.password);
          });
        }

        this.currentUser = this.retreiveUser(users,credentials.email,credentials.password);
        let access = this.currentUser !== undefined;

        observer.next(access);
        observer.complete();
      });
    }
  }

  public retreiveUser(users:User[],email:String,password:String): User{
      return users.filter(function(user){
        var userCredentials = user.getCredentials();
        return (password === userCredentials.password && email === userCredentials.email);
      })[0];
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}