# 陈德宇的学术主页

采用 [Laip11/academic-homepage-template](https://github.com/Laip11/academic-homepage-template) 模板，保留酒红色主题、悬浮导航和论文卡片。

需要 Node.js 18 或以上，无须安装依赖。

```sh
npm run dev
# 浏览 http://127.0.0.1:4321
npm run lint
npm run build
```

修改 `content/profile.md` 更新个人简介和链接；修改 `content/main.md` 更新学术内容。这两个文件使用 HTML 片段。修改后执行 `npm run build`，再刷新预览。

`templates/homepage.html` 是布局模板。本地构建会把内容直接嵌入根目录 `index.html`，并生成相同的 `dist/index.html` 用于预览。正文无需 JavaScript 或外部 Markdown 服务即可阅读。修改内容后，请一并提交生成的根目录 `index.html`。

GitHub 仓库 Pages 设置为 **Deploy from a branch → main → / (root)**。本地运行 `npm run lint` 后提交并推送，直接发布根目录页面，不需要自定义 Actions 工作流。

内容根据 2026 年 10 月提供的 CV 更新。Publications 仅列已发表论文；按本人要求，FATE 作为在研项目列入 Research Experience，自演进大语言模型作为兴趣方向介绍。不公开审稿细节、手机号、生日，也不提供完整 CV 下载。论文作者与标题采用所提供 CV 的版本。原 Astro 网站可从 Git 历史恢复。
