import { useEffect, useState } from "react";
import MainSectionCard from "../../components/MainSectionCard/MainSectionCard";
import { sectionDescription } from "../../api/sectionDescription";
import * as S from "./Main.styled";

import headerImage from "../../assets/image25.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Main() {
  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    setSectionList(sectionDescription);
  }, []);

  return (
    <S.Main>
      <S.Main__Header>
        <S.Header__contents>
          <S.Slogan>
            <S.Slogan_gradient>세상의 모든 정보</S.Slogan_gradient>를<br />
            쉽게 저장하고 관리해 보세요
          </S.Slogan>
          <Link to="/shared">
            <Button size="large">링크 추가하기</Button>
          </Link>
          <S.Header__image>
            <S.HeaderImage src={headerImage} alt="hedaerimage" />
          </S.Header__image>
        </S.Header__contents>
      </S.Main__Header>
      <S.Main__contents>
        {sectionList.map((item) => (
          <MainSectionCard item={item} key={item.id} />
        ))}
      </S.Main__contents>
    </S.Main>
  );
}

export default Main;
