import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter to search"
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;








  
