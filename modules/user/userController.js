const userRepo = require('./../../repositories/userRepo');
const {Post} = require('./../../models');

module.exports =  {
    async getUsers(req, res) {
        try {
            const users = await userRepo.users();
            if(users) {
                return res.status(200).json({message: 'Data fetch successfully', users: users});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    }, 
    async getUser(req, res) {
        try {
            const userId = req.params.id;
            const getUserOptions = {
                include: [
                    { model: Post, attributes: ['id', 'title', 'body']}
                ]
            };
            const user = await userRepo.userById(userId, getUserOptions);
            if(user) {
                return res.send({message: 'Data fetch success', user: user});
            }
            return res.status(404).json({message: 'Data not found', err});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },
    async createUser(req, res) {
        try { 
            const {name, username, email, phone, website, companyname, address} = req.body;
            const data = {name, username, email, phone, website, companyname, address};
            await userRepo.createUser(data);
            return res.status(201).json({message: 'User created successfully'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    },
    async blkCreate(req, res) {
        try {
            const data = req.body;
            await userRepo.blkadd(data);
            return res.status(201).json({message: 'Users added successfully'});
        }catch(err) {
            return res.status(500).json({message: err.message, err});
        }
    }  
}