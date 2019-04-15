import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import matchStore from "./js/stores/matchStore";
import App from "./js/components/App.jsx";

render(
    <Provider store={matchStore}>
        <App/>
    </Provider>,
    document.getElementById("root")
);