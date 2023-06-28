import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';

import { SignupData } from '../models/signup-data.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupDataSubject = new BehaviorSubject<SignupData>(null);
  private signupData: Observable<SignupData> = this.signupDataSubject.asObservable();

  constructor() { }

  public saveData(data: any): Observable<SignupData> {
    const { username, email, phoneNumber, country, state } = data || {} as any;
    const signupData: SignupData = { username, email, phoneNumber, country, state };
    this.signupDataSubject.next(signupData);
    
    return of(signupData);
  }

  public getData() {
    return this.signupData;
  }
}
