import React from 'react';

class ErrorBoundary extends React.Component<
  {},
  { error: string; errorInfo: string }
> {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return <h2>Something went wrong.</h2>;
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
