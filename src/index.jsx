import React from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from "react-loading"
import './index.css';

class Website extends React.Component {
  render() {
    return (
      <div>
         <span><h1 className="website-title">marmiha</h1></span>
      </div>
    );
  }
}

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
  