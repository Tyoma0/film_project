import React, { useState, useEffect } from 'react';
import {debounce} from 'lodash';
import styles from './SearchBar.module.css'

type SearchBarProps ={
    onSearch: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const debouncedSearch = debounce((searchQuery: string) => {
        if (searchQuery.trim()) {
            onSearch(searchQuery);
        }
    }, 500);

    useEffect(() => {
        debouncedSearch(query);
        return () => debouncedSearch.cancel();
    }, [query, debouncedSearch]);

    return (
        <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
        />
    );
};

export default SearchBar;
