import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, OnInit , Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accoountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  register() {
   this.accoountService.register(this.model).subscribe(response => {
     console.log(response);
     this.cancel();
   }, error => {
     console.log(error);
     this.toastr.error(error.error);
   });
  }
  // tslint:disable-next-line:typedef
  cancel(){
    this.cancelRegister.emit(false);
  }

}
