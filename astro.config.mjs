// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.geobsys.com',
  base: '/',
  redirects: {
    '/': '/en/',
  },
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
              { label: 'Getting started', translations: { fr: 'Pour commencer' }, items: ['geostix/quick_guide', 'geostix/leds', 'geostix/communication', 'geostix/geostix-x5'] },
              { label: 'Specifications', translations: { fr: 'Spécifications' }, items: ['geostix/nmea'] },
              { label: 'Integrations', translations: { fr: 'Intégrations' }, items: ['geostix/dji_rtk'] },
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
              { label: 'LTE Layer', translations: { fr: 'Étage 4G/LTE' }, items: ['geostix_layers/layer4g/description','geostix_layers/layer4g/configuration','geostix_layers/layer4g/configuration_ntrip'] },
              { label: 'Hotshoe Layer', translations: { fr: 'Étage Flash' }, items: ['geostix_layers/hotshoe/description'] },
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
              'geostix_app',
              { label: 'Receiver configuration', translations: { fr: 'Configuration du récepteur' }, items: ['geostix_app/nmea_output'] },
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
              fr: 'Site GEOBSYS',
              en: 'GEOBSYS website',
            },
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
