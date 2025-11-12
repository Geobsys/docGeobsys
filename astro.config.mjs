// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.geobsys.com',
  base: '/',
  integrations: [
    starlight({
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
      logo: {
        light: './src/assets/docGeobsys2.svg',
        dark: './src/assets/docGeobsysDark2.svg',
        replacesTitle: true,
      },
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/landing.css',
        './src/styles/custom.css',
        '@fontsource/montserrat/500.css',
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: {
              fr: 'GEOSTIX',
              en: 'GEOSTIX',
            },
            link: '/geostix',
            icon: 'geostixIcon',
            items: [
              'geostix',
              { label: 'Pour commencer', items: ['geostix/quick_guide', 'geostix/leds', 'geostix/communication', 'geostix/geostix-x5'] },
              //{ label: 'Guides', autogenerate: { directory: 'geostix/guides' } },
            ],
          },
          {
            label: {
              fr: 'ETAGES CAPTEURS',
              en: 'GEOSTIX LAYERS',
            },
            link: '/geostix_layers',
            icon: 'layerIcon',
            items: [
              'geostix_layers',
              { label: 'Étage 4G/LTE', items: ['geostix_layers/layer4g/description','geostix_layers/layer4g/configuration','geostix_layers/layer4g/configuration_ntrip'] },
              { label: 'Étage Hotshoe', items: ['geostix_layers/hotshoe/description'] },
            ],
            /*badge: {
              text: {
                en: 'Stub',
                fr: 'Ébauche',
              },
              variant: 'note',
            },*/
          },
          {
            label: {
              fr: 'GEOSTIX APP',
              en: 'GEOSTIX APP',
            },
            link: '/geostix_app',
            icon: 'smartphoneIcon',
            items: [
              //{ label: 'Start Here', items: ['geostix_app/getting-started'] },
              //{ label: 'Guides', autogenerate: { directory: 'geostix_app/guides' } },
            ],
            /*badge: {
              text: {
                en: 'Stub',
                fr: 'Ébauche',
              },
              variant: 'note',
            },*/
          },
          {
            label: 'GEOBSYS website',
            link: 'https://geobsys.com',
            icon: 'geobsysIcon',
          },
        ],
        {
          exclude: ['/pasteImage'],
          //topics: {
          //  demo: ['/demo/unlisted/topics', '/*/demo/unlisted/topics'],
          //},
        },
      )],
      social: [
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@GEOBSYS' },
      ],
    }),
  ],
});
