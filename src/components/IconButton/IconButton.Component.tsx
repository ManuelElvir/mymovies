import React from 'react'
import styles from './IconButton.module.scss'
import { Icon } from '@iconify/react'

type IconButtonProps = {
    sharp?: 'rounded'|'circle'|'default',
    fontSize: string|number,
    bgColor?: string,
    color?: string,
    icon: string,
    handleClick: () => void
}

const IconButton : React.FC<IconButtonProps> = ({icon, sharp= 'default', fontSize, handleClick}) => {
    return <button 
        onClick={handleClick}
        className={`${styles.iconButton} ${styles[sharp]}`}>
        <Icon icon={icon} fontSize={fontSize} />
    </button>
}

export default React.memo(IconButton)