/* -------------------------------------------------------------
   ENG. HAIDY MAHMOUD - NETWORK ENGINEER PORTFOLIO
   Interactive Logic, Canvas Animation, Typewriter, Content Manager
   ------------------------------------------------------------- */

// Default CV Data (Strictly from the attached CV document)
const defaultCVData = {
  general: {
    name: "Haidy Mahmoud",
    title: "Network Engineer",
    email: "haidyemera266@gmail.com",
    phone: "01288078867",
    location: "Cairo, Egypt",
    linkedin: "https://www.linkedin.com/in/",
    summary: "Motivated Network Engineer with hands-on experience in configuring and troubleshooting LAN, WAN, and VLAN networks. Skilled in routing protocols (OSPF, EIGRP, BGP), enterprise network solutions, and cloud networking (AWS & Azure). Strong knowledge of Cisco and Huawei technologies with proven ability to design scalable and secure infrastructure. Recognized for problem-solving, teamwork, and leadership skills.",
    profileImg: "assets/images/haidy.jpeg",
    education: "El Nahda University | Faculty of Computer Science (2022 - 2026)"
  },
  experience: [
    {
      id: "exp-1",
      role: "Network Engineer Intern",
      company: "Instant Software Solutions",
      period: "Jan 2025 - Feb 2025",
      details: [
        "Configured and troubleshot LAN, VLAN, and WAN networks.",
        "Gained hands-on experience in routing protocols (OSPF, EIGRP, BGP) and network security.",
        "Worked with firewalls (Palo Alto) and implemented security policies.",
        "Assisted in cloud networking configurations (AWS & Azure)."
      ]
    },
    {
      id: "exp-2",
      role: "Network Engineer Intern",
      company: "The Arab Contractors",
      period: "Aug 2024 - Sep 2024",
      details: [
        "Designed and implemented enterprise network solutions.",
        "Assisted in configuring Cisco routers and switches.",
        "Conducted network performance analysis and troubleshooting."
      ]
    },
    {
      id: "exp-3",
      role: "IT Training Program",
      company: "SRTA-City",
      period: "Feb 2025",
      details: [
        "Participated in \"IT Careers\" program, enhancing technical knowledge and industry awareness."
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "HCIA (Huawei Certified ICT Associate)",
      issuer: "Huawei Technologies",
      date: "July - 2025",
      badgeClass: "huawei",
      bullets: [
        "Gained knowledge in switching, routing, IP addressing, and network fundamentals.",
        "Completed a major enterprise network project using Huawei technologies."
      ]
    },
    {
      id: "cert-2",
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "NTI (National Telecommunication Institute)",
      date: "Oct - 2024",
      badgeClass: "cisco",
      bullets: ["Enterprise routing, switching & network automation fundamentals."]
    },
    {
      id: "cert-3",
      title: "MCSA (Microsoft Certified Solutions Associate)",
      issuer: "Instant",
      date: "Nov - 2024",
      badgeClass: "microsoft",
      bullets: ["Windows Server administration and core infrastructure management."]
    },
    {
      id: "cert-4",
      title: "CCNP (Cisco Certified Network Professional)",
      issuer: "Instant",
      date: "Sep - 2024",
      badgeClass: "cisco",
      bullets: ["Advanced enterprise routing (OSPF, EIGRP, BGP) and WAN architecture."]
    },
    {
      id: "cert-5",
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "Instant",
      date: "July - 2024",
      badgeClass: "cisco",
      bullets: ["Network access, IP connectivity, and security fundamentals."]
    },
    {
      id: "cert-6",
      title: "ICDL Certification",
      issuer: "International Computer Driving Licence",
      date: "Oct - 2023",
      badgeClass: "general",
      bullets: ["Computer literacy and office suite proficiency."]
    },
    {
      id: "cert-7",
      title: "English Course",
      issuer: "Language Center",
      date: "Nov 2022 – March 2023",
      badgeClass: "general",
      bullets: ["Professional technical English communication."]
    }
  ],
  skills: {
    networking: ["Routing & Switching", "VLANs", "OSPF", "EIGRP", "BGP", "MPLS", "VPNs"],
    switchingHCIA: ["VLANs", "Trunking", "Spanning Tree Protocol (STP)", "Ethernet basics"],
    routingHCIA: ["Static Routing", "OSPF basics", "Inter-VLAN Routing"],
    servicesHCIA: ["DHCP", "NAT", "ACLs (Access Control Lists)"],
    security: ["Network Security Policies", "Threat Prevention", "Palo Alto Firewalls", "Basic Device Security"],
    wanHCIA: ["GRE Tunnels", "PPP", "HDLC (basics)"],
    os: ["Windows Server"],
    tools: ["Cisco Packet Tracer", "GNS3", "Wireshark", "VMware"],
    management: ["Device configuration", "Monitoring", "Network Troubleshooting"],
    huawei: ["Huawei Routers & Switches", "HCIA Enterprise Setup"],
    soft: ["Teamwork & Collaboration", "Problem-Solving & Troubleshooting", "Leadership & Decision Making", "Strong Communication", "Ability to Work Under Pressure"],
    languages: ["Arabic: Native", "English: Very Good", "French: Intermediate"]
  },
  projects: [
    {
      id: "proj-1",
      title: "Enterprise Network Design & Configuration",
      desc: [
        "Designed a scalable enterprise network with VLAN segmentation.",
        "Configured OSPF and EIGRP routing for efficient data flow.",
        "Implemented firewall rules to improve security and reliability."
      ],
      tech: ["OSPF", "EIGRP", "VLAN Segmentation", "Firewall Rules", "Cisco Routers"]
    },
    {
      id: "proj-2",
      title: "Cloud-Based Network Deployment (AWS & Azure)",
      desc: [
        "Deployed and managed virtual networks and cloud instances.",
        "Configured load balancing and security groups for high availability."
      ],
      tech: ["AWS VPC", "Azure VNet", "Load Balancing", "Security Groups", "Cloud Networking"]
    },
    {
      id: "proj-3",
      title: "Huawei HCIA Enterprise Network Project",
      desc: [
        "Designed and deployed an enterprise-level network using Huawei routers and switches.",
        "Configured VLANs, OSPF, and security features for segmentation and efficiency.",
        "Conducted testing to ensure high availability and scalability."
      ],
      tech: ["Huawei eNSP", "Huawei Routers & Switches", "OSPF", "VLAN Trunking", "High Availability"]
    }
  ]
};

// Global App State
let portfolioData = loadData();

function loadData() {
  const saved = localStorage.getItem('haidy_portfolio_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (!data.general.profileImg || data.general.profileImg.includes('profile.png')) {
        data.general.profileImg = 'assets/images/haidy.jpeg';
      }
      return data;
    } catch(e) {
      console.error("Error loading localStorage data:", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultCVData));
}

function saveData() {
  localStorage.setItem('haidy_portfolio_data', JSON.stringify(portfolioData));
  showToast("Portfolio data saved successfully!");
  renderPortfolio();
}

function resetData() {
  if (confirm("Are you sure you want to reset all portfolio data back to the original CV data?")) {
    portfolioData = JSON.parse(JSON.stringify(defaultCVData));
    localStorage.removeItem('haidy_portfolio_data');
    showToast("Portfolio reset to original CV data.");
    renderPortfolio();
    populateControlPanelForm();
  }
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  checkAdminSession();
  initTypewriter();
  initNetworkCanvas();
  renderPortfolio();
  setupEventListeners();
  populateControlPanelForm();
});

/* -------------------------------------------------------------
   1. TYPEWRITER ANIMATION FOR NAME (Haidy Mahmoud)
   ------------------------------------------------------------- */
function initTypewriter() {
  const nameElement = document.getElementById('heroName');
  if (!nameElement) return;

  const targetName = portfolioData.general.name || "Haidy Mahmoud";
  nameElement.innerHTML = '';
  
  const span = document.createElement('span');
  span.className = 'typewriter-text gradient-text';
  nameElement.appendChild(span);

  let charIndex = 0;
  function typeChar() {
    if (charIndex < targetName.length) {
      span.textContent += targetName.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 120); // 120ms delay per letter for sleek typing feel
    }
  }
  
  setTimeout(typeChar, 400);
}

/* -------------------------------------------------------------
   THEME SWITCHER & ADMIN SESSION MANAGEMENT
   ------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('haidy_portfolio_theme');
  const btn = document.getElementById('themeToggleBtn');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (btn) btn.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    if (btn) btn.textContent = '🌙';
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('haidy_portfolio_theme', isLight ? 'light' : 'dark');
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = isLight ? '☀️' : '🌙';
  showToast(isLight ? "Light theme activated!" : "Dark cyber theme activated!");
}

function isAdminLoggedIn() {
  return sessionStorage.getItem('haidy_admin_logged_in') === 'true';
}

function checkAdminSession() {
  const adminControls = document.getElementById('adminNavControls');
  if (adminControls) {
    adminControls.style.display = isAdminLoggedIn() ? 'flex' : 'none';
  }
}

function openAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.classList.add('open');
  const passcodeEl = document.getElementById('adminPasscode');
  if (passcodeEl) {
    passcodeEl.value = '';
    setTimeout(() => passcodeEl.focus(), 150);
  }
}

function closeAdminLoginModal() {
  const modal = document.getElementById('adminLoginModal');
  if (modal) modal.classList.remove('open');
}
function initNetworkCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Create network nodes
  const nodeCount = Math.min(Math.floor(width / 25), 55);
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1.5,
      isRouter: Math.random() > 0.75
    });
  }

  // Packets moving between nodes
  const packets = [];
  function spawnPacket() {
    if (nodes.length < 2) return;
    const fromIdx = Math.floor(Math.random() * nodes.length);
    let toIdx = Math.floor(Math.random() * nodes.length);
    while (toIdx === fromIdx) toIdx = Math.floor(Math.random() * nodes.length);
    
    packets.push({
      from: nodes[fromIdx],
      to: nodes[toIdx],
      progress: 0,
      speed: Math.random() * 0.015 + 0.008
    });
  }

  setInterval(spawnPacket, 800);

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 160;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw packets
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        packets.splice(i, 1);
        continue;
      }
      const currX = p.from.x + (p.to.x - p.from.x) * p.progress;
      const currY = p.from.y + (p.to.y - p.from.y) * p.progress;

      ctx.beginPath();
      ctx.arc(currX, currY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#2dd4bf';
      ctx.shadowColor = '#2dd4bf';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Update and draw nodes
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse interaction
      if (mouse.x && mouse.y) {
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${1 - mdist / 120})`;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.isRouter ? '#38bdf8' : '#64748b';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* -------------------------------------------------------------
   3. RENDER PORTFOLIO CONTENT FROM DATA
   ------------------------------------------------------------- */
function renderPortfolio() {
  const g = portfolioData.general;

  // General elements
  setElementText('heroTitle', g.title);
  setElementText('heroBio', g.summary);
  setElementText('summaryText', g.summary);
  setElementText('contactEmailText', g.email);
  setElementText('contactPhoneText', g.phone);
  setElementText('contactLocationText', g.location);

  const emailLinks = document.querySelectorAll('.email-link');
  emailLinks.forEach(el => {
    el.href = `mailto:${g.email}`;
    el.textContent = g.email;
  });

  const phoneLinks = document.querySelectorAll('.phone-link');
  phoneLinks.forEach(el => {
    el.href = `tel:${g.phone}`;
    el.textContent = g.phone;
  });

  const profileImgEl = document.getElementById('profileImg');
  if (profileImgEl && g.profileImg) {
    profileImgEl.src = g.profileImg;
  }

  renderExperience();
  renderCertifications();
  renderSkills();
  renderProjects();
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Render Experience Timeline
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item" data-id="${exp.id}">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="role-title">${exp.role}</h3>
            <div class="company-name">${exp.company}</div>
          </div>
          <span class="timeline-date">${exp.period}</span>
        </div>
        <ul class="timeline-list">
          ${exp.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Certifications Grid
function renderCertifications() {
  const container = document.getElementById('certificationsContainer');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(c => `
    <div class="glass-card cert-card" data-id="${c.id}">
      <div>
        <div class="cert-top">
          <div class="cert-badge ${c.badgeClass || 'cisco'}">
            ${c.badgeClass === 'huawei' ? 'HW' : c.badgeClass === 'microsoft' ? 'MS' : 'CS'}
          </div>
          <span class="cert-date">${c.date}</span>
        </div>
        <h3 class="cert-title">${c.title}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        <ul class="cert-bullets">
          ${(c.bullets || []).map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Skills
function renderSkills(filterCategory = 'all') {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  const s = portfolioData.skills;
  const categories = [
    { key: 'networking', title: 'Networking & Protocols', icon: '🌐', items: s.networking },
    { key: 'switchingHCIA', title: 'Switching Technologies', icon: '🔀', items: s.switchingHCIA },
    { key: 'routingHCIA', title: 'Routing Technologies', icon: '🗺️', items: s.routingHCIA },
    { key: 'servicesHCIA', title: 'Network Services', icon: '⚙️', items: s.servicesHCIA },
    { key: 'security', title: 'Security & Firewalls', icon: '🛡️', items: s.security },
    { key: 'wanHCIA', title: 'WAN Technologies', icon: '📡', items: s.wanHCIA },
    { key: 'tools', title: 'Tools & Platforms', icon: '🛠️', items: s.tools },
    { key: 'huawei', title: 'Huawei & Cisco Systems', icon: '🎛️', items: s.huawei },
    { key: 'soft', title: 'Soft Skills', icon: '💡', items: s.soft },
    { key: 'languages', title: 'Languages', icon: '🗣️', items: s.languages }
  ];

  const filtered = filterCategory === 'all' 
    ? categories 
    : categories.filter(c => c.key === filterCategory || (filterCategory === 'tech' && c.key !== 'soft' && c.key !== 'languages'));

  container.innerHTML = filtered.map(cat => `
    <div class="glass-card skill-category-card">
      <div class="skill-category-header">
        <div class="skill-cat-icon">${cat.icon}</div>
        <h3 class="skill-category-title">${cat.title}</h3>
      </div>
      <div class="skill-tags-wrapper">
        ${(cat.items || []).map(item => `
          <span class="skill-tag">
            <span class="skill-tag-dot"></span>
            ${item}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Projects Grid
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((p, idx) => `
    <div class="glass-card project-card" data-id="${p.id}">
      <div>
        <div class="project-header-icon">
          ${idx === 0 ? '🏢' : idx === 1 ? '☁️' : '📡'}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <ul class="project-desc-list">
          ${p.desc.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
      <div class="project-tech-stack">
        ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
   4. CONTROL PANEL / LIVE EDIT DRAWER LOGIC
   ------------------------------------------------------------- */
function setupEventListeners() {
  // Theme Switcher Listener
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Admin Gateway Modal & Hash Trigger
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') {
      if (!isAdminLoggedIn()) {
        openAdminLoginModal();
      }
    }
  });

  if (window.location.hash === '#admin' && !isAdminLoggedIn()) {
    openAdminLoginModal();
  }

  const footerAdminLink = document.getElementById('footerAdminLink');
  if (footerAdminLink) {
    footerAdminLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (isAdminLoggedIn()) {
        const drawer = document.getElementById('controlDrawer');
        if (drawer) drawer.classList.add('open');
      } else {
        openAdminLoginModal();
      }
    });
  }

  const closeAdminLoginBtn = document.getElementById('closeAdminLoginBtn');
  if (closeAdminLoginBtn) {
    closeAdminLoginBtn.addEventListener('click', closeAdminLoginModal);
  }

  const adminLoginForm = document.getElementById('adminLoginForm');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const passcodeEl = document.getElementById('adminPasscode');
      const pass = passcodeEl ? passcodeEl.value.trim() : '';
      const correctPass = portfolioData.adminPassword || "haidy2026";
      
      if (pass === correctPass) {
        sessionStorage.setItem('haidy_admin_logged_in', 'true');
        closeAdminLoginModal();
        checkAdminSession();
        showToast("Welcome back, Eng. Haidy! Admin mode unlocked.");
        const drawer = document.getElementById('controlDrawer');
        if (drawer) drawer.classList.add('open');
      } else {
        showToast("Incorrect passcode! Access denied.");
        if (passcodeEl) passcodeEl.value = '';
      }
    });
  }

  const logoutAdminBtn = document.getElementById('logoutAdminBtn');
  if (logoutAdminBtn) {
    logoutAdminBtn.addEventListener('click', () => {
      sessionStorage.removeItem('haidy_admin_logged_in');
      checkAdminSession();
      const drawer = document.getElementById('controlDrawer');
      if (drawer) drawer.classList.remove('open');
      
      // Stop inline editing if active
      const inlineEditBtn = document.getElementById('inlineEditToggle');
      if (inlineEditBtn && inlineEditBtn.classList.contains('active')) {
        inlineEditBtn.click();
      }
      showToast("Logged out of Admin Mode.");
    });
  }

  // Sticky Navbar Scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Control Panel Drawer Toggle
  const openDrawerBtn = document.getElementById('openDrawerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('controlDrawer');

  if (openDrawerBtn && drawer) {
    openDrawerBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeDrawerBtn && drawer) {
    closeDrawerBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Drawer Tab Switcher
  const drawerTabBtns = document.querySelectorAll('.drawer-tab-btn');
  drawerTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      drawerTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.drawer-tab-content').forEach(content => {
        content.style.display = content.id === targetTab ? 'block' : 'none';
      });
    });
  });

  // Skills Category Filter Buttons
  const skillTabBtns = document.querySelectorAll('.tab-btn[data-skill-filter]');
  skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.getAttribute('data-skill-filter'));
    });
  });

  // Live Control Panel Form Save Button
  const saveFormBtn = document.getElementById('saveFormBtn');
  if (saveFormBtn) {
    saveFormBtn.addEventListener('click', () => {
      saveControlPanelForm();
      drawer.classList.remove('open');
    });
  }

  // Reset Button
  const resetBtn = document.getElementById('resetDataBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetData);
  }

  // Export JSON Button
  const exportBtn = document.getElementById('exportJsonBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportDataJson);
  }

  // Inline Quick Edit Toggle Mode
  const inlineEditBtn = document.getElementById('inlineEditToggle');
  let isInlineEditing = false;
  if (inlineEditBtn) {
    inlineEditBtn.addEventListener('click', () => {
      isInlineEditing = !isInlineEditing;
      const editableElements = document.querySelectorAll('h1, h2, h3, p, .timeline-list li, .cert-bullets li, .project-desc-list li');
      editableElements.forEach(el => {
        el.contentEditable = isInlineEditing ? "true" : "false";
      });
      inlineEditBtn.classList.toggle('active', isInlineEditing);
      inlineEditBtn.textContent = isInlineEditing ? "✏️ Stop Inline Editing" : "✏️ Enable Inline Editing";
      showToast(isInlineEditing ? "Inline edit mode enabled! Click any text directly to edit." : "Inline edit mode disabled.");
    });
  }
}

// Populate Control Panel Form with current portfolioData
function populateControlPanelForm() {
  const g = portfolioData.general;
  setInputValue('editName', g.name);
  setInputValue('editTitle', g.title);
  setInputValue('editEmail', g.email);
  setInputValue('editPhone', g.phone);
  setInputValue('editLocation', g.location);
  setInputValue('editSummary', g.summary);
  setInputValue('editProfileImg', g.profileImg);

  // Projects JSON string edit
  setInputValue('editProjectsJson', JSON.stringify(portfolioData.projects, null, 2));
  // Certifications JSON string edit
  setInputValue('editCertsJson', JSON.stringify(portfolioData.certifications, null, 2));
}

function setInputValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function getInputValue(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

// Save Control Panel Form Inputs
function saveControlPanelForm() {
  portfolioData.general.name = getInputValue('editName');
  portfolioData.general.title = getInputValue('editTitle');
  portfolioData.general.email = getInputValue('editEmail');
  portfolioData.general.phone = getInputValue('editPhone');
  portfolioData.general.location = getInputValue('editLocation');
  portfolioData.general.summary = getInputValue('editSummary');
  portfolioData.general.profileImg = getInputValue('editProfileImg');

  // Parse JSON for Projects
  try {
    const rawProjects = getInputValue('editProjectsJson');
    if (rawProjects) {
      portfolioData.projects = JSON.parse(rawProjects);
    }
  } catch(e) {
    alert("Invalid JSON format in Projects section!");
    return;
  }

  // Parse JSON for Certifications
  try {
    const rawCerts = getInputValue('editCertsJson');
    if (rawCerts) {
      portfolioData.certifications = JSON.parse(rawCerts);
    }
  } catch(e) {
    alert("Invalid JSON format in Certifications section!");
    return;
  }

  saveData();
  initTypewriter();
}

// Export Portfolio JSON
function exportDataJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Haidy_Mahmoud_Portfolio_Data.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Portfolio data exported as JSON file!");
}

/* -------------------------------------------------------------
   5. TOAST NOTIFICATIONS & COPY FUNCTIONS
   ------------------------------------------------------------- */
function showToast(msg) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">✓</span> <span>${msg}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(err => {
    console.error("Clipboard copy failed:", err);
  });
}
