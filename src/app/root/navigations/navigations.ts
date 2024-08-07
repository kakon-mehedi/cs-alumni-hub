import { Navigation } from './navigations.types';

export const navigations: Navigation[] = [
	{
		id: 'Announcement',
		title: 'Announcement',
		translate: 'ANNOUNCEMENT',
		type: 'collapsable',
		icon: 'campaign',
		iconType: 'material',
		isVisible: true,
		url: '/announcement',
	},

	{
		id: 'Directory',
		title: 'Directory',
		translate: 'DIRECTORY',
		type: 'collapsable',
		icon: 'menu_book',
		iconType: 'material',
		isVisible: true,
		url: '/directory',
	},

	{
		id: 'Events',
		title: 'Events',
		translate: 'EVENTS',
		type: 'collapsable',
		icon: 'event_available',
		iconType: 'material',
		isVisible: true,
		url: '/events',
	},

	{
		id: 'Fundraising',
		title: 'Fundraising',
		translate: 'FUNDRAISING',
		type: 'collapsable',
		icon: 'crowdsource',
		iconType: 'material',
		isVisible: true,
		url: '/fundraising',
	},

	{
		id: 'Onboarding',
		title: 'Onboarding',
		translate: 'ONBOARDING',
		type: 'collapsable',
		icon: 'group_add',
		iconType: 'material',
		isVisible: true,
		url: '/onboarding',
	},

	{
		id: 'Opportunities',
		title: 'Opportunities',
		translate: 'OPPORTUNITIES',
		type: 'collapsable',
		icon: 'lightbulb_circle',
		iconType: 'material',
		isVisible: true,
		children: [
			{
				id: 'JobOpportunities',
				title: 'Job Opportunities',
				translate: 'JOB_OPPORTUNITIES',
				type: 'item',
				isVisible: true,
				url: '/job-opportunities',
			},

			{
				id: 'AcademicOpportunities',
				title: 'Academic Opportunities',
				translate: 'ACADEMIC_OPPORTUNITIES',
				type: 'item',
				isVisible: true,
				url: '/academic-opportunities',
			},
		],
	},

	{
		id: 'Support',
		title: 'Support',
		translate: 'SUPPORT',
		type: 'collapsable',
		icon: 'help',
		iconType: 'material',
		isVisible: true,
		url: '/support',
	},

	{
		id: 'UserManagement',
		title: 'User Management',
		translate: 'USER_MANAGEMENT',
		type: 'collapsable',
		icon: 'manage_accounts',
		iconType: 'material',
		isVisible: true,
		url: '/user-management',
		children: [
			{
				id: 'PendingRequests',
				title: 'Pending Requests',
				translate: 'PENDING_REQUESTS',
				type: 'item',
				isVisible: true,
				url: '/pending-requests',
			},

			{
				id: 'Iam',
				title: 'Identity Access Management',
				translate: 'IAM',
				type: 'item',
				isVisible: true,
				url: '/iam',
			},

			{
				id: 'RoleManager',
				title: 'Role Manager',
				translate: 'ROLE_MANAGER',
				type: 'item',
				isVisible: true,
				url: '/role-manager',
			},
		],
	},
];
