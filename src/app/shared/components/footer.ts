import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sig-footer',
  template: `
    <footer class="Footer css-mhko7m" role="contentinfo">
      <div class="grabber css-rpdx7d"></div>
      <div class="footer-content css-11h01c3">
        <div class="footer-container css-1j4orw">
          <div class="footer-menu">
            <a class="footer-menu-item" href="/wtf/artists/" target="_blank">
              <span class="footer-menu-item-a">About</span>
            </a>
            <a class="footer-menu-item" href="/wtf/support/" target="_blank">
              <span class="footer-menu-item-a">Help</span>
            </a>
            <a class="footer-menu-item" href="/elloblog" target="_blank">
              <span class="footer-menu-item-a">Blog</span>
            </a>
            <a class="footer-menu-item" href="https://store.ello.co" target="_blank">
              <span class="footer-menu-item-a">Store</span>
            </a>
            <a class="footer-menu-item" href="/wtf/resources/apps/" target="_blank">
              <span class="footer-menu-item-a">Apps</span>
            </a>
            <a class="footer-menu-item" href="/wtf/policies/terms/" target="_blank">
              <span class="footer-menu-item-a">Terms</span>
            </a>
            <a class="footer-menu-item" href="/wtf/policies/privacy/" target="_blank">
              <span class="footer-menu-item-a">Privacy</span>
            </a>
          </div>
          <div class="footer-tools css-1umsjwf">
            <button class="top-tool footer-tool">
              <svg class="chevron-icon css-16nlgdy SVGIcon" height="20" width="20">
                <g>
                  <polyline points="6,16 12,10 6,4"></polyline>
                </g>
            </svg>
              <span class="css-edgmc0">Top</span>
            </button>
            <button class="layout-tool footer-tool layout-icon">
              <svg class="list-icon SVGIcon" height="20" width="20">
                <g>
                  <path d="M6.2,8.8c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h7.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5H6.2z"></path>
                  <path d="M6.2,16.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h7.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5H6.2z"></path>
                </g>
              </svg>
              <span class="css-edgmc0">List View</span>
            </button>
            <button class="layout-tool footer-tool css-q1j2f1">
              <svg class="grid-icon SVGIcon" width="20" height="20">
                <g><circle cx="6.2" cy="6.2" r="2.5"></circle>
                  <circle cx="13.8" cy="6.2" r="2.5"></circle>
                  <circle cx="6.2" cy="13.8" r="2.5"></circle>
                  <circle cx="13.8" cy="13.8" r="2.5"></circle></g></svg>
              <span class="css-edgmc0">Grid View</span>
            </button>
            <button class="IconTab TabButton" type="button"><svg class="RelationshipIcon SVGIcon" width="20" height="20"><g><circle cx="7.5" cy="4.8" r="1.8"></circle><path d="M7.5 8.6c-1.9 0-3.5 1.6-3.5 3.5v2.9h7v-2.9M12.7 6.1v5M15.2 8.6h-5"></path></g></svg></button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      position: fixed;
      right: 0px;
      bottom: -3.375rem;
      left: 0px;
      height: 4.3125rem;
      z-index: 1030;
      /*color: rgb(170, 170, 170);*/
      color: #000000;
    }
    
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

    @media (min-width: 40em) {
      .css-11h01c3, [data-css-11h01c3] {
        padding-right: 1.25rem;
        padding-left: 1.25rem;
      }
    }
    
    .footer-content {
      padding-left: 0.625rem;
      width: 100%;
      /*background-color: rgb(229, 229, 229);*/
      background-color: #FFFFFF;
      padding-right: 0.625rem;
      transform: translate3d(0px, calc(-100% + 0.9375rem), 0px);
      height: 5rem;
      position: relative;
      margin: 0px;
      transition: -webkit-transform 150ms ease, transform 150ms ease;
      border-top: 1px solid #e4e9f0;


    }
    
    .footer-container {
      -webkit-box-align: center;
      position: relative;
      display: flex;
      align-items: center;
      max-width: 85rem;
      width: 100%;
      height: 5rem;
      margin: 0px auto;
    }
    
    .footer-menu {
      position: relative;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      flex: 1 1 0%;
    }
    
    .footer-menu-item {
      display: inline-block;
      font-size: 1rem;
      vertical-align: middle;
      border-bottom: 0px;
      /*font-size: 14px;*/
      /*color: rgb(170, 170, 170);*/
      color: #000000;
    }

    .footer-tools {
      -webkit-box-align: center;
      position: absolute;
      display: flex;
      align-items: center;
      right: 0px;
      top: 0px;
      height: 100%;
    }
    /*.footer-tools::before {*/
      /*position: absolute;*/
      /*z-index: 2;*/
      /*top: 0px;*/
      /*bottom: 0px;*/
      /*left: -1.25rem;*/
      /*width: 1.25rem;*/
      /*content: "";*/
      /*background: linear-gradient(to right, rgba(229, 229, 229, 0) 0%, rgb(229, 229, 229) 90%);*/
    /*}*/
    .top-tool .footer-tool {
      display: inline-block;
      font-size: 0.75rem;
    }

    .footer-tools .chevron-icon {
      margin-top: 5px;
      transition: -webkit-transform .2s cubic-bezier(.23,1,.32,1);
      transition: transform .2s cubic-bezier(.23,1,.32,1);
      transition: transform .2s cubic-bezier(.23,1,.32,1),-webkit-transform .2s cubic-bezier(.23,1,.32,1);
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
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

    .css-edgmc0 {
      display: inline-block;
      width: 0px;
      margin-left: 0.3125rem;
      white-space: nowrap;
      vertical-align: middle;
      overflow: hidden;
      transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.2s;
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
      margin-top: 5px;
    }
    .footer-tool.layout-tool>.grid-icon {
      margin-top: 7px;
    }
    @media (min-width: 40em) {
      .footer-menu-item-a {
        margin-right: 1.25rem;
      }
    }
    .footer-menu-item-a {
      display: inline-block;
      white-space: nowrap;
      vertical-align: middle;
      margin-right: 0.9375rem;
      overflow: hidden;
      transition: width 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
  `],

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
