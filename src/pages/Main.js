import { useEffect, useState } from "react";
import MainSectionCard from "../components/MainSectionCard";
import { sectionDescription } from "../api/sectionDescription";

function Main() {
  const [sectionList, setSectionList] = useState([]);

  useEffect(() => {
    setSectionList(sectionDescription);
  }, []);

  return (
    <>
      <main>
        {sectionList.map((item) => (
          <MainSectionCard item={item} key={item.id} />
        ))}
      </main>
    </>
  );
}

export default Main;
