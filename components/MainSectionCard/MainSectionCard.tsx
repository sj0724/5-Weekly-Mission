import { useEffect, useState } from 'react';
import * as S from './MainSectionCard.styled';

interface SectionItem {
  title: string;
  description: string;
  id: number;
}

function MainSectionCard({ item }: { item: SectionItem }) {
  const { title, description, id } = item;
  const [sectionImage, setSectionImage] = useState('');

  useEffect(() => {
    switch (id) {
      case 1:
        setSectionImage('/img_1.png');
        break;
      case 2:
        setSectionImage('/img_2.png');
        break;
      case 3:
        setSectionImage('/img_3.png');
        break;
      case 4:
        setSectionImage('/img_4.png');
        break;
      default:
        break;
    }
  }, [id]);

  return (
    <S.SectionCard>
      <S.TextBox__title>{title}</S.TextBox__title>
      <S.Description>{description}</S.Description>
      <S.SectionImage src={sectionImage} alt="sectionImage" />
    </S.SectionCard>
  );
}

export default MainSectionCard;
