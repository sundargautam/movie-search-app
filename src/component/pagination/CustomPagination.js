import "./CustomPagination.css";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   root:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
   }
  });
export const CustomPagination = ({ setPage, noOfPages = 10 }) => {
  const classes = useStyles();  
  const handlePagination = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className={classes.root}>
      <Pagination
        count={noOfPages}
        color="primary"
        onChange={(e) => handlePagination(e.target.textContent)}
      />
    </div>
  );
};
