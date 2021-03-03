module.exports =  {
	title: {
		in: 'body',
		notEmpty: true,
		errorMessage: 'Title is required'
	},
	body: {
		in: 'body',
		notEmpty: true,
		errorMessage: 'Body is required'
	},
	user_id: {
		in: 'body',
		notEmpty: true,
		errorMessage: 'User ID is required'
	}
};
