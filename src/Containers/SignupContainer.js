import SignupForm from "../Components/SignupForm"

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