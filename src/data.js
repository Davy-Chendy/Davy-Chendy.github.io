// Public-facing content for Deyu Chen's academic homepage.
// Keep private contact details and work under double-blind review out of this file.

import photo from "./assets/photo.png";

export const profile = {
  nameEn: "Deyu Chen",
  nameCn: "陈德宇",
  role: [
    "Master's Student in Software Engineering,",
    "South China University of Technology",
  ],
  location: "Guangzhou, China",
  photo,
  links: [
    {
      label: "davychen2001@gmail.com",
      href: "mailto:davychen2001@gmail.com",
      copyText: "davychen2001@gmail.com",
    },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=cA0SyB0AAAAJ" },
    { label: "GitHub", href: "https://github.com/Davy-Chendy" },
  ],
};

export const about = [
  "I am a master's student in Software Engineering at " +
    "<a href='https://www.scut.edu.cn/en/' target='_blank' rel='noopener noreferrer'>South China University of Technology</a>, " +
    "advised by <a href='https://www2.scut.edu.cn/sse/2018/1206/c20715a298878/page.htm' target='_blank' rel='noopener noreferrer'>Associate Professor Qing Du</a>. " +
    "I received my bachelor's degree in Software Engineering from the same university in 2024.",
  "My research focuses on <strong>test-time adaptation</strong> and the reliable " +
    "deployment of <strong>vision foundation models</strong>. I am particularly " +
    "interested in continual, collaborative, and collapse-resistant adaptation: " +
    "how a deployed model can learn from changing unlabeled data while remaining " +
    "stable, efficient, and trustworthy.",
  "My work has appeared in NeurIPS, ICLR, and IEEE TPAMI. I enjoy working on " +
    "practical learning problems that connect robust optimization with real-world " +
    "deployment. Please feel free to reach me at " +
    "<a href='mailto:davychen2001@gmail.com'>davychen2001@gmail.com</a>.",
];

export const news = [
  {
    date: "2026",
    text: "<strong>ZeroSiam</strong> was accepted to ICLR 2026.",
  },
  {
    date: "2026",
    text: "<strong>Adapt in the Wild</strong> was published in IEEE TPAMI.",
  },
  {
    date: "Oct 2025",
    text: "Received the Graduate National Scholarship.",
  },
  {
    date: "2024",
    text: "<strong>Cross-Device Collaborative Test-Time Adaptation</strong> was accepted to NeurIPS 2024.",
  },
];

export const education = [
  {
    org: "South China University of Technology",
    role: "Master's Student in Software Engineering · Advisor: Associate Professor Qing Du",
    date: "Sep 2024 – Jun 2027 (expected)",
    url: "https://www.scut.edu.cn/en/",
  },
  {
    org: "South China University of Technology",
    role: "B.Eng. in Software Engineering · GPA: 3.7/4.0",
    date: "Sep 2020 – Jun 2024",
    url: "https://www.scut.edu.cn/en/",
  },
];

export const publications = [
  {
    title:
      "Adapt in the Wild: Test-Time Entropy Minimization with Sharpness and Feature Regularization",
    authors:
      "Shuaicheng Niu*, Guohao Chen*, <strong>Deyu Chen</strong>, Yifan Zhang, " +
      "Jiaxiang Wu, Zhiquan Wen, Yaofo Chen, Peilin Zhao, Chunyan Miao, and Mingkui Tan",
    venue:
      "<em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</em>, 2026",
    abstract:
      "This work studies why test-time adaptation becomes unstable under mixed " +
      "shifts, small batches, and online label imbalance. It develops sharpness-aware " +
      "reliable entropy minimization together with feature redundancy and inequity " +
      "regularization to improve stability in challenging deployment streams.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2509.04977" },
    ],
  },
  {
    title:
      "ZeroSiam: An Efficient Asymmetry for Test-Time Entropy Optimization without Collapse",
    authors:
      "Guohao Chen*, Shuaicheng Niu*, <strong>Deyu Chen</strong>, Jiahao Yang, " +
      "Zitian Zhang, Mingkui Tan, Pengcheng Wu, and Zhiqi Shen",
    venue:
      "<em>International Conference on Learning Representations (ICLR)</em>, 2026",
    abstract:
      "ZeroSiam introduces a lightweight asymmetric Siamese design for stable " +
      "test-time entropy optimization. A learnable predictor and stop-gradient " +
      "branch prevent trivial collapse without extra encoder passes or teacher models.",
    links: [
      { label: "OpenReview", href: "https://openreview.net/forum?id=x6jHZYhnhL" },
      { label: "arXiv", href: "https://arxiv.org/abs/2509.23183" },
      { label: "Code", href: "https://github.com/Cascol-Chen/ZeroSiam" },
    ],
  },
  {
    title: "Cross-Device Collaborative Test-Time Adaptation",
    authors:
      "Guohao Chen, Shuaicheng Niu, <strong>Deyu Chen</strong>, Shuhai Zhang, " +
      "Changsheng Li, Yuanqing Li, and Mingkui Tan",
    venue:
      "<em>Advances in Neural Information Processing Systems (NeurIPS)</em>, 2024",
    abstract:
      "This work presents CoLA, a collaborative lifelong test-time adaptation " +
      "framework that shares domain knowledge across devices. It supports both " +
      "optimization-based principal agents and efficient, optimization-free follower agents.",
    links: [
      {
        label: "Paper",
        href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/de0e668df3fe63ec89e5a7e68f3d350f-Abstract-Conference.html",
      },
      { label: "Code", href: "https://github.com/Cascol-Chen/COLA" },
    ],
  },
];

// Non-public manuscripts are omitted until an appropriate public release.
export const workingPapers = [];

export const experience = [
  {
    org: "Collaborative and Lifelong Test-Time Adaptation",
    desc:
      "Developing mechanisms that reuse and share domain knowledge across devices, " +
      "including optimization-free adaptation for resource-constrained deployment.",
    role: "Research on continual and cross-device adaptation",
    date: "Sep 2023 – Present",
  },
  {
    org: "Reliable Test-Time Adaptation under Real-World Shifts",
    desc:
      "Studying robust optimization and representation regularization for mixed " +
      "distribution shifts, small batches, and online label imbalance.",
    role: "Research on stable adaptation in dynamic environments",
    date: "Oct 2024 – Present",
  },
  {
    org: "Collapse-Resistant Test-Time Optimization",
    desc:
      "Designing asymmetric self-training architectures that suppress trivial " +
      "solutions and filter non-generalizable learning signals during deployment.",
    role: "Research on stable test-time learning",
    date: "Feb 2025 – Present",
  },
];

// Entertainment and personal side projects are kept separate from this academic version.
export const projects = [];

export const awards = [
  {
    org: "Graduate National Scholarship",
    date: "Oct 2025",
  },
  {
    org: "National Inspirational Scholarship",
    date: "Dec 2021",
  },
  {
    org: "Chinese Mathematics Competitions, Third Prize (Non-Mathematics Category)",
    date: "Dec 2021",
  },
];

export const teaching = [];

export const lastUpdated = "August 2026";
