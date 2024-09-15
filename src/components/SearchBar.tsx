import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/SearchBar.module.css';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <FontAwesomeIcon style={{fontSize:'24px', color: '#dcdbdb'}} icon={faSearch}></FontAwesomeIcon>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="찾다 ..."
      />
    </div>
  );
};

export default SearchBar;