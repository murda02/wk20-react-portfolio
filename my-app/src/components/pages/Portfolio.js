import project2 from '../assets/img/project2.png'
import weather from '../assets/img/weather.png'
import employeeTracker from '../assets/img/employeeTracker.png'
import scheduler from '../assets/img/scheduler.jpg'
import teamProfileGenerator from '../assets/img/teamProfileGenerator.png'

export default function Portfolio() {
  var portfolioStyle = {
    position: "relative",
    fontSize: "1.5rem",
    color: "black",
    display: "inline",
    left: "2%",
    padding: "2%",
    border: '2px'
  };

  var picStyle = {
    width: '90%',
    // display: 'block',
    paddingTop: '8%',
    marginLeft: '2%'
  }

  var divStyle = {
    display: 'flex',
    flexFlow: `row wrap`,
  }

  var bottomPicStyle = {
    width: '90%',
    // display: 'block',
    paddingTop: '8%',
    marginLeft: '2%',
    paddingBottom: '8%'
  }

  return (
    <div style={divStyle}>
      <a href="https://afternoon-refuge-09743.herokuapp.com/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={project2} alt="Drink and a Movie app"></img></a>
      {/* <p style={portfolioStyle}>
      <a href="https://github.com/murda02/project-2" target="_blank" rel="noopener noreferrer">Drink and A Movie Repo</a>
      </p> */}
      <a href="https://murda02.github.io/homework-week-6-weather-dashboard-dlm/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={weather} alt="Weather app"></img></a>
      {/* <p style={portfolioStyle}>
      <a href="https://github.com/murda02/homework-week-6-weather-dashboard-dlm" target="_blank" rel="noopener noreferrer">Weather App Repo</a>
      </p> */}
      <a href="https://murda02.github.io/homework-week-5-work-day-scheduler-dlm/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={scheduler} alt="Work Day Scheduler app"></img></a>
      {/* <p style={portfolioStyle}>
      <a href="https://github.com/murda02/homework-week-5-work-day-scheduler-dlm" target="_blank" rel="noopener noreferrer">Work Day Scheduler Repo</a>
      </p> */}
      <a href="https://github.com/murda02/wk12-employee-tracker#installation" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={employeeTracker} alt="Work Day Scheduler app"></img></a>
      {/* <p style={portfolioStyle}>
      <a href="https://github.com/murda02/wk12-employee-tracker" target="_blank" rel="noopener noreferrer">Work Day Scheduler Repo</a>
      </p> */}
      <a href="https://murda02.github.io/wk10-team-profile-generator/" 
      target="_blank" rel="noopener noreferrer" ><img style={bottomPicStyle} src={teamProfileGenerator} alt="Work Day Scheduler app"></img></a>
      {/* <p style={portfolioStyle}>
      <a href="https://github.com/murda02/wk10-team-profile-generator" target="_blank" rel="noopener noreferrer">Work Day Scheduler Repo</a>
      </p> */}
    </div>
  );
}
