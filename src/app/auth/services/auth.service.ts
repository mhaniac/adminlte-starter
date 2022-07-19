import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userProfile = {
    name: 'Angel José Castillo Portillo',
  };

  get userProfile() {
    return this._userProfile;
  }

  get initialLetter() {
    return this._userProfile.name[0];
  }

  constructor() {}
}
