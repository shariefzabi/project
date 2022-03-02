import React from 'react'
import './deliverydetails.scss'

export default class Deliverydetails extends React.Component {
    render(){
    return (
        <div className='deliverydetailspage'>
            

            <div className="modal fade" id="deliverydetailsModal" aria-labelledby="deliveryModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                        <div className="text-center popupheading">
                            <p>You are one step closer to buying your lifestock</p>
                        </div>
                        <div className="form-paragraph">
                            <p>Fill in the required information</p>
                        </div>
                        <form className='text-start'>
                            <div className="mb-3">
                                <label htmlFor="Delivery Location" className="col-form-label">Delivery Location</label>
                                <input type="text" className="form-control" id="Delivery Location" placeholder="Delivery Location" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Delivery Period" className="col-form-label">Delivery Period</label>
                                <input type="text" className="form-control" id="Delivery Period" placeholder="Delivery Period" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Agent" className="col-form-label select-label">Delivery Mode</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Delivery Mode</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className="mb-3 text-center">
                                <button type="button" className="btn btn-success continuebutton">Continue</button>
                            </div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}