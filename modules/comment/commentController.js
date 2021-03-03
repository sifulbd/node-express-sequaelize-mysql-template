const commentRepo = require('./../../repositories/commentRepo');
module.exports =  {
    async getComments(req, res) {
        try {
            const comments = await commentRepo.comments();
            if(comments) {
                return res.status(200).json({message: 'Data fetch successfully', comments});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    }, 
    async getComment(req, res) {
        try {
            const commentId = req.params.id;
            const comment = await commentRepo.commentById(commentId);
            if(comment) {
                return res.send({message: 'Data fetch success', comment});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },
    async createComment(req, res) {
        try { 
            const {id, comment, post_id, user_id} = req.body;
            const data = {id, comment, post_id, user_id};
            await commentRepo.createComment(data);
            return res.status(201).json({message: 'Comment created successfully'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },
    async deleteComment(req, res) {
		try {
			const commentId = req.params.id;
			const comment = await commentRepo.commentById(commentId);
			if (comment) {
				await commentRepo.deleteComment(commentId);
				return res.status(200).json({message: 'Post deleted successfully'});
			}
			return res.status(404).json({message: 'Data not found'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
	} 
}