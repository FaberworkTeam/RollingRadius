import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user/home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UserHomeComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserService) { }

  ngOnInit() {

    this.userService.getAll().subscribe((data: User[])=>{
      console.log("data = ", data);
      this.users = data._items;
    })  
  }

}