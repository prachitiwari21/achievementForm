import "./App.css";
import { useState } from "react";
import trophy from "../src/trophy.jpg";
import trophy2 from "../src/trophy2.png";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) =>{
    if(e.target.value.length === 100){
      window.alert("Description shouldn't exceed 100 characters");
    }
    setDescription(e.target.value);
  };
  //form validation
  function validateForm() {
    if (title.length == 0) {
      alert("Title can not be empty");
      return;
    }
    alert("Form submitted");
  }
  return (
    <div className="container">
      {/* left side */}
      <div>
        <h2>
          <b>ACHIEVEMENTS </b> that speak louder than your resume
        </h2>
        <img src={trophy2} />
        <br />
        <p className="text">
          Add your projects with detailed descriptions, images, videos, and
          milestones. Your work is more than just facts. <br />
          <b> BRAG YOUR WORK</b>.
        </p>
      </div>
      {/* right side */}
      <div className="add">
        <form name="myForm" onSubmit="return validateForm()">
          <div className="flex-box">
            <div className="add-title box">
              <p>Title</p>
              <input
                type="text"
                name="title"
                placeholder="Type here"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="add-category box">
              <p>Category</p>
              <select name="category">
                <option value="Academic">Academic</option>
                <option value="Professional">Professional</option>
                <option value="Personal">Personal</option>
                <option value="Sports">Sports</option>
                <option value="Artistic">Artistic</option>
                <option value="Community & social">Community & social</option>
                <option value="Technical & skill-based">
                  Technical & skill-based
                </option>
                <option value="Entrepreneurial">Entrepreneurial</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
          </div>
          <div className="add-description box">
            <p>Description</p>
            <textarea 
              name="description" value={description} onChange={handleChange}
              rows="6"
              placeholder="Write content here"
              required
            ></textarea>
          </div>
          <div className="flex-box">
            <div className="add-date box">
              <p>Date achieved</p>
              <input type="date" name="date" placeholder="Type here" />
            </div>
            <div className="box">
              <p>Attach file from your computer</p>
              <label htmlFor="image"></label>
              <input
                className="choose"
                type="file"
                id="myFile"
                name="filename"
              ></input>
            </div>
          </div>
        </form>
        <button
          type="submit"
          onClick={() => {
            validateForm();
          }}
          className="add-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
