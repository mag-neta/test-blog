import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'mag_neta blog',
    description: 'まーぐまぐまぐ',
    site: 'https://mag-neta.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}