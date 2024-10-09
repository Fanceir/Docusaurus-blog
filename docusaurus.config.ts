import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import social from "./data/social";
import type { GiscusConfig } from "./src/components/Comment";
const config: Config = {
    title: "My Site",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    url: "https://your-docusaurus-site.example.com",
    //这里设置为你部署后的域名
    baseUrl: "/",

    organizationName: "Fanceir", // 你的github用户名或者组织名
    projectName: "blog", // 通常是你的项目名，比如blog

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN"],
    },

    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "docs",
                    sidebarPath: "sidebars.ts",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                blog: false,
                theme: {
                    customCss: ["./src/css/custom.css"],
                },
                sitemap: {
                    priority: 0.5,
                },
                //这个可以在谷歌分析中找到https://analytics.google.com/analytics/
                gtag: {
                    trackingID: "G-ZBLQKV430M",
                    anonymizeIP: true,
                },
                debug: process.env.NODE_ENV === "development",
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Blog template",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.webp",
                srcDark: "img/logo.webp",
            },
            hideOnScroll: true, //滚动时隐藏导航栏
            items: [
                { label: "博客", position: "right", to: "blog" },
                { label: "项目", position: "right", to: "project" },
                { label: "友链", position: "right", to: "friends" },
                { label: "关于", position: "right", to: "about" },
                {
                    label: "更多",
                    position: "right",
                    items: [
                        { label: "归档", to: "blog/archive" },
                        { label: "笔记", to: "docs/skill" },
                    ],
                },

                //以上是导航栏的配置如果要使用下拉菜单可以考虑上面的更多选项
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "学习",
                    items: [
                        { label: "博客", to: "blog" },
                        { label: "笔记", to: "docs/skill" },
                        { label: "项目", to: "project" },
                    ],
                },
                {
                    title: "社交媒体",
                    items: [
                        {
                            label: "关于我",
                            to: "/about",
                        },
                        { label: "GitHub", href: social.github.href },
                    ],
                },
                {
                    title: "网站",
                    items: [
                        {
                            label: "Github",
                            to: "https://github.com",
                        },
                        {
                            label: "Docusaurus",
                            to: "https://docusaurus.io",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/facebook/docusaurus",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        giscus: {
            repo: "Fanceir/Docusaurus-blog",
            repoId: "R_kgDOM9p0tA",
            category: "General",
            categoryId: "DIC_kwDOM9p0tM4CjNOu",
            theme: "light",
            darkTheme: "dark",
        } satisfies Partial<GiscusConfig>,
    },
};

export default config;
