import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	Router,
	NavigationStart,
	NavigationEnd,
	RouterModule,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { MenuRightComponent } from './components/menu-right/menu-right.component';
import { FooterComponent } from './components/footer/footer.component';

import { StructureModule } from './structure/structure.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { PlayerModule } from './player/player.module';

declare const NProgress: any;

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		MenuLeftComponent,
		MenuRightComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		RouterModule,
		StructureModule,
		AdminModule,
		NgbModule.forRoot(),
		AngularFireModule.initializeApp(environment.firebase),
		routing,
		CoreModule,
		AccountModule,
		SharedModule,
		PlayerModule,
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(private router: Router) {
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				NProgress.start();
			}

			if (event instanceof NavigationEnd) {
				setTimeout(function() {
					NProgress.done();
				}, 200);
			}
		});
	}
}
