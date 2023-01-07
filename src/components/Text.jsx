import { useState } from "react";
export  function Text(props){
    const handleUpClick = () =>{
        console.log("textarea");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        console.log("textarea");
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleCLClick = () =>{
        console.log("textarea");
        let newText = '' ;
        setText(newText);
    }
    const handleCopy = () =>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

       
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }




    const [text , setText] = useState("")
  return (
    <div>
        
        <div className="container">

            <h3>{props.heading}</h3>

            <div class="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button  onClick={handleUpClick} className="btn btn-primary mx-2">Uppercase</button>
            <button  onClick={handleLoClick} className="btn btn-primary mx-2">Lowercase</button>
            <button  onClick={handleCLClick} className="btn btn-primary mx-2">Clear</button>
            <button  onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
            <button  onClick={handleExtraSpace} className="btn btn-primary mx-2">Remove Extra Space</button>
        <p>{text.split(' ').length} words and {text.length} latters</p>
        </div>


    </div>
  )

}