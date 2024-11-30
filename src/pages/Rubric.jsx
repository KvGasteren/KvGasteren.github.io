import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
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



const Rubric = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "rubric");

	return (
		<React.Fragment>
			{/* <Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet> */}

			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.projects[0].title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.projects[0].description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Rubric;
