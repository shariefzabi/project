import './home.scss';
import { Link } from "react-router-dom";



function Home(props:any){
    return (<div className='home'>
        <h1>Home component</h1>
        <Link to="dashboard">Click to view our dashboard</Link>
    </div>);
}

export default Home;