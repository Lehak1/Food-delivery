import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";




const AuthCallbackPage = () =>{
    const navigate =useNavigate();
const {user} =useAuth0();
const {createUser} =useCreateMyUser();
const hasCreatedUser=useRef(false);

useEffect(() =>{
if(user?.sub && user?.email && !hasCreatedUser.current){
    createUser({auth0Id:user.sub,email:user.email});
hasCreatedUser.current=true;

}
navigate("/"); 
},[createUser,navigate,user]);
return <>Loading...</>
};


export default AuthCallbackPage;  
//useref isliye use kiya taaki AuthCallback sirf ek baar run ho
//useref stores the state value and kabhi state change bhi hoti hai tab bhi it does not trigger