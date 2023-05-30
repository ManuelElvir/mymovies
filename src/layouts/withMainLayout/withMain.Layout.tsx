import React from 'react';

import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import TopBar from '../../components/TopBar'

import routes from './routes.json'


const withMainLayout = (
    PageComponent:React.FC, 
    title: string, 
    actionButton: {
        label : string
        icon: string
        route: string
        key: string
    }) => {
    return () => (
      <div>
        <Sidebar routes={actionButton ? [...routes, actionButton]: routes} />
        <div>
            <TopBar title={title} withSearch={true} actionButton={actionButton} />
            <PageComponent />
            <Navbar routes={routes} />
        </div>
      </div>
    );
};

export default withMainLayout