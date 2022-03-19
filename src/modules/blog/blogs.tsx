import React from "react";
import arrow from "./assets/img/Icon (1).png";
import axios from "axios"
import './assets/blog.scss'
import { Link } from "react-router-dom";
import { array } from "yargs";
import { url } from "inspector";



class Blogtable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            blogs: [],
            arrayOne: [],
            // arrayTwo:[]
            url:'http://localhost:3005/'
        }
    }
    componentDidMount() {

        axios.get("http://localhost:3005/blogs")
            .then(res => {
                // console.log(res.data);
                this.setState({ blogs: res.data })
                // console.log(this.state.blogs.splice(0,28));

                let mid = Math.round(this.state.blogs.length / 2)
                let end = this.state.blogs.length
                // console.log("vlogs",blogs);

                if (this.state.blogs.length > 18 ) {
                    this.setState({ arrayOne: [this.state.blogs.splice(mid, end), this.state.blogs.splice(0, mid)] })
                } else {
                    this.setState({ arrayOne: [...this.state.arrayOne , this.state.blogs] })
                }
                // console.log(array); 
            })
    }
    render() {

        // let len = this.state.blogs.length ;
        // console.log(this.state.arrayOne);

        return (

            <div className="blog-component">
                <section className="blog text-center">
                    <h1 >Blog</h1>
                    <span className="aboutus-content ">Home/Blog</span>
                </section>
                <section className="blog-content">
                    <article className="text-center txt">The latest and best articles selected by our editorial choice</article>
                </section>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators text-center">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        {this.state.arrayOne.map((e: any, i: any) => {
                            // console.log(e);
                            
                            let ind = 0;
                            let total = 0;
                            if (i !== 0) {
                                return (
                                    <div className="carousel-item active ">
                                        <div className="main_box">
                                        {e.map((x: any, y: any) => {
                                            // console.log(x);
                                            
                                            if (ind % 5 === 0) {
                                                ind++
                                                total++
                                                // console.log(i);
                                                return (<Link to={"/blogContent?id="+x.id}><div className="first_box" style={{background: this.state.url +e.photo}}key={x.id} >
                                                    <img className="blogImg" src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title">{x.topic}</p>
                                                </div></Link>)
                                            } else if (ind === 6) {
                                                ind = 1; 
                                                return (<Link to={"/blogContent?id="+x.id}><div className="first_box" key={x.id} >
                                                    <img className="blogImg" src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title">{x.topic}</p>
                                                </div></Link>)
                                            } else {
                                                // console.log(i);
                                                ind++
                                                return (<Link to={"/blogContent?id=" + x.id}><div className="second_box" key={x.id} >
                                                    <img className="blogImg"  src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title" >{x.topic}</p>
                                                </div></Link>)
                                            }
                                        })

                                        }
                                    </div></div>
                                )
                            } else {
                                return (
                                    <div className="carousel-item">
                                        <div className="main_box">
                                        {e.map((x: any, y: any) => {
                                            if (ind % 5 === 0) {
                                                ind++
                                                // console.log(i);
                                                return (<Link to={"/blogContent?id=" + x.id}><div className="first_box" key={x.id} >
                                                     <img className="blogImg" src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title">{x.topic}</p>
                                                </div></Link>)
                                            } else if (ind === 6) {
                                                ind = 1; return (<Link to={"/blogContent?id=" + x.id}><div className="first_box" key={x.id} >
                                                     <img className="blogImg" src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title">{x.topic}</p>
                                                </div></Link>)
                                            } else {
                                                // console.log(i);
                                                ind++
                                                return (<Link to={"/blogContent?id=" + x.id}><div className="second_box" key={x.id} >
                                                    <img className="blogImg" src={"http://localhost:3005/"+x.photo} />
                                                    <p className="blog_title" >{x.topic}</p>
                                                </div></Link>)
                                            }
                                        })

                                        }
                                    </div></div>
                                )
                            }
                        })

                        }
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}

                </div>
                {/* {this.state.blogs.map((x: any, i: any) => {
                            // console.log(x.title);
                            if (ind % 5 === 0) {
                                ind++
                                // console.log(i);
                                return (<Link to={"/blogContent?id=" + x.id}><div className="first_box" key={x.id} >
                                    <p className="blog_title">{x.title}</p>
                                </div></Link>)
                            } else if (ind === 6) {
                                ind = 1;                               return (<Link to={"/blogContent?id=" + x.id}><div className="first_box" key={x.id} >
                                    <p className="blog_title">{x.title}</p>
                                </div></Link>)
                            } else {
                                // console.log(i);
                                ind++
                                return (<Link to={"/blogContent?id=" + x.id}><div className="second_box" key={x.id} >
                                    <p className="blog_title" >{x.title}</p>
                                </div></Link>)
                            }

                        })
                        }  */}



            </div>
            // </div>
        );
    }
}

export default (Blogtable);
// export default Blogtable;
// this.state.blogs.map((x: any, i: any) => {
//     return(<div className="single_box">
//         {(i % 5 === 0) ?
//         <div className="first_box">
//         </div>:<div className="second_box"></div>
//     }
//         </div>)
// })




{/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}




// let start =0;
// let end =12;
// console.log( Math.round(this.state.blogs.length/12));

// for( let i=0;i<= Math.round(this.state.blogs.length/12);i++){
//     // console.log(this.state.blogs.splice(start,end));

//     this.setState({array:[...this.state.array,this.state.blogs.splice(start,end)]})
//     start += 12
//     if(end+12 < this.state.blogs.length ){
//         end = this.state.blogs.length -start
//     }else{
//         end +=12
//     }

// }








// {
//     this.state.blogs.map((x: any, i: any) => {
//         if (i % 5 === 0) {
//             return (<div className="first_box">
//             </div>)
//         } else {
//             return (<div className="second_box"></div>)
//         }
//     })

// }
// method one


{/* <div className="d-lg-flex justify-content-between main_box  ">
<div className="left_box">
    <div className="first_box md-2 "><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p></div>
    <div className="d-lg-flex justify-content-between two_box">
        <div className="second_box"><p className="info_ver">WHY DO ROASTERS
            CROW ALL DAY?</p> </div>
        <div className="third_box "><p className="info_ver">THE MERIT OF RUNNING
            AN AGRICU-LTURAL BU.....</p></div>
    </div>
    <div className="img_hor"><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p><img className="arrow_img" src={arrow} /></div>
    <div className="d-lg-flex justify-content-between two_box">
        <div className="second_box"><p className="info_ver">COW MILK
            SHOULDN’T BE CONSUM....</p> </div>
        <div className="third_box"><p className="info_ver">THE MERIT OF RUNNING
            AN AGRICU-LTURAL BU.....</p></div>
    </div>
</div>
<div className="right_box">
    <div className="d-lg-flex justify-content-between two_box">
        <div className="second_box "><p className="info_ver">COW MILK
            SHOULDN’T BE CONSUM....</p> </div>
        <div className="third_box img_box"><p className="info_ver">THE MERIT OF RUNNING
            AN AGRICU-LTURAL BU.....</p><img className="arrow_img" src={arrow} /></div>
    </div>
    <div className="first_box md-2"><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p></div>
    <div className="d-lg-flex justify-content-between two_box">
        <div className="second_box"><p className="info_ver">COW MILK
            SHOULDN’T BE CONSUM....</p> </div>
        <div className="third_box"><p className="info_ver">THE MERIT OF RUNNING
            AN AGRICU-LTURAL BU.....</p></div>
    </div>
</div>
</div> */}