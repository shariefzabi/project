import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
import ProductDetails from "./productDetailsPage/ProductDetails"
import axios from 'axios';
import "./locationPopUp.css";



export default function PopUp(prop: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [locationNames, setLocationNames] = useState([])
  let [isAdding, setIsAdding] = useState(false)
  let [newLocation, setNewLocation] = useState('')
  let [newLocationErr, setNewLocationErr] = useState('')


  //error if location already
  const validations = (e: any) => {


    if (e.target.name === "newLocation") {
      let enteredLocation = e.target.value;
      if (enteredLocation == undefined || enteredLocation.length === 0  ) {
        setNewLocationErr("Location field should not be empty")
        e.target.classList.add("field-error")
      }
      //  else if(locationNames.includes([enteredLocation])) {
      //   setNewLocationErr("goovinda")
      //   e.target.classList.add("field-error")
      // }
      else {
        let nameReg = /^([a-zA-Z ]{3,20})$/

        if (!nameReg.test(enteredLocation)) {
          let fullNameErrMsg = "Accepts Alphabets, space & Min 3 to Max 20 Char"
          setNewLocationErr(fullNameErrMsg)
          e.target.classList.add("field-error")
        } else {
          e.target.classList.remove("field-error")
          setNewLocationErr("")
        }
      }


    }
  }
    const LocationSubmitHandler = (e: any, newLocation: any) => {
      e.preventDefault();

      
      if(newLocationErr ==""){
        addNewLocation()
        setIsAdding(false);
      }
      

      console.log(newLocation)
    }





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
        axios.post("http://localhost:3005/market/marketDetails", location)
      } catch (err) {
        console.error(err)
      }
    }



    const startAddingHandler = () => {
      setIsAdding(true);
    }



    // const stopAddingHandler = () => {
    //   addNewLocation()
    //   setIsAdding(false);
    // }



    return (
      <div className="d-flex">
        <button className="pt-2 buy_button btn  text-light"
          onClick={() => { handleOpen() }}>Buy Now</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
          sx={{ overflow: 'auto' }}
        >
          <div className='location-modal-container'>
            <div id="modal-modal-description" >


              <div className="popUp">
                <main className="popUpContent">
                  <h3 className="locationHeading">
                    Choose&#32;your&#32;preferred&#32;location
                  </h3>
                  <article className="article">
                    This&#32;displays&#32;all&#32;products&#32;associated&#32;with&#32;the&#32;chosen&#32;address
                  </article>


                  {!isAdding && <div className=" addLocbtn mt-3">
                    <p className=" pLoc d-inline">Can&#39;t&#32;find&#32;your&#32;location&#63;</p>
                    <button className="btn-success btn-add ms-5" type="button" onClick={startAddingHandler}>Add&#32;Location</button>
                  </div>}

                  {isAdding && <form className="mt-3 needs-validation ms-5"
                    onSubmit={(e) => LocationSubmitHandler(e, { newLocation })} >
                    <label htmlFor="ulocation" className="form-label"></label>
                    <input className="addLocation "
                      type="text" id="ulocation"

                      placeholder="Enter your Location here"
                      value={newLocation}
                      onBlur={(e) => validations(e)}
                      name="newLocation"
                      onChange={(e) => setNewLocation(e.target.value)}

                      required />
                    <p className="text-danger">{newLocationErr}</p>

                    <button className="btn-success btn-add" type="submit" >
                      Save&#32;Location
                    </button>
                  </form>}

                  <form className="needs-validation" >
                    <div className="dropDown " >
                      <select className="form-select dropdownToggle"
                        placeholder="Location"
                        onClick={fetchLocations}
                        required>

                        <option className="dropdownItem" selected disabled value="" hidden>Location</option>
                        {
                          locationNames.map(location => {
                            return (
                              <option className="dropdownItem" >
                                {location}
                              </option>
                            )
                          })
                        }

                      </select>

                    </div>

                    {/* <button className="btn-success btn-cnt" type="submit" >Continue</button> */}
                    <Link  to="/ProductDetails" className="btn-success btn-cnt" type="submit" >Continue</Link>

                  </form>
                </main>
              </div >
            </div>
            
          </div>
        </Modal>
        

      </div>

    )
  }