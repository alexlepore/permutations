const validator = require("validator");
const empty = require("is-empty");

module.exports.validtateRegister = (data) =>{
    let errors = {};

    data.name = !empty(data.name) ? data.name : "";
    data.email = !empty(data.email) ? data.email : "";
    data.password = !empty(data.password) ? data.password : "";
    data.confirmPassword = !empty(data.confirmPassword) ? data.confirmPassword : "";

    if(validator.isEmpty(data.name)){
        error.name = "Name field required";
    }

    // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };


}