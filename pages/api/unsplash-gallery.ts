import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchUnsplashPhotos } from '../../lib/unsplash';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const topic = String(req.query.topic || 'courier logistics package');
  const count = Math.min(Number(req.query.count || 6), 12);

  try {
    const photos = await fetchUnsplashPhotos(topic, count);
    res.status(200).json({ photos });
  } catch (error) {
    res.status(500).json({
      message: 'Unsplash photos could not be loaded.',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
