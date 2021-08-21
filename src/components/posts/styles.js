import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(2),
    // paddingLeft: 10,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  card: {
    // marginTop: 18,
    // minHeight: "230px",
  },
}));

export default useStyles;
