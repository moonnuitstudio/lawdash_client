import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const newContactchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email(),
  dayphone: yup.string().test(
    'phone-check',
    'Phone Number is invalid',
    dayphone => dayphone.length == 0 || dayphone.match(phoneRegExp)
  ),
}).required();