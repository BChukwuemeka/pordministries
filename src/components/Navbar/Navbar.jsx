import { Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from "./Navbar.elements";
import {FaBars, FaTimes} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";
import { Button } from "../../globalStyles";
// import Logo from '../../images/logo.png';
import LogoImg from '../../components/Cross/CrossImg'






const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }



    useEffect(() => {
        showButton()
    }, []);


window.addEventListener('resize', showButton)





    return ( 
        <>
        <IconContext.Provider value={{color: 'fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                <LogoImg />              
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            HOME
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about'>
                        ABOUT
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services'>
                        GIVE
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/activities'>
                        ACTIVITIES
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/testimonies'>
                        TESTIMONIES
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/gallery'>
                        GALLERY
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (<NavBtnLink to='signup'>
                            <Button primary>I'M NEW</Button>
                        </NavBtnLink>) : (<NavBtnLink to='/signup'>
                            <Button fontBig primary>
                            I'M NEW
                            </Button>
                        </NavBtnLink>)}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>

     );
}
 
export default Navbar;