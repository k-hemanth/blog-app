import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import Header from "./layout/header";
import useStyles from "./styles";
import Routes from "./components/app/routes";

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
   
        <div className={classes.content}>
          <Routes />
        </div>     </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
