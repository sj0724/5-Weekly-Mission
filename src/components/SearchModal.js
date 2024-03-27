import searchIcon from "../assets/Search.svg";
import "./SearchModal.css";

function SearchModal() {
  return (
    <div className="searchModal">
      <form className="searchForm">
        <input id="folderSearch" placeholder="링크를 검색해 보세요!"></input>
        <img src={searchIcon} className="searchIcon" alt="serachIcon" />
      </form>
    </div>
  );
}

export default SearchModal;
