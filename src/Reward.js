import React from 'react'
import "../src/assets/css/styles.css";
import Navbar from './components/Navbar';
const Reward = () => {
  function goBack() {
    window.history.back();
}
  return (
   
    <> <Navbar/>

<section>

  <div className="container">
  <div className="top-head">
    <i style={{color: 'black', fontSize: 20}} onClick={goBack} className="fa fa-arrow-left arrow" aria-hidden="true" />
    Recharge
    </div>
    <div className="bank-add">
      <div className="row badd">
        <div className="col-2 uname">
          <i style={{color: 'black', fontSize: 20}} className="fa fa-gift" aria-hidden="true" />
        </div>
        <div className="col-10">
          <input className="inputfield" placeholder="Please enter the gift code" type="text" />
        </div>
      </div>
    </div>
    <div className="send">
      <button className="send-button">Submit</button>
    </div>
  </div>
</section>

    </>
  )
}

export default Reward