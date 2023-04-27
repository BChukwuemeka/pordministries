import { IconContext } from "react-icons/lib";
import {GiCrystalBars} from 'react-icons/gi'
// import {GiCrystalBars, GiCutDiamond, GiRock} from 'react-icons/gi'
import { FeaturesCard, FeaturesCardCost, FeaturesCardFeature, FeaturesCardFeatures, FeaturesCardIcon, FeaturesCardInfo, FeaturesCardLength, FeaturesCardPlan, FeaturesContainer, FeaturesHeading, FeaturesSection, FeaturesWrapper } from "./FeaturesCardElements";




const FeaturesBoard = () => {
    return ( 
        <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
            <FeaturesSection>
                <FeaturesWrapper>
                    
                    <FeaturesContainer>
                        <FeaturesCard to='/sign-up'>
                            <FeaturesCardInfo>
                                
                                    


                                <FeaturesCardPlan>Starter Pack</FeaturesCardPlan>
                                <FeaturesCardCost>$99.99</FeaturesCardCost>
                                <FeaturesCardLength>per month</FeaturesCardLength>
                                <FeaturesCardFeatures>
                                   
                                    <FeaturesCardFeature>$10,000 Budget</FeaturesCardFeature>
                                    <FeaturesCardFeature>Retargeting analytics</FeaturesCardFeature>
                                    <FeaturesHeading><FeaturesCardIcon>
                                <GiCrystalBars/>
                                </FeaturesCardIcon></FeaturesHeading>
                                </FeaturesCardFeatures>
                            </FeaturesCardInfo>
                        </FeaturesCard>
                    </FeaturesContainer>
                </FeaturesWrapper>
            </FeaturesSection>
        </IconContext.Provider>
     );
}
 
export default FeaturesBoard;