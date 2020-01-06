import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }
    render() {
        if (this.state.error) {
            return <h1>Ooops. Something broke</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary