import React from 'react'
import withMainLayout from '../../layouts/withMainLayout';

type HomeProps = {
}

const Home : React.FC<HomeProps> = () => {

    return(
        <div>
            <h1>Home</h1>
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
