import React, { useState } from "react"; // 🔥 useState eklendi
import {
  PageWrapper,
  Heading,
  SubHeading,
  OptionsGrid,
  OptionCard,
  OptionLabel,
  FooterWrapper,
  FooterLinks,
  FooterMission,
  // 🔥 Yeni stiller import edildi
  ModalOverlay,
  ModalContent,
  CloseButton
} from "../styles/FirstPage.js";

// 🔥 Pop-up İçerikleri (Bilgiler)
const POPUP_DATA = {
  iletisim: {
    title: "İletişim Bilgileri",
    text: "Bizimle her zaman iletişime geçebilirsiniz.\n\n📧 E-posta: info@digitalvolunteery.web.app\n📞 Telefon: +90 501 778 11 06\n📍 Adres: Gazi Üniversitesi Rektörlüğü, Emniyet, Bandırma Cad. No:6/1, 06560 Yenimahalle/Ankara, Türkiye"
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    text: "Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlenmektedir. Verileriniz sadece platformun işleyişi ve güvenliği amacıyla kullanılmakta olup, üçüncü şahıslarla izniniz olmadan paylaşılmamaktadır."
  },
  gizlilik: {
    title: "Gizlilik Politikası",
    text: "VOLUNION olarak kullanıcı gizliliğine önem veriyoruz. Uygulamada toplanan temel kullanıcı verileri, Firebase altyapısında güvenli şekilde saklanmakta ve yalnızca hizmetin doğru çalışması için kullanılmaktadır. Verileriniz üçüncü kişilerle paylaşılmaz ve talep ettiğinizde tamamen silinebilir. Güvenliğiniz için gerekli tüm teknik önlemler tarafımızca alınmaktadır."
  },
  hakkinda: {
    title: "Hakkımızda",
    text: "VOLUNION, toplumsal dayanışmayı dijitalleştiren yenilikçi bir gönüllülük platformudur. Amacımız, firmalarla gönüllüleri güvenilir bir çatı altında buluşturarak sosyal sorumluluk projelerini daha etkili hale getirmektir."
  }
};

function LandingPage() {
  // 🔥 Pop-up durumunu kontrol eden state
  const [activePopup, setActivePopup] = useState(null);

  // Pop-up açma fonksiyonu
  const openPopup = (e, key) => {
    e.preventDefault(); // Sayfanın zıplamasını engeller
    setActivePopup(key);
  };

  // Pop-up kapatma fonksiyonu
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <PageWrapper>
      
      {/* Navbar Yok - Başlık Birleştirildi */}
      <Heading>VOLUNION'A HOŞ GELDİNİZ</Heading>
      
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
          {/* 🔥 Linklere tıklama özelliği eklendi */}
          <a href="/" onClick={(e) => openPopup(e, "iletisim")}>İletişim</a>
          <a href="/" onClick={(e) => openPopup(e, "kvkk")}>KVKK</a>
          <a href="/" onClick={(e) => openPopup(e, "gizlilik")}>Gizlilik</a>
          <a href="/" onClick={(e) => openPopup(e, "hakkinda")}>Hakkında</a>
        </FooterLinks>

        <FooterMission>
          &copy; 2025 VOLUNION. <br/>
          Toplumsal dayanışmayı dijitalleştiren, güvenilir gönüllülük platformu.
        </FooterMission>
      </FooterWrapper>

      {/* 🔥 POP-UP PENCERESİ (En alta eklendi - Sadece tıklandığında görünür) */}
      {activePopup && (
        <ModalOverlay onClick={closePopup}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>✕</CloseButton>
            <h2>{POPUP_DATA[activePopup].title}</h2>
            <p>{POPUP_DATA[activePopup].text}</p>
          </ModalContent>
        </ModalOverlay>
      )}

    </PageWrapper>
  );
}

export default LandingPage;