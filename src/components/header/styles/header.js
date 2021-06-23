import styled from "styled-components";
import { Link as ReactRouterLink, withRouter } from "react-router-dom";
import menuData from "./menu";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled(ReactRouterLink)`
  font-size: 24px;
  height: 100px;
  margin: 0 20px auto;
  text-decoration: none;
  color: ${(props) => (props.current === "true" ? "red" : "gray")};
`;

const LogoText = styled(ReactRouterLink)`
  width: 100px;
  font-size: 24px;
  height: 100px;
  margin: 0 20px auto;
  text-decoration: none;
  color: black;
`;

const ShowRouter = withRouter(({ location: { pathname }, history, match }) => {
  return (
    <Container>
      {menuData.map((item, index) => (
        <HeaderText
          key={index}
          current={pathname.includes(item.tag) ? "true" : "false"}
          to={item.to}
        >
          {item.name}
        </HeaderText>
      ))}
      <LogoText to="/">홈</LogoText>
    </Container>
  );
});

export default ShowRouter;
