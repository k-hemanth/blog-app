import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { fetchBlogs } from "../../redux/actions/posts";
import { SET_PAGE_TITLE } from "../../redux/actions/comments";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [postData, setPostData] = useState([]);
  const [searchPost, setSearchPost] = useState("");

  const { data, isFetching } = useSelector((state) => state?.posts);

  useEffect(() => {
    dispatch(fetchBlogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPostData(data);
  }, [data]);

  const handelChange = (e) => {
    const { value } = e.target;
    setSearchPost(value);
    const filteredRows = data.filter((post) => {
      return post.title.toLowerCase().includes(value.toLowerCase());
    });
    setPostData(filteredRows);
  };

  const handleClick = (e, post) => {
    dispatch({ type: SET_PAGE_TITLE, payload: post.title });
    history.push(`/comments/${post.id}`);
  };

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={2} xs={12} alignItems="stretch">
        <Grid item xs={12} md={4} lg={3}>
          <TextField
            label="Search Post"
            name="searchPost"
            value={searchPost || ""}
            fullWidth
            variant="outlined"
            onChange={handelChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} xs={12} alignItems="stretch">
        {postData.map((post) => {
          return (
            <Grid item xs={12} md={4} lg={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(e) => handleClick(e, post)}
                  >
                    Comments
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
export default Posts;
