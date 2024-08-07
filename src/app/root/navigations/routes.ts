import { FeatureCanActivate } from '../../../shared/guards/feature-can-activate.guard';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from '../../../shared/components/unauthorized/unauthorized.component';
import { Routes } from '@angular/router';
import { AuthFailedRedirection } from './navigations.types';
import { appRoles } from '../constants/app-roles';

export const authFailedRedirection: AuthFailedRedirection[] = [
	{
		role: appRoles.ADMIN,
		loggedInredirectTo: '/user-management',
		loggedOutredirectTo: '/login',
	},
	{
		role: appRoles.APPUSER,
		loggedInredirectTo: '/directory',
		loggedOutredirectTo: '/login',
	},

	{
		role: appRoles.MODERATOR,
		loggedInredirectTo: '/user-management',
		loggedOutredirectTo: '/login',
	},

	{
		role: appRoles.USER,
		loggedInredirectTo: '/onboarding',
		loggedOutredirectTo: '/login',
	},
];

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
		data: {},
	},

	{
		path: 'login',
		loadChildren: () =>
			import('../../autentication/authentication.moudle').then(
				(m) => m.AuthenticationModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			authFailRedirection: authFailedRedirection,
			isPublic: true,
		},
	},

	{
		path: 'announcement',
		loadChildren: () =>
			import('../../announcement/announcement.module').then(
				(m) => m.AnnouncementModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Announcement',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'directory',
		loadChildren: () =>
			import('../../directory/directory.module').then(
				(m) => m.DirectoryModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Directory',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'events',
		loadChildren: () =>
			import('../../events/events.module').then((m) => m.EventsModule),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Events',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'fundraising',
		loadChildren: () =>
			import('../../fundraising/fundraising.module').then(
				(m) => m.FundraisingModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Fundraising',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'onboarding',
		loadChildren: () =>
			import('../../onboarding/onboarding.module').then(
				(m) => m.OnboardingModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Onboarding',
			authFailRedirection: authFailedRedirection,
			isPublic: true,
			isHide: false,
		},
	},

	{
		path: 'opportunities',
		loadChildren: () =>
			import('../../opportunities/opportunities.module').then(
				(m) => m.OpportunitiesModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Opportunities',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'support',
		loadChildren: () =>
			import('../../support/support.module').then((m) => m.SupportModule),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'Support',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: 'user-management',
		loadChildren: () =>
			import('../../user-management /user-management.module').then(
				(m) => m.UserManagementModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			requiredFeature: 'UserManagement',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
		},
	},

	{
		path: '401',
		component: UnauthorizedComponent,
		data: {
			isPublic: false,
		},
	},
	{
		path: '404',
		component: NotFoundComponent,
		data: {
			isPublic: false,
		},
	},
	{
		path: '**',
		redirectTo: '/404',
		data: {
			isPublic: false,
		},
	},
];
