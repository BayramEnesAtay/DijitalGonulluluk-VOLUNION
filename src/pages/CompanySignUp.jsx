import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  PageContainer,
  NavBar,
  BrandText,
  NavButton,
  SignUpContainer,
  SignUpHeading,
  FormWrapper,
  FormGroup,
  InputField,
  SelectField,
  ErrorText,
  ActionButton,
  LoginRedirect
} from "../styles/CompanySignUpStyles.js";

import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// ------------------ 81 İL LİSTESİ ------------------
const cities = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya",
  "Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik",
  "Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum",
  "Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum",
  "Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkâri","Hatay","Iğdır",
  "Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars",
  "Kastamonu","Kayseri","Kırıkkale","Kırklareli","Kırşehir","Kilis","Kocaeli",
  "Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir",
  "Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas",
  "Şanlıurfa","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van",
  "Yalova","Yozgat","Zonguldak"
];

const companyTypes = [
  "Tekstil","Gıda Üretim","Restoran / Kafe","Market / Perakende",
  "Lojistik / Taşımacılık","Otomotiv","Mobilya","Elektrik / Elektronik",
  "İnşaat","Emlak","Eğitim","Turizm","Sağlık","Temizlik Hizmetleri",
  "Güzellik Merkezi","AVM Mağazası","IT / Yazılım","Reklam / Medya",
  "Finans / Sigorta","Tarım","Hayvancılık","Hırdavat","Kimya",
  "Metal İşleme","Ambalaj","Kargo","Danışmanlık","Spor Salonu",
  "Kırtasiye","Fotoğrafçılık","Petshop","Diğer"
];

function CompanySignUp() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  // ---------------- 1. AŞAMA ----------------
  const [form1, setForm1] = useState({
    companyName: "",
    address: "",
    neighborhood: "",
    district: "",
    city: "",
    phone: "",
  });

  // ---------------- 2. AŞAMA ----------------
  const [form2, setForm2] = useState({
    companyType: "",
    taxNumber: "",
    taxOffice: "",
  });

  // ---------------- 3. AŞAMA ----------------
  const [form3, setForm3] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  // ---------------- VALIDATION ----------------
  const validateStep = (data) => {
    const newErrors = {};
    Object.keys(data).forEach((key) => {
      if (!data[key]) newErrors[key] = "Bu alan boş bırakılamaz.";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- HANDLERS ----------------
  const handleNext1 = () => validateStep(form1) && setStep(2);
  const handleNext2 = () => validateStep(form2) && setStep(3);

  // ---------------- KAYIT OL ----------------
  const handleSubmit = async () => {
    if (!validateStep(form3)) return;

    try {
      // Auth kayıt
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form3.email,
        form3.password
      );

      const user = userCredential.user;

      // Firestore'a şirket kaydı
      await setDoc(doc(db, "companies", user.uid), {
        ...form1,
        ...form2,
        ...form3,
        rating: 50,            // ⭐ Şirket başlangıç puanı
        createdAt: Date.now(), // Tarih
        uid: user.uid,
        email: form3.email,
      });

      alert("🎉 Firma kaydı başarıyla oluşturuldu!");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setErrors({ email: "Bu email zaten kayıtlı!" });
      } else if (err.code === "auth/weak-password") {
        setErrors({ password: "Parola en az 6 karakter olmalıdır." });
      } else {
        alert("Hata: " + err.message);
      }
    }
  };

  return (
    <PageContainer>
      
      <NavBar>
        <BrandText>VOLUNION</BrandText>
        <NavButton to="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Anasayfa
        </NavButton>
      </NavBar>

      <SignUpContainer>
        <SignUpHeading>Firma Kayıt</SignUpHeading>

        {/* --------------------- STEP 1 --------------------- */}
        {step === 1 && (
          <FormWrapper>
            <FormGroup>
              <label>Firma Adı</label>
              <InputField value={form1.companyName} onChange={(e) =>
                setForm1({ ...form1, companyName: e.target.value })
              }/>
              {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Adres</label>
              <InputField value={form1.address} onChange={(e) =>
                setForm1({ ...form1, address: e.target.value })
              }/>
              {errors.address && <ErrorText>{errors.address}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Mahalle</label>
              <InputField value={form1.neighborhood} onChange={(e) =>
                setForm1({ ...form1, neighborhood: e.target.value })
              }/>
              {errors.neighborhood && <ErrorText>{errors.neighborhood}</ErrorText>}
            </FormGroup>

            {/* 🔥 DEĞİŞİKLİK BURADA: gap: '25px' yapıldı. İl kutusu sağa yanaştı. */}
            <div style={{ display: 'flex', gap: '25px' }}>
              <FormGroup>
                <label>İlçe</label>
                <InputField value={form1.district} onChange={(e) =>
                  setForm1({ ...form1, district: e.target.value })
                }/>
                {errors.district && <ErrorText>{errors.district}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <label>İl</label>
                <SelectField value={form1.city} onChange={(e) =>
                  setForm1({ ...form1, city: e.target.value })
                }>
                  <option value="">Seçiniz</option>
                  {cities.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </SelectField>
                {errors.city && <ErrorText>{errors.city}</ErrorText>}
              </FormGroup>
            </div>

            <FormGroup>
              <label>Telefon</label>
              <InputField value={form1.phone} onChange={(e) =>
                setForm1({ ...form1, phone: e.target.value })
              }/>
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </FormGroup>

            <ActionButton onClick={handleNext1}>Devam Et</ActionButton>
            <LoginRedirect>
              Hesabınız var mı? <Link to="/company-login">Giriş Yap</Link>
            </LoginRedirect>
          </FormWrapper>
        )}

        {/* --------------------- STEP 2 --------------------- */}
        {step === 2 && (
          <FormWrapper>
            <FormGroup>
              <label>Firma Türü</label>
              <SelectField value={form2.companyType} onChange={(e) =>
                setForm2({ ...form2, companyType: e.target.value })
              }>
                <option value="">Seçiniz</option>
                {companyTypes.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </SelectField>
              {errors.companyType && <ErrorText>{errors.companyType}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Vergi No</label>
              <InputField value={form2.taxNumber} onChange={(e) =>
                setForm2({ ...form2, taxNumber: e.target.value })
              }/>
              {errors.taxNumber && <ErrorText>{errors.taxNumber}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Vergi Dairesi</label>
              <InputField value={form2.taxOffice} onChange={(e) =>
                setForm2({ ...form2, taxOffice: e.target.value })
              }/>
              {errors.taxOffice && <ErrorText>{errors.taxOffice}</ErrorText>}
            </FormGroup>

            <ActionButton onClick={handleNext2}>Devam Et</ActionButton>
            <LoginRedirect>
              Hesabınız var mı? <Link to="/company-login">Giriş Yap</Link>
            </LoginRedirect>
          </FormWrapper>
        )}

        {/* --------------------- STEP 3 --------------------- */}
        {step === 3 && (
          <FormWrapper>
            <FormGroup>
              <label>Yönetici Ad Soyad</label>
              <InputField value={form3.fullname} onChange={(e) =>
                setForm3({ ...form3, fullname: e.target.value })
              }/>
              {errors.fullname && <ErrorText>{errors.fullname}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Yönetici Telefon</label>
              <InputField value={form3.phone} onChange={(e) =>
                setForm3({ ...form3, phone: e.target.value })
              }/>
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>E-Posta</label>
              <InputField value={form3.email} onChange={(e) =>
                setForm3({ ...form3, email: e.target.value })
              }/>
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <label>Parola</label>
              <InputField type="password" value={form3.password} onChange={(e) =>
                setForm3({ ...form3, password: e.target.value })
              }/>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </FormGroup>

            <ActionButton onClick={handleSubmit}>Hesap Oluştur</ActionButton>

            <LoginRedirect>
              Hesabınız var mı? <Link to="/company-login">Giriş Yap</Link>
            </LoginRedirect>
          </FormWrapper>
        )}
      </SignUpContainer>
    </PageContainer>
  );
}

export default CompanySignUp;