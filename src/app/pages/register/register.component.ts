import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  }
  submit() {
    console.log(this.form.value)
    this.authService.register(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/login'])
    );
  }

}
