import React from "react";
import {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel,
  FooterWrapper,
  FooterLinks,
  FooterMission
} from "../styles/FirstPage.js";

function LandingPage() {
  return (
    <PageWrapper>
      
      {/* Navbar Yok - Başlık Birleştirildi */}
      <Heading>VONUION'A HOŞ GELDİNİZ</Heading>
      
      <SubHeading>
        Devam etmek için lütfen giriş türünüzü seçiniz.
      </SubHeading>

      <OptionsGrid>

        {/* --- GÖNÜLLÜ KARTI --- */}
        <OptionCard to="/volunteer-login">
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

      {/* FOOTER */}
      <FooterWrapper>
        <FooterLinks>
          <a href="#iletisim">İletişim</a>
          <a href="#kvkk">KVKK</a>
          <a href="#gizlilik">Gizlilik</a>
          <a href="#hakkinda">Hakkında</a>
        </FooterLinks>

        <FooterMission>
          &copy; 2025 VONUION. <br/>
          Toplumsal dayanışmayı dijitalleştiren, güvenilir gönüllülük platformu.
        </FooterMission>
      </FooterWrapper>

    </PageWrapper>
  );
}

export default LandingPage;