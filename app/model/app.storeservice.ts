import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMug } from './app.store.Mug';

@Injectable()
export class StoreService {
    private _url = 'app/model/mugs.json';

    constructor(private _http: Http) { }

    getMugs(): Observable<IMug[]> {
        return this._http.get(this._url)
            .map((response: Response) => <IMug[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMug(id: number): Observable<IMug> {
        return this.getMugs()
            .map((mugs: IMug[]) => mugs.find(p => p.mugid === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
