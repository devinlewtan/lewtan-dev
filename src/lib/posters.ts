const UA = 'lewtan.dev/1.0 (https://lewtan.dev)';

export async function getWikiPoster(pageTitle: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`,
      { headers: { 'User-Agent': UA, 'Accept': 'application/json' } }
    );
    if (!res.ok) return null;
    const data = await res.json() as { thumbnail?: { source: string } };
    const src = data.thumbnail?.source;
    if (!src) return null;
    // If it's a thumb URL, upscale to 600px; otherwise use as-is
    return src.includes('/thumb/') ? src.replace(/\/\d+px-/, '/600px-') : src;
  } catch {
    return null;
  }
}

export function getBookCoverUrl(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}

// TMDB (optional — set TMDB_API_KEY in .env for even better quality)
const TMDB_KEY = import.meta.env.TMDB_API_KEY as string | undefined;
export async function getTMDBPoster(title: string, year: number, type: 'movie' | 'tv' = 'movie'): Promise<string | null> {
  if (!TMDB_KEY) return null;
  try {
    const endpoint = type === 'tv' ? 'search/tv' : 'search/movie';
    const yearParam = type === 'tv' ? 'first_air_date_year' : 'year';
    const res = await fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_KEY}&query=${encodeURIComponent(title)}&${yearParam}=${year}`
    );
    const data = await res.json() as { results?: { poster_path?: string }[] };
    const path = data.results?.[0]?.poster_path;
    return path ? `https://image.tmdb.org/t/p/w500${path}` : null;
  } catch {
    return null;
  }
}
