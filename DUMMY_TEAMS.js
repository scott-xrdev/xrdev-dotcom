export default [
	{
		id: 1,
		name: 'Team 1',
		description: 'This is the description for a team',
		admins: ['61d8417bdc26ebaabcf80a9b'],
		members: [
			'61d8417bdc26ebaabcf80a9b',
			'61d841c8dc26ebaabcf80a9d',
			'61d80990ad092f654651361d',
		],
		projects: [{ id: 1, title: 'Dummy Project 1' }],
		needs: ['modeler', 'programmer'],
		image: '/images/teams/team-image.png',
	},
	{
		id: 2,
		name: 'Team 2',
		description: 'This is the description for a team',
		admins: ['61d8417bdc26ebaabcf80a9b'],
		members: [
			'61d8417bdc26ebaabcf80a9b',
			'61d841c8dc26ebaabcf80a9d',
			'61d80990ad092f654651361d',
		],
		projects: [],
		needs: ['modeler', 'programmer'],
		image: '/images/teams/team-image.png',
	},
	{
		id: 3,
		name: 'Team 3',
		description: 'This is the description for a team',
		admins: ['61d8417bdc26ebaabcf80a9b'],
		members: [
			'61d8417bdc26ebaabcf80a9b',
			'61d841c8dc26ebaabcf80a9d',
			'61d80990ad092f654651361d',
		],
		projects: [
			{ id: 2, title: 'Dummy Project 2' },
			{ id: 3, title: 'Dummy Project 3' },
		],
		needs: ['modeler', 'programmer'],
		image: '/images/teams/team-image.png',
	},
];
