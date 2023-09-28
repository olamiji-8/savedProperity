import searchIcon from "../../../assets/images/search-icon.png";
const SearchForm = ({ placeholder }) => {
  return (
    <form className="Service-SearchForm">
      <div className="Text-Area">
        <img className="Pointer" src={searchIcon} role="button" alt="" />
        <input type="text" placeholder={placeholder} />
      </div>
      <div className="RL">
        <div className="Rating-Container">
          <select className="Rating" name="rating" id="">
            <option value="">Rating</option>
          </select>
        </div>
        <div className="Location-Container">
          <select className="Location" name="location" id="">
            <option value="">Location</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
