import axios from "axios";
import React, { Component } from "react";
import b from "../Components/bb.jpg";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class UploadPage extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div id="bmain">
        <img src={b} alt="band" id="imgr" />
        <div className="search-container">
          <form action="#search">
            <input
              type="text"
              placeholder="Search for artist,bands,tracks,songs "
              name="search"
              id="sname"
            />
            <button type="submit" className="but" >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
         
          {this.fileData()}
		  <h4 id="or">or</h4>
        </div>
		<div id="dis">
		
          
            <input type="file" onChange={this.onFileChange} className="choose"/>
            <h4 id="and">&</h4>
            <button onClick={this.onFileUpload} id="upload" >
              Upload!
            </button>
          </div>
		  
      </div>
    );
  }
}

export default UploadPage;
