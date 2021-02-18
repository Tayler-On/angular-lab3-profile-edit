import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile!: UserProfile;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.userProfile = this.profileService.getProfile();
    console.log(this.userProfile);
  }
}
