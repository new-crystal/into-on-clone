import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectBox from "./components/ProjectBox";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const Projects = () => {
  const animatedItem = useScrollFadeIn();

  const navigate = useNavigate();
  const ulRef = useRef();
  const categoryList = [
    "all",
    "space",
    "graphic",
    "planning",
    "boothtainer",
    "webinar",
    "others",
  ];
  const indexList = [0, 1, 2, 3, 4, 5, 6];

  const getCategory = async () => {
    const index = categoryList.findIndex(
      (category) => category === window.location.pathname.split("/")[2]
    );
    const notIndex = indexList.filter((i) => i !== index);
    const refChild = ulRef?.current.children[index];
    const oneRefChild = ulRef?.current.children[notIndex[0]];
    const twoRefChild = ulRef?.current.children[notIndex[1]];
    const threeRefChild = ulRef?.current.children[notIndex[2]];
    const fourRefChild = ulRef?.current.children[notIndex[3]];
    const fiveRefChild = ulRef?.current.children[notIndex[4]];
    const sixRefChild = ulRef?.current.children[notIndex[5]];

    refChild.style = "color:#e71e38";
    oneRefChild.style = "color:#e0dede";
    twoRefChild.style = "color:#e0dede";
    threeRefChild.style = "color:#e0dede";
    fourRefChild.style = "color:#e0dede";
    fiveRefChild.style = "color:#e0dede";
    sixRefChild.style = "color:#e0dede";
  };

  useEffect(() => {
    getCategory();
  }, [window.location.pathname]);

  return (
    <Container>
      <ul ref={ulRef} id="list">
        <li onClick={() => navigate("/projects/all")} id={0}>
          ALL
        </li>
        <li onClick={() => navigate("/projects/space")} id={1}>
          SPACE
        </li>
        <li onClick={() => navigate("/projects/graphic")} id={2}>
          GRAPHIC
        </li>
        <li onClick={() => navigate("/projects/planning")} id={3}>
          PLANNING
        </li>
        <li onClick={() => navigate("/projects/boothtainer")} id={4}>
          BOOTHTAINER
        </li>
        <li onClick={() => navigate("/projects/webinar")} id={5}>
          WEBINAR
        </li>
        <li onClick={() => navigate("/projects/others")} id={6}>
          OTHERS
        </li>
      </ul>
      <BoxContainer {...animatedItem}>
        <ProjectBox />
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 7%;
  font-size: 1.7rem;
  margin: 7% auto;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    list-style: none;
    margin-bottom: 55px;
    padding: 0;
    line-height: 34px;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
  }

  li {
    margin: 15px;
    list-style: none;
    color: #e0dede;
    cursor: pointer;

    &:hover {
      color: #e71e38;
      text-decoration: underline;
    }
  }
`;

const BoxContainer = styled.div`
  display: flex;
`;
export default Projects;
