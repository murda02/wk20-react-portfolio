import davePic from '../assets/img/davePic.png'

export default function About() {
  var aboutStyle = {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    fontSize: "1.5rem",
    color: 'black',
    display: "block",
    left: "2%",
    paddingLeft: '2%',
    width: '60%',
    paddingBottom: '2%',
    textIndent: '50px'
  };

  var picStyle = {

    display: 'block',
    paddingBottom: '3%',
    paddingTop: '1%',
    paddingLeft: '2%'
    // marginLeft: 'auto',
    // marginRight: 'auto',
  }

  var textStyle = {
    paddingLeft: '2%',
    fontSize: "2rem"
  }

  const css = `@media (min-width: 320px) {
    img {
      width: 70%;
        
    }
  }
  @media (min-width: 768px) {
    img {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    img {
      width: 25%;
  }
  }`;
  

  return (
    <div >
      <h1 style={textStyle}>About me:</h1>
      <style scoped>{css}</style>
        <img src={davePic} alt='Dave Murphy' style={picStyle} id='davepic'></img>
      <p style={aboutStyle}>
        For the past 10+ years I have worked as a QA Engineer testing software for several different companies. I currently work for Plus One Robotics and test the vision system for robotic arms. Over the years I have taught myself how to write automated tests in order test software. I'm taking a codeing bootcasmp at DU in order to better understand the code that I test, to write better automated tests and possibly jump ship and become a developer.
      </p>
    </div>
  );
}
