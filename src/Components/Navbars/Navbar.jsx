import './Navbar.css'

import web from './web.jpg';


function Navbars() {
    return (
      <body>
        <div className="navigate">
          <div className="logo">
            <img id='weblogo' src={web} alt="Web logo" />
          </div>
          <div className="word">
            <h2 id='webnames'><span>Web </span>Development</h2>
          </div>
          <div id="navi_name">
            <nav>
              <a href="">Home</a>
              <a href="">About</a>
            </nav>
          </div>
        </div>
      </body>
    );
  }


  
export default Navbars;