import dedny from "./dedny_nov24.jpeg";
import "./App.css";

function Infobox() {
  return (
    <div className="infobox">
      <div
        style={{
          backgroundColor: "#b0c4de",
          fontSize: "125%",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        Destiny Rogers
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={dedny} />
      </div>
      Destiny sitting at home with Cat behind her in 2022
      <div
        style={{
          backgroundColor: "#b0c4de",
          fontSize: "125%",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        Background Information
      </div>
      <table>
        <tr>
          <td style={{ fontWeight: "bold" }}>Birth name</td>
          <td>Destiny Rogers</td>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold" }}>Born</td>
          <td>
            May 8, 1998 {"("}age 24{")"}
          </td>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold" }}>Occupation(s)</td>
          <td>
            Software engineer • Quality Engineer • Frontend Developer • Full
            Stack Engineer
          </td>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold" }}>Hobbies and Interests</td>
          <td>
            Record shopping • bass • hiking • 3d printing • movies • video games
            • painting
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Infobox;
