import PropTypes from 'prop-types';

import { AboutContainer, ContactContainer } from './styles';

export default function About({ isMobile, isTablet, isTabletAndMobile }) {
  const handleTextClass = () => {
    if (isMobile) {
      return 'text-xs';
    }
    if (isTablet) {
      return 'text-sm';
    }
    return 'text-lg';
  };


  return (
    <>
      <AboutContainer id="contact"      
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" >

        <div className="about-section"  
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          {isTabletAndMobile && (<h4 className="about-title">Olá! Eu sou Isabella Cayuela,</h4>)}

          <div className="img-container">
            <div
              className="image"
              alt="Isabella Cayuela"
            />
          </div>

          <div className="text-xs text-container">
            {!isTabletAndMobile && (<h4 className="about-title">Olá! Eu sou Isabella Cayuela,</h4>)}

            <p className={handleTextClass()}>
              Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe
              a embarcar na sua jornada de autoconhecimento e autocuidado.
            </p>

            <p className={handleTextClass()}>
              Minha missão é transformar a vida das pessoas através da prática,
              fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão.
            </p>

            <p className={handleTextClass()}>
              Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub,
              em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas
              de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas
              na plataforma toda semana.
            </p>

            <p className={handleTextClass()}>
              Através da minha metodologia, tivemos mais de 500 vidas impactadas
              e transformadas. Vem fazer parte dessa comunidade também!
            </p>
          </div>
        </div>
      </AboutContainer>

      <ContactContainer >
        <h4 className={`doubt-about-title`}>Ainda com dúvidas?</h4>
        <button className="doubt-about-button" type="button">
          <a
            href="https://api.whatsapp.com/send/?phone=5531996793158"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONVERSE COMIGO
          </a>
        </button>
      </ContactContainer>
    </>
  );
}

About.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};
