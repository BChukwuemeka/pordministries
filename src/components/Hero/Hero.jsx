import { Link } from "react-router-dom";
import { ButtonS, Container, MainHeading } from "../../globalStyles";
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from "./HeroStyles";



const Hero = ({videoUrl}) => {
    return ( 
        <HeroSection>
            <HeroVideo src={videoUrl}  autoPlay loop muted/>
            <Container>
                <MainHeading>Pool Of Redemption Assembly</MainHeading>
                <HeroText>
                    Jesus is enough for any situation you find yourself in
                </HeroText>
                <ButtonWrapper>

                    <Link to="signup" style={{textDecoration: 'none'}}>
                        <ButtonS>New Here?</ButtonS>
                    </Link>

                    <Link to="about" style={{textDecoration: 'none'}}>
                        <HeroButton >About Us</HeroButton>
                    </Link>

                </ButtonWrapper>
            </Container>
        </HeroSection>
     );
}
 
export default Hero;
