/*
  EDIT PRESENTATION CONTENT HERE.
  Each subject has an array of pages. Add or remove page objects as needed.
  Keep image paths relative to index.html, e.g. "assets/subjects/math/example.png".
*/
window.PRESENTATION_CONTENT = {
  math: {
    label: "MATH",
    code: "MATH",
    characterLine: "A character comment, reaction, or short piece of dialogue goes here.",
    pages: [
      { title: "Introduction to the topic", description: "Replace this paragraph with the first explanation. Introduce the idea and explain why it matters.", bullets: ["First key point", "Second key point", "Third key point"], visualLabel: "VISUAL / 01", visualText: "VISUAL PLACEHOLDER", image: null },
      { title: "How it works", description: "Use this page for the main explanation, a worked example, or a step-by-step breakdown.", bullets: ["Step or detail one", "Step or detail two", "Step or detail three"], visualLabel: "VISUAL / 02", visualText: "DIAGRAM PLACEHOLDER", image: null },
      { title: "Example and application", description: "Finish with an example, application, comparison, or interesting detail.", bullets: ["Example point one", "Example point two"], visualLabel: "VISUAL / 03", visualText: "EXAMPLE PLACEHOLDER", image: null }
    ],
    summary: "Write a short summary of the most important Math concepts covered."
  },
  biology: {
    label: "BIOLOGY",
    code: "BIO",
    characterLine: "A character comment, reaction, or short piece of dialogue goes here.",
    pages: [
      { title: "Introduction to the topic", description: "Replace this paragraph with the first explanation. Introduce the idea and explain why it matters.", bullets: ["First key point", "Second key point", "Third key point"], visualLabel: "VISUAL / 01", visualText: "VISUAL PLACEHOLDER", image: null },
      { title: "How it works", description: "Use this page for the main explanation, a process, or a labeled diagram.", bullets: ["Step or detail one", "Step or detail two", "Step or detail three"], visualLabel: "VISUAL / 02", visualText: "DIAGRAM PLACEHOLDER", image: null },
      { title: "Example and application", description: "Finish with an example, application, comparison, or interesting detail.", bullets: ["Example point one", "Example point two"], visualLabel: "VISUAL / 03", visualText: "EXAMPLE PLACEHOLDER", image: null }
    ],
    summary: "Write a short summary of the most important Biology concepts covered."
  },
  geography: {
    label: "GEOGRAPHY",
    code: "GEO",
    characterLine: "A character comment, reaction, or short piece of dialogue goes here.",
    pages: [
      { title: "Introduction to the topic", description: "Replace this paragraph with the first explanation. Introduce the place, process, or geographic idea.", bullets: ["First key point", "Second key point", "Third key point"], visualLabel: "VISUAL / 01", visualText: "VISUAL PLACEHOLDER", image: null },
      { title: "Main explanation", description: "Use this page for maps, comparisons, geographic processes, or important data.", bullets: ["Step or detail one", "Step or detail two", "Step or detail three"], visualLabel: "VISUAL / 02", visualText: "MAP PLACEHOLDER", image: null },
      { title: "Example and application", description: "Finish with a real-world example, case study, comparison, or interesting detail.", bullets: ["Example point one", "Example point two"], visualLabel: "VISUAL / 03", visualText: "EXAMPLE PLACEHOLDER", image: null }
    ],
    summary: "Write a short summary of the most important Geography concepts covered."
  }
};
