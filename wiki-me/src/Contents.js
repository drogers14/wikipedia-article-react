function Content() {
  return (
    <div
      style={{
        padding: "7px",
        fontSize: "95%",
        border: "1px solid #a2a9b1",
        backgroundColor: "#f8f9fa",
        display: "table",
      }}
    >
      <div>
        {" "}
        <b>Contents</b>
      </div>
      <ol>
        <a href="#about">
          {" "}
          <li>About</li>
        </a>
        <ol>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#education">
            <li>Education</li>
          </a>
        </ol>
        <a href="#skills">
          {" "}
          <li>Skills</li>
        </a>
        <ol>
          <a href="#programming">
            <li>Programming</li>
          </a>
          <a href="#libraries-and-frameworks">
            <li>Libraries/Frameworks</li>
          </a>
          <a href="#tools-and-platforms">
            <li>Tools/Platforms</li>
          </a>
        </ol>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <ol>
          <a href="#smart-mirror">
            {" "}
            <li>Smart Mirror</li>
          </a>
          <a href="#wiki">
            {" "}
            <li>Wikipedia Article</li>
          </a>
          <a href="#fluff-finder">
            {" "}
            <li>Fluff Finder</li>
          </a>
        </ol>
        <a href="#fun-facts">
          <li>Fun Facts</li>
        </a>
        <a href="external-links">
          <li>External Links</li>
        </a>
      </ol>
    </div>
  );
}
export default Content;
