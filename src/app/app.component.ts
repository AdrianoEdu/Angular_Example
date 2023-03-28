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

  CreateOrUpdate() {
    var user = this.user;

    if (user.id === undefined || user.id === "") {
      this.insertUser(user);
    }
    else {
      this.updateUser(user);
    }

    this.cleanUser();
    console.log(this.arrayUsers);
  }

  cleanUser() {
    this.user = {} as User;
    this.insert = true;
  }

  insertUser(user: User) {
    if (this.isEmptyUser(user)) {

      user.id = this.generateIdRandom();
      this.arrayUsers.push(user);

      console.log("Registered Success ! " + this.arrayUsers);
    }
    else {
      console.error("User name and address are empty");
    }
  }

  updateUser(user: User) {
    if (this.isEmptyUser(user)) {

      var index = this.getUserById(user.id, this.arrayUsers);
      var userByIndex = this.arrayUsers[index];

      userByIndex.name = user.name;
      userByIndex.city = user.city;
      userByIndex.address = user.address;
      userByIndex.email = user.email;
      userByIndex.state = user.state;

      console.log("Update Success ! " + this.arrayUsers);
    }
    else {
      console.error("User name and address are empty");
    }
  }

  selectUser(user: User) {
    this.user.name = user.name;
    this.user.address = user.address;
    this.user.city = user.city;
    this.user.email = user.email;
    this.user.state = user.state;
    this.user.id = user.id;
  }

  deleteUser(user: User) {
    let index = this.getUserById(user.id, this.arrayUsers);
    this.arrayUsers.splice(index, 1);
  }

  isEmptyUser(user: User): Boolean {
    return user.name != undefined && user.email != undefined;
  }

  generateIdRandom()
  {
    return (Math.random() + 1).toString(36).substring(2);
  }

  getUserById(id: String, listUsers : Array<User>)
  {
    return listUsers.findIndex(x => x.id == id);
  }
}
