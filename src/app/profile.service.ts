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

  //if a component needs the object can call this method to get it
  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (userProfileData: UserProfile): void => {
    //set old user equal to new user to overwrite old object
    this.userProfile = userProfileData;
  };
}
