import { useEffect, useState } from "react";
import "./Card.css";

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  const calculateDate = (date) => {
    if (date < 60 * 2) {
      return { time: date, result: "minute" };
    }
    if (date <= 60 * 59) {
      const minute = Math.floor(date / (60 * 59));
      return { time: minute, result: "minutes" };
    }
    if (date < 60 * 60 * 24) {
      const day = Math.floor(date / (60 * 60 * 24));
      return { time: day, result: "hours" };
    }
    if (date < 60 * 60 * 24 * 30) {
      const day = Math.floor(date / (60 * 60 * 24));
      return { time: day, result: "days" };
    }
    if (date < 60 * 60 * 24 * 30 * 12) {
      const month = Math.floor(date / (60 * 60 * 24 * 30));
      return { time: month, result: "months" };
    }
    if (date >= 60 * 60 * 24 * 30 * 12) {
      const year = Math.floor(date / (60 * 60 * 24 * 30 * 12));
      return { time: year, result: "years" };
    }
  };

  const newPage = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const nowDate = new Date();
    const createdate = new Date(item.createdAt);
    const date = (nowDate - createdate) / 1000;
    setCreatedAt(calculateDate(date));
  }, [item]);

  return (
    <div className="itemCard" onClick={() => newPage(item.url)}>
      {item.imageSource ? (
        <img className="itemImg" src={item.imageSource} alt="itemImage" />
      ) : (
        <div className="emptyImg">이미지가 없습니다</div>
      )}
      <div className="itemInfo">
        <p className="itemDate">{createdText}</p>
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default Card;
