import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { HttpStatusCode } from 'src/enum/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'AngularExample';

  public user: User = {} as User;
  public arrayUsers: Array<User> = [];
  public enumStatusCode = HttpStatusCode;

  CreateOrUpdate(): number {
    var user = this.user;

    try {
      if (user.id === undefined || user.id === "") {
        return this.insertUser(user);
      }
      else {
        return this.updateUser(user);
      }
    } catch (error) {
      return this.enumStatusCode.INTERNAL_SERVER_ERROR;
    }
    finally {
      this.cleanUser();
    }
  }

  insertUser(user: User): number {

    if (this.isEmptyUser(user)) {
      console.error("User name and address are empty");
      return this.enumStatusCode.FORBIDDEN;
    }

    user.id = this.generateIdRandom();
    this.arrayUsers.push(user);

    console.log("Registered Success ! " + user);

    return HttpStatusCode.CREATED;
  }

  updateUser(user: User): number {

    if (this.isEmptyUser(user)) {
      console.error("User name and address are empty");
      return this.enumStatusCode.FORBIDDEN;
    }

    var index = this.getUserById(user.id, this.arrayUsers);
''
    if(index === -1)
    {
      return this.enumStatusCode.NOT_FOUND;
    }

    var userByIndex = this.arrayUsers[index];

    userByIndex.name = user.name;
    userByIndex.city = user.city;
    userByIndex.address = user.address;
    userByIndex.email = user.email;
    userByIndex.state = user.state;

    console.log("Update Success ! " + this.arrayUsers);

    return this.enumStatusCode.OK;
  }

  deleteUser(user: User): HttpStatusCode {
    let index = this.getUserById(user.id, this.arrayUsers);

    if(index === -1)
    {
      return this.enumStatusCode.NOT_FOUND;
    }

    this.arrayUsers.splice(index, 1);

    return this.enumStatusCode.OK;
  }

  selectUser(user: User) {
    this.user.name = user.name;
    this.user.address = user.address;
    this.user.city = user.city;
    this.user.email = user.email;
    this.user.state = user.state;
    this.user.id = user.id;
  }

  cleanUser() {
    this.user = {} as User;
  }

  isEmptyUser(user: User): Boolean {
    return user.name === undefined || user.email === undefined;
  }

  generateIdRandom() {
    return (Math.random() + 1).toString(36).substring(2);
  }

  getUserById(id: String, listUsers: Array<User>) {
    return listUsers.findIndex(x => x.id == id);
  }
}
