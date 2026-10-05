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

`index.html` 是布局模板。构建会把内容直接嵌入 `dist/index.html`，正文无需 JavaScript 或外部 Markdown 服务即可阅读。请通过预览地址访问，不要直接打开未构建的模板。

GitHub 仓库 Pages 的 Source 设置为 **GitHub Actions**；推送到 `main` 后会校验并发布 `dist/`。

内容根据 2026 年 10 月提供的 CV 更新。按本人要求，仅展示已发表研究，不公开在审稿件、手机号、生日，也不提供完整 CV 下载。论文作者与标题采用所提供 CV 的版本。原 Astro 网站可从 Git 历史恢复。
