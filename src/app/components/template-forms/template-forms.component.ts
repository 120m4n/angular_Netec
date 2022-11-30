import { Component } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  user: User = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  users: User[] = [];


  constructor() { }

  onSubmit() {
    console.log(this.user);
    //check if passwords match otherwise show error
    if(this.user.password !== this.user.repeatPassword) {
      //show error
      console.log('Passwords do not match');
      return;
    }
    //add user to users array
    this.users.push(this.user);
    //reset user
    this.user = {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  }


}
