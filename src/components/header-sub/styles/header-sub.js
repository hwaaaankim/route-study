import styled from "styled-components/macro";
import { Link as ReactRouterLink, withRouter } from "react-router-dom";
import SubData from "./menu-sub.json";
import Select from "react-select";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const HeaderText = styled(ReactRouterLink)`
  width: 100px;
  font-size: 24px;
  height: 100px;
  margin: 0 20px auto;
  text-decoration: none;
  color: ${(props) => (props.current === "true" ? "red" : "gray")};
`;

const SubHeaderSelect = styled(Select)`
  width: 100%;
`;

const SubHeader = withRouter(
  ({ location: { pathname }, history, match, onChange }) => {
    if (
      match.url.split("/")[1] === "photo" ||
      match.url.split("/")[1] === "person"
    ) {
      const datas = SubData.find(
        (data) => data.name === match.url.split("/")[1]
      );
      return (
        <Container>
          {datas.info.map((item, index) => (
            <HeaderText
              key={index}
              current={pathname === item.to ? "true" : "false"}
              to={item.to}
            >
              {item.years}
            </HeaderText>
          ))}
        </Container>
      );
    } else {
      const datas = SubData.find(
        (data) => data.name === match.url.split("/")[1]
      );
      const years = datas.years;
      const photographers = datas.photographer;
      const authors = datas.author;

      return (
        <Container>
          <SubHeaderSelect
            defaultValue={years[0]}
            onChange={onChange}
            options={years}
          ></SubHeaderSelect>
          <SubHeaderSelect
            defaultValue={photographers[0]}
            options={photographers}
            onChange={onChange}
          ></SubHeaderSelect>
          <SubHeaderSelect
            defaultValue={authors[0]}
            options={authors}
            onChange={onChange}
          ></SubHeaderSelect>
        </Container>
      );
    }
  }
);

export default SubHeader;
