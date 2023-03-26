const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    '<header>\
    <h1>John Doe</h1>\
    <nav>\
      <ul>\
        <li><a href="#about">About Me</a></li>\
        <li><a href="#skills">Skills</a></li>\
        <li><a href="#experience">Experience</a></li>\
        <li><a href="#projects">Projects</a></li>\
        <li><a href="#education">Education</a></li>\
        <li><a href="#awards">Awards and Achievements</a></li>\
        <li><a href="#references">References</a></li>\
      </ul>\
    </nav>\
  </header>\
  <main>\
    <section id="about">\
      <h2>About Me</h2>\
      <p>Im a full-stack web developer with over 5 years of experience building websites and web applications. Im passionate about using technology to solve real-world problems, and I enjoy working on projects that challenge me to learn and grow as a developer.</p>\
    </section>\
    <section id="skills">\
      <h2>Skills</h2>\
      <ul>\
        <li>HTML/CSS</li>\
        <li>JavaScript</li>\
        <li>Node.js</li>\
        <li>React.js</li>\
        <li>Express.js</li>\
        <li>MongoDB</li>\
        <li>MySQL</li>\
        <li>Git</li>\
      </ul>\
    </section>\
    <section id="experience">\
      <h2>Experience</h2>\
      <ul>\
        <li>\
          <h3>Software Developer at Acme Corporation (2019 - Present)</h3>\
          <ul>\
            <li>Developed and maintained web applications using React.js, Node.js, and MongoDB</li>\
            <li>Collaborated with team members to identify and resolve bugs and improve application performance</li>\
            <li>Participated in code reviews and contributed to the development of coding standards and best practices</li>\
          </ul>\
        </li>\
        <li>\
          <h3>Web Developer at XYZ Agency (2016 - 2019)</h3>\
          <ul>\
            <li>Worked on a variety of client projects, ranging from simple websites to complex web applications</li>\
            <li>Built responsive, mobile-friendly websites using HTML, CSS, and JavaScript</li>\
            <li>Collaborated with designers to ensure that designs were implemented accurately and efficiently</li>\
          </ul>\
        </li>\
      </ul>\
    </section>\
    <section id="projects">\
      <h2>Projects</h2>\
      <ul>\
        <li>\
          <h3>Todo App</h3>\
          <p>A simple todo application built using React.js and Node.js. Allows users to create, edit, and delete tasks, and supports drag-and-drop sorting.</p>\
        </li>\
        <li>\
          <h3>Weather App</h3>\
          <p>A weather application that displays current weather conditions and a 5-day forecast for a user-specified location. Built using the OpenWeatherMap API and React.js.</p>\
        </li>\
        </ul>\
        </section>\
        <section id="education">\
          <h2>Education</h2>\
          <ul>\
            <li>\
              <h3>Bachelor of Science in Computer Science, University of ABC (2012 - 2016)</h3>\
              <ul>\
                <li>Graduated with honors</li>\
                <li>Completed coursework in data structures and algorithms, software engineering, and web development</li>\
                <li>Participated in several hackathons and coding competitions</li>\
              </ul>\
            </li>\
          </ul>\
        </section>\
        <section id="awards">\
          <h2>Awards and Achievements</h2>\
          <ul>\
            <li>Winner, Best Use of API, Hackathon ABC (2015)</li>\
            <li>Recipient, Computer Science Department Scholarship, University of ABC (2014)</li>\
          </ul>\
        </section>\
        <section id="references">\
          <h2>References</h2>\
          <ul>\
            <li>\
              <h3>Jane Smith</h3>\
              <p>Senior Software Developer at Acme Corporation</p>\
              <p>Email: jane.smith@acmecorp.com</p>\
              <p>Phone: 555-123-4567</p>\
            </li>\
            <li>\
              <h3>Bob Johnson</h3>\
              <p>Director of Web Development at XYZ Agency</p>\
              <p>Email: bob.johnson@xyzagency.com</p>\
              <p>Phone: 555-987-6543</p>\
            </li>\
          </ul>\
        </section>\
        '
  );
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
