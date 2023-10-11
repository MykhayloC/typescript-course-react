import usersData from "../users-data";
import { TUser } from "../users-data";
import {
  TitleStyle,
  Container,
  HeaderStyle,
  HeaderName,
  HeaderGender,
  HeaderHair,
  HeaderBirth,
  HeaderPhone,
  List,
  ListItem,
  ListName,
  ListGender,
  HairColorIcon,
  ListBirth,
  ListPhone,
} from "./Users-homework.styled";

interface IUserProps {
  data: TUser;
}
// (+)TODO: Update User component to display user's name, Gender, Hair color, Birth dat and phone number
// TODO: Style this component using styled-components
// (+)TODO: Use Users-homework.jpg or Users-homework.fig as a reference
// (+)TODO: Add a component to display user's hair color as a colored circle HairColorIcon
// (+)TODO: Add a color prop to HairColorIcon, so it can be used to display different colors
// (+)TODO: Add your styled-components to src/lesson13/Users-homework.styled.tsx

const Title = () => {
  return <TitleStyle>Users</TitleStyle>;
};

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderName>Name</HeaderName>
      <HeaderGender>Gender</HeaderGender>
      <HeaderHair>Hair Color</HeaderHair>
      <HeaderBirth>Birth date</HeaderBirth>
      <HeaderPhone>Phone number</HeaderPhone>
    </HeaderStyle>
  );
};

const User = (props: IUserProps) => {
  const { data } = props;

  return (
    <ListItem>
      <ListName>
        {data.firstName} {data.lastName}
      </ListName>
      <ListGender> {data.gender}</ListGender>
      <HairColorIcon color={data.hair.color}></HairColorIcon>
      <ListBirth> {data.birthDate}</ListBirth>
      <ListPhone> {data.phone}</ListPhone>
    </ListItem>
  );
};

export function Users() {
  // (+)TOOD: update this component to display a header and a list of users
  // User Name | Gender | Hair Color | Birth date | Phone number
  // (+)TODO: Style this component using styled-components
  // (+)TODO: Use Users-homework.jpg or Users-homework.fig as a reference
  // (+)TODO: Add your styled-components to src/lesson13/Users-homework.styled.tsx

  return (
    <>
      <Title />
      <Container>
        <Header />
        <List>
          {usersData.map((user) => (
            <User data={user} key={user.id} />
          ))}
        </List>
      </Container>
    </>
  );
}

export default Users;
