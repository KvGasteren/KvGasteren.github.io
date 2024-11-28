import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FileInput = styled.input`
  margin: 10px 0;
`;

const DownloadButton = styled.a`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const StaticImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
`;

const StaticText = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #555;
  text-align: center;
`;

const FileImageTextComponent = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newFiles = selectedFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <Container>
      <h2>File, Image, and Text Component</h2>

      {/* Static Image */}
      <StaticImage src="/static-image.jpg" alt="Static Example" />

      {/* Static Text */}
      <StaticText>
        Welcome to this page! Here is an example of static text that describes the image above.
      </StaticText>

      {/* File Input */}
      <FileInput
        type="file"
        multiple
        onChange={handleFileChange}
      />

      {/* File List */}
      <FileList>
        {files.map((file, index) => (
          <FileItem key={index}>
            <span>{file.name}</span>
            <DownloadButton href={file.url} download={file.name}>
              Download
            </DownloadButton>
          </FileItem>
        ))}
      </FileList>
    </Container>
  );
};

export default FileImageTextComponent;
