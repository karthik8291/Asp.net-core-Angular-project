import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // tslint:disable-next-line:typedef
  cancelRegisterMode(event: boolean)
  {
    this.registerMode = event;
  }
}