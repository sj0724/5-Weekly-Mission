import React from 'react';
import instagram from '../../assets/ant-design_instagram-filled.png';
import youtube from '../../assets/akar-icons_youtube-fill.png';
import twitter from '../../assets/akar-icons_twitter-fill.png';
import facebook from '../../assets/akar-icons_facebook-fill.png';
import * as S from './Footer.styled';

export function Icon({ image, alt }: { image: string; alt: string }) {
  const snsUrl = `https://www.${alt}.com/`;

  return (
    <a href={snsUrl} target="_blank" rel="noreferrer">
      <img src={image} alt={`${alt} icon`} />
    </a>
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
          <Icon image={facebook} alt={'facebook'} />
          <Icon image={twitter} alt={'twitter'} />
          <Icon image={youtube} alt={'youtube'} />
          <Icon image={instagram} alt={'instagram'} />
        </S.Footer__menu__icon>
      </S.Footer__menu>
    </S.Footer>
  );
}

export default Footer;
