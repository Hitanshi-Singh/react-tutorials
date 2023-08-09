import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  // const handleColorClick = () => {
  //   let c = text.length;
  //   for (let i = 0; i < c; i++) {
  //     if (text.charAt(c) == "a") {
  //       let newWord =
  //         text.substring(0, c) +
  //         text.charAt(c).toUpperCase() +
  //         text.substring(c);
  //       setText(newWord);
  // }
  // }
  // };
  const [text, setText] = useState("");
  // text = "new text"; //wrong way to change the text
  // setText("the day we met");//Right way to do
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : " #101254",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(10 30 72)",
              // eslint-disable-next-line react/prop-types
              color: props.mode === "dark" ? "white" : "grey",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleColorClick}>
          A to Uppercase
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : " #101254",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length}</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textBox above to preview it here"}
        </p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
