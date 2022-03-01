import React from "react";
// import { useRef } from "react";
import "./locationpop/LocationPopUp.css";

export default function LocationPopUp() {
  const displayHidden = () => {
    let hiddenContent = document.getElementById("hide");
    hiddenContent.style.display = "block";
  };
  const hideBlock = () => {
    let hideContent = document.getElementById("hide");
    hideContent.style.display = "none";
  };
  const addLocation = () => {
    displayHidden();
  };

  const saveLocation = () => {
    hideBlock();
  };

  return (
    <div className="popUp">
      <main className="popUpContent">
        <h3 className="locationHeading">
          Choose&#32;your&#32;preferred&#32;location
        </h3>
        <article>
          This&#32;displays&#32;all&#32;products&#32;associated&#32;with&#32;the&#32;chosen&#32;address
        </article>

        <form>
          <div className="hide" id="hide">
            <label htmlFor="addLocation"></label>
            <input
              type="text"
              id="addLocation"
              placeholder="Enter your Location here"
            ></input>
            <button className="btn-success btn-add" onClick={saveLocation}>
              Add&#32;Location
            </button>
          </div>

          <label htmlFor="locationDropdown"></label>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" onClick={addLocation}>
                  Can&#39;t&#32;find&#32;your&#32;location&#63;
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button className="btn-success btn-cnt">Continue</button>
        </form>
      </main>
    </div>
  );
}
