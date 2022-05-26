import React from 'react';
import "./ListN.css";
function ClickPage() {
    const clickk= () => {
     alert('Shoot Done');
    }
    const coppy=()=>
    {
        alert('Text Copied Successfully');
    }
    const press=()=>
    {
        alert('KeyPressed');
    }
    const invalid=()=>
    {
        alert('Please Fill out the name field');
    }
  
  
    return (
        <div>
            <p id="event">EVENT MANAGEMENT</p>
        <div id="Main" >
        
            <p>1.Onclick</p>
      <button onClick={clickk}>Take the shot!</button>
      <br/>
      <p>2.OnCopy</p>
      <input type="text" onCopy={coppy} value="Try to copy this text"/>
      <p>3.OnKeyPress</p>
      <input type="text" onKeyPress={press} />
      <p>4.OnInvalid</p>
      <form action="/action.js" method="get">
  NAME: 
  <input type="text" oninvalid={invalid} name="fname" required/>
  <button>Submit</button>
</form>

      </div>
      <div>
          <p>------------------------------------------------------------------------------------------------------------------------------</p>
          </div>
      </div>
    );
  }

export default ClickPage;
