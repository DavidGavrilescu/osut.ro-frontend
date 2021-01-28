import React from 'react';

 const stylesD = {
    root: {
      height: 18,
      width: 18,
      cursor: 'pointer',
      border: 0,
      background: 'none',
      padding: 0,
    },
    dot: {
      backgroundColor: '#eee',
      height: 12,
      width: 12,
      borderRadius: 6,
      margin: "3px 5px",
    },
    active: {
      backgroundColor: '#D12122',
    },
  };
  
  class PaginationDot extends React.Component {
    handleClick = event => {
      this.props.onClick(event, this.props.index);
    };
  
    render() {
      const { active } = this.props;
  
      let styleDot;
  
      if (active) {
        styleDot = Object.assign({}, stylesD.dot, stylesD.active);
      } else {
        styleDot = stylesD.dot;
      }
  
      return (
        <button type="button" className="dot" style={stylesD.root} onClick={this.handleClick}>
          <div style={styleDot} />
        </button>
      );
    }
  }
  export default PaginationDot;