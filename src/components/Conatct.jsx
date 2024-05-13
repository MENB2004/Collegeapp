import React from 'react'

const Conatct = () => {
  return (
    <div>
      <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" style={{ backgroundColor: 'black', color: 'white' }}>
                                    <h1>Contact Us</h1>
                                    <p>Sree Buddha College of Engineering <br />
                                        Pattoor P.O., Nooranad <br />
                                        Alappuzha District <br />
                                        Kerala <br />
                                        India <br />
                                        Pin:690529 <br /> College: +91479 2375440,42; <br />
                                        e-mail: principal@sbce.ac.in <br />
                                        <br />
                                        Please use the contact form incase you need to contact the personel directly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3" style={{color:'white'}}>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter Name' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" placeholder='Enter Email' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder='Enter Subject' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Conatct
