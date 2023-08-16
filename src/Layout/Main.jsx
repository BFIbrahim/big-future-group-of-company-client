import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Shared/Navigation';
import MainNavigation from '../Shared/MainNavigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;