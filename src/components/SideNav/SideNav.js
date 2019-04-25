import React, {Component} from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import MoviePage from '../MoviePage/MoviePage';


class SideNavb extends Component{
    render() {
        return(
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="home">
                                <NavItem eventKey="home">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Movies
                        </NavText>
                                </NavItem>
                                <NavItem eventKey="about">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        About
                        </NavText>
                                </NavItem>
                                <NavItem eventKey="user">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        User
                        </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            {/* <Route path="/" exact component={props => <MoviePage />} /> */}
                            <Route path="/home" component={props => <MoviePage />} />
                            <Route path="/about" component={props => <AboutPage />} />
                            <Route path="/user" component={props => <UserPage />} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(SideNavb)