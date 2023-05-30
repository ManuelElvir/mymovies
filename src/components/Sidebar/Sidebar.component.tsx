import React from'react'
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import Logo from '../Logo/Logo.Component';


type SidebarItem = {
    key: string|number
    label : string
    route: string
    icon: string
}

type SidebarProps = {
    routes : Array<SidebarItem>
}

const SidebarElement = ({label, route, icon, isActive}:SidebarItem & {isActive: boolean}) => {
    return (
        <div className={`${isActive?styles.active:''} ${styles.navigationItem}`}>
            <Icon className={styles.icon} icon={icon} />
            <span className={styles.label}>{label}</span>
        </div>
    )
}

const Sidebar: React.FC<SidebarProps> =  ({routes}) => {
    const {pathname} = useLocation()
    return(
        <div className={styles.navigation}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.navigationContent}>
                {routes.map((item:SidebarItem, index:number) => <SidebarElement isActive={pathname===item.route} {...item} />)}
            </div>
        </div>
    )
}

export default Sidebar