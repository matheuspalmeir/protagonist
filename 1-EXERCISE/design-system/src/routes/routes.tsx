import {RouteI} from './interfaces';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from '../pages/index';
import Maintheme from '../components/themes/main';

const routes : Array<RouteI> = [
    {
        path: "/",
        component: <Home/>,
        exact: true,
        key: 'Home',
        theme: 'main',
        layout: ''
    },
];

const Routes = () => {

    const withTheme = (route : RouteI) => {
        switch (route.layout) {
            case 'main':
                return <Maintheme>{route.component}</Maintheme>;
            default:
                return route.component;
        }
    };

    return(
        <Router>
            <Switch>
               { routes.map((route : RouteI, i) => 

                    <Route
                        key={route.key}
                        exact={route.exact}
                        path={route.path}
                        component={() => withTheme(route)}
                    />
                )
                }
            </Switch>
        </Router>
    )
}

export default Routes;
