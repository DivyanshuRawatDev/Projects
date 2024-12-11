import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select any file first");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFileName(response.data.filePath);
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>File Uploader</h1>
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmit}>upload</button>
        </div>
        <div style={{marginTop:"40px"}}>
          <img src={fileName} alt="profile" width="250px" height="250px"/>
        </div>
      </div>
    </>
  );
}

export default App;
