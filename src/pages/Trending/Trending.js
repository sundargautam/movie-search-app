import "./Trending.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Poster from "../../component/Poster/Poster";
import { CustomPagination } from "../../component/pagination/CustomPagination";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState();
  const fetchTrending = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
    settotalPages(data.total_pages)
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((data) => {
            return (
              <Poster
                key={data.id}
                id={data.id}
                poster={data.poster_path}
                title={data.title || data.name}
                date={data.first_air_date || data.release_date}
                media_type={data.media_type}
                vote_average={data.vote_average}
              />
            );
          })}
      </div>
      {totalPages>1 && (<CustomPagination setPage={setPage} noOfPages={totalPages}/>)}
    </div>
  );
};

export default Trending;
