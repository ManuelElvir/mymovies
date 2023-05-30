import React from 'react'
import styles from './Logo.module.scss'
import { useThemeMode } from '../../context/ThemeMode'

type LogoProps = {
    large?: boolean,
}

const Logo : React.FC<LogoProps> = ({large= false}) => {
    const {themeMode} = useThemeMode()

    const getLogoSrc = () => {
        if(large){
            if(themeMode==='dark') return 'logo-dark.svg'
            else return 'logo-light.svg'
        }
        return 'icon.svg'
    }
    return(
        <div className={styles.logoContainer}>
            <img src={getLogoSrc()} alt='myMovies' />
        </div>
    )
}

export default React.memo(Logo)