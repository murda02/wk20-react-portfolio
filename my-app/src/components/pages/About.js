import davePic from '../assets/img/davePic.png'

export default function About() {
  var aboutStyle = {
    position: "relative",
    fontSize: "1.5rem",
    color: 'black',
    display: "inline",
    left: "2%",
    padding: '2%'
  };

  var picStyle = {
    width: '25%',
    display: 'block',
    paddingBottom: '3%',
    paddingTop: '3%',
    marginLeft: '21%'
  }

  return (
    <div >
        <img src={davePic} alt='Dave Murphy' style={picStyle} id='davepic'></img>
      <p style={aboutStyle}>
        For the past 10+ years I have worked as a QA Engineer testing software
        for several different companies.
        <br /> I currently work for Plus One Robotics and test the vision system
        for robotic arms. Over the years I have taught <br />
        myself how to write automated tests in order test software. I'm taking a
        codeing bootcasmp at DU in order to <br />
        better understand the code that I test, to write better automated tests
        and possibly jump ship and become a <br />developer.
      </p>
    </div>
  );
}
