import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
console.log("Uppercase was clicked ") ; 
let newText = text.toUpperCase() ; 
setText(newText)  ;
props.showAlert("Converted to upper cases","success") ; 
}
const Doubler=()=>{
  let newtext = text  ; 
  setText(newtext+" "+newtext) ; 
}
const handleDownClick=()=>{
let newtext = text.toLowerCase() ; 
setText(newtext) ; 
props.showAlert("Converted to lower case","success")  ;
}
const Clearing=()=>{
  let newtext = "";
  setText(newtext) ; 
}
const handleOnchange=(event)=>{
    console.log("On change")  ; 
    setText(event.target.value); 
}
const [text,setText] = useState("") ;
//text = "new text "  wrong way to change the state 
//setText("new text") ; 
  return (
    <>
    <div className='container' style={ {color:props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{backgroundColor:props.mode === 'dark'?'grey':'white'}} value={text} onChange={handleOnchange}></textarea>
  <label htmlFor="floatingTextarea">Comments</label>
</div><br/>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={Clearing}>Clear All</button>
<button className="btn btn-primary mx-2" onClick={Doubler}>Double the content</button>
    </div>
    <div className="container my-3" style={ {color:props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p>{text.split(" ").length} words , {text.length} charachter  </p>
      <p>{ 0.008* text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textarea above to preview it "}</p>
    </div>
    </>
  )
}
