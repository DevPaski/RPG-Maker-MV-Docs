// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'RPG Maker MV Docs',
    tagline: 'Learn the JS functions from RPG Maker MV',
    url: 'https://github.com',
    baseUrl: '/RPG-Maker-MV-Docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DevPaski', // Usually your GitHub org/user name.
    projectName: 'RPG-Maker-MV-Docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/devpaski',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/devpaski',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'RPG Maker MV Docs',
            logo: {
                alt: 'RPG Maker MV Docs Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Tutorial',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/devpaski',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                            
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/devpaski',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/devpaski'
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} RPG Maker MV Docs.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;