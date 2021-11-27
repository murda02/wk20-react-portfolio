import davePic from '../assets/img/davePic.png'

export default function About() {
  var aboutStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: "1.5rem",
    color: 'black',
    display: "block",
    left: "2%",
    paddingLeft: '2%'
  };

  var picStyle = {
    width: '25%',
    display: 'block',
    paddingBottom: '1%',
    paddingTop: '3%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  return (
    <div >
        <img src={davePic} alt='Dave Murphy' style={picStyle} id='davepic'></img>
      <p style={aboutStyle}>
        For the past 10+ years I have worked as a QA Engineer testing software for several different companies. I currently work for Plus One Robotics and test the vision system for robotic arms. Over the years I have taught myself how to write automated tests in order test software. I'm taking a codeing bootcasmp at DU in order to better understand the code that I test, to write better automated tests and possibly jump ship and become a developer.
      </p>
    </div>
  );
}
