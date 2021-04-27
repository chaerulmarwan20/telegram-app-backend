const Joi = require("joi");

module.exports = {
  validationUsers: (users) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required().strict(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.number().required(),
    });
    return schema.validate(users);
  },
  validationUsersUpdate: (users) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phoneNumber: Joi.number().required(),
    });
    return schema.validate(users);
  },
  validationPin: (users) => {
    const schema = Joi.object({
      pin: Joi.number().min(6).required(),
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
  validationPassword: (users) => {
    const schema = Joi.object({
      password: Joi.string().min(8).required().strict(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict(),
    });
    return schema.validate(users);
  },
  validationChangePassword: (users) => {
    const schema = Joi.object({
      currentPassword: Joi.string().min(8).required().strict(),
      password: Joi.string().min(8).required().strict(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict(),
    });
    return schema.validate(users);
  },
  validationPhoneNumber: (users) => {
    const schema = Joi.object({
      phoneNumber: Joi.number().required(),
    });
    return schema.validate(users);
  },
  validationTransactions: (transactions) => {
    const schema = Joi.object({
      idUser: Joi.number().required(),
      idReceiver: Joi.number().required(),
      amount: Joi.number().required(),
      notes: Joi.string().required(),
    });
    return schema.validate(transactions);
  },
  validationDetails: (details) => {
    const schema = Joi.object({
      idUser: Joi.number().required(),
      idReceiver: Joi.number().required(),
      amount: Joi.number().required(),
      balanceLeft: Joi.number().required(),
      notes: Joi.string().required(),
    });
    return schema.validate(details);
  },
  validationTopUp: (topUp) => {
    const schema = Joi.object({
      amount: Joi.number().required(),
      idPayment: Joi.number().required(),
    });
    return schema.validate(topUp);
  },
};
