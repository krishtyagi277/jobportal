export const BASE_URL = "https://jobs-api.squareboat.info/api/v1";
export const LOGIN_URL = `${BASE_URL}/auth/login`;
export const REGISTER_URL = `${BASE_URL}/auth/register`
export const GET_JOBS_POSTED_BY_RECRUITER_URL = `${BASE_URL}/recruiters/jobs`
export const CREATE_JOBS_BY_RECRUITER_URL = `${BASE_URL}/jobs`
export const FORGOT_PASSWORD = `${BASE_URL}/auth/resetpassword`
export const RESET_PASSWORD_API = `${BASE_URL}/auth/resetpassword`

// eslint-disable-next-line no-useless-escape
export const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
