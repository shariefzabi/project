import React, { useState } from "react";
import axios from 'axios';

import "./LocationPopUp.css";

export default function LocationPopUp() {

  let [locationNames, setLocationNames] = useState([])
  let [isAdding, setIsAdding] = useState(false)
  let [newLocation, setNewLocation] = useState('')


  const fetchLocations = (async () => {
    try {
      const response = await axios.get("http://localhost:3005/market/Locations")
      setLocationNames(response.data);
    } catch (err) {
      console.error(err)
    }
  })

  const addNewLocation = () => {
    const location = { locationName: newLocation }
    try {
      axios.post("http://localhost:3005/market/newLocation", location)
    } catch (err) {
      console.error(err)
    }
  }

  const startAddingHandler = () => {
    setIsAdding(true);
  }

  const addNewLocationHandler = (event) => {
    setNewLocation(event.target.value)
  }

  const stopAddingHandler = () => {
    addNewLocation()
    setIsAdding(false);
  }



  return (
    <div className="popUp">
      <main className="popUpContent">
        <h3 className="locationHeading">
          Choose&#32;your&#32;preferred&#32;location
        </h3>
        <article>
          This&#32;displays&#32;all&#32;products&#32;associated&#32;with&#32;the&#32;chosen&#32;address
        </article>


        {!isAdding && <div className="mt-3">
          <p className="d-inline">Can&#39;t&#32;find&#32;your&#32;location&#63;</p>
          <button className="btn-success btn-add ms-5" type="button" onClick={startAddingHandler}>Add&#32;Location</button>
        </div>}

        {isAdding && <form className="mt-3 needs-validation" novalidate>
          <label for="validationCustom03" class="form-label"></label>
          <input className="addLocation form-control"
            type="text" id="validationCustom03"
            placeholder="Enter your Location here"
            name={newLocation}
            onChange={addNewLocationHandler} required />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
          <button className="btn-success btn-add" type="submit" onClick={stopAddingHandler}>
            Save&#32;Location
          </button>
        </form>}

        <form className="needs-validation" novalidate>
          <div className="dropdown " >
            <select className="form-select dropdownToggle"
              placeholder="Location"
              onClick={fetchLocations}
              required>
              <option className="dropdownItem" selected disabled value="" hidden>Location</option>
              {
                locationNames.map(location => {
                  return (
                    <option className="dropdownItem" href="#">
                      {location}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <button className="btn-success btn-cnt" type="submit">Continue</button>
        </form>
      </main>
    </div >
  );
}
