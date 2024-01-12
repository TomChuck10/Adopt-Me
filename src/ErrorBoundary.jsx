import { Component } from "react";
//import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
      //dzięki tej formule nasz obsługiwacz błędów jest teraz uniwersalny i można go
      //wykorzystywać dla innych komponentów
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
