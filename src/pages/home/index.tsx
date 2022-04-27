import { HomeStyles } from "./styles";
import { HomeProps } from "../../@types/propsTypes";

export const Home = (props: HomeProps) => {
  const { description, number, title } = props;

  return (
    <HomeStyles>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{number}</p>
      </div>
    </HomeStyles>
  );
}
