import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardContainer,
  Sidebar,
  SidebarItem,
  Content,
  Card,
  JobList,
  JobCard,
  LogoutItem,
  SearchBar,
  FilterContainer,
  SelectBox,
  JobButton,
  ModalOverlay,
  ModalBox,
  ProfileCard,
  ChatWindowContainer,
  ChatHeader,
  CloseChatButton,
  ChatMessages,
  MessageBubble,
  ChatInputArea,
  ChatInput,
  ChatSendButton,
  IconChatButton
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

// İLANLARIM
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

// GELEN BAŞVURULAR
const listenIncomingApplications = (uid, setApps) => {
  const q = query(
    collection(db, "applications"),
    where("companyId", "==", uid),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) => {
    setApps(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
};

// TÜM İLANLAR
const listenAllJobs = (setAllJobs) => {
  const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snap) => {
    setAllJobs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
};

// GİDEN BAŞVURULARIM
const listenMyOutgoingApplications = (uid, setMyApplications) => {
  const q = query(
    collection(db, "applications"),
    where("volunteerId", "==", uid),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) => {
    setMyApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
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
  const [incomingApplications, setIncomingApplications] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [myOutgoingApps, setMyOutgoingApps] = useState([]);
  
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  // Chat
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        listenMyJobs(user.uid, setMyJobs);
        listenIncomingApplications(user.uid, setIncomingApplications);
        listenAllJobs(setAllJobs);
        listenMyOutgoingApplications(user.uid, setMyOutgoingApps);
      }
    });
    return () => unsub();
  }, []);

  // CHAT DİNLEME
  useEffect(() => {
    if (!activeChat || !activeChat.chatId) return;

    const q = query(
      collection(db, "chats", activeChat.chatId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(d => d.data()));
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });

    return () => unsub();
  }, [activeChat]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !activeChat || !currentUser) return;

    await addDoc(collection(db, "chats", activeChat.chatId, "messages"), {
      text: newMessage,
      senderId: currentUser.uid,
      senderType: "company",
      createdAt: Date.now()
    });

    setNewMessage("");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  const handleCreateListing = async () => {
    if (!title || !desc || !location || !sector) {
      alert("Tüm alanları doldurun!");
      return;
    }
    const ref = doc(db, "companies", currentUser.uid);
    const snap = await getDoc(ref);
    const rating = snap.exists() ? snap.data()?.rating ?? 50 : 50;

    await addDoc(collection(db, "listings"), {
      title,
      description: desc,
      location,
      sector,
      companyId: currentUser.uid,
      companyName: currentUser.email,
      companyRating: rating,
      acceptedVolunteerId: null,
      createdAt: Date.now(),
    });
    setTitle(""); setDesc(""); setLocation(""); setSector("");
    alert("İlan yayınlandı!");
  };

  const acceptApplication = async (app) => {
    await updateDoc(doc(db, "listings", app.jobId), {
      acceptedVolunteerId: app.volunteerId,
    });
    await updateDoc(doc(db, "applications", app.id), {
      status: "accepted",
    });
    incomingApplications
      .filter((x) => x.jobId === app.jobId && x.id !== app.id)
      .forEach((other) => {
        updateDoc(doc(db, "applications", other.id), { status: "rejected" });
      });
  };

  const rejectApplication = async (app) => {
    await updateDoc(doc(db, "applications", app.id), { status: "rejected" });
  };

  const sendApplication = async () => {
    if (!fullname || !phone) {
      alert("Ad Soyad ve Telefon zorunludur!");
      return;
    }
    await addDoc(collection(db, "applications"), {
      volunteerId: currentUser.uid, 
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
    setFullname(""); setPhone(""); setNote("");
  };

  const filteredAllJobs = allJobs
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

  const myAppliedIds = myOutgoingApps.map((a) => a.jobId);

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarItem onClick={() => setActivePage("profile")}>Profilim</SidebarItem>
        <SidebarItem onClick={() => setActivePage("create")}>İlan Oluştur</SidebarItem>
        <SidebarItem onClick={() => setActivePage("myjobs")}>İlanlarım</SidebarItem>
        <SidebarItem onClick={() => setActivePage("incoming_applications")}>Gelen Başvurular</SidebarItem>
        <SidebarItem onClick={() => setActivePage("all_jobs")}>Tüm İlanlar</SidebarItem>
        <SidebarItem onClick={() => setActivePage("my_applications")}>Başvurularım</SidebarItem>

        <LogoutItem onClick={handleLogout}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Çıkış Yap
        </LogoutItem>
      </Sidebar>

      <Content>
        {activePage === "profile" && (
          <Card>
            <h2>Hoş Geldin 👋</h2>
            <p>Email: {currentUser?.email}</p>
            <p>Toplam Yayınlanan İlan: {myJobs.length}</p>
            <p>Gelen Başvuru Sayısı: {incomingApplications.length}</p>
          </Card>
        )}

        {activePage === "create" && (
          <Card>
            <h2>Yeni İlan Oluştur</h2>
            <input value={title} placeholder="İlan Başlığı" onChange={(e) => setTitle(e.target.value)} />
            <textarea rows={4} value={desc} placeholder="Açıklama" onChange={(e) => setDesc(e.target.value)} />
            <input value={location} placeholder="Konum" onChange={(e) => setLocation(e.target.value)} />
            <select value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="">Sektör Seçiniz</option>
              {SECTORS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button onClick={handleCreateListing}>Yayınla</button>
          </Card>
        )}

        {activePage === "myjobs" && (
          <Card>
            <h2>İlanlarım</h2>
            <JobList>
              {myJobs.map((j) => {
                const acceptedApp = incomingApplications.find(
                  (a) => a.jobId === j.id && a.status === "accepted"
                );
                return (
                  <JobCard key={j.id}>
                    <h3>{j.title}</h3>
                    <p>{j.location}</p>
                    <p>{j.sector}</p>
                    {acceptedApp ? (
                      <p style={{ color: "green" }}>Kabul Edilen: <b>{acceptedApp.phone}</b></p>
                    ) : (
                      <p style={{ color: "gray" }}>Henüz kabul yapılmadı</p>
                    )}
                  </JobCard>
                );
              })}
            </JobList>
          </Card>
        )}

        {/* 🔵 GELEN BAŞVURULAR (Benim ilanlarıma yapılanlar) */}
        {activePage === "incoming_applications" && (
          <Card>
            <h2>Gelen Başvurular</h2>
            {incomingApplications.length === 0 && <p>Henüz başvuru yok.</p>}
            {incomingApplications.map((app) => {
              const job = myJobs.find((j) => j.id === app.jobId);
              const jobIsLocked = !!job?.acceptedVolunteerId;
              return (
                <div key={app.id} style={{ padding: "14px", borderBottom: "1px solid #ddd" }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h4>{app.jobTitle}</h4>
                    {/* 🔥 CHAT: Ben firmayım, karşı taraf (app.volunteerId) gönüllü */}
                    <IconChatButton onClick={() => setActiveChat({
                        ...app,
                        chatId: `chat_${currentUser.uid}_${app.volunteerId}`
                    })} title="Sohbet Et">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                      </svg>
                    </IconChatButton>
                  </div>
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
                          <button style={{ marginRight: 10 }} onClick={() => acceptApplication(app)}>Kabul Et</button>
                          <button onClick={() => rejectApplication(app)}>Reddet</button>
                        </>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </Card>
        )}

        {/* 🔥 TÜM İLANLAR (PROFESYONEL SEARCHBAR İLE) */}
        {activePage === "all_jobs" && (
          <>
            <SearchBar placeholder="İlan ara..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <FilterContainer>
              <SelectBox value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Tüm Sektörler</option>
                {SECTORS.map((s) => <option key={s}>{s}</option>)}
              </SelectBox>
              <SelectBox value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Puan Sırala</option>
                <option value="desc">Yüksekten Düşüğe</option>
                <option value="asc">Düşükten Yükseğe</option>
              </SelectBox>
            </FilterContainer>

            <JobList>
              {filteredAllJobs.map((job) => {
                const already = myAppliedIds.includes(job.id);
                const isMyJob = job.companyId === currentUser?.uid;

                return (
                  <JobCard key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.companyName}</p>
                    <p>Puan: {job.companyRating}</p>
                    <p>{job.sector}</p>

                    <JobButton
                      disabled={already || isMyJob}
                      onClick={() => {
                        setSelectedJob(job);
                        setShowModal(true);
                      }}
                    >
                      {isMyJob ? "Kendi İlanınız" : already ? "Başvuruldu ✔" : "Başvur"}
                    </JobButton>
                  </JobCard>
                );
              })}
            </JobList>
          </>
        )}

        {/* 🔥 BAŞVURULARIM (Chat İsmi Düzeltildi) */}
        {activePage === "my_applications" && (
          <ProfileCard>
            <h2>Yaptığım Başvurular</h2>
            {myOutgoingApps.length === 0 && <p>Henüz bir ilana başvurmadınız.</p>}
            {myOutgoingApps.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px", borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <strong>{item.jobTitle}</strong>
                    {/* 🔥 DÜZELTME: Karşı tarafın ismi (Company Name) Chat başlığında çıksın diye fullname override edildi */}
                    <IconChatButton onClick={() => setActiveChat({
                        ...item, 
                        chatId: `chat_${item.companyId}_${currentUser.uid}`,
                        fullname: item.companyName // Header'ın doğru ismi göstermesi için
                    })} title="Firma ile Sohbet Et">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                      </svg>
                    </IconChatButton>
                </div>
                <p>{item.companyName}</p>
                <p style={{fontSize: '0.9rem', color: item.status === 'accepted' ? 'green' : item.status === 'rejected' ? 'red' : 'orange'}}>
                    Durum: {item.status === 'accepted' ? 'Kabul Edildi' : item.status === 'rejected' ? 'Reddedildi' : 'Beklemede'}
                </p>
              </div>
            ))}
          </ProfileCard>
        )}

      </Content>

      {/* CHAT PENCERESİ */}
      {activeChat && (
        <ChatWindowContainer>
          <ChatHeader>
            {/* Header: activeChat.fullname (Başvurularım'da Firma Adı) veya activeChat.companyName */}
            <span>{activeChat.fullname || activeChat.companyName} ile Sohbet</span>
            <CloseChatButton onClick={() => setActiveChat(null)}>✕</CloseChatButton>
          </ChatHeader>
          <ChatMessages>
            {messages.map((msg, idx) => {
              const isMe = msg.senderId === currentUser?.uid;
              return <MessageBubble key={idx} isMe={isMe}>{msg.text}</MessageBubble>;
            })}
            <div ref={messagesEndRef} />
          </ChatMessages>
          <ChatInputArea>
            <ChatInput placeholder="Mesaj yaz..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
            <ChatSendButton onClick={sendMessage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </ChatSendButton>
          </ChatInputArea>
        </ChatWindowContainer>
      )}

      {/* BAŞVURU MODALI */}
      {showModal && (
        <ModalOverlay>
          <ModalBox>
            <h3>{selectedJob?.title} ilanına başvur</h3>
            <input placeholder="Firma / Yetkili Adı" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <input placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <textarea rows={3} placeholder="Açıklama / Not" value={note} onChange={(e) => setNote(e.target.value)} />
            <button onClick={sendApplication}>Gönder</button>
            <button style={{ background: "#555", marginTop: "10px" }} onClick={() => setShowModal(false)}>Kapat</button>
          </ModalBox>
        </ModalOverlay>
      )}

    </DashboardContainer>
  );
}

export default CompanyDashboard;