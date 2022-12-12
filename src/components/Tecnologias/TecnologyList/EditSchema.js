import * as yup from "yup";

export const EditSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string().required("Campo obrigatório")
})