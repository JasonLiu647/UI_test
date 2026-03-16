export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorTitle?: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  breaking?: boolean;
  tags: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { slug: "enchantments", name: "Enchantments & Spells", description: "Latest breakthroughs in magical technology", icon: "✦" },
  { slug: "potions", name: "Potions & Alchemy", description: "Brewing discoveries and pharmaceutical magic", icon: "⚗" },
  { slug: "creatures", name: "Magical Creatures", description: "Wildlife reports from the enchanted world", icon: "🐉" },
  { slug: "ministry", name: "Ministry Affairs", description: "Government policies and political developments", icon: "⚖" },
  { slug: "quidditch", name: "Quidditch & Sports", description: "Scores, transfers, and tournament news", icon: "⚡" },
  { slug: "artifacts", name: "Artifacts & Relics", description: "Archaeological finds and historical treasures", icon: "🏺" },
];

export const articles: Article[] = [
  {
    slug: "ancient-ward-system-discovered-beneath-london",
    title: "Ancient Ward System Discovered Beneath London Bridge",
    subtitle: "Archaeo-mages uncover 2,000-year-old protective enchantments still active",
    excerpt: "A team of archaeo-mages from the Royal Institute of Magical Heritage has uncovered an extensive ward system beneath London Bridge, believed to have been placed by Roman-era enchanters nearly two millennia ago.",
    content: `The discovery was made during routine maintenance of the Muggle-Repelling Charms that protect the entrance to Diagon Alley's southern extension. Lead researcher Professor Elara Blackwood described the find as "nothing short of extraordinary."

The ward system consists of seventeen interlocking runic circles, each approximately three metres in diameter, carved into the bedrock beneath the Thames. What makes this discovery particularly remarkable is that the wards remain partially active after two thousand years — a testament to the sophistication of Roman magical engineering.

"We've never seen anything quite like this," Professor Blackwood told the Daily Chronicle in an exclusive interview. "The complexity of the runic matrix suggests a level of magical understanding that, in some ways, surpasses our modern techniques. Each circle feeds energy into the next, creating a self-sustaining loop that has kept these wards functioning for millennia."

The Ministry of Magic has cordoned off the area and assigned a team of Unspeakables to study the wards. Initial analysis suggests they were designed to protect against dark creatures emerging from the river, possibly in response to a series of kelpie attacks documented in Roman magical texts.

Historical records from the Wizarding Archive of Londinium reference a "Great Warding" performed by a council of Roman magi in approximately 43 AD, coinciding with the Roman conquest of Britain. Until now, these accounts were considered largely mythological.

The discovery has sparked renewed interest in magical archaeology, with the Ministry announcing additional funding for excavation projects across Britain. Several other sites, including locations near Hadrian's Wall and the ancient city of Bath, are now being re-examined for similar hidden ward systems.`,
    category: "artifacts",
    author: "Cornelius Ashworth",
    authorTitle: "Senior Magical Correspondent",
    date: "2026-03-16",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?w=800&q=80",
    featured: true,
    breaking: true,
    tags: ["archaeology", "wards", "London", "Roman magic"],
  },
  {
    slug: "dragon-sanctuary-expansion-approved",
    title: "Welsh Dragon Sanctuary Wins Approval for Massive Expansion",
    subtitle: "New breeding program aims to revive three endangered species",
    excerpt: "The International Confederation of Wizards has approved a £47 million expansion of the Welsh Green Dragon Sanctuary, including new habitats for three critically endangered dragon species.",
    content: `The Welsh Green Dragon Sanctuary, located in the mountains of Snowdonia under layers of Muggle-repelling enchantments, will nearly double in size following the landmark approval.

The expansion will create dedicated habitats for the Antipodean Opaleye, the Peruvian Vipertooth, and the critically endangered Catalonian Fireball, of which fewer than thirty individuals remain in the wild.

Sanctuary director Dr. Rhiannon Pryce called the decision "a triumph for magical conservation" and stressed the urgency of the breeding programme. "Without intervention, we could lose the Catalonian Fireball within a decade," she warned.

The project will employ over two hundred dragon keepers and magizoologists, making it the largest magical conservation effort in European history.`,
    category: "creatures",
    author: "Seraphina Wren",
    authorTitle: "Magical Creatures Editor",
    date: "2026-03-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80",
    featured: true,
    tags: ["dragons", "conservation", "Wales", "endangered species"],
  },
  {
    slug: "self-brewing-cauldron-controversy",
    title: "Self-Brewing Cauldrons Spark Heated Debate Among Potioneers",
    subtitle: "Traditional brewers call innovation 'an affront to the craft'",
    excerpt: "The introduction of enchanted self-brewing cauldrons by CauldronTech Inc. has divided the potions community, with master brewers calling for an immediate ban.",
    content: `CauldronTech Inc.'s new "AutoBrew 3000" promises to brew any standard potion with perfect precision, requiring only the raw ingredients and a voice command. The device went on sale last week and has already sold over ten thousand units.

However, the Guild of Master Potioneers has filed an official complaint with the Ministry, arguing that the device "undermines centuries of tradition and poses serious safety risks."

Guild President Master Aldric Hemlock stated: "Potion-making is an art that requires intuition, experience, and a deep understanding of magical properties. Reducing it to a voice command is not only disrespectful — it's dangerous."

CauldronTech CEO Miranda Frost dismissed the concerns, calling them "the same resistance every magical innovation faces." She noted that the AutoBrew includes seventeen safety enchantments and has passed all Ministry testing requirements.

The debate has reached the Wizengamot, which is expected to hold hearings on the matter next month.`,
    category: "potions",
    author: "Benedict Stirling",
    authorTitle: "Potions & Alchemy Correspondent",
    date: "2026-03-15",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    tags: ["potions", "technology", "controversy", "innovation"],
  },
  {
    slug: "new-spell-classification-system",
    title: "Ministry Unveils Revolutionary Spell Classification Framework",
    subtitle: "First major overhaul of magical taxonomy in 300 years",
    excerpt: "The Department of Magical Standards has introduced a new seven-tier spell classification system, replacing the outdated Merlin Scale that has been in use since 1726.",
    content: `The new Arcana Classification Framework (ACF) categorises spells based on five parameters: power requirement, complexity of wand movement, incantation difficulty, potential for misuse, and reversibility.

Head of Magical Standards, Director Prudence Whitmore, explained that the old Merlin Scale — which simply ranked spells from I to X based on difficulty — was "woefully inadequate for the modern magical landscape."

"We now have spells that didn't exist three hundred years ago," Director Whitmore said. "Augmented reality charms, digital-magical interfaces, AI-assisted enchantments — none of these fit neatly into Merlin's original categories."

The new framework has been cautiously welcomed by educators at Hogwarts and other magical institutions, though some professors have expressed concerns about the transition period.`,
    category: "enchantments",
    author: "Isolde Fairweather",
    authorTitle: "Ministry Affairs Reporter",
    date: "2026-03-14",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    featured: true,
    tags: ["ministry", "spells", "classification", "education"],
  },
  {
    slug: "quidditch-world-cup-qualifier-upset",
    title: "Luxembourg Stuns Brazil in World Cup Qualifier Shock",
    subtitle: "Underdog Seekers clinch victory with spectacular Wronski Feint",
    excerpt: "Luxembourg's national Quidditch team pulled off the biggest upset in qualifying history, defeating tournament favourites Brazil 280-260 in a match that lasted eleven hours.",
    content: `In what commentators are calling "the miracle of Metz," Luxembourg Seeker Amélie Schuster caught the Golden Snitch with a perfectly executed Wronski Feint that left Brazilian Seeker Carlos Souza crashing into the pitch.

The match, played under heavy rain at the enchanted Stade de la Frontière, saw Luxembourg take an early lead through their Chasers before Brazil's superior experience began to tell.

With Brazil leading 260-130, Schuster spotted the Snitch hovering near the base of the Brazilian goal hoops. What followed was a masterclass in tactical Seeking that will be studied at Quidditch academies for years to come.

Luxembourg now advances to the World Cup quarter-finals for the first time in their history.`,
    category: "quidditch",
    author: "Felix Beaumont",
    authorTitle: "Quidditch Correspondent",
    date: "2026-03-14",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba3a204e?w=800&q=80",
    tags: ["quidditch", "world cup", "Luxembourg", "Brazil"],
  },
  {
    slug: "invisibility-cloak-regulations-tightened",
    title: "New Invisibility Cloak Regulations Draw Criticism",
    subtitle: "Privacy advocates clash with Ministry over mandatory registration",
    excerpt: "The Ministry of Magic has passed controversial new regulations requiring all invisibility cloak owners to register their cloaks and submit to annual inspections.",
    content: `The Invisibility Cloak Registration Act, which takes effect next month, requires all owners of invisibility cloaks, hats, and other concealment devices to register them with the Department of Magical Law Enforcement.

Minister for Magic Helena Vane defended the legislation, citing a 340% increase in invisibility-related crimes over the past five years. "This is about public safety, not surveillance," she stated during a press conference at the Ministry.

However, the Wizarding Civil Liberties Union (WCLU) has condemned the act as "an unprecedented invasion of privacy" and announced plans to challenge it before the Wizengamot.

WCLU spokesperson Tobias Greengrass argued: "What's next? Registering our wands? Our broomsticks? This sets a dangerous precedent for government overreach into the private lives of witches and wizards."

The debate has also raised questions about enforcement, as true invisibility cloaks are, by their very nature, extremely difficult to detect.`,
    category: "ministry",
    author: "Isolde Fairweather",
    authorTitle: "Ministry Affairs Reporter",
    date: "2026-03-13",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["ministry", "regulation", "privacy", "invisibility"],
  },
  {
    slug: "phoenix-tears-breakthrough",
    title: "Breakthrough: Synthetic Phoenix Tears Could Revolutionise Healing",
    subtitle: "St Mungo's researchers achieve what was thought impossible",
    excerpt: "Healers at St Mungo's Hospital have successfully synthesised a compound that mimics the healing properties of phoenix tears, potentially ending centuries of reliance on the rare substance.",
    content: `The research team, led by Healer-General Octavia Bloom, spent seven years developing the synthetic compound, dubbed "Lacrimosa," which replicates approximately 89% of the healing properties found in natural phoenix tears.

"Phoenix tears have always been the gold standard of magical healing," Healer Bloom explained. "But their extreme rarity means they're available only to the wealthiest patients. Lacrimosa could democratise access to life-saving treatment."

The synthetic tears have already shown remarkable results in clinical trials, successfully treating curse damage, severe magical burns, and even some forms of dark magic scarring.

The pharmaceutical wing of the wizarding world has reacted with both excitement and caution, with shares in traditional healing ingredient suppliers falling sharply on the news.`,
    category: "potions",
    author: "Benedict Stirling",
    authorTitle: "Potions & Alchemy Correspondent",
    date: "2026-03-13",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    tags: ["healing", "phoenix", "research", "medicine"],
  },
  {
    slug: "enchanted-ai-wand-debate",
    title: "Should Wands Have AI? The Magical World Weighs In",
    subtitle: "Ollivander's launches smart wand with built-in spell assistance",
    excerpt: "Ollivander's latest creation — a wand embedded with an AI-enchantment that suggests spells and corrects wand movements — has ignited fierce debate about the role of artificial intelligence in magic.",
    content: `The "Ollivander's Companion" wand, priced at 15 Galleons, uses a revolutionary combination of enchantments and arithmantic algorithms to analyse the user's magical signature and provide real-time spell assistance.

The wand can suggest the optimal spell for a given situation, correct imprecise wand movements, and even prevent the casting of spells beyond the user's skill level — a safety feature marketed primarily to parents of young witches and wizards.

"We see this as the natural evolution of wand-making," said Garrick Ollivander III, the current head of the family business. "Just as we've always matched wands to wizards, we can now help wands actively assist their owners."

Critics, however, have raised concerns about over-reliance on magical AI and the implications for magical education. Professor Filius Flitwick of Hogwarts warned that "students who never struggle with spells never truly understand magic."

The Wand Regulatory Board is currently reviewing the product, with a decision on its classification expected within weeks.`,
    category: "enchantments",
    author: "Cornelius Ashworth",
    authorTitle: "Senior Magical Correspondent",
    date: "2026-03-12",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80",
    tags: ["AI", "wands", "technology", "Ollivanders", "debate"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
