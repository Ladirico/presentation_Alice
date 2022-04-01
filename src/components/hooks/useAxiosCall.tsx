import axios from "axios";
import { useEffect, useState } from "react";
interface InterfaceTipo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: InterfaceAddress;
  phone: string;
  website: string;
  company: InterfaceCompany;
}

interface InterfaceCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface InterfaceAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: InterfaceGeo;
}

interface InterfaceGeo {
  lat: string;
  lng: string;
}
const useAxiosCall = (OBJ: string) => {
  const [call, setCall] = useState<InterfaceTipo[]>([]);
  useEffect(() => {
    setInterval(() => {
      axios
        .get(OBJ)
        .then((res) => (res!! ? setCall(res.data) : null))
        .catch((err) => console.log(err));
    }, 60000);
  }, [OBJ]);

  return call;
};

export default useAxiosCall;
