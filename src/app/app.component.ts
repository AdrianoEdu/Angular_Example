import { Component } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'AngularExample';

  public user: User = {} as User;
  public arrayUsers: Array<User> = [];
  public insert: Boolean = true;

  show() {
    console.log(this.user)
  }

  registerUser() {
    if (this.insert)
    {
      if (this.isEmptyUser())
      {
        this.insertUser(this.user);
        console.log("Registered Success ! " + this.arrayUsers);
      }
      else
      {
        console.error("User name and address are empty");
      }
    }
    else
    {
      this.deleteUser(this.user);
      this.insertUser(this.user);
      console.log("Updated Success ! " + this.arrayUsers);
    }
  }

  cleanUser() {
    this.user = {} as User;
    this.insert = true;
  }

  insertUser(user: User){
    this.arrayUsers.push(user);
    this.cleanUser();
  }

  updateUser(user: User) {
    this.user.name = user.name;
    this.user.address = user.address;
    this.user.city = user.city;
    this.user.email = user.email;
    this.user.state = user.state;

    this.insert = false;
  }

  deleteUser(user: User)
  {
    let index = this.arrayUsers.findIndex(x => x.email == this.user.email);
    this.arrayUsers.splice(index, 1);
  }

  isEmptyUser(): Boolean {
    return this.user.name != "" && this.user.address != "";
  }
}
