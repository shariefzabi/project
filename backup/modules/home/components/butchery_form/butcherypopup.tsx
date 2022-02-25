import './butcherypopup.scss'
export default function ButcheryPopup() {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Butchery/Abattoir
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog butchery-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <p className="heading-butchery">Butchery/Abattoir</p>
                            <p className="Abttoir-butchery">Join the largest community of Butchery/Abattoir</p>
                            <button type="button" className="btn btn-success  btn-butchery">Proceed to Form</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}