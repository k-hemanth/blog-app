import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: "92vh",
    margin: "0 auto",
    float: "none",
    backgroundColor: "#f5f5f5",
  },
  content: {
    marginTop: 75,
    marginLeft: 10,
    minHeight: "62vh",
  },
}));

export default useStyles;
