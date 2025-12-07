import React, { useState, useEffect } from "react";
// useNavigate eklendi
import { useNavigate } from "react-router-dom";
import {
  DashboardContainer,
  Sidebar,
  SidebarItem,
  Content,
  Card,
  JobList,
  JobCard,
  LogoutItem, // 🔥 Stil dosyasından import edildi
} from "../styles/CompanyDashboardStyles";

import { db, auth } from "../firebase";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
// signOut eklendi
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

// 🔥 İLANLARIM
const listenMyJobs = (uid, setMyJobs) => {
  const q = query(
    collection(db, "listings"),
    where("companyId", "==", uid),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) => {
    setMyJobs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
};

// 🔥 BAŞVURULAR
const listenApplications = (uid, setApps) => {
  const q = query(
    collection(db, "applications"),
    where("companyId", "==", uid),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snap) => {
    setApps(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
};

function CompanyDashboard() {
  const [activePage, setActivePage] = useState("profile");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");

  const [currentUser, setCurrentUser] = useState(null);
  const [myJobs, setMyJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const navigate = useNavigate(); // Yönlendirme için hook

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        listenMyJobs(user.uid, setMyJobs);
        listenApplications(user.uid, setApplications);
      }
    });

    return () => unsub();
  }, []);

  // 🔥 ÇIKIŞ YAP FONKSİYONU
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/company-login"); // Firma giriş sayfasına yönlendir
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  // 🔥 İLAN OLUŞTURMA
  const handleCreateListing = async () => {
    if (!title || !desc || !location || !sector) {
      alert("Tüm alanları doldurun!");
      return;
    }

    const user = auth.currentUser;
    const ref = doc(db, "companies", user.uid);
    const snap = await getDoc(ref);
    const rating = snap.exists() ? snap.data()?.rating ?? 50 : 50;

    await addDoc(collection(db, "listings"), {
      title,
      description: desc,
      location,
      sector,
      companyId: user.uid,
      companyName: user.email,
      companyRating: rating,
      acceptedVolunteerId: null,
      createdAt: Date.now(),
    });

    setTitle("");
    setDesc("");
    setLocation("");
    setSector("");
  };

  // 🔥 BAŞVURU KABUL
  const acceptApplication = async (app) => {
    // 1) İlanı güncelle
    await updateDoc(doc(db, "listings", app.jobId), {
      acceptedVolunteerId: app.volunteerId,
    });

    // 2) Bu başvuruyu ACCEPT yap
    await updateDoc(doc(db, "applications", app.id), {
      status: "accepted",
    });

    // 3) Diğer başvuruları otomatik RED yap
    applications
      .filter((x) => x.jobId === app.jobId && x.id !== app.id)
      .forEach((other) => {
        updateDoc(doc(db, "applications", other.id), {
          status: "rejected",
        });
      });
  };

  // 🔥 BAŞVURU RED
  const rejectApplication = async (app) => {
    await updateDoc(doc(db, "applications", app.id), {
      status: "rejected",
    });
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarItem onClick={() => setActivePage("profile")}>Profilim</SidebarItem>
        <SidebarItem onClick={() => setActivePage("create")}>İlan Oluştur</SidebarItem>
        <SidebarItem onClick={() => setActivePage("myjobs")}>İlanlarım</SidebarItem>
        <SidebarItem onClick={() => setActivePage("applications")}>Başvurular</SidebarItem>

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
          <Card>
            <h2>Hoş Geldin 👋</h2>
            <p>Email: {currentUser?.email}</p>
          </Card>
        )}

        {/* 🔵 İLAN OLUŞTUR */}
        {activePage === "create" && (
          <Card>
            <h2>Yeni İlan Oluştur</h2>

            <input value={title} placeholder="İlan Başlığı" onChange={(e) => setTitle(e.target.value)} />
            <textarea rows={4} value={desc} placeholder="Açıklama" onChange={(e) => setDesc(e.target.value)} />
            <input value={location} placeholder="Konum" onChange={(e) => setLocation(e.target.value)} />

            <select value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="">Sektör Seçiniz</option>
              {SECTORS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <button onClick={handleCreateListing}>Yayınla</button>
          </Card>
        )}

        {/* 🔵 İLANLARIM */}
        {activePage === "myjobs" && (
          <Card>
            <h2>İlanlarım</h2>

            <JobList>
              {myJobs.map((j) => {
                const acceptedApp = applications.find(
                  (a) => a.jobId === j.id && a.status === "accepted"
                );

                return (
                  <JobCard key={j.id}>
                    <h3>{j.title}</h3>
                    <p>{j.location}</p>
                    <p>{j.sector}</p>

                    {acceptedApp ? (
                      <p style={{ color: "green" }}>
                        Kabul Edilen Gönüllü: <b>{acceptedApp.phone}</b>
                      </p>
                    ) : (
                      <p style={{ color: "gray" }}>Henüz kabul yapılmadı</p>
                    )}
                  </JobCard>
                );
              })}
            </JobList>
          </Card>
        )}

        {/* 🔵 BAŞVURULAR */}
        {activePage === "applications" && (
          <Card>
            <h2>Başvurular</h2>

            {applications.length === 0 && <p>Henüz başvuru yok.</p>}

            {applications.map((app) => {
              const job = myJobs.find((j) => j.id === app.jobId);
              const jobIsLocked = !!job?.acceptedVolunteerId;

              return (
                <div key={app.id} style={{ padding: "14px", borderBottom: "1px solid #ddd" }}>
                  <h4>{app.jobTitle}</h4>
                  <p><b>Başvuran:</b> {app.fullname}</p>
                  <p><b>Telefon:</b> {app.phone}</p>

                  {jobIsLocked && job.acceptedVolunteerId !== app.volunteerId ? (
                    <p style={{ color: "red" }}>Bu ilan için başka biri kabul edildi.</p>
                  ) : (
                    <>
                      {app.status === "accepted" ? (
                        <p style={{ color: "green" }}>Kabul Edildi ✔</p>
                      ) : app.status === "rejected" ? (
                        <p style={{ color: "red" }}>Reddedildi ✘</p>
                      ) : (
                        <>
                          <button
                            style={{ marginRight: 10 }}
                            onClick={() => acceptApplication(app)}
                          >
                            Kabul Et
                          </button>

                          <button onClick={() => rejectApplication(app)}>
                            Reddet
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </Card>
        )}
      </Content>
    </DashboardContainer>
  );
}

export default CompanyDashboard;