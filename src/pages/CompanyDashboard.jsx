import React, { useState } from "react";
import {
  DashboardContainer,
  Sidebar,
  SidebarItem,
  Content,
  Card,
  SearchBar,
  FilterContainer,
  SelectBox,
  JobList,
  JobCard,
  PaginationWrapper,
  ListPageWrapper,
} from "../styles/CompanyDashboardStyles";

function CompanyDashboard() {
  const [activePage, setActivePage] = useState("profile");

  const myJobs = [
    { id: 1, title: "Depo Elemanı", applications: 12, status: "Aktif" },
    { id: 2, title: "Garson", applications: 5, status: "Devam Ediyor" },
  ];

  const applications = [
    { id: 1, name: "Ahmet Korkmaz", job: "Depo Elemanı", score: 4.8 },
    { id: 2, name: "Merve Yılmaz", job: "Garson", score: 4.2 },
  ];

  return (
    <DashboardContainer>
      {/* Sol menü */}
      <Sidebar>
        {[
          { key: "profile", label: "Profilim" },
          { key: "create", label: "İlan Oluştur" },
          { key: "myjobs", label: "İlanlarım" },
          { key: "applications", label: "Başvurular" },
          { key: "list", label: "İlan Listesi" },
        ].map((item) => (
          <SidebarItem
            key={item.key}
            className={activePage === item.key ? "active" : ""}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </SidebarItem>
        ))}
      </Sidebar>

      {/* İçerik alanı */}
      <Content>
        {activePage === "profile" && (
          <Card>
            <h2>Hoş Geldin, DigitalVolunteery Şirketi 👋</h2>
            <p>Sektör: Yazılım & Bilişim</p>
            <p>Toplam Yayında İlan: 3</p>
            <p>Başvuruda Bulunan Gönüllü: 18</p>
          </Card>
        )}

        {activePage === "create" && (
  <Card style={{ maxWidth: "600px" }}>
    <h2>Yeni İlan Oluştur</h2>

    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <input placeholder="İlan Başlığı" />
      <textarea placeholder="Açıklama" rows="4" />
      <input placeholder="Konum" />

      <SelectBox>
        <option value="">Sektör Seçiniz</option>
        <option>Tekstil</option>
        <option>Gıda Üretim</option>
        <option>Restoran / Kafe</option>
        <option>Market / Perakende</option>
        <option>Lojistik / Taşımacılık</option>
        <option>Otomotiv</option>
        <option>Mobilya</option>
        <option>Elektrik / Elektronik</option>
        <option>İnşaat</option>
        <option>Emlak</option>
        <option>Eğitim</option>
        <option>Turizm</option>
        <option>Sağlık</option>
        <option>Temizlik Hizmetleri</option>
        <option>Güzellik Merkezi</option>
        <option>AVM Mağazası</option>
        <option>IT / Yazılım</option>
        <option>Reklam / Medya</option>
        <option>Finans / Sigorta</option>
        <option>Tarım</option>
        <option>Hayvancılık</option>
        <option>Hırdavat</option>
        <option>Kimya</option>
        <option>Metal İşleme</option>
        <option>Ambalaj</option>
        <option>Kargo</option>
        <option>Danışmanlık</option>
        <option>Spor Salonu</option>
        <option>Kırtasiye</option>
        <option>Fotoğrafçılık</option>
        <option>Petshop</option>
        <option>Diğer</option>
      </SelectBox>

      <button
        style={{
          padding: "12px",
          borderRadius: "8px",
          background: "#1f2a40",
          color: "white",
          cursor: "pointer",
        }}
      >
        Yayınla
      </button>
    </div>
  </Card>
)}


        {activePage === "myjobs" && (
          <>
            <h2>Yayınlanan İlanlar</h2>
            <JobList>
              {myJobs.map((job) => (
                <JobCard key={job.id}>
                  <h3>{job.title}</h3>
                  <p>Başvuru Sayısı: {job.applications}</p>
                  <p>Durum: {job.status}</p>
                </JobCard>
              ))}
            </JobList>
          </>
        )}

        {activePage === "applications" && (
          <>
            <h2>Gelen Başvurular</h2>
            <JobList>
              {applications.map((app) => (
                <JobCard key={app.id}>
                  <h3>{app.name}</h3>
                  <p>Başvurduğu Pozisyon: {app.job}</p>
                  <p>Puan: {app.score}</p>
                </JobCard>
              ))}
            </JobList>
          </>
        )}

        {activePage === "list" && (
          <ListPageWrapper>
            <SearchBar placeholder="İlan ara..." />
            <FilterContainer>
              <SelectBox>
                <option>Sektör</option>
                <option>Yazılım</option>
                <option>Lojistik</option>
                <option>Restoran</option>
              </SelectBox>
              <SelectBox>
                <option>Puan Sırala</option>
                <option>Yüksekten Düşüğe</option>
                <option>Düşükten Yükseğe</option>
              </SelectBox>
            </FilterContainer>

            <JobList>
              <JobCard>
                <h3>Depo Elemanı</h3>
                <p>Kardeşler Lojistik</p>
                <p className="score">Puan: 4.7 ⭐</p>
              </JobCard>
              <JobCard>
                <h3>Garson</h3>
                <p>Mavi Kafe</p>
                <p className="score">Puan: 4.7 ⭐</p>
              </JobCard>
              <JobCard>
                <h3>Satış Danışmanı</h3>
                <p>AVM Mağazası</p>
                <p className="score">Puan: 4.7 ⭐</p>
              </JobCard>
            </JobList>

            <PaginationWrapper>
              <button>{"<"}</button>
              <span>1 / 5</span>
              <button>{">"}</button>
            </PaginationWrapper>
          </ListPageWrapper>
        )}
      </Content>
    </DashboardContainer>
  );
}

export default CompanyDashboard;
