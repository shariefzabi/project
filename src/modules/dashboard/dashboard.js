import Profile from './components/Profile';
import LogOut from './components2/logOut';


import './dashboard.css';


function Dashboard() {
    return (<div className='dashboard'>
        <h1>Dashboard component</h1>
        <Profile></Profile>
        <LogOut></LogOut>
    </div>);
}

export default Dashboard;