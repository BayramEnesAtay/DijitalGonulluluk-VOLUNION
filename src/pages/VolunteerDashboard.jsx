import React, { useState } from "react";
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
  PaginationWrapper,
} from "../styles/VolunteerDashboardStyles.js";

function VolunteerDashboard() {
  const [activePage, setActivePage] = useState("profile");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const mockJobs = [
    { id: 1, title: "Depo Elemanı", company: "Kardeşler Lojistik", type: "Lojistik", rating: 4.7 },
    { id: 2, title: "Satış Destek", company: "Beyazlar Market", type: "Market", rating: 4.2 },
    { id: 3, title: "Garson", company: "Mavi Kafe", type: "Restoran", rating: 4.9 },
  ];

  return (
    <DashboardContainer>
      
      {/* SIDEBAR */}
      <Sidebar>
        <SidebarItem onClick={() => setActivePage("profile")}>Profilim</SidebarItem>
        <SidebarItem onClick={() => setActivePage("jobs")}>İlan Listesi</SidebarItem>
        <SidebarItem onClick={() => setActivePage("applications")}>Başvurularım</SidebarItem>
      </Sidebar>

      {/* CONTENT */}
      <Content>

        {activePage === "profile" && (
          <ProfileCard>
            <h2>Hoş Geldin, Enes! 👋</h2>
            <p>Bugün senin için 3 yeni ilan bulduk!</p>
          </ProfileCard>
        )}

        {activePage === "jobs" && (
          <>
            <SearchBar
              placeholder="Firma adı veya ilan ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <FilterContainer>
              <SelectBox value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Firma Türü</option>
                <option>Market</option>
                <option>Lojistik</option>
                <option>Restoran</option>
                <option>Yazılım</option>
              </SelectBox>

              <SelectBox value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Puan Sırala</option>
                <option value="desc">Yüksekten Düşüğe</option>
                <option value="asc">Düşükten Yükseğe</option>
              </SelectBox>
            </FilterContainer>

            <JobList>
              {mockJobs.map(job => (
                <JobCard key={job.id}>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <span>Puan: {job.rating}</span>
                </JobCard>
              ))}
            </JobList>

            <PaginationWrapper>
              <button>{"<"}</button>
              <span>1 / 3</span>
              <button>{">"}</button>
            </PaginationWrapper>
          </>
        )}

        {activePage === "applications" && (
          <ProfileCard>
            <h2>Başvurularım</h2>
            <p>Henüz başvurun bulunmuyor.</p>
          </ProfileCard>
        )}

      </Content>
    </DashboardContainer>
  );
}

export default VolunteerDashboard;
