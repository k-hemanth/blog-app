import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { fetchComments } from "../../redux/actions/comments";
import useStyles from "./styles";

const Comments = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { data, isFetching, pageTitle } = useSelector(
    (state) => state?.comments
  );

  useEffect(() => {
    const id = match.params.id;
    dispatch(fetchComments(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageTitle]);

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Comments</h1>
      <Grid container spacing={3} xs={12}>
        <Grid item xs={12} md={8} lg={8}>
          {data.map((comment) => {
            return (
              <React.Fragment>
                <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <h4 style={{ margin: 0 }}>{comment.name}</h4>
                      <p style={{ color: "gray" }}>{comment.email}</p>
                      <p>{comment.body}</p>
                    </Grid>
                  </Grid>
                </Paper>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comments;
