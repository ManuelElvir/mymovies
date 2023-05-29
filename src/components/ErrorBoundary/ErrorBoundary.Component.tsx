import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary : React.FC<{}> = () => {
    let error = useRouteError();
    return isRouteErrorResponse(error) ? (
      <h1>
        {error.status} {error.statusText}
      </h1>
    ) : (
      <h1>{(error as any)?.message || error}</h1>
    );
}

export default ErrorBoundary