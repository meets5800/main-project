import * as yup from 'yup';
import { string as yupString } from 'yup';
import 'yup-phone';

const phoneRegExp = /^[0-9]{10,10}$/;

export const signUpSchema = yup.object({
    Fullname: yupString().min(2).max(25).required("Please enter your fullname"),
    Email: yupString().email().required("Please enter your email"),
    Number: yupString().matches(phoneRegExp, 'The phone number is not valid').required("Please enter phone number"),
    Password: yupString().min(6).required("Please enter password")
});
