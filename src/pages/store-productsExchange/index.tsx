import { BoxProduct } from "../../components/boxProduct";
import { BoxProduct_disabled } from "../../components/boxProduct-disabled";
import { BtnDisabled } from "../../components/btn-disabled";
import { Header } from "../signUp/styles";
import { StyleStore, BoxField } from "./styles";

export const Store_productsExchange = () => {
  return (
    <>
      <Header />

      <StyleStore>
        <h4>Lojinha de produtos</h4>
        <div>
          <h5>Meus pontos</h5>
          <img src="" alt="lighting icon" />
        </div>

        <BoxField>
          <li>
            <BoxProduct_disabled
              title="5% OFF Ifood"
              points={600}
              btnText="Quero trocar"
            />
          </li>

          <li>
            <BoxProduct_disabled
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
