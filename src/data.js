// Fifth Empire — festival data
// Three days · 3 stages: Sanctum Stage, Fernando Pessoa Stage, Root Stage
// May 3–5, 2026 · Santo Isidoro, Ericeira

export const FE_VENUES = {
  sanctum: {
    id: "sanctum",
    name: "Sanctum Stage",
    subtitle: "Crown Chakra",
    location: "Quinta do Chãos · Santo Isidoro",
    walk: "Main hall · centre of the grounds",
    color: "sanctum",
  },
  pessoa: {
    id: "pessoa",
    name: "Fernando Pessoa Stage",
    subtitle: "Heart Chakra",
    location: "Casa Pessoa · Santo Isidoro",
    walk: "5 min walk from Sanctum",
    color: "pessoa",
  },
  root: {
    id: "root",
    name: "Root Stage",
    subtitle: "Root Chakra",
    location: "House of the Rising Mojo · Santo Isidoro",
    walk: "8 min walk from Sanctum",
    color: "root",
  },
  peninha: {
    id: "peninha",
    name: "Sanctuary of Peninha",
    subtitle: "Sacred Pilgrimage",
    location: "Sintra · high above the Atlantic",
    walk: "Access via Peninha Parking Area · Sintra Natural Park",
    color: "peninha",
    gmap: "https://maps.app.goo.gl/TVcyjRbrrRQbS8AR8",
  },
  quinta: {
    id: "quinta",
    name: "Quinta São José",
    subtitle: "Sage's Diner",
    location: "Former Templar residence · location revealed on the day",
    walk: "Details shared with Pilgrims",
    color: "quinta",
  },
  shanti: {
    id: "shanti",
    name: "Shanti Space",
    subtitle: "The New Renaissance",
    location: "Shanti Space · Ericeira",
    walk: "Details shared with attendees",
    color: "shanti",
  },
};

export const FE_TRACKS = {
  wisdom: { id: "wisdom", name: "Wisdom Keepers", glyph: "✶" },
  sound: { id: "sound", name: "Sound & Frequency", glyph: "◐" },
  community: { id: "community", name: "Community & Future", glyph: "◇" },
  ritual: { id: "ritual", name: "Ritual & Embodiment", glyph: "✦" },
};

export const FE_PEOPLE = [
  // ===== Sanctum Stage =====
  { id: "reg", name: "Sir Robert E. Grant", role: "Polymath · Author of PHILOMATH", initials: "RG", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69dc8990d7871cddf7a9d25f.png", bio: "Polymath, entrepreneur, and inventor with 80+ patents in healthcare, cryptography, and geometry. Former CEO of Bausch + Lomb Surgical, founder of Evolus and Crown Sterling. A knighted author and music theorist who merges ancient wisdom with modern science.", tag: "Keynote" },
  { id: "biondi", name: "Dr. Filippo Biondi", role: "Aerospace engineer · SAR-Doppler tomography", initials: "FB", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06982fd67a35819fdc.png", bio: "Aerospace engineer and researcher specializing in remote sensing and synthetic aperture radar. Known for SAR-Doppler tomography techniques revealing structures beneath the Giza plateau.", tag: "Keynote" },
  { id: "charles", name: "Charles Eisenstein", role: "Author · speaker", initials: "CE", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06982fd67a35819fda.png", bio: "Author and speaker exploring spirituality, ecology, and the transformation of modern society. Yale-trained in mathematics and philosophy.", tag: "Wisdom Keepers" },
  { id: "camille", name: "Camille Lorenzetti", role: "Breathwork facilitator", initials: "CL", image: "https://camillelorenzetti.com/wp-content/uploads/Camille-Lorenzetti-founder-of-Alive-Coaching.webp", bio: "Breathwork facilitator guiding journeys that move participants through emotional release and into expanded states of awareness.", tag: "Ritual & Embodiment" },
  { id: "tammy", name: "Tammy Weis", role: "Jazz singer · composer", initials: "TW", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06a4e6aa34cbea5d76.png", bio: "Canadian-British jazz singer, songwriter, and composer. Her album Soul Whisper and Fernando Pessoa Miracles project emerged from a chain of uncanny encounters in Lisbon.", tag: "Sound & Frequency" },
  { id: "sarah", name: "Sarah Breksman Cosme", role: "Researcher · ancestral memory", initials: "SC", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06b30bc523710f9dff.png", bio: "Researcher and storyteller exploring the memory beneath history — how myth, ritual and lineage continue to shape who we are becoming.", tag: "Wisdom Keepers" },
  { id: "luke", name: "Luke Kohen", role: "Poet · heartist · ecopreneur", initials: "LK", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06982fd67a35819fe4.png", bio: "A rising voice of inspiration and leadership: speaker, heartist, mentor, and ecopreneur. Over a decade empowering individuals and groups, mentor for emerging leaders and founders.", tag: "Community & Future" },
  { id: "hogan", name: "Timothy Hogan", role: "Grand Master · Order of the Temple of Solomon", initials: "TH", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db3265982fd67a3581fed1.png", bio: "Speaks from inside the traditions he teaches. 32° KCCH Scottish Rite Mason and initiate of lineages spanning the Western mystery tradition. For over 25 years a custodian of living wisdom.", tag: "Wisdom Keepers" },
  { id: "debra", name: "Debra Silverman", role: "Astrologer & psychotherapist", initials: "DS", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06b30bc523710f9dfd.png", bio: "45+ years blending astrology and psychology to support emotional health and self-awareness. Founder of Applied Astrology, training thousands in her practical, element-based approach.", tag: "Wisdom Keepers" },
  { id: "chervin", name: "Chervin Jafarieh", role: "Co-founder · Cymbiotika", initials: "CJ", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06b30bc523710f9e14.png", bio: "Visionary co-founder and CSO of Cymbiotika — blending Functional Medicine, Epigenetics, and Orthomolecular Science. Expertise spans Eastern and Western medical traditions.", tag: "Wisdom Keepers" },
  { id: "comber", name: "Robert James Cumber", role: "Author · The Lost Octave", initials: "RC", bio: "Spiritual author, artist, and researcher exploring the intersection of astrology, the I Ching, and sacred geometry. Blends Eastern mysticism with scientific inquiry.", tag: "Wisdom Keepers" },

  // ===== Fernando Pessoa Stage =====
  { id: "barbara", name: "Bárbara Barradas", role: "Atriz · interpreta \"O Infante\"", initials: "BB", bio: "Atriz portuguesa que abre o Palco Fernando Pessoa com uma interpretação de \"O Infante\" — um chamado em forma de palavra.", tag: "Pessoa Stage" },
  { id: "cristiana", name: "Cristiana Vaz Franco", role: "Mediadora · facilitadora", initials: "CF", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06a4e6aa34cbea5d62.png", bio: "Abre o campo do Palco Fernando Pessoa e regressa ao final da tarde para acompanhar a passagem \"do Espírito para a Matéria\".", tag: "Pessoa Stage" },
  { id: "medeiros-jose", name: "José Medeiros", role: "Investigador · alma portuguesa", initials: "JM", image: "https://img.wook.pt/autor/imagem/jose-medeiros/MXwxMTI1MjYzfDE2NDU1MzIyNTcwMDB8d2VicHwyNTM1ODY5Ni02REQwLTAxOTYtRTA2My0wQTBBMDU5OEQyNTA=", bio: "Trabalha sobre a alma secreta de Portugal — a corrente subterrânea que liga lenda, território e destino.", tag: "Wisdom Keepers" },
  { id: "anes", name: "José Manuel Anes", role: "Ensaísta · esoterismo português", initials: "JA", image: "https://iporto.amp.pt/content/uploads/2023/07/66880_jos%C3%A9%20manuel%20anes.jpg", bio: "Ensaísta e investigador sobre tradições esotéricas portuguesas, com foco no Quinto Império do Espírito Santo.", tag: "Wisdom Keepers" },
  { id: "alex", name: "Alexandre Gabriel", role: "Pensador · Quinto Império", initials: "AG", bio: "Participante do painel \"As camadas invisíveis do Quinto Império\".", tag: "Pessoa Stage" },
  { id: "teresa", name: "Teresa Mesquitela", role: "Investigadora", initials: "TM", bio: "Participante do painel \"As camadas invisíveis do Quinto Império\".", tag: "Pessoa Stage" },
  { id: "luis", name: "Luís Costa Campos", role: "Autor", initials: "LC", image: "https://scontent.flis8-1.fna.fbcdn.net/v/t39.30808-1/245301887_978860626025898_2781644924829563925_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=7r-7kztvn8YQ7kNvwG9tUFc&_nc_oc=AdqOJIsFERD3fHKdjMjbh0pGB9l8NhEc3djCvADYoXgxAnK2hy9_5P9K-B56987ExKo&_nc_zt=24&_nc_ht=scontent.flis8-1.fna&_nc_gid=mDB_iJEo8iwPJxSYQNEBMw&_nc_ss=7b2a8&oh=00_Af6ZrkEMnaPVyUivU3jMsohDWMEs8vwHqEHtkduTKKEh3A&oe=69FC87DA", bio: "Participante do painel \"As camadas invisíveis do Quinto Império\".", tag: "Pessoa Stage" },
  { id: "duarte", name: "José Gil Duarte", role: "Pensador", initials: "GD", bio: "Participante do painel \"As camadas invisíveis do Quinto Império\".", tag: "Pessoa Stage" },
  { id: "paulo", name: "Paulo Borges", role: "Filósofo · estudioso de Pessoa", initials: "PB", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06d7871cddf76f45b6.png", bio: "Filósofo e académico português conhecido pelo seu trabalho sobre Fernando Pessoa e a profecia do Quinto Império.", tag: "Wisdom Keepers" },
  { id: "medeiros-joao", name: "João Medeiros", role: "Investigador", initials: "JM", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06b30bc523710f9e16.png", bio: "Trabalha sobre identidade e tempo no Quinto Império — e sobre como as duas se entretecem.", tag: "Wisdom Keepers" },
  { id: "marta", name: "Marta Sundari", role: "Voice of ritual and Earth", initials: "MS", bio: "A voice rooted in ritual, inner transformation, and sacred relationship with the Earth. Her connection to the Fifth Empire prophecy feels deeply visceral.", tag: "Ritual & Embodiment" },
  { id: "daniela", name: "Daniela Gandra", role: "Poetisa", initials: "DG", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69ecf83ab0e5e2bb7fb27491.png", bio: "Poetisa convidada do Palco Fernando Pessoa — surge entre os tempos certos do programa, com a palavra como ponte.", tag: "Pessoa Stage" },

  // ===== Root Stage =====
  { id: "julia", name: "Julia Pieper", role: "Yoga teacher", initials: "JP", image: "julia.jpg", sortLast: true, bio: "Leads movement-as-meditation. Her practice opens the day on the Root Stage with a slow flow under the trees.", tag: "Ritual & Embodiment" },
  { id: "nuno", name: "Nuno Kampos", role: "Sacred Masculine retreat leader", initials: "NK", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db4109982fd67a35838f25.png", bio: "World traveler, artist, and father of six. A Vision Quest initiate and Temazcal runner leading Sacred Masculine retreats and Youth Camps.", tag: "Ritual & Embodiment" },
  { id: "lisa", name: "Lisa Jones", role: "Healer · breathwork", initials: "LJ", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db4109a4e6aa34cbec50b7.png", bio: "Healer at heart who guides people back to themselves — co-leading the Openheart Breathwork on the Root Stage.", tag: "Ritual & Embodiment" },
  { id: "jennifer", name: "Jennifer K. Hill", role: "Communication architect", initials: "JH", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06a4e6aa34cbea5d64.png", bio: "Cracked the code of human connection. Guides leaders in aligning their communication with their desired world. Two decades of building companies and delivering keynotes globally.", tag: "Community & Future" },
  { id: "sofia", name: "Sofia Sundari", role: "Tantra teacher · author", initials: "SS", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db3565d7871cddf76ff6b2.png", bio: "Teacher of the Sacred Union — works at the intersection of feminine wisdom, tantra and devotional practice.", tag: "Ritual & Embodiment" },
  { id: "lara", name: "Dr. Lara Wegener", role: "Researcher · panelist", initials: "LW", bio: "Joins the panel on humanity's return to its original design.", tag: "Community & Future" },
  { id: "shani", name: "Shani Leher", role: "Founder · Sound Sanctum", initials: "SL", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69e90fa8b0e5e2bb7fdedeae.png", bio: "Founder of Sound Sanctum and pioneer of Inner Geopolitics — mastering the inner landscape with the same precision used to navigate the outer world.", tag: "Sound & Frequency" },
  { id: "alessa", name: "Alessa Berg", role: "Coach · panelist", initials: "AB", bio: "Joins the panel on humanity's return to its original design.", tag: "Community & Future" },
  { id: "lucian", name: "Lucian Tarowski", role: "Moderator", initials: "LT", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06b30bc523710f9dfc.png", bio: "Moderates the Root Stage panel on humanity transforming when we return to our original design.", tag: "Community & Future" },
  { id: "nevsah", name: "Nevsah Karamehmet", role: "Founder · Nevsah Institute", initials: "NK", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69d6549fa798833f60c0671f.png", bio: "Founder & CEO of several ventures including Nevsah Institute, Breath Hub, Welly Labs and NevCap. 25+ years researching how mental and behavioral habits shape our outcomes.", tag: "Community & Future" },
  { id: "jack", name: "Jack Weaver", role: "Musician", initials: "JW", bio: "Joins the medicine-music gathering on the Root Stage.", tag: "Sound & Frequency" },
  { id: "reachel", name: "Reachel Singh", role: "Vocal healer · sound practitioner", initials: "RS", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69ecf83a0d66f2a66521d5b2.png", bio: "Vocal healer, educator, and sound practitioner whose work is rooted in her multicultural heritage — integrating ancestral knowledge with vocal healing.", tag: "Sound & Frequency" },
  { id: "vinay", name: "Vinay Vayas", role: "Musician", initials: "VV", bio: "Joins the medicine-music gathering on the Root Stage.", tag: "Sound & Frequency" },
  { id: "baltazar", name: "Baltazar Molina", role: "Percussionist", initials: "BM", bio: "Joins the medicine-music gathering on the Root Stage with rhythm as ceremony.", tag: "Sound & Frequency" },
  { id: "sam", name: "Sam Garrett", role: "Singer-songwriter", initials: "SG", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69ecf83a05d4199001863b13.png", bio: "English singer-songwriter exploring Eastern Philosophy, Meditation, Yoga and Rastafari Wisdom. Lyrically soulful, devotionally talented.", tag: "Sound & Frequency" },
  { id: "juliette", name: "Juliette Invigor", role: "DJ", initials: "JI", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69ecf83a9fe87a9994ee8bda.png", bio: "Holds the late dancefloor on the Root Stage.", tag: "Sound & Frequency" },
  { id: "joanna", name: "Joanna Lewins", role: "DJ", initials: "JL", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69ecf83a717d5dd4e1ec2a76.png", bio: "Holds the late dancefloor on the Root Stage.", tag: "Sound & Frequency" },
  { id: "avishag", name: "Avishag Gaya", role: "Movement guide", initials: "AV", bio: "Holds the late dancefloor on the Root Stage with movement as prayer.", tag: "Sound & Frequency" },

  // ===== Day 2 & 3 =====
  { id: "manuel", name: "Manuel Gandra", role: "Guide · Ribeira d'Ilhas", initials: "MG", bio: "Local guide leading the morning walk from Ribeira d'Ilhas Surf Restaurant & Bar to the Sanctuary of Peninha.", tag: "Pilgrimage" },
  { id: "cristina", name: "Cristina Moreira", role: "Sacred sites · ceremonial facilitator", initials: "CM", bio: "Leads the ceremonial activation at the Sanctuary of Peninha — a sacred site high above the Atlantic that has held the memory of the Sacred Feminine for centuries.", tag: "Ritual & Embodiment" },
  { id: "luciano", name: "Luciano", role: "Ceremonial facilitator", initials: "LU", bio: "Co-facilitates the ceremonial activation at the Sanctuary of Peninha.", tag: "Ritual & Embodiment" },
  { id: "alma", name: "Alma", role: "Ceremonial facilitator", initials: "AL", bio: "Co-facilitates the ceremonial activation at the Sanctuary of Peninha.", tag: "Ritual & Embodiment" },
  { id: "carl", name: "Carl Hayden Smith", role: "Museum of Consciousness", initials: "CS", image: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/ZUnYOIWq7C0RbhqlgbVX/media/69db2f06019dc508d363e0a7.png", bio: "Co-opens the final morning with a live vocal activation and music — a ceremony of sound that lands what the last two days have moved.", tag: "Sound & Frequency" },
  { id: "courtney", name: "Courtney Force", role: "Breathwork · sound journey", initials: "CF", bio: "Guides the Breath and Sound Journey alongside Luke Kohen on the final afternoon.", tag: "Ritual & Embodiment" },
];

export const FE_PEOPLE_BY_ID = Object.fromEntries(FE_PEOPLE.map(p => [p.id, p]));

export const FE_SESSIONS = [
  // ========== Day 1 — Sunday, May 3 — Full Programme ==========

  // Sanctum Stage
  { id: "sa01", day: 1, start: "09:00", end: "10:00", title: "Arrival & Check-in", venue: "sanctum", track: "ritual", speakers: [], note: "Doors open." },
  { id: "sa02", day: 1, start: "10:00", end: "10:40", title: "Opening Ceremony", venue: "sanctum", track: "ritual", speakers: [], desc: "Welcome. The lighting of the FiVth flame." },
  { id: "sa03", day: 1, start: "10:40", end: "11:20", title: "The Hidden Architecture of Reality", venue: "sanctum", track: "wisdom", speakers: ["reg"], desc: "Sir Robert E. Grant on the geometry beneath what we call the world." },
  { id: "sa04", day: 1, start: "11:20", end: "12:00", title: "The Transition We Are", venue: "sanctum", track: "wisdom", speakers: ["charles"], desc: "Charles Eisenstein on the transition we are living and the more beautiful world our hearts know is possible." },
  { id: "sa05", day: 1, start: "12:00", end: "12:30", title: "Breathwork Journey", venue: "sanctum", track: "ritual", speakers: ["camille"], desc: "Camille Lorenzetti guides a breathwork journey." },
  { id: "sa06", day: 1, start: "12:30", end: "14:00", title: "Lunch and Chill", venue: "sanctum", track: "community", speakers: [], note: "Open break." },
  { id: "sa07", day: 1, start: "14:00", end: "15:00", title: "Giza · World Premiere", venue: "sanctum", track: "wisdom", speakers: ["reg", "biondi"], desc: "Sir Robert E. Grant and Dr. Filippo Biondi present emerging findings — what SAR-Doppler tomography is now revealing beneath the Giza plateau.", capacity: "Full house" },
  { id: "sa08", day: 1, start: "15:00", end: "15:30", title: "Soul Whisper", venue: "sanctum", track: "sound", speakers: ["tammy"], desc: "Tammy Weis · songs from Soul Whisper and the Fernando Pessoa Miracles project." },
  { id: "sa09", day: 1, start: "15:30", end: "16:20", title: "The Memory Beneath History", venue: "sanctum", track: "wisdom", speakers: ["sarah"], desc: "Sarah Breksman Cosme on the memory underneath what is recorded." },
  { id: "sa10", day: 1, start: "16:20", end: "16:40", title: "Poems of the Ancient Future", venue: "sanctum", track: "ritual", speakers: ["luke"], desc: "Luke Kohen reads from the ancient future." },
  { id: "sa11", day: 1, start: "16:40", end: "17:50", title: "Awakening the Holy Grail", venue: "sanctum", track: "wisdom", speakers: ["hogan"], desc: "Timothy Hogan, Grand Master of the Order of the Temple of Solomon." },
  { id: "sa12", day: 1, start: "17:50", end: "18:30", title: "The age you were born into is ending. You Are Here", venue: "sanctum", track: "wisdom", speakers: ["debra"], desc: "Debra Silverman's element-based reading of this moment." },
  { id: "sa13", day: 1, start: "18:30", end: "19:05", title: "Your body already knows how to heal itself", venue: "sanctum", track: "wisdom", speakers: ["chervin"], desc: "Chervin Jafarieh on functional medicine, epigenetics, and what coherence actually feels like." },
  { id: "sa14", day: 1, start: "19:05", end: "20:00", title: "The Holy Grail in the Stars", venue: "sanctum", track: "wisdom", speakers: ["comber"], desc: "Robert James Cumber on the grail as cosmology — astrology, sacred geometry, and the I Ching as one frame." },
  { id: "sa15", day: 1, start: "20:00", end: "20:30", title: "Closing", venue: "sanctum", track: "ritual", speakers: [], desc: "We close the Sanctum Stage." },

  // Fernando Pessoa Stage
  { id: "pe01", day: 1, start: "10:30", end: "10:40", title: "O Chamado", venue: "pessoa", track: "ritual", speakers: ["barbara"], desc: "Bárbara Barradas interpreta \"O Infante\". Um chamado para abrir o palco." },
  { id: "pe02", day: 1, start: "10:40", end: "11:00", title: "Abertura do Campo", venue: "pessoa", track: "ritual", speakers: ["cristiana"], desc: "Cristiana Vaz Franco abre o campo do Palco Fernando Pessoa." },
  { id: "pe03", day: 1, start: "11:00", end: "12:00", title: "A Alma Secreta de Portugal", venue: "pessoa", track: "wisdom", speakers: ["medeiros-jose"], desc: "José Medeiros sobre a corrente subterrânea que faz Portugal." },
  { id: "pe04", day: 1, start: "12:00", end: "12:50", title: "O Quinto Império do Espírito Santo", venue: "pessoa", track: "wisdom", speakers: ["anes"], desc: "José Manuel Anes sobre a tradição do Quinto Império do Espírito Santo." },
  { id: "pe05", day: 1, start: "12:50", end: "13:50", title: "Lunch and Chill", venue: "pessoa", track: "community", speakers: [], note: "Open break." },
  { id: "pe06", day: 1, start: "13:50", end: "14:30", title: "As camadas invisíveis do Quinto Império", venue: "pessoa", track: "community", speakers: ["alex", "teresa", "luis", "duarte"], desc: "Painel: Alexandre Gabriel, Teresa Mesquitela, Luís Costa Campos, José Gil Duarte." },
  { id: "pe07", day: 1, start: "14:30", end: "15:25", title: "Teoria e Prática do Quinto (não) Império", venue: "pessoa", track: "wisdom", speakers: ["paulo"], desc: "Paulo Borges sobre o Quinto Império — entre teoria e prática, entre o que é e o que recusa ser." },
  { id: "pe08", day: 1, start: "15:25", end: "16:20", title: "Identidade e Tempo do Quinto Império", venue: "pessoa", track: "wisdom", speakers: ["medeiros-joao"], desc: "João Medeiros sobre a identidade e o tempo no Quinto Império." },
  { id: "pe09", day: 1, start: "16:20", end: "17:15", title: "Do Espírito para a Matéria", venue: "pessoa", track: "ritual", speakers: ["cristiana"], desc: "Cristiana Vaz Franco · da palavra à forma." },
  { id: "pe10", day: 1, start: "17:15", end: "18:00", title: "O Futuro é Ancestral", venue: "pessoa", track: "ritual", speakers: ["marta"], desc: "Marta Sundari · uma transmissão sobre tempo, voz e raiz." },
  { id: "pe11", day: 1, start: "18:00", end: "18:30", title: "Encerramento do Palco", venue: "pessoa", track: "ritual", speakers: [], desc: "Encerramento do Palco Fernando Pessoa." },
  { id: "pe12", day: 1, start: "18:30", end: "19:00", title: "Poesia", venue: "pessoa", track: "ritual", speakers: ["daniela"], desc: "Daniela Gandra. A palavra como ponte — o tempo é dela.", note: "Surge entre os intervalos do programa." },

  // Root Stage
  { id: "ro01", day: 1, start: "08:00", end: "09:00", title: "Arrival & Check-in", venue: "root", track: "ritual", speakers: [], note: "Doors open." },
  { id: "ro02", day: 1, start: "09:00", end: "10:00", title: "Yoga Flow in the Meadow", venue: "root", track: "ritual", speakers: ["julia"], desc: "Julia Pieper · slow flow under the trees." },
  { id: "ro03", day: 1, start: "10:00", end: "11:00", title: "Openheart Breathwork", venue: "root", track: "ritual", speakers: ["nuno", "lisa"], desc: "Nuno Kampos and Lisa Jones · open the heart, open the day." },
  { id: "ro04", day: 1, start: "11:00", end: "11:11", title: "Opening Ceremony", venue: "root", track: "ritual", speakers: [], desc: "We open the Root Stage." },
  { id: "ro05", day: 1, start: "11:11", end: "12:35", title: "Boogie & Brunch", venue: "root", track: "sound", speakers: [], desc: "Music, movement, nourishment. The feast that anchors the day." },
  { id: "ro06", day: 1, start: "12:35", end: "14:00", title: "Where Science Meets the Sacred", venue: "root", track: "community", speakers: ["jennifer"], desc: "Jennifer K. Hill on what happens when science actually meets the sacred." },
  { id: "ro07", day: 1, start: "14:00", end: "15:00", title: "The Sacred Union Lives Here", venue: "root", track: "ritual", speakers: ["sofia"], desc: "Sofia Sundari · the sacred union as a daily practice." },
  { id: "ro08", day: 1, start: "15:00", end: "15:45", title: "Humanity transforms when we return to our original design", venue: "root", track: "community", speakers: ["lara", "shani", "alessa", "lucian"], desc: "Panel · Dr. Lara Wegener, Shani Leher, Alessa Berg. Moderated by Lucian Tarowski." },
  { id: "ro09", day: 1, start: "15:45", end: "17:00", title: "Next Level Woman", venue: "root", track: "community", speakers: ["nevsah"], desc: "Nevsah Karamehmet on the breath, the body, and the next-level woman." },
  { id: "ro10", day: 1, start: "17:00", end: "19:00", title: "Song, voice, rhythm, and medicine", venue: "root", track: "sound", speakers: ["jack", "reachel", "vinay", "baltazar"], desc: "Jack Weaver, Reachel Singh, Vinay Vayas, Baltazar Molina · medicine music." },
  { id: "ro11", day: 1, start: "19:00", end: "20:00", title: "Sunset Concert", venue: "root", track: "sound", speakers: ["sam"], desc: "Sam Garrett · sunset concert." },
  { id: "ro12", day: 1, start: "20:00", end: "22:00", title: "DJ set & Movement", venue: "root", track: "sound", speakers: ["juliette", "joanna", "avishag"], desc: "Juliette Invigor, Joanna Lewins, Avishag Gaya · the late dancefloor." },
  { id: "ro13", day: 1, start: "22:00", end: "22:30", title: "Closing Ceremony", venue: "root", track: "ritual", speakers: [], desc: "We close together." },

  // ========== Day 2 — Monday, May 4 — The Sanctuary of Peninha ==========

  // Morning pilgrimage — Sintra
  { id: "d2-01", day: 2, start: "08:30", end: "09:30", title: "Ribeira d'Ilhas · with Manuel Gandra", venue: "peninha", track: "ritual", speakers: ["manuel"], desc: "Meet Manuel Gandra at Ribeira d'Ilhas Surf Restaurant & Bar for the morning walk. Please arrive 15 minutes early to park and reach the meeting point.", note: "⚑ Arrive by 8h15 to park. Meeting point: Ribeira d'Ilhas Surf Restaurant & Bar.", gmap: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1f26fbeb6444e5:0xdf1cdd4d55085ee2?sa=X&ved=1t:8290&ictx=111", venueName: "Ribeira d'Ilhas Surf Restaurant & Bar", venueSubtitle: "Meeting Point", venueLocation: "Estrada Nacional 247 · Praia de Ribeira D'Ilhas, Ericeira", venueWalk: "Arrive by 8h15 to park. The walk to Peninha begins from here." },
  { id: "d2-02", day: 2, start: "10:30", end: "11:00", title: "Arrival at Peninha · Parking Area", venue: "peninha", track: "ritual", speakers: [], desc: "High above the Atlantic, where the wind never stops and the horizon stretches to the edge of the known world, there is a place that has been holding secrets from a distant past. Meet at the Peninha parking area before the ceremonial activation begins.", note: "⚑ Meet at Peninha Parking Area.", gmap: "https://maps.app.goo.gl/TVcyjRbrrRQbS8AR8", venueName: "Peninha Parking Area", venueSubtitle: "Meeting Point", venueLocation: "Sintra Natural Park · high above the Atlantic", venueWalk: "Arrive by 10h30. The ceremonial activation begins from here." },
  { id: "d2-03", day: 2, start: "11:00", end: "14:30", title: "Ancient Sacred Sites & Ceremonial Activation", venue: "peninha", track: "ritual", speakers: ["cristina", "reachel", "luciano", "alma"], desc: "The Sanctuary of Peninha is where the Sacred Feminine refused to leave. Where the same man who built Quinta da Regaleira — with its initiation wells and Grail symbolism — came at the end of his life and never finished what he started. Cristina Moreira, Reachel Singh, Luciano and Alma lead the activation. Lunch will be provided for the Pilgrims." },
  { id: "d2-lunch", day: 2, start: "14:30", end: "19:00", title: "Free Time · Lunch Provided", venue: "peninha", track: "community", speakers: [], desc: "Lunch is provided for Pilgrims. Rest, integrate, and prepare for the evening.", note: "Free time until the evening gathering." },

  // Evening — Quinta São José
  { id: "d2-04", day: 2, start: "19:00", end: "19:30", title: "Gates Opening · Quinta São José", venue: "quinta", track: "community", speakers: [], desc: "As the sun falls, the inner circle is taken to a location revealed only to those who are here. A former Templar residence. Candlelight. The people who just spent two days unveiling the geometry of the cosmos, the secrets beneath Giza, and the sacred soul of Portugal, will gather over food, over ritual, in a place that has held secrets before and knows how to keep them.", note: "Location: Quinta São José. Details shared with Pilgrims." },
  { id: "d2-05", day: 2, start: "19:30", end: "20:30", title: "World Premiere · Robert Edward Grant Art Exhibition", venue: "quinta", track: "wisdom", speakers: ["reg"], desc: "The world premiere of Robert Edward Grant's art exhibition — an unveiling at the intersection of sacred geometry, light, and the cosmos. An evening no one who is here will forget." },
  { id: "d2-06", day: 2, start: "20:30", end: "23:00", title: "Sage Dinner", venue: "quinta", track: "community", speakers: [], desc: "Dinner. Candlelight. The people who came to go all the way, gathered around one table. The conversation that began beneath the stars above Peninha continues here — over food, over ritual, in a Templar residence that knows how to hold a secret.", note: "Closing at 23h." },

  // ========== Day 3 — Tuesday, May 5 — The New Renaissance Begins Here ==========

  { id: "d3-01", day: 3, start: "10:00", end: "11:00", title: "Museum of Consciousness · Vocal Activation", venue: "shanti", track: "sound", speakers: ["reachel", "carl"], desc: "The day begins in the body, in the breath, and in the voice. Reachel Singh and Carl Hayden Smith open the final morning with a live vocal activation and music — a ceremony of sound that settles what the last two days have moved and arrives everyone, fully, for what is about to unfold." },
  { id: "d3-02", day: 3, start: "11:00", end: "12:30", title: "Breaking Bread · The Closing Brunch", venue: "shanti", track: "community", speakers: [], desc: "The closing brunch. Space for the questions that did not fit on the main stage and the conversations that the stage could not hold." },
  { id: "d3-03", day: 3, start: "12:30", end: "14:00", title: "The Unified Field · Co-Creation Circles", venue: "shanti", track: "community", speakers: ["lucian"], desc: "What do we actually build from here? The inner circle breaks into small groups — each with a facilitator, each with one question. A living prototype for the New Renaissance — the people who came to go all the way, in the same room, deciding together what comes next and who they become in the building of it. What begins here does not end here.", note: "Facilitated by Lucian Tarnowski." },
  { id: "d3-04", day: 3, start: "14:15", end: "15:15", title: "Breath and Sound Journey", venue: "shanti", track: "ritual", speakers: ["luke", "courtney"], desc: "Luke Kohen and Courtney Force guide a breath and sound journey." },
  { id: "d3-05", day: 3, start: "15:30", end: "16:30", title: "Becoming Who You Truly Are · Living a Miraculous Life", venue: "shanti", track: "wisdom", speakers: ["shani"], desc: "Ego busting, potential boosting, alignment enhancing. A one-hour workshop grounded in tools, frameworks, and principles from the ancient wisdom of Kabbalah.", note: "Shani Leher." },
  { id: "d3-06", day: 3, start: "18:30", end: "19:30", title: "The Golden Hour · Sunset & Live Music", venue: "shanti", track: "sound", speakers: ["jack", "reachel"], desc: "Jack Weaver, Reachel Singh and guests. The golden hour — live music as the sun goes down over the last evening of the FiVth." },
  { id: "d3-07", day: 3, start: "19:30", end: "21:00", title: "Epic Party · DJ Set", venue: "shanti", track: "sound", speakers: [], desc: "The FiVth does not end. It continues — in every person who carries it home. The last night together with sacred song and a sacred party." },
];

export const FE_DAYS = [
  { n: 1, label: "Sun", date: "May 3", long: "Sunday · May 3",   title: "The FiVth" },
  { n: 2, label: "Mon", date: "May 4", long: "Monday · May 4",   title: "The Pilgrimage" },
  { n: 3, label: "Tue", date: "May 5", long: "Tuesday · May 5",  title: "The New Renaissance" },
];

// "Now" — pinned to a moment that lights up the Giza premiere on the Sanctum Stage.
export const FE_NOW = { day: 2, time: "08:00" };

export const FE_toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export const FE_dayOf = (n) => FE_DAYS.find(d => d.n === n);

export const FE_currentSession = (now) => {
  const nowMin = FE_toMinutes(now.time);
  return FE_SESSIONS.find(s =>
    s.day === now.day && s.venue === "sanctum" &&
    FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin
  ) || FE_SESSIONS.find(s =>
    s.day === now.day && FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin
  );
};

export const FE_nextSessions = (now, count = 3) => {
  const nowMin = FE_toMinutes(now.time);
  return FE_SESSIONS
    .filter(s => s.day === now.day && FE_toMinutes(s.start) > nowMin)
    .sort((a, b) => FE_toMinutes(a.start) - FE_toMinutes(b.start))
    .slice(0, count);
};

export const FE_liveSessions = (now) => {
  const nowMin = FE_toMinutes(now.time);
  return FE_SESSIONS.filter(s =>
    s.day === now.day &&
    FE_toMinutes(s.start) <= nowMin &&
    FE_toMinutes(s.end) > nowMin
  );
};

export const FE_upcomingWithin = (now, windowMin = 60) => {
  const nowMin = FE_toMinutes(now.time);
  return FE_SESSIONS
    .filter(s => s.day === now.day && FE_toMinutes(s.start) > nowMin && FE_toMinutes(s.start) <= nowMin + windowMin)
    .sort((a, b) => FE_toMinutes(a.start) - FE_toMinutes(b.start));
};

export const FE_todaysSpeakers = (now) => {
  const WORKSHOP_TRACKS = new Set(["wisdom", "community", "ritual"]);
  const todaySessions = FE_SESSIONS
    .filter(s => s.day === now.day)
    .sort((a, b) => FE_toMinutes(a.start) - FE_toMinutes(b.start));

  // For each speaker, record earliest session start and whether they have a workshop track
  const speakerMeta = new Map();
  todaySessions.forEach(s => {
    (s.speakers || []).forEach(id => {
      if (!FE_PEOPLE_BY_ID[id]) return;
      if (!speakerMeta.has(id)) speakerMeta.set(id, { firstMin: FE_toMinutes(s.start), hasWorkshop: false });
      if (WORKSHOP_TRACKS.has(s.track)) speakerMeta.get(id).hasWorkshop = true;
    });
  });

  return [...speakerMeta.entries()]
    .sort(([ida, a], [idb, b]) => {
      const aPhoto = !!FE_PEOPLE_BY_ID[ida]?.image;
      const bPhoto = !!FE_PEOPLE_BY_ID[idb]?.image;
      if (aPhoto !== bPhoto) return aPhoto ? -1 : 1;
      const aSortLast = !!FE_PEOPLE_BY_ID[ida]?.sortLast;
      const bSortLast = !!FE_PEOPLE_BY_ID[idb]?.sortLast;
      if (aSortLast !== bSortLast) return aSortLast ? 1 : -1;
      if (a.hasWorkshop !== b.hasWorkshop) return a.hasWorkshop ? -1 : 1;
      return a.firstMin - b.firstMin;
    })
    .map(([id]) => FE_PEOPLE_BY_ID[id]);
};

export const FE_PARTNERS = [
  { id: "holomovement", name: "Holomovement", category: "Movement", logo: "/assets/partner-holomovement.png", short: "A planet-wide movement of conscious-evolution organisations, syncing as one breath.", long: "The Holomovement is a coordinated coming-together of organisations and individuals working at the threshold of consciousness, ecology and culture. The movement borrows its name from David Bohm's idea that everything is interconnected — and behaves like one. Holomovement co-presents the wisdom track at the FiVth and curates the cross-stage panels.", web: "holomovement.org", role: "Wisdom Track Co-Curator" },
  { id: "mojo", name: "House of the Rising Mojo", category: "Music & Ceremony", logo: "/assets/partner-mojo.webp", short: "Boutique gathering house — music, medicine, and the kind of nights you remember.", long: "House of the Rising Mojo is a small but mighty Lisbon-rooted production house behind some of Portugal's best-kept secret gatherings. They program the late dancefloor on the Root Stage and the morning sound-bath circle. Expect medicine music, slow brass, and a serious commitment to the dancefloor as a spiritual venue.", web: "houseoftherisingmojo.com", role: "Root Stage · Music Programming" },
  { id: "meya", name: "MEYA", category: "Conscious Beauty", logo: "/assets/partner-meya.webp", short: "Plant-led skincare from the Atlantic coast. Slow rituals, real ingredients.", long: "MEYA is a Portuguese conscious-beauty house making plant-led skincare and bath rituals from wild-harvested ingredients along the Atlantic coast. They host the morning ritual tent at the FiVth — a small space for slow attention before the programme begins. All MEYA products are available at cost for pass-holders.", web: "meya.pt", role: "Morning Ritual Tent" },
  { id: "ommm", name: "OMMM", category: "Sound & Frequency", logo: "/assets/partner-ommm.webp", short: "A modular sound system tuned to 432 — and the people who carry it.", long: "OMMM is a small collective of sound-system builders and engineers based between Berlin and Costa da Caparica. Their modular rig is tuned to 432Hz and runs the Sanctum Stage, the Root dancefloor, and the sunset concert. They also run an open clinic on the second day for any speaker who wants their voice tested in the room before going live.", web: "ommm.audio", role: "Sound — All Stages" },
  { id: "upgame", name: "UP Game", category: "Play & Practice", logo: "/assets/partner-upgame.webp", short: "The conscious-conversation card deck. We use it between sessions, in the meadow.", long: "UP Game is a card-based conversation practice — a deck of prompts that move from icebreaker through to the kind of question you'd normally only ask a close friend at 3am. UP runs the in-between of the FiVth: small circles in the meadow, after-lunch decompression rounds, and the quiet zone where you can opt out of the programme without stepping away.", web: "upgame.life", role: "In-between · Practice Circles" },
  { id: "bora", name: "Bora", category: "Partner", logo: "/assets/bora-logo.png", short: "The side of Portugal most people never find.", long: "Bora curates the local events, hidden venues and under-the-radar experiences that most people visiting Portugal never stumble upon. The kind of night, market, concert or gathering that locals know and tourists miss. Think of it as your insider pass to wherever things are actually happening.", web: "bora.events", role: "Local Partner · Portugal" },
  { id: "backstage", name: "Backstage Studio", category: "App · Technology", logo: null, short: "They built this thing you're holding. Small studio, strong opinions, zero interest in making something forgettable.", long: "Backstage Studio is a small studio that decided 'event app' didn't have to mean a boring grid of sessions and a map that doesn't load. They build digital experiences for the kind of gatherings where something actually shifts, in the room and in the people inside it. No templates. No off-the-shelf. They show up, listen, and make something that belongs. The schedule, the voices, the offline mode, the little star bouncing in the corner, that was them. Cooked with love from Ericeira.", role: "This App · Built with Care" },
];

export const FE_PARTNERS_BY_ID = Object.fromEntries(FE_PARTNERS.map(p => [p.id, p]));
