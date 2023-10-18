import * as yup from "yup";
import { passwordRegexp } from "@/core/constant";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      passwordRegexp,
      "password must be at least 6 characters, contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required(),
});
