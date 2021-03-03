const {validationResult} = require('express-validator');

module.exports =  validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        };

        return res.status(400).json({
            message: 'Validation Error',
            errors: errors.errors[0]
        });
    };
};