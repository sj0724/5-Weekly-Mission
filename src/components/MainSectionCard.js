import styled from "styled-components";
import Image1 from "../assets/img_1.png";
import Image2 from "../assets/img_2.png";
import Image3 from "../assets/img_3.png";
import Image4 from "../assets/img_4.png";

function MainSectionCard({ item }) {
  const { title, description } = item;

  return (
    <>
      <section>
        <h2 className="textBox__title">{title}</h2>
        <p className="description">{description}</p>
      </section>
    </>
  );
}

export default MainSectionCard;
