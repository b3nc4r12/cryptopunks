import styled from "styled-components"

const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <PunkLogo src="https://i.ibb.co/QY6D6MV/cryptopunk-logo.png" />
            </LogoContainer>

            <SearchBar>
                <SearchIconContainer>
                    <SearchIcon src="https://i.ibb.co/bgZTLCG/search.png" />
                </SearchIconContainer>
                <SearchInput type="text" placeholder="Collection, item, or user..." />
            </SearchBar>

            <HeaderItems>
                <HeaderItem>Drops</HeaderItem>
                <HeaderItem>Marketplace</HeaderItem>
                <HeaderItem>Create</HeaderItem>
            </HeaderItems>

            <HeaderActions>
                <ThemeSwitchContainer>
                    <ThemeSwitchIcon src="https://i.ibb.co/3CsNDT2/theme-switch.png" />
                </ThemeSwitchContainer>
            </HeaderActions>

            <LoginButton>GET IN</LoginButton>
        </Container>
    )
}

export default Header

const Container = styled.header`
    color: white;
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    div {
        margin: 10px;
    }
`

const LogoContainer = styled.div``

const PunkLogo = styled.img`
    width: 200px;
`

const SearchBar = styled.div`
    background-color: #1c1c1e;
    height: 50px;
    flex: 1;
    display: flex;
    border-radius: 50px;
    align-items: center;
    padding-right: 15px;
    padding-left: 5px;
`

const SearchIconContainer = styled.div`
    margin: 10px;
`

const SearchIcon = styled.img``

const SearchInput = styled.input`
    border: none;
    background-color: transparent;
    width: 100%;
    outline: none;
    color: #eee;
    font-size: 16px;
`

const HeaderItems = styled.div`
    display: flex;
    color: #a1a5b0;
`

const HeaderItem = styled.p`
    margin: 10px;
    cursor: pointer;
`

const HeaderActions = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 10px;
    }
`

const ThemeSwitchContainer = styled.div`
    display: flex;
    background-color: #1c1c1e;
    border-radius: 50px;
    padding: 15px;
    justify-content: center;
    align-items: center;
    object-fit: contain;\
    cursor: pointer;
`

const ThemeSwitchIcon = styled.img`
    height: 25px;
`

const LoginButton = styled.div`
    background: linear-gradient(to right, #59f9b7, #66feea);
    padding: 15px 40px;
    border-radius: 50px;
    color: black;
    cursor: pointer;
`