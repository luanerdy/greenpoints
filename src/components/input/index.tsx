import { Styleinput } from "./styles";

export const Input = (props: any) => {
  return (
    <>
      <Styleinput placeholder={props.text} type={props.type} />
    </>
  );
};
