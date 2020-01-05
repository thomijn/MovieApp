import React from "react";
import { Switch, Route } from "react-router-dom";

import MovieDetailContainer from "../components/MovieDetail/MovieDetailContainer"
import MovieOverviewContainer from "../components/MovieOverview/MovieOverviewContainer"

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MovieDetailContainer} />
                <Route exact path="/movie/:id" component={MovieDetailContainer} />
                <Route exact path="/overview" component={MovieOverviewContainer} />
                <Route component={MovieDetailContainer} />
            </Switch>
        </div>
    )
}

export default Main