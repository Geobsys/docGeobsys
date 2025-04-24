// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
    site: 'https://geobsys.github.io',
  	base: process.env.NODE_ENV === 'production' ? '/docGeobsys' : '/',
    integrations: [starlight({
        title: 'GEOBSYS Docs',
        // Set English as the default language for this site.
        defaultLocale: 'en',
        locales: {
          // English docs in `src/content/docs/en/`
          'en': {
            label: 'English',
            lang: 'en',
          },
          'fr': {
            label: 'French',
            lang: 'fr',
          },
        },
        /*sidebar: [
          {
            label: 'Start Here',
            items: [
              // Using `slug` for internal links.
              { slug: 'geostix/start' },
              { slug: 'geostix-app/start' },
              // Or using the shorthand for internal links.
              'geostix/start',
              'geostix-app/start',
            ],
          },
          // A group linking to all pages in the reference directory.
          {
            label: 'geostix layers',
            autogenerate: { directory: 'geostix-layers' },
          },
        ],*/
        logo: {
            light: './src/assets/docGeobsys2.svg',
            dark: './src/assets/docGeobsysDark2.svg',
            replacesTitle: true,
        },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/custom.css',
            '@fontsource/montserrat/100.css'
        ],
        plugins: [
          starlightSidebarTopics(
            [
              {
                label: 'Geostix',
                link: '/geostix/getting-started/',
                icon: 'document',
                items: [
                  { label: 'Start Here', items: ['geostix/getting-started', 'geostix/configuration'] },
                  { label: 'Guides', autogenerate: { directory: 'geostix/guides' } },
                  { label: 'Resources', items: [{ label: 'Plugins and Tools', slug: 'geostix/resources/starlight' }] },
                ],
              },
              {
                label: 'Etages capteurs',
                link: '/geostix-layers/getting-started/',
                icon: 'document',
                items: [
                  { label: 'Start Here', items: ['geostix-layers/getting-started', 'geostix-layers/configuration'] },
                  { label: 'Guides', autogenerate: { directory: 'geostix-layers/guides' } },
                  { label: 'Resources', items: [{ label: 'Plugins and Tools', slug: 'geostix-layers/resources/starlight' }] },
                ],
                badge: {
                  text: {
                    en: 'Stub',
                    fr: 'Ébauche',
                  },
                  variant: 'caution',
                },
              },
              {
                label: 'Geostix APP',
                link: '/geostix-app/getting-started/',
                icon: 'document',
                items: [
                  { label: 'Start Here', items: ['geostix-app/getting-started', 'geostix-app/configuration'] },
                  { label: 'Guides', autogenerate: { directory: 'geostix-app/guides' } },
                  { label: 'Resources', items: [{ label: 'Plugins and Tools', slug: 'geostix-app/resources/starlight' }] },
                ],
                badge: {
                  text: {
                    en: 'Stub',
                    fr: 'Ébauche',
                  },
                  variant: 'caution',
                },
              },
              {
                label: 'GEOBSYS website',
                link: 'https://geobsys.com',
                icon: 'right-caret',
              },
            ],
            {
              //exclude: ['/demo/excluded/**/*', '/*/demo/excluded/**/*'],
              //topics: {
              //  demo: ['/demo/unlisted/topics', '/*/demo/unlisted/topics'],
              //},
            },
          ),
        ],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
		})],
});