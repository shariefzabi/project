import React from 'react';
import './dashboard.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Dashboard(props:any) {
  const handleAdd=()=>{props.onAdd()}
    return (
      <div className="dashboard">
        <h1>Dashboard {props.state.counter}</h1>
        <button onClick={handleAdd}>add</button>
        {/* <TrackOrder></TrackOrder>  */}
        {/* <Orders></Orders> */}
        {/* <Invoice></Invoice> */}
          {/* <LogOut></LogOut>         */}
         {/* <Payments></Payments> */}
       {/* <Footer></Footer>
         */}
          <Link to="/">Go to Home</Link>
      </div>
    );
}

const mapStateToProps = (state:any) => {
  return {
      state
  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
      onAdd: () => dispatch({ type:'ADD'}),
      onSubtract: () => dispatch({ type: 'SUBTRACT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);