import * as Yup from "yup";

const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

const nameRegex = /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+$/;

const ValidationShema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegex,
      "Name must consist of two words, both starting with capital letters"
    )
    .required("Enter valid Name"),
  number: Yup.string()
    .required("Enter valid phone number")
    .matches(phoneNumberRegex, "Invalid phone number. Phone must be XXX-XX-XX"),
});

export default ValidationShema;
