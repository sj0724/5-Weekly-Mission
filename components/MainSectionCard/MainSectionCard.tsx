import { useEffect, useState } from 'react';
import * as S from './MainSectionCard.styled';

interface SectionItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

function MainSectionCard({ item }: { item: SectionItem }) {
  const { title, description, image } = item;

  return (
    <S.SectionCard>
      <S.TextBox__title>{title}</S.TextBox__title>
      <S.Description>{description}</S.Description>
      <S.SectionImage src={image} alt="sectionImage" />
    </S.SectionCard>
  );
}

export default MainSectionCard;
