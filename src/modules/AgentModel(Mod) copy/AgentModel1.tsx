import "./style.scss";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Dialog } from "@mui/material";
import BeanAgentPopup from "../be an agent form copy/form1";
export default function AgentModel() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <>
      <h6
        className="agent_dropDown"
        onClick={() => {
          handleOpen();
          setDisplayForm(false);
        }}
      >
        Be an Agent
      </h6>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
          sx={{ overflow: "auto" }}
        >
          {!displayForm && (
            <div className="model-content">
              <div className="text-center pop_up_heading">
                <p>Be an Agent</p>
              </div>
              <div className="paragraph">
                <p>
                  Join the largest community of veterinary doctors, breed
                  improvement specialists, and animal science professionals.{" "}
                </p>
              </div>
              <div className="mb-3 text-center">
                <img src={require("./img/Group 3.png")} alt="doctors" />
              </div>
              <div className="mb-3 text-center be_a_agent">
                <p>Becoming our Agent</p>
              </div>
              <div className="mb-3 text-center ">
                <ul className="livestock247">
                  <li>
                    A Livestock247.com agent MUST be a qualified veterinary
                  </li>
                  <li>
                    professional certified by the veterinary council of Nigeria
                    (VCN)
                  </li>{" "}
                  <li>or the Nigeria institute of animal science (NIAS)</li>
                </ul>
              </div>
              <div className="mb-3 text-center">
                <img src={require("./img/Group 2.png")} alt="qwerty" />
              </div>
              <div className="mb-3 text-center be_a_agent">
                <p>Role of The Agent</p>
              </div>
              <div className="mb-3 text-center  ">
                <p className="paragraph">
                  The Livestock247.com agent ordinarily has an existing
                  relationship with a livestock producer, rancher or merchant.
                  And as such, he/she serves as the link between the platform
                  and the livestock owner by ensuring pre-slaughter evaluation
                  as established by the quality assurance department of
                  Livestock247.com
                </p>
              </div>
              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-success form_button"
                  onClick={() => setDisplayForm(true)}
                >
                  Proceed to Form
                </button>
              </div>
            </div>
          )}
          {displayForm && <BeanAgentPopup></BeanAgentPopup>}
        </Dialog>
      </div>
    </>
  );
}
