export default function Signu() {
    return (<>
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                    </div>
                    <div className="modal-body">
                        Hide this modal and show the first with the button below.
                    </div>
                    <div className="modal-footer">
                        <a className="text-decoration-none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</a>
                    </div>
                </div>
            </div><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        </>)
}