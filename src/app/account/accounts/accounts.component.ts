import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { NgxCoolDialogsService } from 'ngx-cool-dialogs'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.scss']
})
export class AccountsComponent implements OnInit {
  title;

  constructor(private route: ActivatedRoute, private coolDialogs: NgxCoolDialogsService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title']
  }

  getAccessKey() {
    this.coolDialogs.prompt('Please type your email below.',  {
      theme: 'material',
      okButtonText: 'Yes, I do',
      cancelButtonText: 'Nope',
      color: 'red',
      title: 'Wait, think twice'
    })
      .subscribe(res => {
        if (res.result) {
          console.log('Thanks, now we have your email:', res.value);
        }
      });
  }





}
