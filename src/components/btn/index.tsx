import { StyleBtn } from "./styles";

export const Btn = (props: any) => {
  return (
    <>
      <StyleBtn {...props}>{props.text}</StyleBtn>
    </>
  );
};
