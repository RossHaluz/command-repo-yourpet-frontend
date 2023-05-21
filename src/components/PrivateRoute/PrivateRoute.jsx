const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")
const { selectIsUserLogin, selectIsRefreshing } = require("redux/auth/selectors")


export const PrivateRoute = ({component: Component, redirectTo = "/"}) => { 
    const isLogin  = useSelector(selectIsUserLogin)
    const isRefreshing = useSelector(selectIsRefreshing);

    const shouldRedirect = !isLogin && !isRefreshing

    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;

}