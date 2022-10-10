import SignupForm from "../Components/AuthPage/SignupForm"

const SignupContainer = () =>{
    const [form, setForm] = useState({
        std_name:"",
        password:"",
        email: "",
        phonenumber:""
    })
    return(
        <SignupForm form={form}/>
    )
}

export default SignupContainer