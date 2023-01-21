import styled from 'styled-components'
import { StyledLink } from '../utils/Atoms'
import '../styles/Presentation.css'
import '../styles/Home.css'
import { useTheme } from '../utils/hooks'
import { StyledTitle } from '../utils/Components'
import LightLogo from '../assets/logo-fond-blanc.png'
import RedLogo from '../assets/logo-fond-noir.png'
import ImagePresentation from '../assets/wetransfer_img_1210-jpg_2022-01-13_0808/DSC_2637.jpg'


const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
const HomeLogo = styled.img`
  width: 22rem;
`

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 2rem;
`

function Presentation() {
    const { theme } = useTheme()


    return (
      <LoginWrapper>
        
          <LeftCol>
            <div className='flex center'>
              <HomeLogo src={theme === 'light' ? RedLogo : LightLogo} />
            </div>
            
            <StyledForm>
            <StyledTitle theme={theme}>
            <section id="banniere_page1">
              <h1>Sh<span class="souligne">elter Even</span>ts</h1>

              <div class="detail_presentation">
                  <div class="imgdiv">
                      <img src={ImagePresentation} alt="Photo_de_présentation"/>
                  </div>
                  
                  <article class="present">
                      Shelter Events est plus qu’une simple agence, c’est l’envie de créer 
                          avec vous des moments inoubliables.
                      <p>Marthe & Aurélie vous accompagne dans la gestion et la mise en place complète
                          de votre événement en île de France : un anniversaire, un baby shower, un gender 
                          reveal, un baptême, une fête de naissance, un evjf, un départ en 
                          retraite ou toutes autres demandes.</p>
                      <p>L'objectif est de mettre en avant vos envies et votre créativité 
                          pour créer des événements qui vous ressemblent !</p>
                      <p>L'équipe a également à coeur d’aider toutes personnes souhaitant se lancer dans 
                          l'entreprenariat à travers l'organisation de sessions de rencontres entre futurs 
                          entrepreneurs et clients potentiels.</p>
                      <p>Leurs énergies et leurs parcours, vous apporterons une expérience humaine et 
                          professionnelle unique !</p>
                  </article>                    
              
              </div>
            
            </section>
            </StyledTitle>
            </StyledForm> 
          </LeftCol>
        
      </LoginWrapper>
    )
  }
  
  export default Presentation