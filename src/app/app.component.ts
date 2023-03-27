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

  ngOnInit(){
  }

  show(){
    console.log(this.user)
  }
}
