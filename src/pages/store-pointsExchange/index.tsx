import { BoxProduct } from "../../components/boxProduct";
import { Header } from "../signUp/styles";
import { StyleStore, BoxField } from "./styles";

export const Store_points = () => {
  return (
    <>
      <Header />

      <StyleStore>
        <h4>Lojinha de descontos</h4>
        <div>
          <h5>Meus pontos</h5>
          <img src="" alt="lighting icon" />
        </div>

        <BoxField>
          <li>
            <BoxProduct
              title="5% OFF Ifood"
              points={600}
              btnText="Quero trocar"
            />
          </li>

          <li>
            <BoxProduct
              title="5% OFF Ifood"
              points={600}
              btnText="Quero trocar"
            />
          </li>

          <li>
            <BoxProduct
              title="5% OFF Ifood"
              points={600}
              btnText="Quero trocar"
            />
          </li>

          <li>
            <BoxProduct
              title="5% OFF Ifood"
              points={600}
              btnText="Quero trocar"
            />
          </li>
        </BoxField>
      </StyleStore>
    </>
  );
};
