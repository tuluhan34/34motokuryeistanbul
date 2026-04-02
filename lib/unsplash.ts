export type GalleryPhoto = {
  id: string;
  url: string;
  thumb: string;
  alt: string;
  creditName: string;
  creditUrl: string;
};

const fallbackPhoto = (query: string, index: number): GalleryPhoto => ({
  id: `fallback-${index}`,
  url: `https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80&sig=${index}`,
  thumb: `https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80&sig=${index}`,
  alt: `${query} görseli`,
  creditName: 'Unsplash',
  creditUrl: 'https://unsplash.com'
});

export const fetchUnsplashPhotos = async (query: string, count = 6): Promise<GalleryPhoto[]> => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export';

  if (!accessKey || isStaticExport) {
    return Array.from({ length: count }, (_, index) => fallbackPhoto(query, index));
  }

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(`${query} no people`)}&per_page=${count}&orientation=landscape&content_filter=high`,
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        'Accept-Version': 'v1'
      }
    }
  );

  if (!response.ok) {
    return Array.from({ length: count }, (_, index) => fallbackPhoto(query, index));
  }

  const data = (await response.json()) as {
    results?: Array<{
      id: string;
      alt_description?: string | null;
      urls: { regular: string; small: string };
      user: { name: string; links: { html: string } };
    }>;
  };

  if (!data.results?.length) {
    return Array.from({ length: count }, (_, index) => fallbackPhoto(query, index));
  }

  return data.results.map((item, index) => ({
    id: item.id || `photo-${index}`,
    url: item.urls.regular,
    thumb: item.urls.small,
    alt: item.alt_description || `${query} görseli`,
    creditName: item.user.name,
    creditUrl: `${item.user.links.html}?utm_source=34motokuryeistanbul&utm_medium=referral`
  }));
};
