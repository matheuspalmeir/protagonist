import {RouteProps} from 'react-router-dom';

export interface RouteI {
    path: string;
    component: any;
    exact?: boolean;
    routes?: Array<RouteI>;
    theme?: string;
    key: string;
    layout?: string;
}

export interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isSignedIn?: boolean;
}