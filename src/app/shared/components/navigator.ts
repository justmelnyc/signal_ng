import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigator',
  template: `
    <div class="cat__top-bar">
      <!-- left aligned items -->
      <div class="cat__top-bar__left">
        <div class="cat__top-bar__logo">
          <a routerLink="/">
            <img src="assets/images/logo.png" />
          </a>
        </div>
        <div class="cat__top-bar__item hidden-lg-down">
          <div class="cat__top-bar__search">
            <!--<i class="icmn-search">&lt;!&ndash; &ndash;&gt;</i>-->
            <svg class="lnr lnr-magnifier icmn-search"><use xlink:href="#lnr-magnifier"></use></svg>
            <input type="text" placeholder="Type to search..." />
          </div>
        </div>
      </div>
      <!-- right aligned items -->
      <div class="cat__top-bar__right">
     
        <div class="cat__top-bar__item hidden-xxl-down hidden-sm-down">
          <div class="cat__top-bar__mini-chart">
            Server Load:
            <div class="cat__top-bar__mini-chart__inner">
              <i style="height: 30%;"></i>
              <i style="height: 78%;"></i>
              <i style="height: 10%;"></i>
              <i style="height: 46%;"></i>
              <i style="height: 26%;"></i>
              <i style="height: 29%;"></i>
              <i style="height: 50%;"></i>
              <i style="height: 89%;"></i>
              <i style="height: 30%;"></i>
            </div>
            20%
          </div>
        </div>
        
        <div class="cat__top-bar__item">
          <div class="dropdown cat__top-bar__avatar-dropdown">
            <a href="javascript: void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <span class="cat__top-bar__avatar">
                        <img src="assets/images/profile.png" />
                    </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="" role="menu">
              <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon icmn-user"></i> Profile</a>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">Home</div>
              <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon icmn-circle-right"></i> System Dashboard</a>
              <a class="dropdown-item" routerLink="/accounts"><i class="dropdown-icon icmn-circle-right"></i> Accounts</a>
              <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon icmn-circle-right"></i> Issue Navigator (35 New)</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0)"><i class="dropdown-icon icmn-exit"></i> Logout</a>
            </ul>
          </div>
        </div>
        <div class="cat__top-bar__item">
          <div class="cat__top-bar__menu-button cat__menu-right__action--menu-toggle">
            <!--<svg class="lnr lnr-menu"><use xlink:href="#lnr-menu"></use></svg>-->
            <svg class="lnr lnr-page-break"><use xlink:href="#lnr-page-break"></use></svg>
          </div>
        </div>
      </div>
    </div>
  `,

})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
