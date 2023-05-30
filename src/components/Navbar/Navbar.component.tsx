import React from'react'
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo.Component';


type NavbarItem = {
    key: string|number
    label : string
    route: string
    icon: string
}

type NavbarProps = {
    routes : Array<NavbarItem>
}

const NavbarElement = ({label, icon, isActive}:NavbarItem & {isActive: boolean}) => {
    return (
        <div className={`${isActive?styles.active:''} ${styles.navigationItem}`}>
            <Icon className={styles.icon} icon={icon} />
            <span className={styles.label}>{label}</span>
        </div>
    )
}

const Navbar: React.FC<NavbarProps> =  ({routes}) => {
    const {pathname} = useLocation()
    return(
        <div className={styles.navigation}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.navigationContent}>
                {routes.map((item:NavbarItem, index:number) => <NavbarElement isActive={pathname===item.route} {...item} />)}
            </div>
        </div>
    )
}

export default Navbar