import './LoginPage.css'
import axios from 'axios';

function LoginPage() {
    return (
        <>
        <div className='conatiner-fluid backgroundDiv'>
            <div className='centerDiv'>
                <div className='container-fluid'>
                    <div className='row' style={{ padding: '15px' }}>
                        {<div className='col-md-6'>
                            <img src='./assets/loginImage.png' className="centerImage" />

                        </div>}
                        <div className='col-md-6' >
                            <div className='row' style={{ textAlign: "center", paddingTop: "50px" }}>
                                <h5 className='memberLoginHeading' > Member Login</h5>
                            </div>

                            <div className='row' style={{ textAlign: "center", marginTop: "40px" }}>
                                <div className='input-icons'>
                                    <i className="fa fa-envelope icon"></i>
                                    <input className='inputText' type="text" placeholder='Employee ID'></input>
                                </div>
                                <div className='input-icons' style={{ marginTop: "20px" }}>
                                    <i className="fa fa-key icon"></i>
                                    <input className='inputText' type="password" placeholder='Password'></input>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                    <button onClick={checkLoginVerification} className='loginButton' > Log In</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )


    function checkLoginVerification() {
        console.log(" Button CLicked ")
        var data =
        {
            employeeID: 'Priyam',
            password: 'Admin@123'
        }
        axios.post('http://localhost:2000/test', data
        ).then(res => {
            console.log(" Result ", res)
        })
    }


}

export default LoginPage;