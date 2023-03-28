import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  var user = ({
    "name": "Adriano",
    "state": "MG",
    "city": "PA",
    "address": "Terrado",
    "email": "a@gmail.com"
  })

  // Test Validate of create app
  //
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularExample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularExample');
  });

  it('should add user in array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;

    instance.insertUser(user);

    expect(instance.arrayUsers.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove user in array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;

    instance.insertUser(user);
    instance.deleteUser(user);

    expect(instance.arrayUsers).toBeLessThan(1);
  });

  it('should update user in array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;

    instance.insertUser(user);

    var userUpdate = ({
      "name": "Eduardo",
      "state": "MG",
      "city": "PA",
      "address": "Terrado",
      "email": "a@gmail.com"
    })

    instance.updateUser(userUpdate);
    instance.insertUser(userUpdate);

    expect(instance.arrayUsers.length).toBeGreaterThanOrEqual(1);
  })
});
