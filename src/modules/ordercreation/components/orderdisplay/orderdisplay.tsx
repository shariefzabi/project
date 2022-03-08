
import PaymentMethod from '../../paymentMethod/paymentMethod'
function Orderdisplay() {
    const submitHandler = (e: any) => {
        e.preventDefault();
    }
    return (
        <>
            <div className='deliverydetailspage'>
                <div className="modal-body">
                    <div className="text-center popupheading">
                        <p>You are one step closer to buying your lifestock</p>
                    </div>
                    <div className="form-paragraph">
                        <p>Fill in the required information</p>
                    </div>
                    <form className='text-start' onSubmit={(e: any) => submitHandler(e)}>
                        {/* <div className="mb-3">
                            <label htmlFor="Delivery Location" className="col-form-label">Delivery Location</label>
                            <input type="text" className="form-control" id="Delivery Location"  placeholder="Delivery Location" name="deliveryloc" 
                                 required/>
            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Delivery Period" className="col-form-label">Delivery Period</label>
                            <input type="text" className="form-control" id="Delivery Period" placeholder="Delivery Period" name="deliveryperiod" required/>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Agent" className="col-form-label select-label">Delivery Mode</label>

                            <select className="form-select" name="deliverymode" required  aria-label="Default select example">
                                <option hidden value="">Delivery Mode</option>
                                <option value="Offline">Offline</option>
                                <option value="Online">Online</option>
                            </select>
                            
                        </div> */}
                    </form>
                    <div className="mb-3 text-center">
                        <button type="submit" role="button" className="btn btn-success continuebutton" data-bs-target="#exampleModalPayment">Proceed to Payment</button>
                    </div>
                </div>
            </div>
            <PaymentMethod></PaymentMethod>
        </>

    )
}
export default Orderdisplay