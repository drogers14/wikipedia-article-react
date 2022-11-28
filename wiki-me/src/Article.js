import Infobox from "./Infobox.js";
import Content from "./Contents.js";
import Thumb from "./Thumb.js";

import "./App.css";
function Article() {
  return (
    <div style={{ margin: "-1px 0px 0px 176px", padding: "20px 24px 24px" }}>
      <h1
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          fontSize: "2.4em",
        }}
        className="firstHeading mw-first-heading"
      >
        Destiny Rogers
      </h1>
      <Infobox />
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        <b>Destiny Rogers</b> (born 8 May 1998) is a San Francisco based{" "}
        <a href="https://en.wikipedia.org/wiki/Software_engineering">
          software engineer
        </a>
        ,{" "}
        <a href="https://en.wikipedia.org/wiki/Quality_engineering">
          {" "}
          quality engineer
        </a>
        ,{" "}
        <a href="https://en.wikipedia.org/wiki/Solution_stack#Full-stack_developer">
          fullstack developer
        </a>{" "}
        and animal lover. She built this mock Wikipedia article using
        <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
          {" "}
          ReactJS
        </a>
        ,<a href="https://en.wikipedia.org/wiki/HTML"> html</a> and
        <a href="https://en.wikipedia.org/wiki/CSS"> css</a>. She wanted to
        practice and demonstrate her frontend skills in a creative and
        interactive way.
      </p>
      <Content />
      <h2
        id="about"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",

          margin: "21px 0px 5.25px",
        }}
      >
        About
      </h2>
      <h3
        id="experience"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Experience
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Jobs and other work experience listed from most recent to lease recent:
        <ul>
          <li>2020 – Software Engineer Intern at Hewlett Packard</li>
          <li>2021 – DevOps Engineer at Hewlett Packard Enterprise</li>
          <li>2021 – Software Engineer at Twitter Inc</li>
          <li>2023 – Pursuing new oppurtunities</li>
        </ul>
      </p>
      <h3
        id="education"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Education
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        {" "}
        Studied at California State University, Chico and graduated with a
        Bachelors of Science in Computer Science.
      </p>
      <h2
        id="skills"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          margin: "21px 0px 5.25px",
        }}
      >
        Skills
      </h2>
      <h3
        id="programming"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Programming
      </h3>
      <p>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>HMTL/CSS/Sass</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
        <h3
          id="libraries-and-frameworks"
          style={{
            margin: "5.04px 0px 0px",
            padding: "8.4px 0px 0px",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          Libraries/Frameworks
        </h3>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>NodeJS</li>
          <li>Spring boot</li>
          <li>Express.js</li>
        </ul>
        <h3
          id="tools-and-platforms"
          style={{
            margin: "5.04px 0px 0px",
            padding: "8.4px 0px 0px",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          Tools/Platforms
        </h3>
        <ul>
          <li>Git</li>
          <li>Docker</li>
          <li>Jenkins CI</li>
          <li>Phabricator</li>
          <li>Artifactory</li>
          <li>SnapLogic</li>
          <li>Google Cloud Platform (GCP)</li>
          <li>JHipster</li>
        </ul>
      </p>
      <h2
        id="projects"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          margin: "21px 0px 5.25px",
        }}
      >
        Projects
      </h2>
      <Thumb />
      <h3
        id="smart-mirror"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Smart Mirror<sup>[#]</sup>
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        {" "}
        Using a Raspberry Pi, Two-way glass, Spectre monitor, and Open Source
        code<sup>[#]</sup>, she put together a "Smart Mirror"
      </p>
      <h3
        id="wiki"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Wikipedia Atricle
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Using the React Framework, basic html and css she built a replica of a
        Wikipedia article page. A user can soon be able to populate their own.
      </p>
      <h3
        id="fluff-finder"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Fluff Finder
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Interactive Web Application to aide a user to find or report a lost pet.
        Pet and user information stored in MongoDB. Python web-scraper
        implementation to search for missing pets
      </p>
      <h3
        id="projects/portfolio"
        style={{
          margin: "5.04px 0px 0px",
          padding: "8.4px 0px 0px",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Portfolio <sup>[#]</sup>
      </h3>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Interactive Web Application designed to to keep up with myself in a
        localized experience. Deployed via GCP (Google Cloud Platform). Utilizes
        Next.JS to provide a safer way to use API keys from front end.
      </p>

      <h2
        id="fun-facts"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          margin: "21px 0px 5.25px",
        }}
      >
        Fun Facts
      </h2>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Has built almost all botanical lego sets.
      </p>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Most of vinyl collection is from the 1980s.
      </p>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Really enjoy baking and cooking -- specialty is creamy pesto gnocchi.
      </p>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Plays expert mode on Guitar Hero.
      </p>
      <p
        style={{
          //   fontSize: "calc(1em * 0.875)",
          margin: "0.5em 0",
          lineHeight: "1.6",
        }}
      >
        Enjoys 1980s New Wave and 1950s Country
      </p>

      <h2
        id="external-links"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          margin: "21px 0px 5.25px",
        }}
      >
        External Links
      </h2>
      <ul>
        <a href="https://github.com/drogers14">
          <li>Github</li>
        </a>
        <a href="https://www.linkedin.com/in/destiny-rogers/">
          <li>Linkedin</li>
        </a>
        <a href="https://twitter.com/DATAM0SH3R">
          <li>Twitter</li>
        </a>
        <a href="https://letterboxd.com/datamosher/">
          <li>Letterboxd</li>
        </a>
      </ul>
      <h2
        id="references"
        style={{
          fontFamily: "'Linux Libertine','Georgia','Times',serif",
          margin: "21px 0px 5.25px",
        }}
      >
        References
      </h2>
      <p>
        <ol>
          <li>^ magicmirror.builders</li>
          <li>^ destinyrogers.dev</li>
          <li>^ https://twitter.com/DATAM0SH3R/status/1337935808293007361?s=20&t=R9iXH5U5ycn96BW1G45QcQ</li>
        </ol>
      </p>
    </div>
  );
}

export default Article;
