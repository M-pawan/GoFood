import { body, validationResult } from "express-validator";

const userValidation = () => {
  return [
    // username must be an email
    body("email", "invalid email format").isEmail(),
    // password must be at least 5 chars long
    body("password", "min 5 character for password").isLength({ min: 5 }),
    // name must be at least 5 chars long
    body("name", "minimum 3 characters required").isLength({ min: 5 }),
  ];
};
const userLoginValidation = () => {
  return [
    // username must be an email
    body("email", "invalid email format").isEmail(),
    // password must be at least 5 chars long
    body("password", "min 5 character for password").isLength({ min: 5 }),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  console.log(errors);
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export default {
  userValidation,
  userLoginValidation,
  validate,
};
