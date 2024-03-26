import { useEffect, useState } from "react";
import "./Card.css";

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});

  const style = {
    backgroundImage: `url(${item.imageSource})`,
  };

  const calculateDate = (date) => {
    const day = date / (1000 * 60 * 60 * 24);
    let result;
    if (day >= 365) {
      result = day / 365;
      return { data: `${Math.floor(result)}`, value: "year" };
    }
    if (day < 365) {
      result = day / 30;
      return { data: `${Math.floor(result)}`, value: "month" };
    }
  };

  useEffect(() => {
    const nowDate = new Date();
    const createdate = new Date(item.createdAt);
    const date = nowDate - createdate;
    setCreatedAt(calculateDate(date));
  }, []);

  return (
    <div className="itemCard">
      {item.imageSource ? (
        <div className="itemImg" style={style}></div>
      ) : (
        <div className="emptyImg"></div>
      )}
      <div className="itemInfo">
        <p>
          {createdAt.data}
          {createdAt.value} ago
        </p>
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default Card;
