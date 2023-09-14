import React, { useId, useState } from 'react'
import withMainLayout from '../../layouts/withMainLayout';
import { useLocation } from 'react-router-dom';

type HomeProps = {
}

const Home : React.FC<HomeProps> = () => {
    const location = useLocation()
    const [counter, setCounter] = useState(0)

    const id1 = useId()
    const id2 = useId()
    const id3 = useId()

    console.log('id1', id1)
    console.log('id2', id2)
    console.log('id3', id3)

    console.log(location.pathname)
    console.log(process.env.NODE_ENV);
    console.log(process.env.APP_NAME);
    
    return(
        <div>
            <h1>Home</h1>
            <button onClick={() => setCounter(prev => prev+1)}>{counter}</button>
        </div>
    )
}

Home.displayName = 'Home'

const actionButton = {
    key: "library",
    label: "My Library",
    route: "/my-library",
    icon: "solar:library-line-duotone"
}

export default withMainLayout(Home, Home.displayName||'Home', actionButton)
