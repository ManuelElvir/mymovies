import React from 'react'
import withMainLayout from '../../layouts/withMainLayout'

type ShowProps = {
}

const Show : React.FC<ShowProps> = () => {

    return(
        <div>

        </div>
    )
}

Show.displayName = 'Actor'

const actionButton = {
    key: "library",
    label: "My Library",
    route: "/my-library",
    icon: "solar:library-line-duotone"
}

export default withMainLayout(Show, Show.displayName||'Actor', actionButton)