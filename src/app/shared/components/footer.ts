import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sig-footer',
  template: `
    <div class="cat__footer">
      <div class="cat__footer__top">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="mb-3">
              <strong>Check Out Preselected Demos</strong>
            </div>
            <div class="row">
              <div class="col-6">
                <ul class="list-unstyled mb-3">
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Vertical Menu (Default)</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Ecommerce Version</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Horizontal Menu + Boxed Container</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Iconbar Vertical Menu</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Inverse Color Scheme</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="list-unstyled mb-3">
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Super Clean Mode + Menu Shadow</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Horizontal Menu</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Compact Horizontal Menu</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Vertical Menu + Boxed</a></li>
                  <li class="mb-2"><a target="_blank" href="javascript: void(0);">Horizontal Menu + Boxed</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="mb-3">
              <strong>Check Out Preselected Demos</strong>
            </div>
            <div class="cat__footer__description">
              <p>Clean UI – a modern professional admin template, based on Bootstrap 4
                framework. Clean UI is a powerful and super flexible tool, which suits best for any
                kind of web application: Web Applications; CRM; CMS; Admin Panels; Dashboards; etc.
                Clean UI is fully responsive, which means that it looks perfect on mobiles and
                tablets</p>

              <p>Clean UI is fully based on SASS pre-processor, includes 50+ commented SASS files.
                Each file corresponds to a single component, layout, page, plugin or extension –
                so you can easily find necessary piece of code and edit it for your needs.
                The package includes both normal and minified CSS files, compiled from SASS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cat__footer__bottom">
        <div class="row">
          <div class="col-md-4">
            <a href="https://themeforest.net/item/clean-ui-admin-template-modular-trendy-design-modules-market-bem-angular-2-visual-builder/19597589?s_rank=4&ref=mediatec_software" target="_blank" onclick="yaCounter43604639.reachGoal('buy_sho_foo');" target="_blank" class="btn btn-default btn-rounded">
              Buy Now <span style="text-decoration: line-through;">20</span> 25$
            </a>
          </div>
          <div class="col-md-8">
            <div class="cat__footer__company">
              <img class="cat__footer__company-logo" src="assets/images/logo.png" target="_blank" title="Mediatec Software">
              <span>
                © 2016 <a href="#" target="_blank">Framework New York</a>
                <br>
                All rights reserved
            </span>
            </div>
          </div>
        </div>
      </div>
      <a href="javascript: void(0);" class="sig__core__scroll-top" onclick="$('body, html').animate({'scrollTop': 0}, 500);">
        <svg class="lnr lnr-arrow-up"><use xlink:href="#lnr-arrow-up"></use></svg>
      </a>
    </div>
  `,

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
