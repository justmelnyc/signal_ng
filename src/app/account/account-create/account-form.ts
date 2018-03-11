import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { map, take, debounceTime } from 'rxjs/operators'


@Component({
  selector: 'account-form',
  template: `
    <form [formGroup]="loginForm" novalidate>

      <label for="email">Email</label><br>
      <input type="email" formControlName="email" class="input form-control" [class.is-success]="email.valid"><br>



      <label for="username">Username</label><br>
      <input type="username" formControlName="username" class="form-control input" [ngClass]="{ 'is-invalid' :  username.invalid && username.touched,
     'valid-feedback' :  username.valid}"><br>


      <div *ngIf="username.invalid && username.dirty"  class="notification is-danger invalid-feedback">
        <strong>{{ username.value }}</strong> is already taken
      </div>

      <div *ngIf="username.valid" class="notification is-success" >
        <strong>{{ username.value }}</strong> is available
      </div>

      <div *ngIf="username.pending" class="notification is-info">
        Hold tight... Checking availability of <strong>{{ username.value }}</strong>
      </div>


      <button class="NavbarLink LabelOnly isSignUp sig-button is-success"
              [ngClass]="{ 'is-invalid' : !loginForm.valid}"
              type="submit"
              [disabled]="!loginForm.valid"><span class="">Create Account</span>
      </button>

      <!--<a routerLink="/accounts-create" class="NavbarLink LabelOnly isSignUp sig-button">-->
        <!--<span class="sig-button-text">Create Account</span>-->
      <!--</a>-->
    </form>

  `,
  styles: [`
    @media (min-width: 40em) {
      .sig-button.isSignUp {
        height: 2.5rem;
        line-height: 2.5rem;
      }
    }
    
    .sig-button-text {
      position: relative;
      display: inline-block;
      color: rgb(255, 255, 255);
    }

    .sig-button {
      height: 2.5rem;
      min-width: 10rem;
      text-align: center;
      padding-right: 0.625rem;
      padding-left: 0.625rem;
      line-height: 2.5rem;
      color: rgb(255, 255, 255);
      background-color: #75FA8C;
      border: 1px solid #75FA8C;
      display: inline-block;
      font-size: 0.875rem;
      border-radius: 0.3125rem;
      border-image: initial;
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
    
    button.is-invalid, button.is-invalid:hover {
      color: #D9D9E3;
      background-color: #FAFAFA;
      border-color: #FAFAFA;
      cursor: not-allowed;
    }

    button.is-invalid:hover {
      opacity: .5;
    }
    .sig-button:hover {
      background-color: #242424;
      border-color: #242424;
    }
    .sig-links>* {
      margin-left: .9375rem;
      cursor: pointer;
    }
  `]
  // styleUrls: ['../../../styles/_base.scss']
})
export class AccountFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private afs: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:  ['', [
        Validators.required,
        Validators.email
      ]],
      username:  ['',
        Validators.required,
        CustomValidator.username(this.afs)
      ],
    });

  }


  // Use getters for cleaner HTML code
  get email() {
    return this.loginForm.get('email')
  }

  get username() {
    return this.loginForm.get('username')
  }
}


// interface Validator<T extends FormControl> {
//   (c:T): {[error: string]:any};
// }

export class CustomValidator {
  static username(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const username = control.value.toLowerCase();

      return afs.collection('accounts', ref => ref.where('username', '==', username) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? { usernameAvailable: false } : null ),
        )
    }
  }

}
