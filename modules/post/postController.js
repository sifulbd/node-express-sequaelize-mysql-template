const postRepo = require('./../../repositories/postRepo');
const {User, Comment} = require('./../../models');
const userRepo = require('../../repositories/userRepo');

module.exports =  {
    async getPosts(req, res) {
        try {
             const options = {
                 attributes: ['id','title','body','userId']
             };
            const posts = await postRepo.posts(options);
            if(posts) {
                return res.status(200).json({message: 'Data fetch successfully', posts});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    }, 
    async getPost(req, res) {
        try {
            const id = req.params.id;
            const getPostOptions = {
                attributes: ['id', 'title', 'body', 'user_id'],
                include: [
                    { model: User, attributes: ['name', 'email', 'username', 'id']},
                    { model: Comment, attributes: ['id', 'comment'],
                        include: [
                            { model: User, attributes: ['id', 'name', 'email'] }
                        ]
                    }, 
                ]
            };
            const post = await postRepo.postById(id, getPostOptions);
            if(post) {
                return res.send({message: 'Data fetch success', post});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },

    async getUserPosts(req, res) {
        try {
            const userId = parseInt(req.params.userId);
            const posts = await postRepo.postByUserId(parseInt(userId));
            if(posts) {
                return res.send({message: 'Data fetch success', posts});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },

    async getUpdatePost(request, response) {
		try {
			const postId = request.params.id;
			const post = await postRepo.postById(postId);
			if (post) {
				return response.send({message: 'Data fetched successfully',  post });
			}
            return res.status(404).json({message: 'Data not found'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
	},
    async putUpdatePost(req, res) {
		try {
			const postId = req.params.id;
			const post = await postRepo.postById(postId);
			if (post) {
				const { title, body} = req.body;
				const data = {
					title,
					body					
				};
				await postRepo.updatePost(data, postId);
				return res.status(201).json({message: 'User updated successfully'});
			}
            return res.status(404).json({message: 'Data not found'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
	},
    async createPost(req, res) {
        try { 
            const {id, title, body, user_id} = req.body;
            const data = {id, title, body, user_id};
            await postRepo.createPost(data);
            return res.status(201).json({message: 'Post created successfully'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },
    async deletePost(req, res) {
		try {
			const postId = req.params.id;
			const post = await postRepo.postById(postId);
			if (post) {
				await postRepo.deletePost(postId);
				return res.status(200).json({message: 'Post deleted successfully'});
			}
			return res.status(404).json({message: 'Data not found'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
	}
}