const moviesData = [
  {
    id: 1,
    title: "Inception",
    genre: ["Sci-Fi", "Action", "Adventure"],
    releaseYear: 2010,
    director: {
        name: "Christopher Nolan",
        imageDirector: "https://cdn.britannica.com/37/255737-050-9BB3FEDA/Christopher-Nolan-Movie-film-director-Oppenheimer-UK-premiere-2023.jpg",
      },
    cast: [
      {
        name: "Leonardo DiCaprio",
        imageCast:
          "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/04/16884982838657.jpg",
      },
      {
        name: "Ellen Page",
        imageCast:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/02/18/11/v2-ellen-page.jpg",
      },
      {
        name: "Tom Hardy",
        imageCast:
          "https://www.lavanguardia.com/peliculas-series/images/profile/1977/9/w300/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
      },
    ],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    overview:
      "Inception is a mind-bending thriller that explores the realms of dreams and reality. With stunning visuals and a complex narrative, it delves into the depths of the subconscious mind.",
    rating: 8.8,
    duration: "2h 28min",
    language: ["English", "Japanese", "French"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK"],
    posterUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg",
    trailerUrl: "https://youtu.be/YoHD9XEInc0",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: false,
    newTemp: true,
  },
  {
    id: 2,
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    releaseYear: 1972,
    director: {
      name: "Francis Ford Coppola",
      imageDirector: "https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/436768/436768.jpg",
    },
    cast: [
      {
        name: "Marlon Brando",
        imageCast:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/640px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png",
      },
      {
        name: "Al Pacino",
        imageCast:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Al_Pacino_2016_%2830401544240%29.jpg/640px-Al_Pacino_2016_%2830401544240%29.jpg",
      },
      {
        name: "James Caan",
        imageCast:
          "https://upload.wikimedia.org/wikipedia/commons/d/d7/James_Caan_%281976%29.jpg",
      },
      {
        name: "Diane Keaton",
        imageCast:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Diane_Keaton_2012-1_%28cropped%29.jpg/640px-Diane_Keaton_2012-1_%28cropped%29.jpg",
      },
    ],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    overview:
      "The Godfather is an epic tale of crime and family, showcasing the rise and fall of the Corleone crime family. It's a masterclass in storytelling and character development.",
    rating: 9.2,
    duration: "2h 55min",
    language: ["English", "Italian", "Latin"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailerUrl: "https://youtu.be/UaVTIH8mujA",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 3,
    title: "Stranger Things",
    genre: ["Drama", "Fantasy", "Horror"],
    releaseYear: 2016,
    director: {
        name: "The Duffer Brothers",
        imageDirector: "https://static01.nyt.com/images/2022/05/22/arts/22STRANGER-THINGS1/22STRANGER-THINGS1-videoSixteenByNineJumbo1600.jpg",
      },
    cast: [
      {
        name: "Winona Ryder",
        imageCast: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Winona_Ryder_2010_TIFF.jpg/1200px-Winona_Ryder_2010_TIFF.jpg",
      },
      {
        name: "David Harbour",
        imageCast: "https://cdn.britannica.com/53/244253-050-579D9771/Actor-David-Harbour-2022.jpg",
      },
      {
        name: "Finn Wolfhard",
        imageCast: "https://es.web.img2.acsta.net/pictures/19/09/04/11/12/2066859.jpg",
      },
      {
        name: "Millie Bobby Brown",
        imageCast: "https://media.vogue.es/photos/65e3246945e9bfe62c6cb39c/2:3/w_2560%2Cc_limit/GettyImages-2052039762.jpg",
      },
    ],
    description:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    overview:
      "Stranger Things is a thrilling series that combines elements of sci-fi, horror, and 80s nostalgia. It follows the adventures of a group of kids as they encounter mysterious events in their small town.",
    rating: 8.7,
    duration: "8 episodes (Season 1)",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg",
    trailerUrl: "https://youtu.be/d0JYlUTbv1A",
    type: "Series",
    episodes: 8,
    originalNetflix: true,
    top10: true,
    newTemp: true,
  },
  {
    id: 4,
    title: "Breaking Bad",
    genre: ["Crime", "Drama", "Thriller"],
    releaseYear: 2008,
    director: ["Vince Gilligan"],
    cast: [
      {
        name: "Bryan Cranston",
        imageCast: "https://example.com/cast/bryan-cranston.jpg",
      },
      {
        name: "Aaron Paul",
        imageCast: "https://example.com/cast/aaron-paul.jpg",
      },
      {
        name: "Anna Gunn",
        imageCast: "https://example.com/cast/anna-gunn.jpg",
      },
      {
        name: "Dean Norris",
        imageCast: "https://example.com/cast/dean-norris.jpg",
      },
    ],
    description:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
    overview:
      "Breaking Bad is a groundbreaking series that explores the moral descent of a man driven to crime by desperation. It's known for its intense plot and compelling characters.",
    rating: 9.5,
    duration: "62 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/breaking-bad.jpg",
    trailerUrl: "https://example.com/trailer/breaking-bad.mp4",
    type: "Series",
    episodes: 62,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 5,
    title: "The Matrix",
    genre: ["Sci-Fi", "Action"],
    releaseYear: 1999,
    director: "The Wachowskis",
    cast: [
      {
        name: "Keanu Reeves",
        imageCast: "https://example.com/cast/keanu-reeves.jpg",
      },
      {
        name: "Laurence Fishburne",
        imageCast: "https://example.com/cast/laurence-fishburne.jpg",
      },
      {
        name: "Carrie-Anne Moss",
        imageCast: "https://example.com/cast/carrie-anne-moss.jpg",
      },
      {
        name: "Hugo Weaving",
        imageCast: "https://example.com/cast/hugo-weaving.jpg",
      },
    ],
    description:
      "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    overview:
      "The Matrix is a revolutionary sci-fi action film that explores themes of reality, identity, and freedom. It's known for its groundbreaking special effects and philosophical depth.",
    rating: 8.7,
    duration: "2h 16min",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/the-matrix.jpg",
    trailerUrl: "https://example.com/trailer/the-matrix.mp4",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: false,
    newTemp: false,
  },
  {
    id: 6,
    title: "Black Mirror",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    releaseYear: 2011,
    director: ["Charlie Brooker"],
    cast: [
      {
        name: "Daniel Lapaine",
        imageCast: "https://example.com/cast/daniel-lapaine.jpg",
      },
      {
        name: "Hannah John-Kamen",
        imageCast: "https://example.com/cast/hannah-john-kamen.jpg",
      },
      {
        name: "Michaela Coel",
        imageCast: "https://example.com/cast/michaela-coel.jpg",
      },
    ],
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    overview:
      "Black Mirror is a critically acclaimed series that delves into the dark and often dystopian side of technology and its impact on society. Each episode presents a standalone story.",
    rating: 8.8,
    duration: "22 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/black-mirror.jpg",
    trailerUrl: "https://example.com/trailer/black-mirror.mp4",
    type: "Series",
    episodes: 22,
    originalNetflix: true,
    top10: false,
    newTemp: true,
  },
  {
    id: 7,
    title: "Friends",
    genre: ["Comedy", "Romance"],
    releaseYear: 1994,
    director: ["David Crane", "Marta Kauffman"],
    cast: [
      {
        name: "Jennifer Aniston",
        imageCast: "https://example.com/cast/jennifer-aniston.jpg",
      },
      {
        name: "Courteney Cox",
        imageCast: "https://example.com/cast/courteney-cox.jpg",
      },
      {
        name: "Lisa Kudrow",
        imageCast: "https://example.com/cast/lisa-kudrow.jpg",
      },
      {
        name: "Matt LeBlanc",
        imageCast: "https://example.com/cast/matt-leblanc.jpg",
      },
      {
        name: "Matthew Perry",
        imageCast: "https://example.com/cast/matthew-perry.jpg",
      },
      {
        name: "David Schwimmer",
        imageCast: "https://example.com/cast/david-schwimmer.jpg",
      },
    ],
    description:
      "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    overview:
      "Friends is a beloved sitcom that captures the humor, heartache, and hijinks of six friends navigating life and love in New York City.",
    rating: 8.9,
    duration: "236 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/friends.jpg",
    trailerUrl: "https://example.com/trailer/friends.mp4",
    type: "Series",
    episodes: 236,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 8,
    title: "The Witcher",
    genre: ["Action", "Adventure", "Drama"],
    releaseYear: 2019,
    director: ["Lauren Schmidt Hissrich"],
    cast: [
      {
        name: "Henry Cavill",
        imageCast: "https://example.com/cast/henry-cavill.jpg",
      },
      {
        name: "Anya Chalotra",
        imageCast: "https://example.com/cast/anya-chalotra.jpg",
      },
      {
        name: "Freya Allan",
        imageCast: "https://example.com/cast/freya-allan.jpg",
      },
    ],
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    overview:
      "The Witcher is an epic fantasy series that follows the journey of Geralt of Rivia, a monster hunter navigating a morally ambiguous world filled with magic, monsters, and political intrigue.",
    rating: 8.2,
    duration: "8 episodes (Season 1)",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/the-witcher.jpg",
    trailerUrl: "https://example.com/trailer/the-witcher.mp4",
    type: "Series",
    episodes: 8,
    originalNetflix: true,
    top10: true,
    newTemp: true,
  },
  {
    id: 9,
    title: "The Mandalorian",
    genre: ["Action", "Adventure", "Fantasy"],
    releaseYear: 2019,
    director: ["Jon Favreau"],
    cast: [
      {
        name: "Pedro Pascal",
        imageCast: "https://example.com/cast/pedro-pascal.jpg",
      },
      {
        name: "Gina Carano",
        imageCast: "https://example.com/cast/gina-carano.jpg",
      },
      {
        name: "Carl Weathers",
        imageCast: "https://example.com/cast/carl-weathers.jpg",
      },
    ],
    description:
      "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    overview:
      "The Mandalorian is a thrilling space western set in the Star Wars universe, following the adventures of a lone bounty hunter and his unexpected companion, Baby Yoda.",
    rating: 8.8,
    duration: "8 episodes (Season 1)",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/the-mandalorian.jpg",
    trailerUrl: "https://example.com/trailer/the-mandalorian.mp4",
    type: "Series",
    episodes: 8,
    originalNetflix: false,
    top10: true,
    newTemp: true,
  },
  {
    id: 10,
    title: "The Office",
    genre: ["Comedy"],
    releaseYear: 2005,
    director: ["Greg Daniels"],
    cast: [
      {
        name: "Steve Carell",
        imageCast: "https://example.com/cast/steve-carell.jpg",
      },
      {
        name: "Rainn Wilson",
        imageCast: "https://example.com/cast/rainn-wilson.jpg",
      },
      {
        name: "John Krasinski",
        imageCast: "https://example.com/cast/john-krasinski.jpg",
      },
      {
        name: "Jenna Fischer",
        imageCast: "https://example.com/cast/jenna-fischer.jpg",
      },
    ],
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    overview:
      "The Office is a hilarious mockumentary that captures the daily lives of employees working at Dunder Mifflin's Scranton branch. It's known for its quirky characters and awkward humor.",
    rating: 8.9,
    duration: "201 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/the-office.jpg",
    trailerUrl: "https://example.com/trailer/the-office.mp4",
    type: "Series",
    episodes: 201,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 11,
    title: "The Crown",
    genre: ["Biography", "Drama", "History"],
    releaseYear: 2016,
    director: ["Peter Morgan"],
    cast: [
      {
        name: "Claire Foy",
        imageCast: "https://example.com/cast/claire-foy.jpg",
      },
      {
        name: "Olivia Colman",
        imageCast: "https://example.com/cast/olivia-colman.jpg",
      },
      {
        name: "Tobias Menzies",
        imageCast: "https://example.com/cast/tobias-menzies.jpg",
      },
    ],
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    overview:
      "The Crown is a lavish historical drama that chronicles the reign of Queen Elizabeth II and the events that shaped the modern monarchy.",
    rating: 8.6,
    duration: "40 episodes (4 seasons)",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/the-crown.jpg",
    trailerUrl: "https://example.com/trailer/the-crown.mp4",
    type: "Series",
    episodes: 40,
    originalNetflix: true,
    top10: true,
    newTemp: true,
  },
  {
    id: 12,
    title: "Narcos",
    genre: ["Biography", "Crime", "Drama"],
    releaseYear: 2015,
    director: ["Chris Brancato", "Carlo Bernard", "Doug Miro"],
    cast: [
      {
        name: "Wagner Moura",
        imageCast: "https://example.com/cast/wagner-moura.jpg",
      },
      {
        name: "Pedro Pascal",
        imageCast: "https://example.com/cast/pedro-pascal.jpg",
      },
      {
        name: "Boyd Holbrook",
        imageCast: "https://example.com/cast/boyd-holbrook.jpg",
      },
    ],
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug lords who plagued the country through the years.",
    overview:
      "Narcos is a gritty and intense series that explores the rise and fall of notorious drug lord Pablo Escobar and the DEA agents who pursued him.",
    rating: 8.8,
    duration: "30 episodes",
    language: ["English", "Spanish"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/narcos.jpg",
    trailerUrl: "https://example.com/trailer/narcos.mp4",
    type: "Series",
    episodes: 30,
    originalNetflix: true,
    top10: true,
    newTemp: false,
  },
  {
    id: 13,
    title: "Money Heist",
    genre: ["Action", "Crime", "Drama"],
    releaseYear: 2017,
    director: ["Álex Pina"],
    cast: [
      {
        name: "Úrsula Corberó",
        imageCast: "https://example.com/cast/ursula-corbero.jpg",
      },
      {
        name: "Álvaro Morte",
        imageCast: "https://example.com/cast/alvaro-morte.jpg",
      },
      {
        name: "Itziar Ituño",
        imageCast: "https://example.com/cast/itziar-ituno.jpg",
      },
      {
        name: "Pedro Alonso",
        imageCast: "https://example.com/cast/pedro-alonso.jpg",
      },
    ],
    description:
      "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    overview:
      "Money Heist is a thrilling Spanish series that follows the story of a group of robbers who plan and execute a meticulously crafted heist on the Royal Mint of Spain.",
    rating: 8.3,
    duration: "31 episodes",
    language: ["Spanish"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Spain"],
    posterUrl: "https://example.com/poster/money-heist.jpg",
    trailerUrl: "https://example.com/trailer/money-heist.mp4",
    type: "Series",
    episodes: 31,
    originalNetflix: true,
    top10: true,
    newTemp: false,
  },
  {
    id: 14,
    title: "Chernobyl",
    genre: ["Drama", "History", "Thriller"],
    releaseYear: 2019,
    director: ["Johan Renck"],
    cast: [
      {
        name: "Jared Harris",
        imageCast: "https://example.com/cast/jared-harris.jpg",
      },
      {
        name: "Stellan Skarsgård",
        imageCast: "https://example.com/cast/stellan-skarsgard.jpg",
      },
      {
        name: "Emily Watson",
        imageCast: "https://example.com/cast/emily-watson.jpg",
      },
    ],
    description:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    overview:
      "Chernobyl is a gripping miniseries that dramatizes the events leading up to and following the catastrophic nuclear disaster at the Chernobyl power plant in 1986.",
    rating: 9.4,
    duration: "5 episodes",
    language: ["English", "Russian"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/chernobyl.jpg",
    trailerUrl: "https://example.com/trailer/chernobyl.mp4",
    type: "Miniseries",
    episodes: 5,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 15,
    title: "Avatar",
    genre: ["Action", "Adventure", "Fantasy"],
    releaseYear: 2009,
    director: "James Cameron",
    cast: [
      {
        name: "Sam Worthington",
        imageCast: "https://example.com/cast/sam-worthington.jpg",
      },
      {
        name: "Zoe Saldana",
        imageCast: "https://example.com/cast/zoe-saldana.jpg",
      },
      {
        name: "Sigourney Weaver",
        imageCast: "https://example.com/cast/sigourney-weaver.jpg",
      },
      {
        name: "Stephen Lang",
        imageCast: "https://example.com/cast/stephen-lang.jpg",
      },
    ],
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    overview:
      "Avatar is a visually stunning sci-fi epic set on the lush alien world of Pandora. It explores themes of environmentalism, colonialism, and the struggle for survival.",
    rating: 7.8,
    duration: "2h 42min",
    language: ["English", "Na'vi"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/avatar.jpg",
    trailerUrl: "https://example.com/trailer/avatar.mp4",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 16,
    title: "The Queen's Gambit",
    genre: ["Drama"],
    releaseYear: 2020,
    director: ["Scott Frank"],
    cast: [
      {
        name: "Anya Taylor-Joy",
        imageCast: "https://example.com/cast/anya-taylor-joy.jpg",
      },
      {
        name: "Bill Camp",
        imageCast: "https://example.com/cast/bill-camp.jpg",
      },
      {
        name: "Marielle Heller",
        imageCast: "https://example.com/cast/marielle-heller.jpg",
      },
    ],
    description:
      "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    overview:
      "The Queen's Gambit is a riveting miniseries that follows the rise of a young chess prodigy as she battles addiction, societal expectations, and her own inner demons.",
    rating: 8.6,
    duration: "7 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/the-queens-gambit.jpg",
    trailerUrl: "https://example.com/trailer/the-queens-gambit.mp4",
    type: "Miniseries",
    episodes: 7,
    originalNetflix: true,
    top10: true,
    newTemp: true,
  },
  {
    id: 17,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    director: "Christopher Nolan",
    cast: [
      {
        name: "Christian Bale",
        imageCast: "https://example.com/cast/christian-bale.jpg",
      },
      {
        name: "Heath Ledger",
        imageCast: "https://example.com/cast/heath-ledger.jpg",
      },
      {
        name: "Aaron Eckhart",
        imageCast: "https://example.com/cast/aaron-eckhart.jpg",
      },
      {
        name: "Michael Caine",
        imageCast: "https://example.com/cast/michael-caine.jpg",
      },
    ],
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    overview:
      "The Dark Knight is a gripping superhero film that explores the complex relationship between Batman and his arch-nemesis, the Joker. It's known for its intense action, deep themes, and Heath Ledger's iconic performance.",
    rating: 9.0,
    duration: "2h 32min",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/the-dark-knight.jpg",
    trailerUrl: "https://example.com/trailer/the-dark-knight.mp4",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 18,
    title: "Game of Thrones",
    genre: ["Action", "Adventure", "Drama"],
    releaseYear: 2011,
    director: ["David Benioff", "D.B. Weiss"],
    cast: [
      {
        name: "Emilia Clarke",
        imageCast: "https://example.com/cast/emilia-clarke.jpg",
      },
      {
        name: "Kit Harington",
        imageCast: "https://example.com/cast/kit-harington.jpg",
      },
      {
        name: "Peter Dinklage",
        imageCast: "https://example.com/cast/peter-dinklage.jpg",
      },
    ],
    description:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    overview:
      "Game of Thrones is an epic fantasy series that weaves together multiple storylines of power, betrayal, and survival in the fictional land of Westeros.",
    rating: 9.3,
    duration: "73 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Germany"],
    posterUrl: "https://example.com/poster/game-of-thrones.jpg",
    trailerUrl: "https://example.com/trailer/game-of-thrones.mp4",
    type: "Series",
    episodes: 73,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 19,
    title: "Inception",
    genre: ["Action", "Adventure", "Sci-Fi"],
    releaseYear: 2010,
    director: "Christopher Nolan",
    cast: [
      {
        name: "Leonardo DiCaprio",
        imageCast: "https://example.com/cast/leonardo-dicaprio.jpg",
      },
      {
        name: "Joseph Gordon-Levitt",
        imageCast: "https://example.com/cast/joseph-gordon-levitt.jpg",
      },
      {
        name: "Ellen Page",
        imageCast: "https://example.com/cast/ellen-page.jpg",
      },
      {
        name: "Tom Hardy",
        imageCast: "https://example.com/cast/tom-hardy.jpg",
      },
    ],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    overview:
      "Inception is a mind-bending sci-fi thriller that explores the concept of dream invasion. With its intricate plot and stunning visuals, it's a thought-provoking journey into the subconscious.",
    rating: 8.8,
    duration: "2h 28min",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/inception.jpg",
    trailerUrl: "https://example.com/trailer/inception.mp4",
    type: "Movie",
    episodes: null,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
  {
    id: 20,
    title: "Breaking Bad",
    genre: ["Crime", "Drama", "Thriller"],
    releaseYear: 2008,
    director: ["Vince Gilligan"],
    cast: [
      {
        name: "Bryan Cranston",
        imageCast: "https://example.com/cast/bryan-cranston.jpg",
      },
      {
        name: "Aaron Paul",
        imageCast: "https://example.com/cast/aaron-paul.jpg",
      },
      {
        name: "Anna Gunn",
        imageCast: "https://example.com/cast/anna-gunn.jpg",
      },
    ],
    description:
      "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
    overview:
      "Breaking Bad is a critically acclaimed series that follows the transformation of Walter White from a mild-mannered teacher to a ruthless drug lord. It's known for its intense storytelling and complex characters.",
    rating: 9.5,
    duration: "62 episodes",
    language: ["English"],
    subtitles: ["English", "Spanish", "French"],
    availability: ["US", "Canada", "UK", "Australia"],
    posterUrl: "https://example.com/poster/breaking-bad.jpg",
    trailerUrl: "https://example.com/trailer/breaking-bad.mp4",
    type: "Series",
    episodes: 62,
    originalNetflix: false,
    top10: true,
    newTemp: false,
  },
];
