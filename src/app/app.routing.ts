import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { AdminComponent } from './admin/admin.component'
import { AuthGuard } from './core/guards/auth.guard'
import { PlayerComponent } from './player/components/player'

export const routes: Routes = [
	{ path: '', redirectTo: 'accounts', pathMatch: 'full' },
	{ path: 'player', component: PlayerComponent },
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard],
		data: { animation: 'home' },
	},
	{ path: '**', redirectTo: 'pages/page-404' },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
