import {MAIL_FORMAT} from "../constants/Constants";

//Validate Emial Form
export function validateLoginForm(email, password){
    if(!email || !password){
        return false;
    }

    if(!email.match(MAIL_FORMAT)){
        return false;
    }
    return true;
}

export function validateSignUpForm(signUpObj){
    if(!signUpObj.name || !signUpObj.email || !signUpObj.password || !signUpObj.confirmPassword || !signUpObj.skills ) {
        return false;
    }
    if(!signUpObj.email.match(MAIL_FORMAT)){
        return false;
    }
    return true;
}

export function validateJobForm(jobTitile, description, location){
    if(!jobTitile || !description || !location) {
        return false;
    }

    return true;
}

export function validateEmail(email){
    if(!email.match(MAIL_FORMAT)){
        return false;
    }
    return true;
}