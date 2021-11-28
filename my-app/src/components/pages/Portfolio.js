import project2 from '../assets/img/project2.png'
import weather from '../assets/img/weather.png'
import employeeTracker from '../assets/img/employeeTracker.png'
import scheduler from '../assets/img/scheduler.jpg'
import teamProfileGenerator from '../assets/img/teamProfileGenerator.png'
import techBlog from '../assets/img/techBlog.png'

export default function Portfolio() {
  var portfolioStyle = {
    position: "relative",
    fontSize: "1.5rem",
    left: "8%"
  };

  var picStyle = {
    width: '90%',
    // display: 'block',
    paddingTop: '8%',
    marginLeft: '8%'
  }

  var divStyle = {
    display: 'flex',
    flexFlow: `row wrap`,
    width: '100vw'
  }

  var bottomPicStyle = {
    width: '90%',
    // display: 'block',
    paddingTop: '8%',
    marginLeft: '8%',
    paddingBottom: '8%'
  }

  return (
    <div style={divStyle}>
      <a href="https://afternoon-refuge-09743.herokuapp.com/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={project2} alt="Drink and a Movie app"></img></a>
      <a href="https://murda02.github.io/homework-week-6-weather-dashboard-dlm/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={weather} alt="Weather app"></img></a>
      <a href="https://murda02.github.io/homework-week-5-work-day-scheduler-dlm/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={scheduler} alt="Work Day Scheduler app"></img></a>
      <a href="https://github.com/murda02/wk12-employee-tracker#installation" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={employeeTracker} alt="Employee Tracker app"></img></a>
      <a href="https://murda02.github.io/wk10-team-profile-generator/" 
      target="_blank" rel="noopener noreferrer" ><img style={picStyle} src={teamProfileGenerator} alt="Team Profile Generator app"></img></a>
      <a href="https://tech-blog-dlm.herokuapp.com/" 
      target="_blank" rel="noopener noreferrer" ><img style={bottomPicStyle} src={techBlog} alt="Tech Blog app"></img></a>
      <div>
      <ul style={portfolioStyle}>
                <li><a href="https://github.com/murda02/project-2" target="_blank" rel="noopener noreferrer">Drink and A Movie Repo</a></li>
                <li><a href="https://github.com/murda02/homework-week-6-weather-dashboard-dlm" target="_blank" rel="noopener noreferrer">Weather App Repo</a></li>
                <li><a href="https://github.com/murda02/homework-week-5-work-day-scheduler-dlm/" target="_blank" rel="noopener noreferrer">Work Day Scheduler Repo</a></li>
                <li><a href="https://github.com/murda02/wk12-employee-tracker" target="_blank" rel="noopener noreferrer">Employee Tracker Repo</a></li>
                <li><a href="https://github.com/murda02/wk10-team-profile-generator" target="_blank" rel="noopener noreferrer">Team Profile Generator Repo</a></li>
                <li><a href="https://github.com/murda02/wk14-tech-blog" target="_blank" rel="noopener noreferrer">Tech Blog Repo</a></li>
            </ul>
      </div>
    </div>

  );
}
