import React from "react";
import Sidebar from "../profile/sidebar/sidebar";
import "./logOut.scss";

export default function LogOut() {
  return (
    <>
    <Sidebar></Sidebar>
    <main className="logout-container" id="mainContent">
      <section id="login_page">
        <div className="logout">
          <section>
            <aside>
              <div className="p-0">
                <h2>Log out</h2>
              </div>
            </aside>
            <main className="row box">
              {/* <section className="col-md-1 col-sm-1 col-1"></section> */}

              <section className="col-md-10 col-sm-10 col-10 row">
                <div>
                  <h3>Time to Go?</h3>
                  <p>
                    Please fill out the following form with your login
                    credentials:
                  </p>
                </div>

                <form>
                  <div className="position-relative">
                  <label className="form-label my-3">
                    Name<span>*</span>
                  </label>
                  <img className="user-icon" src={require("./assets/user.png")}></img>
                  
                    
                      <input className="form-control" type="text" placeholder="User Name" />
                    
                    <div className="col-md-1 col-sm-1 col-1 pt-1">
                      {/* <i className="far fa-user"></i> */}
                    </div>
                  </div>
                  
                <div className="position-relative">
                  <label>
                    Password<span>*</span>
                  </label>
                  <img className="lock-icon" src={require("./assets/lock.png")}></img>
                  
                    
                      <input className="form-control" type="password" placeholder="Password" />
                    
                    <div className="col-md-1 col-sm-1 col-1 pt-1">
                      {/* <i className="fas fa-unlock-alt"></i> */}
                    </div>
                </div>
                  
                  <button className="btn btn-success my-5">
                    <a href="#">Log In</a>
                  </button>
                </form>
              </section>
              {/* <section className="col-md-1 col-sm-1 col-1"></section> */}
            </main>
          </section>
        </div>
      </section>
    </main>
    </>
  );
}
