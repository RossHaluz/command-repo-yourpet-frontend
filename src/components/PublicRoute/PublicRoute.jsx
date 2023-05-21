import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsUserLogin } from "redux/auth/selectors"


export const PublicRoute = ({component: Component, redirectTo = "/"}) => {
const isLoggeIn = useSelector(selectIsUserLogin);

return isLoggeIn ? <Navigate to={redirectTo}/> : Component
} 