import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const UserLink = styled(NavLink)`
color: white;
`

export const LogoutBtn = styled(Button)(({theme}) => ({
    backgroundColor: "white"
}))