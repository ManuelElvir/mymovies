import React from'react'
import { redirect } from "react-router-dom";
import styles from './TopBar.module.scss'
import Logo from '../Logo/Logo.Component';
import IconButton from '../IconButton';


type TopBarProps = {
    title : string
    withSearch?: boolean
    actionButton?: {
        icon: string
        route: string
    }
}

const TopBar: React.FC<TopBarProps> =  ({title, withSearch, actionButton}) => {

    const navigate =  (route:string) => (redirect(route))


    return(
        <div className={styles.topBar}>
            <div className={styles.leftPart}>
                <Logo />
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.rightPart}>
                {
                    withSearch && <IconButton icon='ion:search' fontSize={24} sharp='rounded' handleClick={() => navigate("/search")} />
                }
                {
                    actionButton && <IconButton icon={actionButton.icon} fontSize={24} sharp='rounded' handleClick={() => navigate(actionButton.route)} />
                }
            </div>
        </div>
    )
}

export default TopBar