import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: firebase.User;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.getUserState()
    
    .subscribe (user => {
      this.user = user;
    })
  }

}
