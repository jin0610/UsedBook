import Footer from "../Components/Footer"
import MainForm from "../Components/MainPage/MainForm"
import Navigation from "../Components/Navigation"
import AuthContainer from "../Containers/AuthContainer"

const MainPage = () =>{
    return(
        <div>
            <AuthContainer/>
            <MainForm/>
            <Footer/>
        </div>

    )
}

export default MainPage