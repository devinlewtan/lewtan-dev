// ─── To add a movie:     { title, year, wiki, letterboxd? }
// ─── To add a TV item:   { title, subtitle?, year, wiki, letterboxd?, imdb? }
// ─── To add a book:      { title, author, isbn, goodreads? }
// ─── To add an article:  { title, author, href, image }

export const movies: {
  title: string; year: number; wiki: string; letterboxd?: string; image?: string;
}[] = [
  { title: "Her",                               year: 2013, wiki: "Her_(2013_film)",                    letterboxd: "her" },
  { title: "The Truman Show",                   year: 1998, wiki: "The_Truman_Show",                    letterboxd: "the-truman-show" },
  { title: "Midnight in Paris",                 year: 2011, wiki: "Midnight_in_Paris",                  letterboxd: "midnight-in-paris" },
  { title: "Almost Famous",                     year: 2000, wiki: "Almost_Famous",                      letterboxd: "almost-famous" },
  { title: "Moonrise Kingdom",                  year: 2012, wiki: "Moonrise_Kingdom",                   letterboxd: "moonrise-kingdom", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9005688_p_v11_ab.jpg" },
  { title: "Relatos Salvajes",                  year: 2014, wiki: "Wild_Tales_(film)",                  letterboxd: "wild-tales", image: "https://m.media-amazon.com/images/I/61Yv2L1x6gL._AC_UF894,1000_QL80_.jpg" },
  { title: "Poor Things",                       year: 2023, wiki: "Poor_Things_(film)",                 letterboxd: "poor-things-2023" },
  { title: "Everything Everywhere All at Once", year: 2022, wiki: "Everything_Everywhere_All_at_Once",  letterboxd: "everything-everywhere-all-at-once", image: "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { title: "Ex Machina",                        year: 2014, wiki: "Ex_Machina_(film)",                  letterboxd: "ex-machina", image: "https://artfiles.alphacoders.com/100/thumb-1920-100140.jpg" },
  { title: "Arrival",                           year: 2016, wiki: "Arrival_(film)",                     letterboxd: "arrival-2016", image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2025/05/09153104/x2FJsf1ElAgr63Y3PNPtJrcmpoe-683x1024.jpg" },
];

export const tv: {
  title: string; year: number; wiki: string; imdb?: string; image?: string;
}[] = [
  { title: "Sex and the City",        year: 1998, wiki: "Sex_and_the_City",                   imdb: "tt0159206", image: "https://media.vanityfair.com/photos/647dfa3eae3575a9d4843860/master/pass/SATC-Podcast-1.jpg" },
  { title: "How To with John Wilson", year: 2020, wiki: "How_To_with_John_Wilson",            imdb: "tt13021528", image: "https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F77C9qxzEVFEAblmhec0sesHlrt7.jpg" },
  { title: "Love Death & Robots",     year: 2019, wiki: "Love,_Death_%26_Robots",             imdb: "tt9788510", image: "https://m.media-amazon.com/images/M/MV5BNTAwOTcyYzQtODliYS00Yjc3LWE4MzMtYmI4MjAwNTU4ZGFlXkEyXkFqcGc@._V1_.jpg" },
  { title: "MTV's Next",              year: 2005, wiki: "Next_(TV_series)",                   imdb: "tt0449460", image: "https://static1.squarespace.com/static/62e424706f09502c5a57dec6/62e7bd60277ad07624901d2c/63b62aa7cb45623a17f47b13/1672933290759/MV5BOWIxNDhhZmItMTY3Yy00ODIxLWE4ZDMtNzVkNTFmZDI0NzZmXkEyXkFqcGdeQXVyMjIwNjUzNDQ%40._V1_.jpg?format=1500w" },
  { title: "Nathan for You",          year: 2013, wiki: "Nathan_for_You",                     imdb: "tt2297757", image: "https://image.tmdb.org/t/p/w500/6tGXlz61c44onUg6EdRkbhjcaPA.jpg" },
  { title: "Show About the Show",     year: 2015, wiki: "Caveh_Zahedi",                       imdb: "tt5097492", image: "https://image.tmdb.org/t/p/w500/s4BOnSuM5ArnupbWJx7d1FdGfzC.jpg" },
  { title: "Black Mirror",            year: 2011, wiki: "Black_Mirror",                       imdb: "tt5710978", image: "https://onderhond.com/img/posters/hang-dj.jpg" },
  { title: "The White Lotus",         year: 2021, wiki: "The_White_Lotus",                    imdb: "tt13406094", image: "https://image.tmdb.org/t/p/w500/gbSaK9v1CbcYH1ISgbM7XObD2dW.jpg" },
  { title: "The Twilight Zone",       year: 1959, wiki: "The_Twilight_Zone_(1959_TV_series)", imdb: "tt0052520", image: "https://image.tmdb.org/t/p/w500/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg" },
  { title: "Silicon Valley",          year: 2014, wiki: "Silicon_Valley_(TV_series)",         imdb: "tt2575988", image: "https://image.tmdb.org/t/p/w500/4ptpmWBVD9HY9hMh8Cbs6SMiy7p.jpg" },
];

export const articles: {
  title: string; author: string; href: string; image: string;
}[] = [
  { title: "Rediscovering Desire in a Panopticon of Virtual Pleasures", author: "Dean Kissick", href: "https://anothersomething.org/fast/rediscovering-desire-in-a-panopticon-of-virtual-pleasures/", image: "rediscovering_desire.png" },
  { title: "Status as a Service",        author: "Eugene Wei",                          href: "https://www.eugenewei.com/blog/2019/2/19/status-as-a-service",                                    image: "status_as_a_service.png" },
  { title: "Squad Wealth",               author: "Sam Hart, Toby Shorin & Laura Lotti", href: "https://otherinter.net/research/squad-wealth/",                                                   image: "squad_wealth.png" },
  { title: "Cyborg Manifesto",           author: "Donna Haraway",                       href: "https://warwick.ac.uk/fac/arts/english/currentstudents/undergraduates/modules/fictionnownarrativemediaandtheoryinthe21stcentury/manifestly_haraway_----_a_cyborg_manifesto_science_technology_and_socialist-feminism_in_the_....pdf", image: "cyborg_manifesto.png" },
  { title: "We Live in the Era of Mids", author: "Blackbird Spyplane",                  href: "https://www.blackbirdspyplane.com/p/we-live-in-the-era-of-mids?utm_source=publication-search",  image: "spybird.png" },
];

export const books: {
  title: string; author: string; isbn: string; goodreads?: string; image?: string;
}[] = [
  { title: "Frankenstein",                       author: "Mary Shelley",     isbn: "9780486282114", goodreads: "35031085", image: "https://m.media-amazon.com/images/I/91tuj2WUdFL._AC_UF1000,1000_QL80_.jpg" },
  { title: "The Fourth Turning",                 author: "Strauss & Howe",   isbn: "9780767900461", goodreads: "670" },
  { title: "The Alchemist",                      author: "Paulo Coelho",     isbn: "9780062315007", goodreads: "865" },
  { title: "Empathy Exams",                      author: "Leslie Jamison",   isbn: "9781555976712", goodreads: "18310947" },
  { title: "Reclaiming Conversation",            author: "Sherry Turkle",    isbn: "9780143109792", goodreads: "24612999" },
  { title: "Exhalation",                         author: "Ted Chiang",       isbn: "9781101947913", goodreads: "41160292", image: "https://upload.wikimedia.org/wikipedia/en/2/22/Exhalation_-_Stories.jpg" },
  { title: "Strange Concepts",                   author: "Lisa Zunshine",    isbn: "9780801887949", goodreads: "2337821",  image: "https://m.media-amazon.com/images/I/51HfZJl0FZL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Tomorrow and Tomorrow and Tomorrow", author: "Gabrielle Zevin",  isbn: "9780593321201", goodreads: "58784475" },
  { title: "Ready Player One",                   author: "Ernest Cline",     isbn: "9780307887436", goodreads: "9969571" },
  { title: "Man's Search for Meaning",           author: "Viktor Frankl",    isbn: "9780807014271", goodreads: "4069" },
  { title: "The Ship Who Sang",                  author: "Anne McCaffrey",   isbn: "9780345330420", goodreads: "333476",   image: "https://upload.wikimedia.org/wikipedia/en/6/60/ShipWhoSang.jpg" },
  { title: "Anna Karenina",                      author: "Leo Tolstoy",      isbn: "9780141193564", goodreads: "15823480", image: "https://images.penguinrandomhouse.com/cover/9780141199610" },
  { title: "Dataclysm",                          author: "Christian Rudder", isbn: "9780385347372", goodreads: "21480734", image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Dataclysm.jpg" },
  { title: "East of Eden",                       author: "John Steinbeck",   isbn: "9780140186390", goodreads: "4406" },
  { title: "The Art of Seduction",               author: "Robert Greene",    isbn: "9780142001196", goodreads: "20033" },
];
