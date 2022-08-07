import logo from '../logo.svg';

export default function Facts() {
  return (
  <div className="container">
    <div className="header">
      <div className="image-and-text">
        <img src={logo} alt="react-logo" className="app-logo"/>
        <h4 className="header-text"> ReactFacts</h4>
      </div>
      <h4 >React Course - Project 1</h4>
    </div>
    <div className="body">
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintainned by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  </div>
  )
}
