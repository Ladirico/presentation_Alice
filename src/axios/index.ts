import axios from "axios";
import { InterfaceRootObject, propsWe } from "../types/axiosTypes";

axios.defaults.baseURL = "http://localhost:5000";

export const getAll = () =>
  axios
    .get("/")
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const getProfFromMatricola = (matricola: string) =>
  axios
    .get(`/insegnante/${matricola}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const getStudenteFromMatricola = (matricola: string) =>
  axios
    .get(`/studente/${matricola}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const deleteProfFromMatricola = (matricola: string) =>
  axios
    .delete(`/delete/insegnante/${matricola}`, { method: "DELETE" })
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const deleteStudenteFromMatricola = (matricola: string) =>
  axios
    .delete(`/delete/studente/${matricola}`, { method: "DELETE" })
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const patchingCDLStudent = ({ matricola, cdl }: propsWe) => {
  axios
    .patch(`mod/studente/${matricola}/${cdl}`, { method: "DELETE" })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
