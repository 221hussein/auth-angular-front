import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  submit() {
    console.log(this.form.value)
    this.authService.login(this.form.getRawValue()).subscribe(
      (res:any) => {
        this.authService.accessToken = res.token
        this.router.navigate(['/'])
      }
    );
  }
}
