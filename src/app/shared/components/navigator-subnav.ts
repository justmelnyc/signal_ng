import { Component, OnInit } from '@angular/core';
declare const $: any;
declare const jQuery: any;

@Component({
  selector: 'sig-subnav',
  template: `
    <nav class="cat__core__top-sidebar cat__core__top-sidebar--bg">
      <div class="pull-right">
        <a routerLink="/accounts-create" class="btn btn-sm btn-outline-default ladda-button reset-button">Create Access Key</a>
        <a routerLink="/accounts-create" class="btn btn-sm btn-outline-default ladda-button">Create<span class="hidden-sm-down"> Account</span></a>
      </div>
      <span class="cat__core__title d-block mb-2">
        <span class="text-muted">Admin — </span>
        <strong class="mr-2">Dashboard</strong>
        <small class="text-muted">statistics, charts, recent events and reports</small>
    </span>
    </nav>
  `,
})
export class SubnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
