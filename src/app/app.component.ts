import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { User, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[] = []
  newName = ''
  newEmail = ''
  constructor(private dataService: DataService){}

  updateUsers() {
    this.dataService.getUsers()
    .subscribe((data: User[]) => {
      console.log(data);
      this.users = data
    })
  }

  ngOnInit(){
    // const obsInterval = interval(1000)
    // obsInterval.subscribe((data) => {
    //   console.log(data);
    // })

    this.updateUsers()

    // this.dataService.createUser(user).subscribe((user) => {
    //   this.users.push(user)
    // })
    // this.dataService.deleteUser(4).subscribe()
  }

  createUser(){
    console.log(this.newName);
    
    const user: User = {
      name: this.newName,
      email: this.newEmail
    }
    console.log(user);
    
    this.dataService.createUser(user).subscribe(() => {
      this.updateUsers()
    })
    this.newEmail = ''
    this.newName = ''
  }
}
