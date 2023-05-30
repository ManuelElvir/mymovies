import React from 'react'
import withMainLayout from '../../layouts/withMainLayout'

type ListProps = {
}

const List : React.FC<ListProps> = () => {

    return(
        <div>

        </div>
    )
}

List.displayName = 'Actors'

const actionButton = {
    key: "library",
    label: "My Library",
    route: "/my-library",
    icon: "solar:library-line-duotone"
}

export default withMainLayout(List, List.displayName||'Actors', actionButton)