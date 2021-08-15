
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
      private userService: UserService,
      private router: Router
      ) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    if (form.invalid){
      console.log('The form is invalid!');
      return;
    }
    let {email, name, password} = form.value;
    
    this.userService.register({email, name, password}).subscribe({
        next: () => {
            this.router.navigate(['/login']);
        },
        error: (err) => {
           console.log(err);
        }
    });
  }
}


