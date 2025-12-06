import React, { useState, useEffect } from "react";
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
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

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

// REALTIME - İlanlarım
const listenMyJobs = (uid, setMyJobs) => {
  const q = query(
    collection(db, "listings"),
    where("companyId", "==", uid),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, snap => {
    setMyJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
};

// REALTIME - Tüm İlanlar
const listenAllJobs = (setAllJobs) => {
  const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
  return onSnapshot(q, snap => {
    setAllJobs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
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
  const [allJobs, setAllJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [filterSector, setFilterSector] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Auth takip + realtime dinleyiciler
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        listenMyJobs(user.uid, setMyJobs);
        listenAllJobs(setAllJobs);
      }
    });
    return () => unsub();
  }, []);

  // İlan oluştur
  const handleCreateListing = async () => {
    if (!title || !desc || !location || !sector) {
      alert("Tüm alanları doldurun!");
      return;
    }

    try {
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
        createdAt: Date.now(),
      });

      setTitle("");
      setDesc("");
      setLocation("");
      setSector("");

      alert("İlan başarıyla yayınlandı!");
    } catch (err) {
      console.log(err);
    }
  };

  // Filtreleme
  const resultJobs = allJobs
    .filter(j =>
      j.title.toLowerCase().includes(search.toLowerCase()) &&
      (!filterSector || j.sector === filterSector)
    )
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc"
        ? a.companyRating - b.companyRating
        : b.companyRating - a.companyRating;
    });

  return (
    <DashboardContainer>
      <Sidebar>
        {[
          { key: "profile", label: "Profilim" },
          { key: "create", label: "İlan Oluştur" },
          { key: "myjobs", label: "İlanlarım" },
          { key: "list", label: "İlan Listesi" },
        ].map(item => (
          <SidebarItem
            key={item.key}
            className={activePage === item.key ? "active" : ""}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </SidebarItem>
        ))}
      </Sidebar>

      <Content>

        {/* PROFİL */}
        {activePage === "profile" && (
          <Card>
            <h2>Hoş Geldin 👋</h2>
            <p>Email: {currentUser?.email}</p>
            <p>Toplam İlan: {myJobs.length}</p>
          </Card>
        )}

        {/* İLAN OLUŞTUR */}
        {activePage === "create" && (
          <Card>
            <h2>Yeni İlan Oluştur</h2>

            <input placeholder="İlan Başlığı" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Açıklama" rows={4} value={desc} onChange={e => setDesc(e.target.value)} />
            <input placeholder="Konum" value={location} onChange={e => setLocation(e.target.value)} />

            <select value={sector} onChange={e => setSector(e.target.value)}>
              <option value="">Sektör Seçiniz</option>
              {SECTORS.map(s => <option key={s}>{s}</option>)}
            </select>

            <button onClick={handleCreateListing}>Yayınla</button>
          </Card>
        )}

        {/* İLANLARIM */}
        {activePage === "myjobs" && (
          <>
            <h2>İlanlarım</h2>
            <JobList>
              {myJobs.map(j => (
                <JobCard key={j.id}>
                  <h3>{j.title}</h3>
                  <p>{j.location}</p>
                  <p>{j.sector}</p>
                  <p>Puan: {j.companyRating} ⭐</p>
                </JobCard>
              ))}
            </JobList>
          </>
        )}

        {/* TÜM İLANLAR */}
        {activePage === "list" && (
          <>
            <SearchBar
              placeholder="İlan ara..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <FilterContainer>
              <SelectBox value={filterSector} onChange={e => setFilterSector(e.target.value)}>
                <option value="">Tüm Sektörler</option>
                {SECTORS.map(s => <option key={s}>{s}</option>)}
              </SelectBox>

              <SelectBox value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="">Puan Sırala</option>
                <option value="desc">Yüksekten Düşüğe</option>
                <option value="asc">Düşükten Yükseğe</option>
              </SelectBox>
            </FilterContainer>

            <JobList>
              {resultJobs.map(j => (
                <JobCard key={j.id}>
                  <h3>{j.title}</h3>
                  <p>{j.companyName}</p>
                  <p>Puan: {j.companyRating} ⭐</p>
                </JobCard>
              ))}
            </JobList>
          </>
        )}

      </Content>
    </DashboardContainer>
  );
}

export default CompanyDashboard;
