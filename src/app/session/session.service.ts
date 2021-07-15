import { Injectable, Inject } from '@angular/core';
import { WebStorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { SESSION_STORAGE } from 'ngx-webstorage-service';

@Injectable()
export class SessionService implements Resolve<Observable<string>>{
    constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

    resolve() {
        let sessionData = this.getJSON('data');
        return sessionData;
    }

    storeSession(key: string, val: any): void {
        this.storage.set(key, val);
    }

    storeJSON(key: string, val: any): void {
        this.storage.set(key, JSON.stringify(val));

    }

    getJSON(key: string): any {
        let jsonStr = JSON.parse(this.storage.get(key)); return jsonStr;
    }
    getFromSession(key: string): any {
        return this.storage.get(key);

    }

    removeFromSession(key: string) {
        this.storage.remove(key);

    }

    clearAllFromSession() {
        this.storage.clear();
    }

}