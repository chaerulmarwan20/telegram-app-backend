const Joi = require("joi");

module.exports = {
  validationUsers: (users) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required().strict(),
    });
    return schema.validate(users);
  },
  validationUsersUpdate: (users) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required().strict(),
      phoneNumber: Joi.number().required(),
    });
    return schema.validate(users);
  },
  validationLogin: (users) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required().strict(),
    });
    return schema.validate(users);
  },
  validationForgotPassword: (users) => {
    const schema = Joi.object({
      password: Joi.string().min(8).required().strict(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict(),
    });
    return schema.validate(users);
  },
};
