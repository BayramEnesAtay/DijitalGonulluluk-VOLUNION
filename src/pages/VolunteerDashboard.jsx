import React, { useState, useEffect, useRef } from "react";
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
  LogoutItem,
  // 🔥 CHAT İÇİN EKLENEN STİLLER
  ChatWindowContainer,
  ChatHeader,
  CloseChatButton,
  ChatMessages,
  MessageBubble,
  ChatInputArea,
  ChatInput,
  ChatSendButton,
  IconChatButton
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

  // 🔥 CHAT STATE'LERİ
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

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

  // 🔥 CHAT MESAJLARINI DİNLE
  useEffect(() => {
    if (!activeChat || !uid) return;

    // Chat ID Formatı: chat_{companyId}_{volunteerId}
    // Gönüllü tarafında olduğumuz için activeChat.companyId ve kendi uid'miz (volunteerId)
    const chatId = `chat_${activeChat.companyId}_${uid}`;

    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(d => d.data()));
      // Otomatik aşağı kaydır
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });

    return () => unsub();
  }, [activeChat, uid]);

  // 🔥 MESAJ GÖNDER
  const sendMessage = async () => {
    if (!newMessage.trim() || !activeChat || !uid) return;

    const chatId = `chat_${activeChat.companyId}_${uid}`;

    await addDoc(collection(db, "chats", chatId, "messages"), {
      text: newMessage,
      senderId: uid,
      senderType: "volunteer", // Gönderen Gönüllü
      createdAt: Date.now()
    });

    setNewMessage("");
  };

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
              <div key={item.id} style={{ marginBottom: "10px", borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <strong>{item.jobTitle}</strong>
                    
                    {/* 🔥 CHAT BUTONU */}
                    <IconChatButton onClick={() => setActiveChat(item)} title="Firma ile Sohbet Et">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
                      </svg>
                    </IconChatButton>
                </div>
                <p>{item.companyName}</p>
              </div>
            ))}
          </ProfileCard>
        )}

        {/* 🔥 CHAT PENCERESİ */}
        {activeChat && (
          <ChatWindowContainer>
            <ChatHeader>
              <span>{activeChat.companyName} ile Sohbet</span>
              <CloseChatButton onClick={() => setActiveChat(null)}>✕</CloseChatButton>
            </ChatHeader>

            <ChatMessages>
              {messages.map((msg, idx) => {
                const isMe = msg.senderId === uid;
                return (
                  <MessageBubble key={idx} isMe={isMe}>
                    {msg.text}
                  </MessageBubble>
                );
              })}
              <div ref={messagesEndRef} />
            </ChatMessages>

            <ChatInputArea>
              <ChatInput 
                placeholder="Mesaj yaz..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              <ChatSendButton onClick={sendMessage}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ChatSendButton>
            </ChatInputArea>
          </ChatWindowContainer>
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