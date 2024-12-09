import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://medrese.vercel.app',
  title: 'Medrese',
  subtitle: '🚀 Medrese - Sevgi ile İnşa Edildi ❤️',
  description: '🚀 Medrese - Harika Blog Başlangıcı, Sevgi ile İnşa Edildi ❤️',
  lang: 'tr',
  timeZone: 'Europe/Istanbul',
  since: 2024,
  cover: SiteCover,
  author: {
    name: 'Muzaffer',
    status: '🚀',
    statusTip:
      '<a href="https://github.com/kedimuzafer" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Medrese</a> Harika!',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/kedimuzafer',
    github: 'https://github.com/kedimuzafer',
    email: 'muzaffer@example.com',
    bio: `Barış gülümsemeyle başlar`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/kwchang0831'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment

          // Replace the following with your own setting

          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          `<script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQ73GWF6XT');
          </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'tr-TR',
    options: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Europe/Istanbul',
    },
  },
  toUpdatedString: {
    locales: 'tr-TR',
    options: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Istanbul',
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: false,
  id: 'giscus-comment',
  repo: import.meta.env.QWER_GISCUS_REPO,
  repoId: import.meta.env.QWER_GISCUS_REPO_ID,
  category: import.meta.env.QWER_GISCUS_CATEGORY,
  categoryId: import.meta.env.QWER_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'Hakkında',
    url: '/hakkinda',
  },
  {
    name: 'See Docs 📄',
    url: 'https://docs-svelte-qwer.vercel.app/',
    rel: 'external',
  },
  {
    name: 'Get QWER 🚀',
    url: 'https://github.com/kwchang0831/svelte-QWER',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'Hakkında',
      url: '/hakkinda',
    },
    {
      name: 'See Docs 📄',
      url: 'https://docs-svelte-qwer.vercel.app/',
      rel: 'external',
    },
    {
      name: 'Get QWER 🚀',
      url: 'https://github.com/kwchang0831/svelte-QWER',
      rel: 'external',
    },
  ],
};
