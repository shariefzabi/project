import photo from './asset/img/serachicon.svg';
import { AiFillCaretDown } from "react-icons/ai";

import './statistics.css'
export default function Statistics() {
    return (
        <>
            <section id="statistics">
                <div className="statistics">
                    <section class="statSection">
                        <aside className="row">
                            <div className="col-lg-11 col-md-11 col-sm-11 col-11 p-0">
                                <h2>Statistics</h2>
                            </div>
                            <div className="dropdown col-lg-1 col-md-1 col-sm-1 col-1 col">
                                <a className="edit-toggler text-secondary" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="bi bi-three-dots edit-dropdown" viewBox="0 0 16 16">
                                        <path
                                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </aside>
                        <main class="row stat ">
                            <section class="col-lg-1 col-md-1 col-sm-0 col-0"></section>
                            <section class="col-lg-10 col-md-10 col-sm-12 col-12 row">
                                <p>Payments <AiFillCaretDown></AiFillCaretDown></p>
                                <img src={photo} />
                            </section>
                            <section class="col-lg-1 col-md-1 col-sm-0 col-0">
                            </section>
                        </main>
                    </section>
                </div>
            </section>
        </>
    )
}

