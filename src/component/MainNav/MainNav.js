import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { makeStyles } from "@mui/styles";
import { Whatshot } from "@mui/icons-material";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a !important",
    zIndex: 100,
  },
});
export const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    switch (value) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/movies");
        break;
      case 2:
        history.push("/series");
        break;
      default:
        history.push("/search");
        break;
    }
  }, [value]);
  return (
    <BottomNavigation
      className={classes.root}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Tv Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
};
