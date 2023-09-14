import React from 'react'

interface ErrorBoundaryState {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}
interface ErrorBoundaryProps {
  children: JSX.Element;
}
class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error: error, errorInfo: errorInfo })
  }

  render() {
    if (this.state.error)
      return (<>
        <h2>{this.state.error.message}</h2>
        <pre> {this.state.errorInfo?.componentStack.toString()} </pre>
      </>)

    return this.props.children
  }
}

export default ErrorBoundary