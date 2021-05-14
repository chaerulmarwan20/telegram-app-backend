const Joi = require("joi");

module.exports = {
  validationUsers: (users) => {
    const schema = Joi.object({
      name: Joi.string().min(3).required().messages({
        "string.base": `Name should be a type of text`,
        "string.empty": `Name cannot be an empty field`,
        "string.min": `Name should have a minimum length of {#limit}`,
        "any.required": `Name is a required field`,
      }),
      email: Joi.string().email().required().messages({
        "string.base": `Email should be a type of text`,
        "string.empty": `Email cannot be an empty field`,
        "any.required": `Email is a required field`,
      }),
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationUsersUpdate: (users) => {
    const schema = Joi.object({
      name: Joi.string().required().messages({
        "string.base": `Name should be a type of text`,
        "string.empty": `Name cannot be an empty field`,
        "string.min": `Name should have a minimum length of {#limit}`,
        "any.required": `Name is a required field`,
      }),
      username: Joi.string().required().messages({
        "string.base": `Username should be a type of text`,
        "string.empty": `Username cannot be an empty field`,
        "string.min": `Username should have a minimum length of {#limit}`,
        "any.required": `Username is a required field`,
      }),
      phoneNumber: Joi.number().required().messages({
        "number.base": `Phone number should be a type of number`,
        "number.empty": `Phone number cannot be an empty field`,
        "any.required": `Phone number is a required field`,
      }),
      bio: Joi.string().required().messages({
        "string.base": `Bio should be a type of text`,
        "string.empty": `Bio cannot be an empty field`,
        "string.min": `Bio should have a minimum length of {#limit}`,
        "any.required": `Bio is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationLogin: (users) => {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        "string.base": `Email should be a type of text`,
        "string.empty": `Email cannot be an empty field`,
        "any.required": `Email is a required field`,
      }),
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
    });
    return schema.validate(users);
  },
  validationForgotPassword: (users) => {
    const schema = Joi.object({
      password: Joi.string().min(8).required().strict().messages({
        "string.base": `Password should be a type of text`,
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of {#limit}`,
        "any.required": `Password is a required field`,
      }),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .strict()
        .messages({
          "string.base": `Confirm password should be a type of text`,
          "string.empty": `Confirm password cannot be an empty field`,
          "any.required": `Confirm password is a required field`,
        }),
    });
    return schema.validate(users);
  },
};
