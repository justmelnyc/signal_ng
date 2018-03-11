import { Component, EventEmitter, OnInit, Output } from '@angular/core'
declare const $: any;
declare const jQuery: any;

@Component({
  selector: 'sig-subnav',
  template: `
    <nav class="cat__core__top-sidebar cat__core__top-sidebar--bg">
      <div class="sig-links pull-right">
        <a (click)="onAction()" class="NavbarLink LabelOnly isSignUp sig-button">
          <span class="sig-button-text">Create Access Key</span>
        </a>
        <a routerLink="/accounts-create" class="NavbarLink LabelOnly isSignUp sig-button">
          <span class="sig-button-text">Create Account</span>
        </a>
        
        <!--<a (click)="onAction()" class="btn btn-sm btn-outline-default ladda-button reset-button">Create Access Key</a>-->
        <!--<a routerLink="/accounts-create" class="btn btn-sm btn-outline-default ladda-button">Create<span class="hidden-sm-down"> Account</span></a>-->
      </div>
      <span class="cat__core__title d-block mb-2">
        <span class="text-muted">Admin — </span>
        <strong class="mr-2">Dashboard</strong>
        <small class="text-muted">statistics, charts, recent events and reports</small>
    </span>
    </nav>
  `,
  styles: [`
    /*@import 'variables';*/

    @media (min-width: 40em) {
      .sig-button.isSignUp {
        height: 2.5rem;
        line-height: 2.5rem;
      }
    }
          
    /*.sig-button.isSignUp {*/
      /*width: 5rem;*/
      /*right: 0px;*/
      /*position: absolute;*/
      /*height: 1.875rem;*/
      /*line-height: 1.875rem;*/
      /*color: rgb(255, 255, 255);*/
      /*text-align: center;*/
      /*background-color: rgb(0, 209, 0);*/
      /*border-radius: 0.3125rem;*/
      /*position: relative;*/
      /*height: 2.5rem;*/
      /*line-height: 2.5rem;*/
      /*font-size: 0.875rem;*/
      /*color: rgb(170, 170, 170);*/
      /*white-space: nowrap;*/
      /*vertical-align: middle;*/
      /*overflow: hidden;*/
      /*transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.2s ease, background-color 0.2s ease;*/
    /*}*/
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
      background-color: rgb(0, 0, 0);
      display: inline-block;
      font-size: 0.875rem;
      border-radius: 0.3125rem;
      border-width: 1px solid rgb(0, 0, 0);
      border-image: initial;
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
    .sig-button:hover {
      background-color: #75FA8C;
      border-color: #75FA8C;
    }
    .sig-links>* {
      margin-left: .9375rem;
      cursor: pointer;
    }
  `]
})
export class SubnavComponent {

  data: any;
  @Output() action = new EventEmitter<string>();

  onAction(data?: any) {
    this.action.emit(data);
  }

}
