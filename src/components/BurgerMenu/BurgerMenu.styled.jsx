import styled from "@emotion/styled";
import { FiMenu } from "react-icons/fi";

export const MobileMenuBurger = styled(FiMenu)`
color: #FFC107;

@media (min-width: 1200px){
    display: none;
}
`