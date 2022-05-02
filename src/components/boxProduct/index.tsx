import { BoxDetails } from "../../@types/propsTypes";
import { BtnOutline } from "../btn-outline";

import { Box } from "./styles";

export const BoxProduct = (props: BoxDetails) => {
  const { title, points, btnText } = props;

  return (
    <>
      <Box>
        <img src="" alt="IMAGEM MARCA" />
        <h3>{title}</h3>
        <div>
          <img src="" alt="icon lighting" />
          <h5>{points}</h5>
        </div>
        <BtnOutline text={btnText} />
      </Box>
    </>
  );
};
