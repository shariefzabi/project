import './home.scss';
import { Link } from "react-router-dom";
import Counter from '../../containers/counter';


function Home(props:any){
    return (<div className='home'>
        <h1>Home component</h1>
        <Counter></Counter>
        <Link to="dashboard">Click to view our dashboard</Link>
    </div>);
}

export default Home;