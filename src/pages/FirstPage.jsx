import React from "react";
import {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel
} from "../styles/FirstPage.js";

function LandingPage() {
  return (
    <PageWrapper>
      {/* Başlıkta küçük bir emoji veya vurgu profesyonel bir karşılama hissi verir */}
      <Heading>Hoş Geldiniz !</Heading>
      <SubHeading>
        Devam etmek için lütfen giriş türünüzü seçiniz.
      </SubHeading>

      <OptionsGrid>

        {/* --- GÖNÜLLÜ KARTI --- */}
        <OptionCard to="/volunteer-login">
          {/* Modern 'User/Person' İkonu */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          <OptionLabel>Gönüllü Girişi</OptionLabel>
        </OptionCard>

        {/* --- FİRMA KARTI --- */}
        <OptionCard to="/company-login">
          {/* Modern 'Business/Building' İkonu */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>

          <OptionLabel>Firma Girişi</OptionLabel>
        </OptionCard>

      </OptionsGrid>
    </PageWrapper>
  );
}

export default LandingPage;