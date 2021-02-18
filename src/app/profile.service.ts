import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Tayler Ondersma',
    contact: '@_talonless',
    bio: "I can't do a handstand:/",
  };
  constructor() {}

  getProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (userProfileData: UserProfile): void => {
    this.userProfile = userProfileData;
  };
}
