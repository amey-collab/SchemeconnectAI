const schemes = [
  { id:"pm-kisan", name:"PM-KISAN", nameHi:"पीएम किसान", category:"agriculture", level:"central", icon:"♧", benefit:"₹6,000/year", desc:"Income support for eligible landholding farmer families.", descHi:"पात्र भूमिधारक किसान परिवारों के लिए आय सहायता।", source:"https://pmkisan.gov.in/", apply:"https://pmkisan.gov.in/", docs:["Aadhaar","Land records","Bank passbook"] },
  { id:"pmjay", name:"Ayushman Bharat - PM-JAY", nameHi:"आयुष्मान भारत - पीएम-जेएवाई", category:"health", level:"central", icon:"✚", benefit:"Up to ₹5 lakh/year", desc:"Health cover for economically vulnerable families.", descHi:"आर्थिक रूप से कमजोर परिवारों के लिए स्वास्थ्य बीमा।", source:"https://pmjay.gov.in/", apply:"https://beneficiary.nha.gov.in/", docs:["Aadhaar or ration card","Family details","SECC eligibility proof"] },
  { id:"ujjwala", name:"Pradhan Mantri Ujjwala Yojana", nameHi:"प्रधानमंत्री उज्ज्वला योजना", category:"women", level:"central", icon:"♨", benefit:"LPG connection", desc:"Deposit-free LPG connection for eligible women.", descHi:"पात्र महिलाओं के लिए जमा-मुक्त एलपीजी कनेक्शन।", source:"https://pmuy.gov.in/", apply:"https://pmuy.gov.in/", docs:["Aadhaar","Ration card","Bank account","BPL/SECC proof"] },
  { id:"jan-dhan", name:"Pradhan Mantri Jan Dhan Yojana", nameHi:"प्रधानमंत्री जन धन योजना", category:"income", level:"central", icon:"₹", benefit:"Basic bank account", desc:"Zero-balance banking, debit card and insurance benefits.", descHi:"जीरो बैलेंस बैंकिंग, डेबिट कार्ड और बीमा लाभ।", source:"https://pmjdy.gov.in/", apply:"https://pmjdy.gov.in/", docs:["Aadhaar","Address proof","One passport-size photo"] },
  { id:"pm-suryoday", name:"PM Surya Ghar Muft Bijli", nameHi:"पीएम सूर्य घर मुफ्त बिजली", category:"energy", level:"central", icon:"☀", benefit:"Up to 300 units/month", desc:"Subsidy for rooftop solar systems on residential homes.", descHi:"आवासीय घरों पर छत पर सोलर सिस्टम के लिए सब्सिडी।", source:"https://pmsuryagh.gov.in/", apply:"https://pmsuryagh.investindia.gov.in/", docs:["Aadhaar","Electricity bill","Property/consent document","Bank details"] },
  { id:"pm-aawas", name:"Pradhan Mantri Awaas Yojana", nameHi:"प्रधानमंत्री आवास योजना", category:"housing", level:"central", icon:"⌂", benefit:"Housing subsidy", desc:"Financial assistance for eligible rural and urban housing.", descHi:"पात्र ग्रामीण और शहरी आवास के लिए वित्तीय सहायता।", source:"https://pmaymis.gov.in/", apply:"https://pmaymis.gov.in/", docs:["Aadhaar","Income proof","Caste certificate if applicable","Land documents"] },
  { id:"nps", name:"Atal Pension Yojana", nameHi:"अटल पेंशन योजना", category:"pension", level:"central", icon:"◎", benefit:"Guaranteed monthly pension", desc:"Pension scheme for eligible citizens aged 18 to 40.", descHi:"18 से 40 वर्ष के पात्र नागरिकों के लिए पेंशन योजना।", source:"https://jansuraksha.gov.in/", apply:"https://jansuraksha.gov.in/", docs:["Aadhaar","Bank account","Mobile number"] },
  { id:"pm-suraksha", name:"PM Suraksha Bima Yojana", nameHi:"प्रधानमंत्री सुरक्षा बीमा योजना", category:"pension", level:"central", icon:"◆", benefit:"Accident cover ₹2 lakh", desc:"Low-cost annual accident insurance linked to savings account.", descHi:"बचत खाते से जुड़ा सस्ता वार्षिक दुर्घटना बीमा।", source:"https://jansuraksha.gov.in/", apply:"https://jansuraksha.gov.in/", docs:["Aadhaar","Bank account","Consent for auto-debit"] },
  { id:"pm-jeevan", name:"PM Jeevan Jyoti Bima Yojana", nameHi:"प्रधानमंत्री जीवन ज्योति बीमा योजना", category:"pension", level:"central", icon:"◉", benefit:"Life cover ₹2 lakh", desc:"Affordable annual life insurance for eligible account holders.", descHi:"पात्र खाताधारकों के लिए किफायती वार्षिक जीवन बीमा।", source:"https://jansuraksha.gov.in/", apply:"https://jansuraksha.gov.in/", docs:["Aadhaar","Bank account","Consent for auto-debit"] },
  { id:"sukanya", name:"Sukanya Samriddhi Yojana", nameHi:"सुकन्या समृद्धि योजना", category:"education women", level:"central", icon:"♀", benefit:"Savings for girl child", desc:"Tax-benefited savings account for a girl child under 10.", descHi:"10 वर्ष से कम उम्र की बालिका के लिए बचत योजना।", source:"https://www.nsiindia.gov.in/", apply:"https://www.nsiindia.gov.in/", docs:["Girl child's birth certificate","Guardian Aadhaar","Address proof"] },
  { id:"post-matric", name:"Post Matric Scholarship", nameHi:"पोस्ट मैट्रिक छात्रवृत्ति", category:"education", level:"central", icon:"▣", benefit:"Tuition and allowance", desc:"Support for eligible students in post-matriculation studies.", descHi:"मातृकत्तर अध्ययन करने वाले पात्र छात्रों के लिए सहायता।", source:"https://scholarships.gov.in/", apply:"https://scholarships.gov.in/", docs:["Aadhaar","Income certificate","Caste certificate","Admission proof","Bank account"] },
  { id:"nsp", name:"National Scholarship Portal", nameHi:"राष्ट्रीय छात्रवृत्ति पोर्टल", category:"education", level:"central", icon:"▤", benefit:"Multiple scholarships", desc:"Single portal for central, state and university scholarships.", descHi:"केंद्रीय, राज्य और विश्वविद्यालय छात्रवृत्तियों का एकल पोर्टल।", source:"https://scholarships.gov.in/", apply:"https://scholarships.gov.in/", docs:["Aadhaar","Income certificate","Academic documents","Bank account"] },
  { id:"ladli-laxmi", name:"Ladli Laxmi Yojana", nameHi:"लाडली लक्ष्मी योजना", category:"women education", level:"state", icon:"♀", benefit:"Girl child support", desc:"Madhya Pradesh scheme supporting girls' education and well-being.", descHi:"मध्य प्रदेश की बालिकाओं की शिक्षा और कल्याण हेतु योजना।", source:"https://ladlilaxmi.mp.gov.in/", apply:"https://ladlilaxmi.mp.gov.in/", docs:["Birth certificate","Parent Aadhaar","Residence proof","Bank account"] },
  { id:"sambal", name:"Mukhyamantri Jan Kalyan Sambal", nameHi:"मुख्यमंत्री जन कल्याण संबल", category:"income pension", level:"state", icon:"◈", benefit:"Assistance and pension", desc:"Madhya Pradesh support for eligible registered workers.", descHi:"पंजीकृत श्रमिकों के लिए मध्य प्रदेश सहायता और पेंशन योजना।", source:"https://saara.mp.gov.in/", apply:"https://saara.mp.gov.in/", docs:["Aadhaar","Residence proof","Employment registration","Bank account"] },
  { id:"cyber-gram", name:"Cyber Tehsil / Land Services", nameHi:"साइबर तहसील / भूमि सेवाएँ", category:"agriculture", level:"state", icon:"⌑", benefit:"Online land services", desc:"Madhya Pradesh digital land record and revenue services.", descHi:"मध्य प्रदेश की डिजिटल भूमि अभिलेख और राजस्व सेवाएँ।", source:"https://saara.mp.gov.in/", apply:"https://saara.mp.gov.in/", docs:["Aadhaar","Land documents","Application form"] }
];

let language = "en";
let activeCategory = "all";
let wizardGoal = null;
let wizardStep = 0;
const answers = {};
const STATUS_REFRESH_MS = 60000;
let schemeStatuses = {};
let hasShownDeadlineToast = false;

const translations = {
  en: {
    brandSub:"Public welfare schemes", home:"Home", schemes:"Schemes", how:"How it works",
    eyebrow:"Citizen service portal", heroTitle:"Find government schemes made for you",
    heroText:"Answer a few simple questions to discover central and state schemes you may be eligible for.",
    checkBtn:"Check my eligibility", privacy:"No Aadhaar required · Your answers stay private",
    quickCheck:"Quick eligibility check", questionLabel:"A few details help us find the right schemes",
    questionTitle:"What are you looking for?", goalIncome:"Financial support", goalHealth:"Health care", goalEducation:"Education",
    goalHousing:"Housing", continue:"Continue", statSchemes:"Schemes available", statStates:"States & Union Territories",
    statOffline:"Privacy-first screening", statLang:"Bilingual support", popularEyebrow:"Popular categories",
    browseTitle:"Browse schemes", viewAll:"View all schemes →", catAll:"All schemes", catAgriculture:"Agriculture",
    catHealth:"Health", catEducation:"Education", catWomen:"Women & Child", catHousing:"Housing", catPension:"Pension",
    levelAll:"All levels", levelCentral:"Central Government", levelState:"State Government", howEyebrow:"Simple and transparent",
    howTitle:"How SchemeConnect works", step1Title:"Answer a few questions",
    step1Text:"Tell us only what may affect your eligibility. You can choose “I don't know”.",
    step2Title:"We check the rules", step2Text:"Our transparent eligibility engine compares your answers with official guidelines.",
    step3Title:"View and apply", step3Text:"Get a ranked list, documents checklist and official application link.",
    footerSub:"Empowering citizens with clear access",
    footerText:"Information is provided for guidance. Please verify details with the official scheme portal.",
    searchPlaceholder:"Search schemes, benefits or departments",
    alertsTitle:"Scheme alerts"
  },
  hi: {
    brandSub:"सार्वजनिक कल्याण योजनाएँ", home:"मुखपृष्ठ", schemes:"योजनाएँ", how:"यह कैसे काम करता है",
    eyebrow:"नागरिक सेवा पोर्टल", heroTitle:"आपके लिए बनी सरकारी योजनाएँ खोजें",
    heroText:"केंद्रीय और राज्य की उन योजनाओं को जानें जिनके लिए आप पात्र हो सकते हैं—बस कुछ सरल प्रश्नों के उत्तर दें।",
    checkBtn:"अपनी पात्रता जाँचें", privacy:"आधार की आवश्यकता नहीं · आपके उत्तर निजी रहते हैं",
    quickCheck:"त्वरित पात्रता जाँच", questionLabel:"सही योजनाएँ खोजने में कुछ विवरण मदद करते हैं",
    questionTitle:"आप किस सहायता की तलाश में हैं?", goalIncome:"आर्थिक सहायता", goalHealth:"स्वास्थ्य सेवा", goalEducation:"शिक्षा",
    goalHousing:"आवास", continue:"आगे बढ़ें", statSchemes:"उपलब्ध योजनाएँ", statStates:"राज्य और केंद्रशासित प्रदेश",
    statOffline:"गोपनीयता-अनुकूल जाँच", statLang:"द्विभाषी समर्थन", popularEyebrow:"लोकप्रिय श्रेणियाँ",
    browseTitle:"योजनाएँ देखें", viewAll:"सभी योजनाएँ देखें →", catAll:"सभी योजनाएँ", catAgriculture:"कृषि",
    catHealth:"स्वास्थ्य", catEducation:"शिक्षा", catWomen:"महिला और बाल", catHousing:"आवास", catPension:"पेंशन",
    levelAll:"सभी स्तर", levelCentral:"केंद्र सरकार", levelState:"राज्य सरकार", howEyebrow:"सरल और पारदर्शी",
    howTitle:"SchemeConnect कैसे काम करता है", step1Title:"कुछ प्रश्नों के उत्तर दें",
    step1Text:"केवल वही बताएं जिससे पात्रता प्रभावित हो सकती है। आप \"पता नहीं\" चुन सकते हैं।",
    step2Title:"हम नियम जाँचते हैं", step2Text:"हमारा पारदर्शी इंजन आपके उत्तरों को आधिकारिक दिशानिर्देशों से मिलाता है।",
    step3Title:"परिणाम देखें और आवेदन करें", step3Text:"प्राथमिकता सूची, दस्तावेज़ चेकलिस्ट और आधिकारिक लिंक पाएँ।",
    footerSub:"नागरिकों को स्पष्ट पहुँच सशक्त बनाना",
    footerText:"यह जानकारी मार्गदर्शन हेतु है। आवेदन से पहले आधिकारिक योजना पोर्टल पर विवरण सत्यापित करें।",
    searchPlaceholder:"योजना, लाभ या विभाग खोजें",
    alertsTitle:"योजना अलर्ट"
  }
};

function t(key) { return (translations[language] && translations[language][key]) || key; }

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelector("#languageToggle").textContent = language === "en" ? "हिन्दी" : "English";
  renderSchemes();
}

function renderSchemes() {
  const query = document.querySelector("#schemeSearch").value.trim().toLowerCase();
  const level = document.querySelector("#levelFilter").value;
  const cards = schemes.filter(s => {
    const localized = `${language === "hi" ? s.nameHi : s.name} ${s.desc} ${s.descHi} ${s.category}`;
    return (activeCategory === "all" || s.category.includes(activeCategory))
      && (level === "all" || s.level === level)
      && (!query || localized.toLowerCase().includes(query));
  });

  document.querySelector("#schemeGrid").innerHTML = cards.length ? cards.map(s => `
    <article class="scheme-card">
      <div class="scheme-card-top">
        <div class="scheme-icon">${s.icon}</div>
        <span class="scheme-level">${s.level === "central" ? (language === "hi" ? "केंद्र" : "Central") : (language === "hi" ? "राज्य" : "State")}</span>
      </div>
      <h3>${language === "hi" ? s.nameHi : s.name}</h3>
      <p>${language === "hi" ? s.descHi : s.desc}</p>
      ${renderSchemeStatus(s)}
      <div class="scheme-card-foot">
        <span class="benefit">${s.benefit}</span>
        <button type="button" data-scheme="${s.id}">${language === "hi" ? "विवरण देखें →" : "View details →"}</button>
      </div>
    </article>`).join("") : `<p style="grid-column:1/-1;text-align:center;color:#748079;padding:40px">No matching schemes found.</p>`;
}

document.querySelectorAll(".goal-card").forEach(card => card.addEventListener("click", () => {
  document.querySelectorAll(".goal-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");
  wizardGoal = card.dataset.value;
  document.querySelector("#heroNext").disabled = false;
}));

document.querySelector("#heroNext").addEventListener("click", () => openWizard(wizardGoal));
document.querySelector("#startCheck").addEventListener("click", () => openWizard());
document.querySelector("#languageToggle").addEventListener("click", () => { language = language === "en" ? "hi" : "en"; applyLanguage(); });
document.querySelector("#textSize").addEventListener("click", () => {
  const root = document.documentElement;
  root.style.fontSize = root.style.fontSize === "17px" ? "16px" : "17px";
});

document.querySelectorAll(".category").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.category;
  renderSchemes();
}));
document.querySelector("#schemeSearch").addEventListener("input", renderSchemes);
document.querySelector("#levelFilter").addEventListener("change", renderSchemes);
document.querySelector("#viewAll").addEventListener("click", () => {
  activeCategory = "all";
  document.querySelectorAll(".category").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
  document.querySelector("#schemeSearch").value = "";
  document.querySelector("#levelFilter").value = "all";
  renderSchemes();
  document.querySelector("#schemes").scrollIntoView();
});

document.querySelector("#schemeGrid").addEventListener("click", e => {
  const btn = e.target.closest("[data-scheme]");
  if (!btn) return;
  openSchemeDialog(schemes.find(s => s.id === btn.dataset.scheme));
});

function openSchemeDialog(s) {
  const dialog = document.querySelector("#schemeDialog");
  document.querySelector("#schemeDialogContent").innerHTML = `
    <div class="dialog-head"><span>${s.level === "central" ? "Central Government" : "State Government"}</span><h2>${language === "hi" ? s.nameHi : s.name}</h2></div>
    <div class="dialog-body">
      <div class="dialog-grid">
        <div><h3>${language === "hi" ? "लाभ" : "Benefit"}</h3><p>${s.benefit}</p></div>
        <div><h3>${language === "hi" ? "दस्तावेज़" : "Documents"}</h3><ul>${s.docs.map(d => `<li>${d}</li>`).join("")}</ul></div>
      </div>
      <div class="dialog-actions">
        <a href="${s.apply}" target="_blank" rel="noopener">${language === "hi" ? "आधिकारिक पोर्टल पर जाएँ" : "Visit official portal"} ↗</a>
        <button type="button" id="closeDialog" aria-label="Close">×</button>
      </div>
    </div>`;
  dialog.showModal();
  document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
}

const wizardSteps = [
  { key:"state", kicker:"Step 1 of 4", title:"Where do you live?", subtitle:"This helps us include applicable state schemes.", options:["Madhya Pradesh","Uttar Pradesh","Bihar","Rajasthan","Maharashtra","Other state / UT","I don't know"] },
  { key:"age", kicker:"Step 2 of 4", title:"What is your age group?", subtitle:"Age is one of the most important eligibility conditions.", options:["Below 18","18–40","41–60","61 and above","I don't know"] },
  { key:"category", kicker:"Step 3 of 4", title:"Which category applies to you?", subtitle:"You may choose the closest available option.", options:["General","Scheduled Caste (SC)","Scheduled Tribe (ST)","Other Backward Class (OBC)","I don't know"] },
  { key:"income", kicker:"Step 4 of 4", title:"What is your annual family income?", subtitle:"Enter an approximate range if you know it.", options:["Below ₹1 lakh","₹1–2 lakh","₹2–5 lakh","Above ₹5 lakh","I don't know"] }
];

function openWizard(goal) {
  if (goal) wizardGoal = goal;
  wizardStep = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  document.querySelector("#modalBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
  renderWizard();
}

function renderWizard() {
  const step = wizardSteps[wizardStep];
  document.querySelector("#progressBar").style.width = `${((wizardStep + 1) / wizardSteps.length) * 100}%`;
  document.querySelector("#wizardContent").innerHTML = `
    <div class="wizard-body">
      <span class="wizard-kicker">${language === "hi" ? `चरण ${wizardStep + 1} / 4` : step.kicker}</span>
      <h2 id="modalTitle">${step.title}</h2>
      <p class="wizard-subtitle">${step.subtitle}</p>
      <div class="option-grid">
        ${step.options.map((o, i) => `<button type="button" class="option-btn ${answers[step.key] === o ? "selected" : ""}" data-answer="${i}">${o}</button>`).join("")}
      </div>
      <div class="wizard-actions">
        ${wizardStep > 0 ? `<button type="button" class="back-btn" id="wizardBack">Back</button>` : ""}
        <button type="button" class="next-btn" id="wizardNext" ${answers[step.key] ? "" : "disabled"}>${wizardStep === wizardSteps.length - 1 ? "View my schemes" : "Continue"} →</button>
      </div>
    </div>`;

  document.querySelectorAll(".option-btn").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    answers[step.key] = step.options[Number(btn.dataset.answer)];
    document.querySelector("#wizardNext").disabled = false;
  }));
  const back = document.querySelector("#wizardBack");
  if (back) back.addEventListener("click", () => { wizardStep--; renderWizard(); });
  document.querySelector("#wizardNext").addEventListener("click", () => {
    if (wizardStep < wizardSteps.length - 1) { wizardStep++; renderWizard(); }
    else renderResults();
  });
}

function renderResults() {
  let eligible = schemes.filter(s => {
    if (wizardGoal === "health" && s.category.includes("health")) return true;
    if (wizardGoal === "education" && s.category.includes("education")) return true;
    if (wizardGoal === "housing" && s.category.includes("housing")) return true;
    if (wizardGoal === "income" && (s.category.includes("income") || s.category.includes("agriculture") || s.category.includes("pension"))) return true;
    return s.category.includes(wizardGoal) || s.category.includes("women") || s.category.includes("education");
  });
  if (!eligible.length) eligible = schemes.slice(0, 6);

  document.querySelector("#progressBar").style.width = "100%";
  document.querySelector("#wizardContent").innerHTML = `
    <div class="wizard-body">
      <span class="wizard-kicker">Eligibility summary</span>
      <h2 id="modalTitle">Recommended for you</h2>
      <p class="wizard-subtitle">Status is preliminary. Final eligibility depends on official guidelines and verification.</p>
      <div class="result-summary">
        <div><strong>${eligible.length}</strong><span>Likely matches</span></div>
        <div><strong>${schemes.filter(s => s.level === "central").length}</strong><span>Central schemes</span></div>
        <div><strong>0</strong><span>Personal data stored</span></div>
      </div>
      <div class="result-list">
        ${eligible.slice(0, 7).map(s => `
          <div class="result-item">
            <div><b>${language === "hi" ? s.nameHi : s.name}</b><span>${s.benefit}</span></div>
            <span class="status ${answers.income === "I don't know" ? "possible" : ""}">${answers.income === "I don't know" ? "Possibly eligible" : "Check eligibility"}</span>
          </div>`).join("")}
      </div>
      <div class="wizard-actions">
        <button type="button" class="back-btn" id="restartWizard">Start again</button>
        <button type="button" class="next-btn" id="browseMatches">Browse matching schemes →</button>
      </div>
    </div>`;
  document.querySelector("#restartWizard").addEventListener("click", () => openWizard(wizardGoal));
  document.querySelector("#browseMatches").addEventListener("click", () => {
    closeModal();
    document.querySelector("#schemes").scrollIntoView();
  });
}

function closeModal() {
  document.querySelector("#modalBackdrop").hidden = true;
  document.body.style.overflow = "";
}
document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector("#modalBackdrop").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !document.querySelector("#modalBackdrop").hidden) closeModal(); });
document.querySelector("#helpBtn").addEventListener("click", () => openWizard());

function renderSchemeStatus(scheme) {
  const status = schemeStatuses[scheme.id] || { status: "active", deadline: null };
  if (status.status === "closed") {
    return `<div class="scheme-status-row"><span class="status-pill closed">${language === "hi" ? "बंद" : "Closed"}</span></div>`;
  }
  if (status.status === "deadline" && status.deadline) {
    const deadline = new Date(status.deadline);
    const remaining = deadline.getTime() - Date.now();
    const copy = remaining > 0 ? formatDeadlineRemaining(remaining) : (language === "hi" ? "आवेदन तिथि समाप्त" : "Deadline passed");
    return `<div class="scheme-status-row"><span class="status-pill deadline">${language === "hi" ? "समय सीमा" : "Deadline"}</span><span class="deadline-copy">${copy}</span></div>`;
  }
  return `<div class="scheme-status-row"><span class="status-pill">${language === "hi" ? "सक्रिय" : "Applications active"}</span></div>`;
}

function formatDeadlineRemaining(milliseconds) {
  const totalDays = Math.ceil(milliseconds / 86400000);
  if (totalDays <= 1) return language === "hi" ? "आज अंतिम तिथि हो सकती है" : "Ends within 24 hours";
  if (totalDays <= 7) return language === "hi" ? `${totalDays} दिन शेष` : `${totalDays} days remaining`;
  if (totalDays <= 30) return language === "hi" ? `${Math.ceil(totalDays / 7)} सप्ताह शेष` : `${Math.ceil(totalDays / 7)} weeks remaining`;
  return language === "hi" ? `${totalDays} दिन शेष` : `${totalDays} days remaining`;
}

async function refreshSchemeStatuses(showToast = false) {
  try {
    const response = await fetch("data/scheme-status.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Status feed returned ${response.status}`);
    const feed = await response.json();
    schemeStatuses = feed.statuses || {};
    document.querySelector("#lastStatusUpdate").textContent =
      `${language === "hi" ? "अंतिम अपडेट" : "Last updated"} ${new Date(feed.updatedAt || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    renderSchemes();
    renderNotifications(feed);
    if (showToast) showDeadlineToast();
  } catch (error) {
    console.error("Unable to refresh scheme status:", error);
    document.querySelector("#lastStatusUpdate").textContent =
      language === "hi" ? "ऑफ़लाइन स्थिति" : "Showing offline status";
  }
}

function renderNotifications(feed) {
  const alerts = Object.entries(schemeStatuses)
    .filter(([, status]) => status.status === "deadline")
    .map(([id, status]) => ({ scheme: schemes.find(s => s.id === id), status }))
    .filter(item => item.scheme);

  document.querySelector("#notificationCount").textContent = String(alerts.length);
  document.querySelector("#notificationList").innerHTML = alerts.length ? alerts.map(({ scheme, status }) => `
    <div class="notification-item">
      <div class="notification-icon">◷</div>
      <div>
        <strong>${language === "hi" ? scheme.nameHi : scheme.name}</strong>
        <p>${status.message}</p>
        <a href="${scheme.apply}" target="_blank" rel="noopener">${language === "hi" ? "अंतिम तिथि सत्यापित करें" : "Verify deadline"} ↗</a>
      </div>
    </div>`).join("") : `<div class="notification-item"><div class="notification-icon">✓</div><div><strong>${language === "hi" ? "कोई निकट तिथि नहीं" : "No approaching deadlines"}</strong><p>${language === "hi" ? "फिलहाल कोई सक्रिय समाप्ति अलर्ट नहीं है।" : "There are no active deadline alerts."}</p></div></div>`;
}

function showDeadlineToast() {
  if (hasShownDeadlineToast) return;
  const alert = Object.entries(schemeStatuses).find(([, status]) => status.status === "deadline");
  if (!alert) return;
  const [id, status] = alert;
  const scheme = schemes.find(s => s.id === id);
  if (!scheme) return;
  hasShownDeadlineToast = true;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<div class="toast-icon">◷</div><div><strong>${language === "hi" ? "आवेदन तिथि का अलर्ट" : "Application deadline alert"}</strong><span>${language === "hi" ? scheme.nameHi : scheme.name} — ${status.message}</span></div><button type="button" aria-label="Dismiss">×</button>`;
  toast.querySelector("button").addEventListener("click", () => toast.remove());
  document.querySelector("#toastStack").appendChild(toast);
  window.setTimeout(() => toast.remove(), 12000);
}

document.querySelector("#notificationBtn").addEventListener("click", () => {
  const panel = document.querySelector("#notificationPanel");
  panel.hidden = !panel.hidden;
});
document.querySelector("#closeNotifications").addEventListener("click", () => {
  document.querySelector("#notificationPanel").hidden = true;
});
document.addEventListener("click", event => {
  const panel = document.querySelector("#notificationPanel");
  if (!panel.hidden && !panel.contains(event.target) && !event.target.closest("#notificationBtn")) panel.hidden = true;
});

applyLanguage();
refreshSchemeStatuses(true);
window.setInterval(() => refreshSchemeStatuses(false), STATUS_REFRESH_MS);
