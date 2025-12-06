import React from "react";
import {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel
} from "../styles/FirstPage.js";  // 🔥 Styled bileşenleri buradan alıyoruz

function LandingPage() {

  const handleNonVolunteer = (type) => {
    alert(`${type} girişi tıklandı!`);
  };

  return (
    <PageWrapper>
      <Heading>Hoşgeldiniz!</Heading>
      <SubHeading>Lütfen giriş yapmak istediğiniz kullanıcı türünü seçiniz.</SubHeading>

      <OptionsGrid>

        {/* Gönüllü */}
        <OptionCard to="/volunteer-login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-10.5A2.25 2.25 0 00.75 5.25V18.75A2.25 2.25 0 003 21h10.5A2.25 2.25 0 0015.75 18.75V15" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l3 3m0 0l-3 3m3-3H9" />
          </svg>
          <OptionLabel>Gönüllü Girişi</OptionLabel>
        </OptionCard>

        {/* Firma */}
        <OptionCard as="button" onClick={() => handleNonVolunteer("Firma")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3h6v2.25a2.25 2.25 0 002.25 2.25H15v13.5h6V3H15v2.25a2.25 2.25 0 01-2.25 2.25H9V3H3z" />
          </svg>
          <OptionLabel>Firma Girişi</OptionLabel>
        </OptionCard>

        {/* Yönetici */}
        <OptionCard as="button" onClick={() => handleNonVolunteer("Yönetici")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 0l3 3m-3-3L9 6m0 0v3m3 3h3M9 9H6m9 3h3m-6 0v3m0 0l3 3m-3-3l-3 3" />
          </svg>
          <OptionLabel>Yönetici Girişi</OptionLabel>
        </OptionCard>

      </OptionsGrid>
    </PageWrapper>
  );
}

export default LandingPage;
