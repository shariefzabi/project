import React from "react";
import arrow from "./assets/img/Icon (1).png";
import axios from "axios"
import './assets/styles.css'

class Blogtable extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            blogs: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                console.log(res.data);
                this.setState({ blogs:res.data })
            })
        let array = [];
        for (let i = 0; i <= Math.round(this.state.blogs.length / 3); i++) {
            array[i] = i
        }
        // console.log(array);

    }
    proceed(){
        // alert("hii");
        window.open("/blogContent");
    }
    render() {
        let ind=0;
        return (

            <div>
                <section className="blog text-center">
                    <h1 >Blog</h1>
                    <span className="aboutus-content ">Home/Blog</span>
                </section>
                <section className="blog-content">
                    <article className="text-center txt">The latest and best articles selected by our editorial choice</article>
                </section>
                <section className="text-center main_box" >
                    {this.state.blogs.map((x: any, i: any) => {
                        console.log(x.title);
                        
                        if (ind % 5 === 0) {
                            ind++;
                            console.log(i);
                            return (<div className="first_box" onClick={this.proceed}>
                                <p className="blog_title">{x.title}</p>
                            </div>)
                        }else if(ind === 6){
                            ind =-1
                            return (<div className="first_box" onClick={this.proceed}>
                            <p className="blog_title">{x.title}</p>
                        </div>)
                        }else {
                            console.log(i);
                            ind++;
                            return (<div className="second_box" onClick={this.proceed}><p className="blog_title" >{x.title}</p></div>)
                        }
                       
                    })
                    }
                </section>
            </div>
        );
    }
}

export default Blogtable;
// this.state.blogs.map((x: any, i: any) => {
//     return(<div className="single_box">
//         {(i % 5 === 0) ?
//         <div className="first_box">
//         </div>:<div className="second_box"></div>
//     }
//         </div>)
// })


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