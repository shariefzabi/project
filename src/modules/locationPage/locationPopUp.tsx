import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useNavigate, useNavigationType } from "react-router-dom";
import { connect } from "react-redux";
import redux from 'react-redux';
import "./locationPopUp.css";



export default function PopUp(prop: any) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [locationNames, setLocationNames] = useState<string[]>([])
  let [isAdding, setIsAdding] = useState(false)
  let [newLocation, setNewLocation] = useState('')
  let [newLocationErr, setNewLocationErr] = useState('')

  let [toggleflag, setToggleFlag] = useState(true);

  // function popUproute(e: any) {
  //   e.preventDefault();
  //   setToggleFlag(false)
  //   prop.pop_up_toggle(toggleflag)

  // }


  //error if location already
  const validations = (e: any) => {


    if (e.target.name === "newLocation") {
      let enteredLocation = e.target.value;
      if (enteredLocation == undefined || enteredLocation.length === 0) {
        setNewLocationErr("Location field should not be empty")
        e.target.classList.add("field-error")
      }
      //  else if(locationNames.find("enteredLocation")) {
      //   setNewLocationErr("goovinda")
      //   e.target.classList.add("field-error")
      // }
      else {
        let nameReg = /^([a-zA-Z ]{4,15})$/

        if (!nameReg.test(enteredLocation)) {
          let fullNameErrMsg = "Accepts Alphabets, space & Min 3 to Max 15 Char"
          setNewLocationErr(fullNameErrMsg)
          e.target.classList.add("field-error")
        } else {
          let valid = locationNames.includes(enteredLocation)
          console.log(valid)
          if(valid){
            let fullNameErrMsg = "already exists in list"
            setNewLocationErr(fullNameErrMsg)
            e.target.classList.add("field-error")
          }else{
            e.target.classList.remove("field-error")
            setNewLocationErr("")
          }
         
        }
      }


    }
  }
  const LocationSubmitHandler = (e: any, newLocation: any) => {
    e.preventDefault();
     

    if (newLocationErr == "") {
      addNewLocation()
      setIsAdding(false);
    }

   setNewLocation("")
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

    <div>
      <button className="pt-2 buy_button btn  text-light"
        onClick={() => { handleOpen(); setToggleFlag(true) }}>Buy Now</button>
      {toggleflag && <Modal
        className="d-flex modalContainer"
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

                {isAdding && <form className="d-inline mt-3 needs-validation ms-5"
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
                 

                  <button className="d-inline btn-success btn-add" type="submit" >
                    Save&#32;Location
                  </button>
                  <p className="text-danger ms-5 mb-0">{newLocationErr}</p>
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
                  {/* <Link to="/products"> */}
                  <button className="btn-success btn-cnt" type="submit" onClick={() => { navigate("/products"); setToggleFlag(false) }}>Continue</button>
                  {/* </Link> */}



                </form>
              </main>
            </div >
          </div>
        </div>
      </Modal>}

    </div>

  )
}
// const mapStateToProps = (state: any) => {
//   console.log(state);

//   return {
//     redux: state
//   }
// }

// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//     pop_up_toggle: (toggleflag: any) => dispatch({ type: 'toggle_flag', payload: toggleflag })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PopUp);

