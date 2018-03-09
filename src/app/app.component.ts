import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--<cat-menu-right></cat-menu-right>-->
        <vertical-timeline></vertical-timeline>
        <vertical-navigator></vertical-navigator>
            <!--<cat-menu-left></cat-menu-left>-->
            <navigator></navigator>
            <div class="cat__content">
            <router-outlet></router-outlet>
        </div>
         <sig-footer></sig-footer>

    `,
})
export class AppComponent {}
