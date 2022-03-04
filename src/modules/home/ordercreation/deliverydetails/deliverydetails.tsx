import React,{useState} from "react";
import './deliverydetails.scss'

export default class Deliverydetails extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            deliveryloc:" ",
            deliveryperiod:" ",
            deliverymode:" ",
            deliverylocerr:" ",
            deliveryperioderr:" ",
            deliverymodeErr:" "

        }
    }
     changeHandler = (e:any) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value);
    }
    validations = (e: any) => {
            let name=e.target.name;
            let value=e.target.value;
            console.log(name,value);
            
        if (name === 'deliveryloc') {
            let deliverylocerr = '';
            if (value == undefined || value.length === 0) {
                deliverylocerr = "Please enter the delivery location."
                this.setState({ deliverylocerr })
            }else {
                deliverylocerr = ''
                this.setState({ deliverylocerr })
            }
        }else if(name === 'deliveryperiod'){
            let deliveryperioderr='';
            if (value == undefined || value.length === 0) {
                deliveryperioderr = "Please enter the delivery period."
                this.setState({ deliveryperioderr })
            }else {
                deliveryperioderr = ''
                this.setState({ deliveryperioderr })
            }
        }else if(name === 'deliverymode'){
            let deliverymodeErr='';
            if (value == undefined || value.length === 0) {
                deliverymodeErr = "Please select delivery mode."
                console.log(deliverymodeErr);
                
                this.setState({ deliverymodeErr })
            }else {
                deliverymodeErr = ''
                this.setState({ deliverymodeErr })
            }
        }

    

    }
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
                                <input type="text" className="form-control" id="Delivery Location" placeholder="Delivery Location" name="deliveryloc" onChange={this.changeHandler}
                                 onBlur={this.validations}/>
                                 <p className="text-danger err">{this.state.deliverylocerr}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Delivery Period" className="col-form-label">Delivery Period</label>
                                <input type="text" className="form-control" id="Delivery Period" placeholder="Delivery Period" name="deliveryperiod" onChange={this.changeHandler} onBlur={this.validations}/>
                                <p className="text-danger err">{this.state.deliveryperioderr}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Agent" className="col-form-label select-label">Delivery Mode</label>
                                <select className="form-select" name="deliverymode" value={this.state.deliverymode} aria-label="Default select example" onBlur={this.validations} onChange={(e)=>{this.changeHandler(e);this.validations(e)}}>
                                    <option hidden value="">Delivery Mode</option>
                                    <option value="One">One</option>
                                    <option value="Two">Two</option>
                                </select>
                                <p className="text-danger err">{this.state.deliverymodeErr}</p>
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
