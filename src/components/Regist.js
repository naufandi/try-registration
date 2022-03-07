import React from 'react';

const Regist = () => {
    return(
        <div className='flex-row align-items-center'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card p-4'>
                            <div className='card-body'>
                            
                                <h2 class="bg-warning">You don't have account yet, please create a new</h2>

                                <h2>Create New Account</h2>
                                <div className='form-group'>
                                    <label>Last name</label>
                                    <input placeholder='Last name' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>First name</label>
                                    <input placeholder='First name' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Mobile phone number</label>
                                    <input placeholder='Mobile phone number' className='form-control'/>
                                </div>

                                <br></br>
                                
                                <h2>Address</h2>

                                <div className='form-group'>
                                    <label>Address</label>
                                    <input placeholder='Address' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Country/Location</label>
                                    <input placeholder='Select Country/Location' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Province/District</label>
                                    <input placeholder='Province/District' className='form-control'/>
                                </div>

                                <br></br>
                                <h2>Contacts</h2>

                                <div className='form-group'>
                                    <label>Province/District</label>
                                    <input placeholder='Province/District' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>First name</label>
                                    <input placeholder='First name' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Date of birth</label>
                                    <input placeholder='DD' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Month</label>
                                    <input placeholder='MM' className='form-control'/>
                                </div>

                                <div className='form-group'>
                                    <label>Year</label>
                                    <input placeholder='YYYY' className='form-control'/>
                                </div>
                                <br></br>
                                <h2>Standard Privacy Note</h2><br></br>
                                <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h8>
                                <br></br><br></br>
                                <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h8>
                                <br></br><br></br>
                                <button className='btn btn-warning'>Create customer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regist