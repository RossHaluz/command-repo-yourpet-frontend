import styled from "@emotion/styled";


export const MainHeader = styled.header`
  outline: 1px solid red;
`

export const HeaderContainer = styled.div`
    outline: 1px solid red;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 480px){
        width: 480px;
    };

@media (min-width: 768px) {
    width: 768px;
};

@media (min-width: 1200px){
    width: 1200px;
};
    
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 32px 0px;

    @media (max-width: 1200px) {
        justify-content: space-between;
    }

`

export const AuthNavigation = styled.div`
    display: flex;
    align-items: center;
`