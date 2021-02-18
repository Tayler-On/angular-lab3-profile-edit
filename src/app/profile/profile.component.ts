import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //userProfile is a property for storing the info from the object from the service
  userProfile!: UserProfile;

  //inject the service so you have access to it, making an instance of the class ProfileService called profileService; This is called Dependency Injection
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    //on load of the page this sets the property userProfile equal to the object UserProfile fromt the service, now you can use interpoolation!! woo!

    this.getAndSetUserProfile();
  }
  //wrote as a function so you could use it again!!
  getAndSetUserProfile = (): void => {
    this.userProfile = this.profileService.getUserProfile();
    console.log(this.userProfile);
  };
}
