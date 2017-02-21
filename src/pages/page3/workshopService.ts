import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Workshop } from '../../components/workshop';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


let workshopsURL = '../../data/workshops.json';

@Injectable()
export class WorkshopService {
    workshops: Array<Workshop>;
    constructor(public http: Http){
        this.http = http;
    }
    public findAll() {
        return this.http.get(workshopsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    public handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}