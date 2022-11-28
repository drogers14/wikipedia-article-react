import dedny_smart_mirror from "./dedny_smart_mirror.jpeg";

function Thumb() {
  return (
    <div
      style={{
        margin: "0.5em 1.4em 1.3em 0",
        width: "auto",
        clear: "left",
        float: "left",
      }}
    >
      <div
        style={{
          border: "1px solid #c8ccd1",
          backgroundColor: "#f8f9fa",
          fontSize: "94%",
          padding: "3px",
          minWidth: "100px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img src={dedny_smart_mirror} />
        <div
          style={{
            border: "0",
            fontSize: "94%",
            lineHeight: "1.4em",
            padding: "3px",
          }}
        >
          Destiny sitting in front of Smart Mirror
        </div>
      </div>
    </div>
  );
}

export default Thumb;
