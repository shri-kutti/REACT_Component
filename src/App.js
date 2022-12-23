import "./App.css";
import { useState } from "react";

function App() {
  const [inputarr, setinputarr] = useState([]);

  const [input, setinput] = useState({ name: "", comment: "" });

  function changehandle(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  let { name, comment } = input;

  function changhandle() {
    setinputarr([...inputarr, { name, comment }]);
  }

  return (
    <div className="App">
      <ul>
        <li>Comments about course</li>
      </ul>
      <div className="data">
        <h2>Share your experience</h2>
        <h4>Name:</h4>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={input.name}
          onChange={changehandle}
        ></input>
        <h4>Comments:</h4>
        <textarea
          name="comment"
          rows="4"
          cols="50"
          autoComplete="off"
          value={input.comment}
          onChange={changehandle}
        ></textarea>
        <br></br>
        <button onClick={changhandle}>Post</button>
        <br></br>
      </div>

      <div className="output">
        <table>
          {inputarr.map((info) => {
            return (
              <div className="comments">
                <b>{info.name}</b>
                <br></br>
                {info.comment}
                <br></br>
                <br></br>
              </div>
            );
          })}
        </table>
      </div>
      <div className="footer1">
        <li>Comments about course</li>
      </div>
    </div>
  );
}

export default App;
