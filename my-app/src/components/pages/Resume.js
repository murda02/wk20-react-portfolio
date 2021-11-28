
import pdf from "../assets/DMurphy_Resume.pdf"

export default function About() {
  var resumeStyle = {
    fontSize: "1.5rem",
    color: 'black',
    paddingLeft: '2%',
    paddingTop: '4%'
  };

  var resumeLinkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  var FSProStyle = {
    paddingTop: '2.6%',
    fontSize: "2rem"
  };



  return (
    <div style={resumeStyle} >
        <h2>
        <a href={pdf} target="_blank" rel="noopener noreferrer" style={resumeLinkStyle}>Download my Resume</a></h2>

        <h2 style={FSProStyle}>Full Stack Proficiencies: </h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>APIs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>ORM</li>
                <li>MVC</li>
                <li>MongoDB</li>
                <li>PWA</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>MERN</li>
            </ul>
    </div>
  );
}
