import React from "react";

const About = () => {
  return (
    <div style={aboutPageStyle}>
      <h1 style={headerStyle}>About the NoteIt App</h1>
      <p style={paragraphStyle}>
        Our Note Taking App is designed to help you organize your thoughts and
        ideas in one place. Whether you're a student, professional, or just
        someone who likes to jot down ideas, our app has all the features you
        need to keep your notes organized and easily accessible.
      </p>
      <div style={imageContainerStyle}>
        <img
          src="https://media.wired.com/photos/5dd86bfa8fc4a40008f1aca3/1:1/w_1800,h_1800,c_limit/gear%20-%20feature%20art%20-%20note%20taking%20apps.jpg"
          alt="Note Taking App"
          style={imageStyle}
        />
      </div>
      <p style={paragraphStyle}>
        With our app, you can create new notes, edit existing ones, and delete
        notes that are no longer relevant. You can also organize your notes by
        tags or categories, making it easy to find the information you need
        quickly and efficiently.
      </p>
      <p style={paragraphStyle}>
        Our app is user-friendly and intuitive, with a simple interface that
        makes it easy to get started. Whether you're using it on your desktop or
        mobile device, you'll find that our app is responsive and works well on
        any screen size.
      </p>
      <p style={paragraphStyle}>
        Thank you for choosing our Note Taking App. We hope it helps you stay
        organized and productive!
      </p>
      <div style={imageContainerStyle}>
        <img
          src="https://boosterland.com/wp-content/uploads/2014/01/HiRes.jpg"
          alt="Note Taking App"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

const aboutPageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "2rem",
};

const headerStyle = {
  fontSize: "3rem",
  marginBottom: "1.5rem",
  textAlign: "center",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.5",
  marginBottom: "1.5rem",
  textAlign: "justify",
  maxWidth: "60ch",
};

const imageContainerStyle = {
  maxWidth: "50rem",
  margin: "1.5rem 0",
};
const imageStyle = {
  maxWidth: "100%",
};

export default About;
