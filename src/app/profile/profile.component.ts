import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: firebase.User;
  

  // access auth services
  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    // construct an import from firebase.
    this.auth.getUserState()
    .subscribe ( user => {
      this.user = user;
    })
  }

}
