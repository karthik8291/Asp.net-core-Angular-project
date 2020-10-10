import { AccountService } from './_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService){}
 // tslint:disable-next-line:no-trailing-whitespace
 
  // tslint:disable-next-line:typedef
  ngOnInit()  {
    this.setCurrentuser();
  }

  // tslint:disable-next-line:typedef
  setCurrentuser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
