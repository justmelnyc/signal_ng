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
              <a class="dropdown-item" href="javascript:void(0)">
                <!--<i class="dropdown-icon icmn-user"></i> -->
                <svg class="lnr lnr-user"><use xlink:href="#lnr-user"></use></svg>
                Profile
              </a>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">Home</div>
              <a class="dropdown-item" href="javascript:void(0)"><svg class="lnr lnr-screen"><use xlink:href="#lnr-screen"></use></svg> Player</a>
              <a class="dropdown-item" routerLink="/accounts"><svg class="lnr lnr-camera-video"><use xlink:href="#lnr-camera-video"></use></svg> Spots (Videos)</a>
              <a class="dropdown-item" routerLink="/accounts"><svg class="lnr lnr-laptop-phone"><use xlink:href="#lnr-laptop-phone"></use></svg> Spots (Apps)</a>

              <a class="dropdown-item" href="javascript:void(0)"><svg class="lnr lnr-calendar-full"><use xlink:href="#lnr-calendar-full"></use></svg> Schedule (35 New)</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0)"><svg class="lnr lnr-power-switch"><use xlink:href="#lnr-power-switch"></use></svg> Logout</a>
            </ul>
          </div>
        </div>
        <div class="cat__top-bar__item">
          <div class="cat__top-bar__menu-button cat__menu-right__action--menu-toggle">
            <!--<svg class="lnr lnr-menu"><use xlink:href="#lnr-menu"></use></svg>-->
            <!--<svg class="lnr lnr-page-break"><use xlink:href="#lnr-page-break"></use></svg>-->
            <button class="layout-tool footer-tool layout-icon ">
              <svg class="list-icon SVGIcon" height="20" width="20">
                <g>
                  <path d="M6.2,8.8c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h7.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5H6.2z"></path>
                  <path d="M6.2,16.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h7.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5H6.2z"></path>
                </g>
              </svg>
              <span class="css-edgmc0">List View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    button {
      position: relative;
      display: inline-block;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      text-transform: none;
      vertical-align: middle;
      background: transparent;
      border: 0;
      border-radius: 0;
      outline: 0;
    }
    
    svg.lnr {
      margin-right: 5px;
    }
    .dropdown-item {
      margin-bottom: 5px;
    }
    .css-edgmc0 {
      display: inline-block;
      width: 0px;
      margin-left: 0.3125rem;
      white-space: nowrap;
      vertical-align: middle;
      overflow: hidden;
      transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.2s;
    }
    .SVGIcon>g {
      fill: transparent;
      stroke: currentColor;
      stroke-miterlimit: 10;
      stroke-width: 1.25;
      transition: fill .2s ease .1s,stroke .2s ease,-webkit-transform .2s ease;
      transition: fill .2s ease .1s,stroke .2s ease,transform .2s ease;
      transition: fill .2s ease .1s,stroke .2s ease,transform .2s ease,-webkit-transform .2s ease;
      -webkit-transform-origin: center center;
      transform-origin: center center;
    }
    .layout-icon.layout-tool {
      margin-right: -0.5rem;
      margin-left: 0.3125rem;
    }
    .layout-icon {
      display: inline-block;
      font-size: 0.75rem;
    }
    .footer-tool.layout-tool>.SVGIcon {
      /*margin-top: 5px;*/
    }
    
  `]

})
export class NavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
