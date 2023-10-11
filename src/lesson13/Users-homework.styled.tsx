import styled from "styled-components";

export const TitleStyle = styled.div`
  margin-top: 169px;
  margin-left: 290px;
  color: var(--Natural-Color, #6f767e);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto auto 290px;
  color: black;
`;

export const HeaderStyle = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #6f767e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HeaderName = styled.div`
  position: absolute;
  padding-left: 92px;
`;

export const HeaderGender = styled.div`
  position: absolute;
  padding-left: 309px;
`;

export const HeaderHair = styled.div`
  position: absolute;
  padding-left: 488px;
`;

export const HeaderBirth = styled.div`
  position: absolute;
  padding-left: 652px;
`;

export const HeaderPhone = styled.div`
  position: absolute;
  padding-left: 859px;
`;

export const List = styled.ul`
  margin-top: 30px;
`;

export const ListItem = styled.li`
  width: 1120px;
  display: flex;
  align-items: center;
  padding-top: 17px;
  padding-bottom: 18px;
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1px solid #e4e4e4;
`;

export const ListName = styled.div`
  margin-left: 91px;
`;

export const ListGender = styled.div`
  position: absolute;
  margin-left: 318px;
`;

interface IHairColorIconProps {
  color: string;
}

export const HairColorIcon = styled.div<IHairColorIconProps>`
  position: absolute;
  margin-left: 492px;
  width: 21px;
  height: 21px;
  border-radius: 100px;
  background-color: ${(props) => {
    if (props.color === "Black") {
      return "#000000";
    } else if (props.color === "Blond") {
      return "#F8D96C";
    } else if (props.color === "Brown") {
      return "#522907";
    } else if (props.color === "Chestnut") {
      return "#815f59";
    } else return "#882b25";
  }};
`;

export const ListBirth = styled.div`
  position: absolute;
  margin-left: 652px;
`;

export const ListPhone = styled.div`
  position: absolute;
  margin-left: 866px;
`;
