import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSigningIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async onSigninClick() {
    this.isSigningIn = true;
    try {
      const userCredential = await this.authService.signinWithFacebook();
      console.log(userCredential.user.email);
      // this.router.navigateByUrl('/chat');
    } catch (error) {
      alert(error);
    }
  }
}
