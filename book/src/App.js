import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book?target=title&query=${searchQuery}`,
        {
          headers: {
            Authorization: "KakaoAK 24cac96368f71d20926e0b34b6c2e488",
          },
        }
      );
      setSearchResults(response.data.documents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div className="book-results">
        {searchResults.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          searchResults.map((book, index) => (
            <div className="book-result" key={index}>
              {book.thumbnail && <img src={book.thumbnail} alt={book.title} />}
              <p className="book-title">{book.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
