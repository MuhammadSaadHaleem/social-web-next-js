
"use client"
import { Facebook } from "../config/firebase"
import { BsFacebook } from "react-icons/bs"

export default function login(){

    async function Facebooklogin() {
        await Facebook()
    }

    // const [emailUpdate, setEmailUpdate] = useState()
    // const [passwordUpdate, setPasswordUpdate] = useState()


    return(
    //     <div style={{ alignItems: 'center', border: '1px solid #ccc', width: "500px", alignItems: "center", justifyContent: "center" }} className="signIn">

    //     <h1 style={{ color: "white", }}>LOGIN</h1>
    //     <br></br>

    //     <button style={{ backgroundColor: '#007bff', width: '80%', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} /*onClick={Facebooklogin}*/>Continue with Facebook</button>
    //     <br></br>
    //     <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={emailValue} placeholder="Enter email here"></input>
    //     <br></br>
    //     <input style={{ padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '5px', margin: '10px 0' }} onChange={passwordValue} type="password" placeholder="Enter password here"></input>
    //     <br></br>
    //     <button style={{ backgroundColor: '#D70F64', width: '80%', color: "#fff", padding: '10px 20px', border: "2px solid #fff", borderRadius: '5px', cursor: 'pointer' }} onClick={signIn}>Sign In</button>

    //     <p >Don't have an account ? <span style={{ cursor: "pointer", color: "#fff" }} onClick={() => navigate('/')}>Click here</span> </p>

    // </div>

    <>
    <div className=" grid grid-cols-2">
        <div className=" bg-primary h-screen grid place-items-center">

            <BsFacebook className=" text-white text-[200px]"/>
        </div>


        <div className="grid place-items-center bg-slate-400">
            <div className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer">

                <BsFacebook className=" text-[30px]" />

                 
                 
                 <button onClick={Facebooklogin}>Login with Facebook</button>
                



            </div>
        </div>
    </div>
    
    
    </>
    )
}



// import { Facebook, login } from "../config/firebase";

// import Nabar from "./Navbar";

// import './signIn.css'

// function Signin() {

//     const [emailUpdate, setEmailUpdate] = useState()
//     const [passwordUpdate, setPasswordUpdate] = useState()

//     const navigate = useNavigate()

//     function emailValue(e) {

//         setEmailUpdate(e.target.value)

//     }

//     function passwordValue(e) {

//         setPasswordUpdate((e.target.value))

//     }

//     async function signIn() {

//         try {
//             await login(emailUpdate, passwordUpdate)
//             navigate('/dashboard')
//         }

//         catch (e) {
//             alert(e.message)
//         }


//     }


//     async function Facebooklogin() {
//         await Facebook()
//     }


//     return (
//         <>
//             <Nabar />
           

//         </>
//     )
// }




