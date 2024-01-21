import React, {useState} from 'react'
import PropTypes from 'prop-types';
export default function Textform(props) {
    const [text, setText] = useState("");
    const upcase = () =>{
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case", "success");
    }
    const lowcase = () =>{
      setText(text.toLowerCase());
      props.showAlert("Converted to lower case", "success");
    }
    const clear = () =>{
      setText("");
      props.showAlert("Cleared text", "success");
    }

    const cap = () =>{
      let newtext = text
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

      setText(newtext);
      props.showAlert("Capitalized first letter of every word", "success");
    }

    const copy = () =>{
      var text = document.getElementById("box")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied text!", "success");
    }

    const changetext = (event) => {
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style = {{color: props.mode==='light'?'#000':'white'}}>
        <div className="mb-3">
            <label htmlFor="box" className="form-label">{props.heading}</label>
            <textarea className="form-control" style = {{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'#000':'white'}} id="box" value={text} placeholder = "Enter text here" onChange={changetext} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upcase}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowcase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={cap}>Capitalize first letter of word</button>
        <button className="btn btn-primary mx-2" onClick={copy}>Copy text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='light'?'#000':'white'}}>
      <h1>Text Summary</h1>
      <p>{text.trim().split(/\s+/).length} words. {text.length} Chars</p>
      <p>{0.004 * text.trim().split(/\s+/).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

Textform.propTypes = {
    heading: PropTypes.string
  }
  
Textform.defaultProps = {
    heading: "Enter Text"
  }