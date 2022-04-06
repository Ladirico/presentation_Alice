import { useEffect, useState } from "react";
import { getAll, getStudenteFromMatricola } from "../../axios";
import { InterfaceRootObject } from "../../types/axiosTypes";

const Home = () => {
  const [data, setData] = useState<InterfaceRootObject>();
  useEffect(() => {
    getAll().then((resp) => setData(resp));
  }, []);
  return (
    <>
      {data ? (
        data.studente.map((el, index) => (
          <div
            onClick={() =>
              getStudenteFromMatricola(el.matricola).then((resp) =>
                console.log(resp)
              )
            }
          >
            {el.nome}
          </div>
        ))
      ) : (
        <>weweeeeeeee</>
      )}
    </>
  );
};
export default Home;