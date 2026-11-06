(() => {
  const $ = (id) => document.getElementById(id);
  const screens = { menu: $("menu-screen"), content: $("content-screen"), conclusion: $("conclusion-screen") };
  let currentSubject = "math";
  let currentPage = 0;

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => element.classList.toggle("is-active", key === name));
    $("screen-label").textContent = name === "content" ? `${PRESENTATION_CONTENT[currentSubject].label} / CONTENT` : name.toUpperCase();
  }

  function openSubject(subject) {
    if (!PRESENTATION_CONTENT[subject]) return;
    currentSubject = subject;
    currentPage = 0;
    renderPage();
    showScreen("content");
  }

  function renderPage() {
    const subject = PRESENTATION_CONTENT[currentSubject];
    const page = subject.pages[currentPage];
    $("subject-kicker").textContent = `SUBJECT / ${String(["math","biology","geography"].indexOf(currentSubject) + 1).padStart(2,"0")}`;
    $("subject-title").textContent = subject.label;
    $("subject-code").textContent = subject.code;
    $("page-current").textContent = String(currentPage + 1).padStart(2,"0");
    $("page-total").textContent = String(subject.pages.length).padStart(2,"0");
    $("page-title").textContent = page.title;
    $("page-description").textContent = page.description;
    $("page-bullets").innerHTML = "";
    (page.bullets || []).forEach(item => {
      const p = document.createElement("p");
      p.textContent = `— ${item}`;
      $("page-bullets").appendChild(p);
    });
    $("visual-label").textContent = page.visualLabel || `VISUAL / ${String(currentPage + 1).padStart(2,"0")}`;
    $("visual-placeholder").querySelector(".visual-placeholder-title").textContent = page.visualText || "VISUAL PLACEHOLDER";
    $("character-line").textContent = subject.characterLine || "Character dialogue goes here.";
    $("page-progress").textContent = `${String(currentPage + 1).padStart(2,"0")} — ${String(subject.pages.length).padStart(2,"0")}`;
    $("previous-page").disabled = currentPage === 0;
    $("previous-page").style.opacity = currentPage === 0 ? ".35" : "1";
    $("next-page").textContent = currentPage === subject.pages.length - 1 ? "FINISH SUBJECT →" : "NEXT →";
  }

  function nextPage() {
    const pages = PRESENTATION_CONTENT[currentSubject].pages;
    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage();
    } else {
      showScreen("menu");
    }
  }
  function previousPage() {
    if (currentPage > 0) { currentPage--; renderPage(); }
  }
  function showConclusion() {
    const grid = $("summary-grid");
    grid.innerHTML = "";
    Object.entries(PRESENTATION_CONTENT).forEach(([key, subject], index) => {
      const article = document.createElement("article");
      article.className = "summary-card";
      const label = document.createElement("span");
      label.textContent = `${String(index + 1).padStart(2,"0")} / ${subject.label}`;
      const paragraph = document.createElement("p");
      paragraph.textContent = subject.summary || "Summary goes here.";
      article.append(label, paragraph);
      grid.appendChild(article);
    });
    showScreen("conclusion");
  }

  document.querySelectorAll("[data-subject]").forEach(button => button.addEventListener("click", () => openSubject(button.dataset.subject)));
  $("home-button").addEventListener("click", () => showScreen("menu"));
  $("return-menu").addEventListener("click", () => showScreen("menu"));
  $("next-page").addEventListener("click", nextPage);
  $("previous-page").addEventListener("click", previousPage);
  $("nose-secret").addEventListener("click", showConclusion);
  $("nose-secret-content").addEventListener("click", showConclusion);

  const dialog = $("controls-dialog");
  $("help-button").addEventListener("click", () => dialog.showModal());
  $("close-help").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  document.addEventListener("keydown", event => {
    if (dialog.open) { if (event.key === "Escape") dialog.close(); return; }
    if (event.key === "?") { dialog.showModal(); return; }
    if (event.key === "Escape" || event.key === "Home") { showScreen("menu"); return; }
    if (event.key === "End") { showConclusion(); return; }
    if (event.key === "ArrowRight" && screens.content.classList.contains("is-active")) { nextPage(); return; }
    if (event.key === "ArrowLeft" && screens.content.classList.contains("is-active")) { previousPage(); return; }
    if (["1","2","3"].includes(event.key)) {
      const subjects = ["math","biology","geography"];
      openSubject(subjects[Number(event.key)-1]);
    }
  });
})();
