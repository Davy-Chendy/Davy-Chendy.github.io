export const site = {
  demoNotice: false,
  repo: "https://github.com/Davy-Chendy/Davy-Chendy.github.io",

  url: "https://davy-chendy.github.io",
  base: "/",

  lang: "en",
  locale: "en_US",
  localeAlternate: "zh_CN",

  description:
    "Deyu Chen is a master's student at South China University of Technology, " +
    "working on test-time adaptation and the reliable deployment of vision foundation models.",

  socialDescription:
    "Researching test-time adaptation, vision foundation models, and reliable model deployment.",

  seo: {
    jobTitle: "Master's Student in Software Engineering",
    affiliation: {
      name: "South China University of Technology",
      sameAs: "https://www.scut.edu.cn/en/",
    },
    location: { locality: "Guangzhou", country: "CN" },
    knowsAbout: [
      "Test-Time Adaptation",
      "Vision Foundation Models",
      "Robust Machine Learning",
      "Continual Learning",
      "Domain Adaptation",
    ],
  },

  robots: {
    indexing: true,
    aiCrawlers: true,
  },

  theme: {
    default: "system",
    toggle: true,
  },
};

if (process.env.SITE_URL) site.url = process.env.SITE_URL.replace(/^http:/, "https:");
if (process.env.BASE_PATH) site.base = process.env.BASE_PATH;

export function absoluteUrl(path = "") {
  const origin = site.url.replace(/\/+$/, "");
  const base = ("/" + site.base + "/").replace(/\/+/g, "/");
  return origin + (base + path.replace(/^\/+/, "")).replace(/\/+/g, "/");
}
