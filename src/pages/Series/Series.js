import axios from "axios";
import React, { useState, useEffect } from "react";
import Poster from "../../component/Poster/Poster";
import { CustomPagination } from "../../component/pagination/CustomPagination";
import Genres from "../../component/Genres/Genres";
import useGenre from "../../hooks/useGenre";
const Series = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, settotalPages] = useState();
    const genreforURL = useGenre(selectedGenres);
    const fetchTrending = async () => {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      settotalPages(data.total_pages);
    };
    useEffect(() => {
      fetchTrending();
    }, [page, genreforURL]);
    return (
      <div>
        <span className="pageTitle">TV Series</span>
        <Genres
          type="tv"
          selectedGenres={selectedGenres}
          genres={genres}
          setGenres={setGenres}
          setSelectedGenres={setSelectedGenres}
          setPage={setPage}
        />
        <div className="movies">
          {content &&
            content.map((data) => {
              return (
                <Poster
                  key={data.id}
                  id={data.id}
                  poster={data.poster_path}
                  title={data.title || data.name}
                  date={data.first_air_date || data.release_date}
                  media_type="tv"
                  vote_average={data.vote_average}
                />
              );
            })}
        </div>
        {totalPages > 1 && (
          <CustomPagination setPage={setPage} noOfPages={totalPages} />
        )}
      </div>
    );
}

export default Series;
