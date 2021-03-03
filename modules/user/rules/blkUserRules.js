module.exports =  {
	name: {
		in: '*.body',
		notEmpty: true,
		errorMessage: 'Name is required'
	},
	username: {
		in: '*.body',
		notEmpty: true,
		errorMessage: 'Username is required'
	},
	email: {
		in: '*.body',
		notEmpty: true
	}
};
