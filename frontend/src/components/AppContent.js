import * as React from "react";

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentToShow: "welcome",
    };
  }
  render() {
    return (
      <>
        <h1>Content</h1>
      </>
    );
  }
}
