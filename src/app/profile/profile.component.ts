import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   repos:any;

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile=> {
      this.newMethod(profile);
      this.profile = profile;

    });
    this.profileService.getProfileRepositories().subscribe(repos=>{
      console.log(this.repos);
      this.repos=repos;

    })

  }
  private newMethod(profile: Object) {
    console.log(profile);
  }

  ngOnInit() {
  }

  }


