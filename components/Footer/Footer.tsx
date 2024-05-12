import React from 'react';
import * as S from './Footer.styled';
import Image from 'next/image';
import Link from 'next/link';

export function Icon({ image, alt }: { image: string; alt: string }) {
  const snsUrl = `https://www.${alt}.com/`;

  return (
    <Link href={snsUrl} target="_blank" rel="noreferrer">
      <Image src={image} alt={`${alt} icon`} width={20} height={20} />
    </Link>
  );
}

function Footer() {
  return (
    <S.Footer>
      <S.Footer__menu>
        <S.FooterDescrption>©codeit - 2023</S.FooterDescrption>
        <S.Footer__menu__modal>
          <p>Privacy Polic</p>
          <p>FAQ</p>
        </S.Footer__menu__modal>
        <S.Footer__menu__icon>
          <Icon image="/akar-icons_facebook-fill.png" alt={'facebook'} />
          <Icon image="/akar-icons_twitter-fill.png" alt={'twitter'} />
          <Icon image="/akar-icons_youtube-fill.png" alt={'youtube'} />
          <Icon image="/ant-design_instagram-filled.png" alt={'instagram'} />
        </S.Footer__menu__icon>
      </S.Footer__menu>
    </S.Footer>
  );
}

export default Footer;
