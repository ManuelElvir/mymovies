import React from'react'
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom'
import styles from './TabBar.module.scss'
import Logo from '../Logo/Logo.Component';


type TabBarItem = {
    key: string|number
    label : string
    route: string
    icon: string
}

type TabBarProps = {
    data : Array<TabBarItem>
    activeTab: number
    changeActiveTab: () => void
}

const TabBarElement = ({label, route, icon, isActive}:TabBarItem & {isActive: boolean}) => {
    return (
        <div className={`${isActive?styles.active:''} ${styles.navigationItem}`}>
            <Icon className={styles.icon} icon={icon} />
            <span className={styles.label}>{label}</span>
        </div>
    )
}

const TabBar: React.FC<TabBarProps> =  ({data}) => {
    const {pathname} = useLocation()
    return(
        <div className={styles.navigation}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.navigationContent}>
                {data.map((item:TabBarItem, index:number) => <TabBarElement isActive={pathname===item.route} {...item} />)}
            </div>
        </div>
    )
}

export default TabBar