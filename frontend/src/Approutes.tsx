import {Route, Routes,Navigate} from "react-router-dom"
import Layout from "./layout/Layout"
import Homepage from "./pages/Homepage"
import AuthCallbackPage from "./pages/AuthCallbackPage"


const Approutes = () =>{
return(
<Routes>
<Route path="/" element={<Layout><Homepage/>
</Layout>}/>
<Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
<Route path="*" element={<Navigate to="/"/>}/>
<Route path="/auth-callback" element={<AuthCallbackPage/>}/>
</Routes>


)

}
export default Approutes 