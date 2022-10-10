import SignupForm from "../Components/AuthPage/SignupForm"

const SignupContainer = () =>{
    const [form, setForm] = useState({
        std_name:"",
        password:"",
        password2:"",
        email: "",
        phonenumber:""
    })

    const onChange = e => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name] : value
        })
    };

    //폼 등록 이벤트 핸들러
    const onSubmit =e =>{
        console.log("회원가입")
        e.preventDefault();
        const { std_name,  password, password2, email, phonenumber} = form;
        // 하나라도 비어있다면
        if([std_name,  password, password2, email, phonenumber].includes('')){
            alert('빈칸을 모두 입력하세요.');
            return;
        }
        if (password !== password2){
            alert('비밀번호가 일치하지 않습니다.');
            setForm({
                ...form,
                password: '',
                password2: '',
            })
            return;
        }
        const data = {
            std_name,  password, email, phonenumber
        };
        // client.post('/api/auth/signup',queryString.stringify(data)).then(res => {
        //     console.log(res)
        //     console.log(data)
    
        //     if(res.status=== 200){
        //         console.log('회원가입 성공');
        //         alert('회원가입 성공');
        //         document.location.href = '/'
        //     }
            
        // }) 
    };

    // 컴포넌트가 처음 렌더링될때 form을 초기화함
    useEffect(() => {
        setForm({
            std_name:"",
            password:"",
            password2:"",
            email: "",
            phonenumber:""
        })
    }, []);
    return(
        <SignupForm form={form}
        onChange={onChange}
        onSubmit={onSubmit}/>
    )
}

export default SignupContainer