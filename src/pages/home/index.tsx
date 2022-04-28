import { HomeStyles } from "./styles";
import { HomeProps } from "../../@types/propsTypes";
import {Link} from'react-router-dom'

export const Home = (props: HomeProps) => {
  const { description, number, title } = props;

  return (
    <HomeStyles>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{number}</p>
        <Link to={"/Company_profile"}>Company Profile</Link>

      </div>
    </HomeStyles>
  );
}
