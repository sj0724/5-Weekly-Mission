import { useEffect, useState } from "react";
import MainSectionCard from "../components/MainSectionCard";
import { sectionDescription } from "../api/sectionDescription";
import "./Main.css";
import headerImage from "../assets/image 25.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Main() {
  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    setSectionList(sectionDescription);
  }, []);

  return (
    <div className="body">
      <header>
        <div className="header__contents">
          <h1 className="slogan">
            <span className="slogan_gradient">세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <Link to="/folder">
            <Button size={"long"}>링크 추가하기</Button>
          </Link>
          <div className="header__image">
            <img src={headerImage} alt="hedaerimage" />
          </div>
        </div>
      </header>
      <main>
        {sectionList.map((item) => (
          <MainSectionCard item={item} key={item.id} />
        ))}
      </main>
    </div>
  );
}

export default Main;
