/* Home.jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='detel'>
        <div className='textContainer'>
          <h1>
            Hi I'm <span>Shafwan</span>
          </h1>
          <p>Welcome to my website! Here you can find out more about my projects, past experiences, and interests.</p>
          
          <p>
            I am a third-year computer engineering student with an interest in
            embedded systems and full-stack web development. I am working towards
            a bachelor's degree at McMaster University. I am interested in opportunities
            to contribute meaningfully to various technical fields, so please don't
            hesitate to reach out!
          </p> 
          <p>In my spare time, I love biking long distances, playing basketball,
            and exploring the city! 
          </p> 
        
  {/* Technical Skills Section */}
          <h2 className='exp_title'>Technical Skills</h2>
          <div className='experience'>
            <h3>Programming Languages</h3> 
            <p>
              • C/C++
            </p> 
            <p>
              • Python
            </p>  
            <p>
              • JavaScript
            </p> 
            <p>
              • SQL
            </p> 
            <p>
              • Verilog
            </p>
          </div>
          <div className='experience'>
            <h3>Frameworks and Tools</h3> 
            <p>
              • React.js
            </p>  
            <p>
              • Bootstrap
            </p>   
            <p>
              • HTML/CSS
            </p> 
            <p>
              • AutoCAD
            </p>
           
          </div>

          <h2 className='exp_title'>Work Experience</h2>
          <div className='experience'>
            <h3>QA Intern, Fresh City (May - August 2023)</h3> 
            <p>
              • Performed integration testing, acceptance testing, and unit tests for multiple iterations and MVP launch under Agile system.
            </p> 
            <p>• Wrote SQL queries in Metabase to aid with development and improve marketing catalogs by 35%
            </p> 
            <p>
            • Located over 100+ bugs, creating and closing tickets through GitLab
            </p>
          </div>
          <div className='experience'>
            <h3>Healthcare Information Systems Intern, UHN (May - September 2022)</h3> 
            <p>
              • Improved patient workflows by 40% by enhancing device networks and developing employee profiles.
            </p> 
            <p>
            • Fixed log-in issues, user interface issues related to medical informatics, and managed high volume patient workflows.
            </p>
          </div>
          
        
        </div>
      </div>
      <div className='images'>
        <img
          src='https://cdn.pixabay.com/photo/2021/02/19/06/08/texture-6029280_1280.png'
          alt='Description of the image'
        />
      </div> 
    </div>
  );
}

export default Home;
