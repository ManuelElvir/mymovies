import React from 'react'

type NoMatchProps = {
}

const NoMatch : React.FC<NoMatchProps> = () => {

    return(
        <div>
            <h1>Page Not Found</h1>
        </div>
    )
}

NoMatch.displayName = 'PageNotFound'

export default NoMatch
