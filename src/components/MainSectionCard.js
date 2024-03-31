import Image1 from "../assets/img_1.png";
import Image2 from "../assets/img_2.png";
import Image3 from "../assets/img_3.png";
import Image4 from "../assets/img_4.png";
import { useEffect, useState } from "react";

function MainSectionCard({ item }) {
  const { title, description } = item;
  const [sectionImage, setSectionImage] = useState("");

  useEffect(() => {
    switch (item.id) {
      case 1:
        setSectionImage(Image1);
        break;
      case 2:
        setSectionImage(Image2);
        break;
      case 3:
        setSectionImage(Image3);
        break;
      case 4:
        setSectionImage(Image4);
        break;
      default:
        break;
    }
  }, [item.id]);

  return (
    <>
      <section>
        <h2 className="textBox__title">{title}</h2>
        <p className="description">{description}</p>
        <img src={sectionImage} alt="sectionImage" />
      </section>
    </>
  );
}

export default MainSectionCard;
