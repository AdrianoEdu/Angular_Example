import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appInstance: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appInstance = fixture.componentInstance;
  });

  var user = ({
    "name": "Adriano",
    "state": "MG",
    "city": "PA",
    "address": "Terrado",
    "email": "a@gmail.com"
  })

  // Test Validate of create app
  it('should create the app', () => {
    expect(appInstance).toBeTruthy();
  });

  it(`should have as title 'AngularExample'`, () => {
    expect(appInstance.title).toEqual('AngularExample');
  });

  it('should add user in array', () => {
    appInstance.insertUser(user);

    expect(appInstance.arrayUsers.length).toEqual(1);
  });

  it('should remove user in array', () => {
    appInstance.insertUser(user);
    appInstance.deleteUser(user);

    expect(appInstance.arrayUsers.length).toEqual(0);
  });

  it('should update user in array', () => {
    appInstance.insertUser(user);

    appInstance.selectUser(user);

    appInstance.user.name = "Eduardo"

    appInstance.insertUser(appInstance.user);

    expect(appInstance.arrayUsers.length).toEqual(1);
  })

  it('should add users gonna be called', () => {
    // appInstance = jasmine.createSpyObj("AppComponent", ["insertUser"]);
    // Object.getOwnPropertyDescriptor(appInstance, "insertUser")?.value.and.returnValue("DDDD");

    // appInstance.insertUser(user);

    // expect(appInstance.insertUser).toHaveBeenCalled();
    appInstance.insertUser(user);
    appInstance.insertUser(user);
    expect(appInstance.insertUser).toThrowError();

  });
});
