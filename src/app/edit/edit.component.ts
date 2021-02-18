import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  //make a property to store the data from the service about the object
  userProfile!: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    //pull info about the profile object from service on load
    this.userProfile = this.profileService.getUserProfile();
  }

  getEdit = (form: NgForm): void => {
    console.log(from);
    let newObject: UserProfile = {
      name: form.form.value.name,
      contact: form.form.value.contact,
      bio: form.form.value.bio,
    };
    //call setUserProfile method from the service to set this objects info in the service to update the profile data
    this.profileService.setUserProfile(newObject);
    //get rid of object and the above line and just use this if you want to make it shorter since the form is already an object; this only works if the object is exactly what you need it to be
    // this.profileService.setUserProfile(form.form.value);
    this.router.navigate(['profile']);
  };
}
