import {LOGIN_URL, REGISTER_URL, GET_JOBS_POSTED_BY_RECRUITER_URL, CREATE_JOBS_BY_RECRUITER_URL, FORGOT_PASSWORD, RESET_PASSWORD_API, GET_ONE_JOB_CANDIDATE_URL} 
from "../constants/Constants"

export function LoginApi(loginObj) {
    return fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginObj)  
      })
         .then(resp => resp.json())
         .catch(err => err)
    }

export function registerApi(userObj) {
    return fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)  
      })
         .then(resp => resp.json())
         .catch(err => err)
    }

export function getJobsPostedByRecruiter(userToken, page = 1){
    return fetch(`${GET_JOBS_POSTED_BY_RECRUITER_URL}?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': userToken
        } 
      })
         .then(resp => resp.json())
         .catch(err => err)
    }

export function createJobsByRecruiter(jobDetailsObj){
  return fetch(CREATE_JOBS_BY_RECRUITER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem("token"))
    },
    body: JSON.stringify(jobDetailsObj)  
  })
     .then(resp => resp.json())
     .catch(err => err)
}

export function forgotPasswordApi(email){
  return fetch(`${FORGOT_PASSWORD}?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    } 
  })
     .then(resp => resp.json())
     .catch(err => err)
}

export function resetPasswordApi(password, confirmPassword){
  return fetch(RESET_PASSWORD_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, confirmPassword, token:JSON.parse(localStorage.getItem("token"))})  
  })
     .then(resp => resp.json())
     .catch(err => err)
}

export function getOneJobDetails(jobId){
  return fetch(`${GET_ONE_JOB_CANDIDATE_URL}/${jobId}/candidates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem("token"))
    } 
  })
     .then(resp => resp.json())
     .catch(err => err)
}