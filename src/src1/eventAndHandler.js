import React from "react";

export class EventAndHandler extends React.Component {
  constructor(){
      super()
      this.handleButtonClickWithBind=this.handleButtonClickWithBind.bind(this);
  }

  handleButtonClick = (e) => {
    debugger;
   // alert("Hi Vivek " + text);
  };

  handleButtonClickWithBind(){
    alert("Hi Vivek via Bind" );
  }


  render() {
    return (
        <div>
      <button
        onClick={(e) => {
          this.handleButtonClick(e);
        }}
      >
        Click Me
      </button>

      <button
        onClick={this.handleButtonClickWithBind}
      >
        Click Me With Bind
      </button>

      </div>
      
    );
  }
}
