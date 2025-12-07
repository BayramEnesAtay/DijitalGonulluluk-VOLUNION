import React, { useState, useEffect } from "react";
// useNavigate import edildi
import { useNavigate } from "react-router-dom"; 
import {
  DashboardContainer,
  Sidebar,
  SidebarItem,
  Content,
  ProfileCard,
  SearchBar,
  FilterContainer,
  SelectBox,
  JobList,
  JobCard,
  JobButton,
  ModalOverlay,
  ModalBox,
  LogoutItem, // 🔥 Yeni eklenen stil
} from "../styles/VolunteerDashboardStyles.js";

import { db, auth } from "../firebase";
import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
// signOut import edildi
import { onAuthStateChanged, signOut } from "firebase/auth"; 

const SECTORS = [
  "Market / Perakende",
  "Lojistik / Taşımacılık",
  "Restoran / Kafe",
  "IT / Yazılım",
  "Üretim",
  "Eğitim",
  "Sağlık",
  "Turizm",
  "Finans / Sigorta",
  "Tekstil",
  "Gıda Üretim",
  "Diğer",
];

function VolunteerDashboard() {
  const [activePage, setActivePage] = useState("profile");

  const [uid, setUid] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate(); // Yönlendirme için hook

  /* 🔥 GİRİŞ YAPAN KULLANICININ UID'SİNİ AL */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
    return () => unsub();
  }, []);

  /* 🔥 ÇIKIŞ YAP FONKSİYONU */
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/volunteer-login"); // Giriş sayfasına yönlendir
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  /* 🔥 TÜM İLANLARI DİNLE (BAĞIMSIZ) */
  useEffect(() => {
    const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      setJobs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  /* 🔥 BAŞVURULARI DİNLE (UID GELDİKTEN SONRA) */
  useEffect(() => {
    if (!uid) return;

    const q = query(
      collection(db, "applications"),
      where("volunteerId", "==", uid),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, [uid]);

  /* 🔥 Kullanıcının hangi ilanlara başvurduğu */
  const appliedIds = applications.map((a) => a.jobId);

  /* 🔥 BAŞVURU GÖNDER */
  const sendApplication = async () => {
    if (!fullname || !phone) {
      alert("Ad Soyad ve Telefon zorunludur!");
      return;
    }

    await addDoc(collection(db, "applications"), {
      volunteerId: uid,
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      companyId: selectedJob.companyId,
      companyName: selectedJob.companyName,
      fullname,
      phone,
      note,
      createdAt: Date.now(),
    });

    alert("Başvuru gönderildi!");

    setShowModal(false);
    setFullname("");
    setPhone("");
    setNote("");
  };

  /* 🔥 Arama – Filtre – Sıralama */
  const filteredJobs = jobs
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.companyName?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((job) => !filter || job.sector === filter)
    .sort((a, b) =>
      sort === "desc"
        ? b.companyRating - a.companyRating
        : sort === "asc"
        ? a.companyRating - b.companyRating
        : 0
    );

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarItem onClick={() => setActivePage("profile")}>Profilim</SidebarItem>
        <SidebarItem onClick={() => setActivePage("jobs")}>İlanlar</SidebarItem>
        <SidebarItem onClick={() => setActivePage("applications")}>Başvurularım</SidebarItem>
        
        {/* 🔥 YENİ EKLENEN ÇIKIŞ BUTONU */}
        <LogoutItem onClick={handleLogout}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ marginRight: '10px' }}
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Çıkış Yap
        </LogoutItem>
      </Sidebar>

      <Content>
        {/* 🔵 PROFİL */}
        {activePage === "profile" && (
          <ProfileCard>
            <h2>Hoş Geldin!</h2>
            <p>{applications.length} adet başvurun var.</p>
          </ProfileCard>
        )}

        {/* 🔵 İLAN LİSTESİ */}
        {activePage === "jobs" && (
          <>
            <SearchBar
              placeholder="İlan ara…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <FilterContainer>
              <SelectBox value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Tüm Sektörler</option>
                {SECTORS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </SelectBox>

              <SelectBox value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Puan Sırala</option>
                <option value="desc">Yüksekten Düşüğe</option>
                <option value="asc">Düşükten Yükseğe</option>
              </SelectBox>
            </FilterContainer>

            <JobList>
              {filteredJobs.map((job) => {
                const already = appliedIds.includes(job.id);

                return (
                  <JobCard key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.companyName}</p>
                    <p>Puan: {job.companyRating}</p>

                    <JobButton
                      disabled={already}
                      onClick={() => {
                        setSelectedJob(job);
                        setShowModal(true);
                      }}
                    >
                      {already ? "Başvuruldu ✔" : "Başvur"}
                    </JobButton>
                  </JobCard>
                );
              })}
            </JobList>
          </>
        )}

        {/* 🔵 BAŞVURULAR */}
        {activePage === "applications" && (
          <ProfileCard>
            <h2>Başvurularım</h2>

            {applications.length === 0 && <p>Henüz başvurun yok.</p>}

            {applications.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.jobTitle}</strong>
                <p>{item.companyName}</p>
              </div>
            ))}
          </ProfileCard>
        )}
      </Content>

      {/* 🔵 MODAL */}
      {showModal && (
        <ModalOverlay>
          <ModalBox>
            <h3>{selectedJob?.title} ilanına başvur</h3>

            <input
              placeholder="Ad Soyad"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              rows={3}
              placeholder="Açıklama"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button onClick={sendApplication}>Gönder</button>
            <button style={{ background: "#555" }} onClick={() => setShowModal(false)}>
              Kapat
            </button>
          </ModalBox>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
}

export default VolunteerDashboard;