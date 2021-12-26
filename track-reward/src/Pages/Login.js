import '../App.css';
import {useState} from 'react'

const Login = ({login}) => {
    const [details,setDetails]=useState({userEmail:"",pwd:""});

    const submitHandler=(e)=>{
        e.preventDefault();

        login(details);
    }

    return (
        <>
        <h4 style={{marginTop:"10px",fontSize:"24px",position:"fixed",top:"10px",left:"41.5%",fontFamily:"Segoe UI" }}>Track And Reward</h4>
        <form onSubmit={submitHandler}>
            <div className='form'>
                <h2 >Login</h2>
                {/*ERROR*/}
                <div className='form-group'>
                    <label htmlFor='email'>Email  :   </label>
                    <input className='loginInput' type='email' name='email' id='email' onChange={e=>setDetails({...details,userEmail:e.target.value})} value={details.userEmail} placeholder='Email ID'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input  className='loginInput' type='password' name='password' id='password' onChange={e=>setDetails({...details,pwd:e.target.value})} value={details.pwd} placeholder='*****'/>
                </div>
                <input className="btn" style={{width:'100%',marginTop:'30px'}} type='submit' value="Login"/>
            </div>
        </form>
        </>
    )
}

export default Login
