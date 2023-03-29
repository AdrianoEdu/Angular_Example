import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpStatusCode } from 'src/enum/enum';
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

  // Test Validate of create app
  it('should create the app', () => {
    expect(appInstance).toBeTruthy();
  });

  it(`should have as title 'AngularExample'`, () => {
    expect(appInstance.title).toEqual('AngularExample');
  });

  it('should add user in array and validate inserted user in the list by length and status of function', () => {
    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.name = "Adriano Eduardo";
    user.state = "Minas Gerais";

    var status = appInstance.insertUser(user);

    expect(appInstance.arrayUsers.length).toEqual(1);
    expect(status).toEqual(HttpStatusCode.CREATED);
  });

  it('shouldn t add user in array and validate inserted user in the list by length and status of function', () => {
    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.state = "Minas Gerais";

    var status = appInstance.insertUser(user);

    expect(appInstance.arrayUsers.length).toEqual(0);
    expect(status).toEqual(HttpStatusCode.FORBIDDEN);
  });

  it('should remove user in array', () => {
    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.name = "Adriano Eduardo";
    user.state = "Minas Gerais";

    appInstance.insertUser(user);

    var status = appInstance.deleteUser(user);

    expect(appInstance.arrayUsers.length).toEqual(0);
    expect(status).toEqual(HttpStatusCode.OK);
  });

  it('shouldn t remove user in array', () => {
    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.name = "Adriano Eduardo";
    user.state = "Minas Gerais";

    appInstance.insertUser(user);

    var status = appInstance.deleteUser(user);

    expect(appInstance.arrayUsers.length).toEqual(0);
    expect(status).toEqual(HttpStatusCode.OK);
  });


  it('should update user in array', () => {
    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.name = "Adriano Eduardo";
    user.state = "Minas Gerais";

    appInstance.insertUser(user);

    user.email = "Eduardo Adriano";

    var status = appInstance.updateUser(user);

    expect(appInstance.arrayUsers.length).toEqual(1);
    expect(status).toEqual(HttpStatusCode.OK);
  })

  it('should add users gonna be called', () => {

    var user = appInstance.user;

    user.id = "";
    user.address = "Rua Sapucaí";
    user.city = "Pouso Alegre";
    user.email = "adriano@gmail.com";
    user.name = "Adriano Eduardo";
    user.state = "Minas Gerais";

    var status = appInstance.insertUser(user);
    var typeOfStatus = typeof status;

    expect(status).toEqual(HttpStatusCode.CREATED);
  });
});
