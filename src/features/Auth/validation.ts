import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    userName: yup.string().required(),
    pin : yup.string().required(),
});