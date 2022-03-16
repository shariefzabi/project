import { Dialog } from '@mui/material';
import { useState } from 'react';
import './butcherypopup.scss';
import ButcheryPopup from '../butchery_form_page/form2'
export default function ButcheryModel() {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayForm,setDisplayForm]= useState(false);
    return (
        <>
        <a
        onClick={() => { handleOpen(); setDisplayForm(false) }}>Butchery/Abattoir</a>
         <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        sx={{ overflow: 'auto'}}

      >
            {!displayForm&& 
            // <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                // <div className="modal-dialog butchery-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <p className="heading-butchery">Butchery/Abattoir</p>
                            <p className="Abttoir-butchery">Join the largest community of Butchery/Abattoir</p>
                            <button type="button" className="btn btn-success  btn-butchery"
                            onClick={()=>setDisplayForm(true)}>Proceed to Form</button>
                        </div>
                    {/* </div> */}
                </div>
            // </div>
}
{displayForm&&<ButcheryPopup></ButcheryPopup>}
            </Dialog>
        </>
    )
}