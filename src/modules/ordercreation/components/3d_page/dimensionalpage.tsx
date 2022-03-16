import axios from "axios";
import { useState,useEffect } from "react";
import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage() {
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    const [selectData, setSelectData] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3005/orders/filteredproducts")
            .then((res) => {
                console.log("product details from be", res.data)
                // setSelectData(res.data)

            })
            .catch((err) => console.log(err)
            )
    }, [])
    return (
        <>
            {!deliveryFlag &&
            <div className='order-modal'>
                <div className="dimesionalpage-form">
                            <div className=''>
                                <div className="heading-dimension">
                                    <p>Product Cattle market</p>
                                </div>
                               
                                <div>
                                    <button type="button" className="btn btn-success continuebutton" onClick={() => setDeliveryFlag(true)}>continue</button>
                                </div>
                            </div>
                        </div>
                        </div>
            }
            {deliveryFlag &&
                <Deliverydetails></Deliverydetails>
            }
        </>

    )
}

export default DimesionalPage;