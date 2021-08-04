import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dashboard from '../Screen/DashboardScreen';
import Home from '../Screen/HomeScreen';
import { Link, Route, Router } from 'react-router-dom';

const Sidebar = (props) => {
  return(
    <div>
<SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

        <NavItem eventKey="home">
        
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
               
            </NavIcon>
           
            <NavText>
           
                Home
            </NavText>
        
        </NavItem>
        <NavItem eventKey="user">
            <NavIcon>
               <Link to="/"> <i className="fa fa-user" style={{ fontSize: '1.75em' }} /> </Link> 
            </NavIcon>
            <NavText>
                Admin
            </NavText>
        </NavItem>
        <NavItem eventKey="commande">
            <NavIcon>
                <i className="fa fa-bell" style={{ fontSize: '1.75em' }} /> 
            </NavIcon>
            <NavText>
                Commande
            </NavText>
        </NavItem>
        <NavItem eventKey="plat">
            <NavIcon>
            <Link to="/AjoutPlat">  <i className="fa fa-utensils" style={{ fontSize: '1.75em' }} /> </Link>
            </NavIcon>
            <NavText>

               Ajout plat 
              
            </NavText>
            
            
        </NavItem>
    </SideNav.Nav>
</SideNav>

    </div>
   )

 }

export default Sidebar