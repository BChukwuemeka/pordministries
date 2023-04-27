import { Link } from "react-router-dom";
import { ButtonS, Container } from "../../globalStyles";
import { Heading, Img, ImgWrapper, InfoVideo, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine, InfoButton } from "./InfoSection.elements";

const InfoSection = ({
    linkTo,
    inverse,
    lightBg,
    img,
    alt,
    start, 
    primary, 
    imgStart,
    buttonLabel,
    lightTopLine, 
    lightText, 
    topLine, 
    description, 
    headline, 
    lightTextDesc }) => {
    return ( 
        <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}> {topLine} </TopLine>
                            <Heading lightText={lightText}>{headline} </Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle> 
                            <Link to={linkTo} style= {{textDecoration: 'none'}}>
                                <InfoButton big fontBig primary={primary} inverse= {inverse}>
                                    {buttonLabel}
                                </InfoButton>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>

                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>

                </InfoRow>
            </Container>
        </InfoSec>
        </>
     );
}
 
export default InfoSection;