import { BoxDetails } from "../../@types/propsTypes";
import { BtnDisabled } from "../btn-disabled";
import { BtnOutline } from "../btn-outline";
import { Box } from "./styles";

export const BoxProduct_disabled = (props: BoxDetails) => {
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
        <BtnDisabled text={btnText} />
      </Box>
    </>
  );
};
