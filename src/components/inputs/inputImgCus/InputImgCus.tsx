import React, { useState } from "react";

const FileUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const changeHandler = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };

  const checkState = async (e: any) => {
    e.preventDefault();
    if (!selectedImage) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={checkState}>
      <input type="file" name="image" onChange={changeHandler} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
