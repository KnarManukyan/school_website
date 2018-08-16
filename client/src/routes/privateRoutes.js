import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {history} from '../history.js';
import { Icon } from 'react-icons-kit'
import {home} from 'react-icons-kit/fa/home'
import {user} from 'react-icons-kit/typicons/user';
import {group} from 'react-icons-kit/typicons/group';
import {graduationCap} from 'react-icons-kit/fa/graduationCap';
import {u1F4CB} from 'react-icons-kit/noto_emoji_regular/u1F4CB'
import {u1F4DA} from 'react-icons-kit/noto_emoji_regular/u1F4DA';
import {logOut} from 'react-icons-kit/feather/logOut'
import '../assets/css/icon.css'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Router history={history}>
    <Route render={({ location, history }) => (
         <React.Fragment>
             <header>
               <button className="log-out-button" onClick = {()=>{localStorage.removeItem('user');
               history.push('/')}}> Log out <Icon size = {13} icon={logOut}/></button>
             </header>
             <SideNav
                 onSelect={(selected) => {
                     const to = '/' + selected;
                     if (location.pathname !== to) {
                         history.push(to);
                     }
                 }} style={{backgroundColor:'#5968cf', position: "fixed"}}
             >
                 <SideNav.Toggle />
                 <SideNav.Nav selected={location.pathname.slice(1,location.pathname.length)}>
                     <NavItem eventKey="home">
                         <NavIcon>
                             <Icon className="icon" size={30} icon={home} />
                         </NavIcon>
                         <NavText>
                             Home
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="students">
                         <NavIcon>
                            <Icon className="icon" size={30} icon={graduationCap} />
                         </NavIcon>
                         <NavText>
                             Students
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="teachers">
                         <NavIcon>
                               <Icon className="icon" size={30} icon={group} />
                         </NavIcon>
                         <NavText>
                             Teachers
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="classes">
                         <NavIcon>
                              <Icon className="icon" size={30} icon={u1F4CB} />
                         </NavIcon>
                         <NavText>
                             Classes
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="courses">
                         <NavIcon>
                              <Icon className="icon" size={30} icon={u1F4DA} />
                         </NavIcon>
                         <NavText>
                             Courses
                         </NavText>
                     </NavItem>
                 </SideNav.Nav>
             </SideNav>
             <main>
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
        </main>
                  </React.Fragment>
                )}
                />
        </Router>
)
