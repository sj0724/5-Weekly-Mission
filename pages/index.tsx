import { useEffect, useState } from 'react';
import * as S from '../styles/index.styled';
import MainSectionCard from '../components/MainSectionCard/MainSectionCard';
import { sectionDescription } from '../util/sectionDescription';
import { Button } from '../components/Button/Button';
import Link from 'next/link';

function Main() {
  const [sectionList, setSectionList] = useState<typeof sectionDescription>([]);

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
          <Link href="/shared" style={{ textDecoration: 'none' }}>
            <Button size={'lg'}>링크 추가하기</Button>
          </Link>
          <S.Header__image>
            <S.HeaderImage src={'/image25.png'} alt="hedaerimage" />
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
