import * as Yup from "yup";


// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const nameRules= /^[A-Za-z]+$/
export const basicSchema = Yup.object().shape({
    name: Yup.string().matches(nameRules,{message:"Please use alphabets"}).required("ShopName is required"),
       area: Yup.string().required("Please select your area"),
         category: Yup.string().required("Please select your category"),
    opendate: Yup.date().required("Please select your opening date"),
    closedate: Yup.date().min(Yup.ref("opendate"),"closing date can't be before start date").required("Please select your closing date"),
});