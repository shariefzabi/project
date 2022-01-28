import Profile from './components/Profile';
import './dashboard.css';


function Dashboard(){
    return (<div className='dashboard'>
        <h1>Dashboard component</h1>
        <Profile></Profile>
    </div>);
}

export default Dashboard;