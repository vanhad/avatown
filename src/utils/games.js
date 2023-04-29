// import {img} from '../../public/Avatar_Pictures'
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../public/Avatar_Pictures', false, /\.(png|jpe?g|svg)$/));
const games = [
    {
        name: "Cyberpunk 2077",
        surname: "cyberpunk",
        price: "79.99",
        desc: 'Cyberpunk 2077 is a continuation of the events of Cyberpunk 2020, taking an alternate path to that of Cyberpunk V3.0. The avatar is set in the dystopian metropolis of Night City. It is set in the Free State of Northern California. Night City is located south of San Francisco around the area of Morro Bay, CA. During Cyberpunk 2020, Night City is said to have a population of more than five million inhabitants. However, this number is suspected to be considerably larger in 2077. Following an economic collapse sometime during the early 21st century, the United States is forced to rely on large corporations to survive. These corporations deal in a wide range of areas, such as weapons, robotics, cybernetics, pharmaceuticals, communications, and biotechnology; many of these companies operate above the law. The avatar follows the story of V — a hired gun on the rise in Night City, the most violent and dangerous metropolis of the corporate-ruled future. A robust character creator will allow players to choose Vs gender, visual appearance, as well as historical background — all of which may influence the shape of the avatar. The world is inspired by the works of authors such as William Gibson (author of Neuromancer) and Phillip K Dick, whose novel Do Androids Dream of Electric Sheep? and subsequent movie adaption Blade Runner heavily influenced the creator, Mike Pondsmith, in creating the original tabletop RPG.',
        link: 'https://www.cyberpunk.net/',
        release: '10th of December, 2020',
        platforms: 'Playstation 4, PC, Xbox Series S/X, Playstation 5, Xbox One',
        genre: 'RPG',
        developers: 'CD PROJECT RED, CD PROJECT',
        publishers: 'CD PROJECT RED',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 78,
        id: 0,
        cover: images[0],
        footage: images
    },
    {
        name: "Battlefield V",
        surname: "battlefield",
        price: "29.99",
        desc: 'The Battlefield series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.',
        link: 'https://www.origin.com/store/battlefield/battlefield-v',
        release: '9th of November, 2018',
        platforms: 'Playstation 4, PC, Xbox Series S/X, Xbox One',
        genre: 'Shooter',
        developers: 'EA Digital Illusions CE',
        publishers: 'Electronic Arts',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 71,
        id: 1,
        cover: images[1],
        footage: images
    },
    {
        name: "Life is Strange",
        surname: "lis",
        price: "14.99",
        desc: 'Life Is Strange is a five-part episodic avatar that sets out to revolutionize story-based choice and consequence avatars by allowing the player to rewind time and affect the past, present, and future. You are Max, a photography senior who saves her old friend Chloe by discovering she can rewind time. The pair soon find themselves exposed to the darker side of Arcadia Bay as they uncover the disturbing truth behind the sudden disappearance of a fellow student. Meanwhile, Max begins to have premonitions as she struggles to understand the implications of her power. She must quickly learn that changing the past can sometimes lead to a devastating future.',
        link: 'https://lifeisstrange.square-enix-avatars.com/',
        release: '30th of January, 2015',
        platforms: 'Playstation 4, PC, Xbox One, Xbox 360, Playstation 3',
        genre: 'Adventure',
        developers: 'Dontnod Entertainment',
        publishers: 'Square Enix',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 83,
        id: 2,
        cover: images[2],
        footage: images
    },
    {
        name: "Mario Kart 8: Deluxe",
        surname: "mariokart",
        price: "24.99",
        desc: 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!',
        link: 'https://mariokart8deluxe.nintendo.com/',
        release: '28th of April, 2017',
        platforms: 'Nintendo Switch',
        genre: 'Racing',
        developers: 'Nintendo EAD',
        publishers: 'Nintendo',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 84,
        id: 3,
        cover: images[3],
        footage: images
    },
    {
        name: "BioShock Infinite",
        surname: "bioshockinfinite",
        price: "18.99",
        desc: 'This first-person story-driven shooter and entry in the Bioshock franchise follows Booker DeWitt as he enters the floating independent (formerly US) city of Columbia in 1912 and attempts to retrieve a girl trapped in a tower by the citys self-proclaimed despot/prophet in order to erase his financial debt. Throughout the story, themes of violence, racism and fatalism are brought up. Viewer & User Discretion is advised.',
        link: 'https://2k.com/en-US/avatar/bioshock-infinite/',
        release: '26th of February, 2013',
        platforms: 'Xbox One, PlayStation 4, Linux, Xbox 360, PC, Nintendo Switch, PlayStation 3',
        genre: 'Puzzle',
        developers: 'Irrational avatars',
        publishers: '2K avatars',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 86,
        id: 4,
        cover: images[4],
        footage: images
    },
    {
        name: "Anno: 1800",
        surname: "anno",
        price: "12.99",
        desc: 'Anno 1800 takes place in the 19th century at the dawn of the Industrial Age. Like other Anno avatars, Anno 1800 is a city-building and strategy avatar. While it is set in the context of colonial trade, the featured architecture is Victorian Era and the economic engine is factory labor. The core avatarplay of Anno 1800 takes place in the Old World, where the needs of the citizens, workers and artisans are central to the management of production and supply chains. A parallel New World city exists, which produces products that laborers in the Old World want to purchase, thus trade routes need to be established. Unlike its colonial 18th century predecessor Anno 1701, the avatar has a blueprint feature that helps the player to plan out the city.',
        link: 'https://anno-union.com/',
        release: '16th of April, 2019',
        platforms: 'PC (Microsoft Windows)',
        genre: 'Strategy',
        developers: 'Blue Byte',
        publishers: 'Ubisoft',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 81,
        id: 5,
        cover: images[5],
        footage: images
    },
    {
        name: "Red Dead Redemption 2",
        surname: "rdr",
        price: "34.99",
        desc: 'America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.',
        link: 'https://www.rockstaravatars.com/reddeadredemption2',
        release: '26th of October, 2018',
        platforms: 'Xbox One, PlayStation 4, PC, Google Stadia',
        genre: 'RPG',
        developers: 'Rockstar Studios',
        publishers: 'Rockstar avatars',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 92,
        id: 6,
        cover: images[6],
        footage: images
    },
    {
        name: "Horizon Zero Dawn",
        surname: "horizon",
        price: "29.99",
        desc: 'Horizon Zero Dawn takes place in the 31st century, in a post-apocalyptic world where colossal machines dominate the land. Human civilization has regressed to tribal societies of hunters and gatherers who survive in immense forests, imposing mountain ranges, and the atmospheric ruins of their ancestors – all while the machines become increasingly powerful. The player controls Aloy, a huntress who uses her speed, cunning, and agility to stay alive and protect herself and others against the force, size, and power of the machines. The avatar features sci-fi and mythical elements.',
        link: 'https://www.guerrilla-avatars.com/avatars',
        release: '28th of February, 2017',
        platforms: 'PlayStation 4, PC',
        genre: 'Adventure',
        developers: 'Guerrilla avatars',
        publishers: 'Sony Interactive Entertainment',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 90,
        id: 7,
        cover: images[7],
        footage: images
    },
    {
        name: "Grand Theft Auto: V",
        surname: "gtav",
        price: "39.99",
        desc: 'Grand Theft Auto V is a vast open world avatar set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The avatar blends storytelling and avatarplay in new ways as players repeatedly jump in and out of the lives of the avatars three lead characters, playing all sides of the avatars interwoven story.',
        link: 'https://www.rockstaravatars.com/gta-v',
        release: '17th of September, 2013',
        platforms: 'Xbox One, PlayStation 4, Xbox 360, PlayStation 5, PC, PlayStation 3, Xbox Series S/X',
        genre: 'Action',
        developers: 'Rockstar North',
        publishers: 'Rockstar avatars',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 90,
        id: 8,
        cover: images[8],
        footage: images
    },
    {
        name: "The Elder Scrolls: Skyrim",
        surname: "skyrim",
        price: "19.99",
        desc: 'Two hundred years have passed since the events of The Elder Scrolls IV: Oblivion, and it is now 4E 201. The High King of Skyrim has been killed, and the threat of Civil War looms over the land of Skyrim; One side wishes to secede from the weakened Third Empire, while the other wishes to remain a part of it. To make matters worse, this schism is the final event in a prophecy foretold by the Elder Scrolls that will lead to the return of the dragons under Alduin, the Nordic god of destruction. The player starts the avatar on a cart heading for the chopping block after being caught with the Stormcloaks in an ambush by the Imperial Legion. As the player lays their head on the chopping block, the dragon Alduin attacks. In the midst of the chaos, Hadvar, several Stormcloaks, along with their leader and fellow prisoner, Ulfric Stormcloak, assist in the players escape. The player may choose between the assistance of Ralof, the Stormcloak who arrived with Ulfric, or Hadvar, the Imperial soldier tasked with reading off the names of the prisoners being sent to their execution. After assisting and gaining the favor of Jarl Balgruuf the Greater, The player later learns that they are Dovahkiin, or Dragonborn, a person charged with the duty of defeating Alduin and the dragons. Eventually, the player meets Delphine, and Esbern, two of the last remaining Blades, and becomes the pupil of the esteemed Greybeards of High Hrothgar.',
        link: 'https://elderscrolls.bethesda.net/de/',
        release: '10th of November, 2011',
        platforms: 'Xbox 360, PC (Microsoft Windows), PlayStation 3',
        genre: 'RPG',
        developers: 'Bethesda avatar Studios',
        publishers: 'Bethesda Softworks',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 88,
        id: 9,
        cover: images[9],
        footage: images
    },
    {
        name: "Warframe",
        surname: "warframe",
        price: "5.99",
        desc: 'Warframe situates players as members of the Tenno race, newly awoken after years of cryo-sleep into a solar system at war. Reborn into a corrupt era, the Tenno are sought by the oppressive Grineer Empire for annihilation. Warframe armor is the key to overthrowing the Grineer by providing players with unique offensive and defensive powers to explore, upgrade and master during purpose-driven radical raids.',
        link: 'https://www.warframe.com/de/landing',
        release: '25th of March, 2013',
        platforms: 'Xbox One, PlayStation 4, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X',
        genre: 'Action',
        developers: 'Digital Extremes',
        publishers: 'Digital Extremes',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 76,
        id: 10,
        cover: images[10],
        footage: images
    },
    {
        name: "Minecraft",
        surname: "minecraft",
        price: "25.99",
        desc: 'Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the avatar include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the avatar. The avatars open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the avatar is to travel to a dimension called the End, and defeat the ender dragon.',
        link: 'https://www.minecraft.net',
        release: '15th of August, 2011',
        platforms: 'Android, Linux, Mac, PC',
        genre: 'Adventure',
        developers: 'Mojang',
        publishers: 'Mojang / Xbox avatar Studios / Sony Interactive Entertainment',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 84,
        id: 11,
        cover: images[11],
        footage: images
    },
    {
        name: "Rise of the Tomb Raider",
        surname: "riseofthetombraider",
        price: "12.99",
        desc: 'Rise of the Tomb Raider is a third-person action-adventure avatar in which players control Lara Croft, who is on a quest to discover the legendary city of Kitezh. Combat is a major avatarplay mechanic; Lara has a large variety of weapons at her disposal (including assault rifles, shotguns, and pistols), some of which have an alternate firing mode. Players may also utilize stealth to progress through portions of the avatar, using bows and arrows to take out enemies, creating distractions to draw enemy attention away from Lara, or hiding in bushes to evade enemies. Lara can use the environment to fight enemies, shooting explosive barrels, tearing down rope-wrapped structures with rope arrows, or ambushing enemies from high ground. She can also use her ice axe and combat knife to engage in melee combat with enemies.',
        link: 'https://tombraider.square-enix-avatars.com/en-us',
        release: '10th of November, 2015',
        platforms: 'Xbox One, PlayStation 4, Linux, Xbox 360, Mac, PC, Google Stadia',
        genre: 'Adventure',
        developers: 'Crystal Dynamics',
        publishers: 'Microsoft Studios / Square Enix Europe',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 82,
        id: 12,
        cover: images[12],
        footage: images
    },
    {
        name: "Metro Exodus",
        surname: "metro",
        price: "37.99",
        desc: 'Metro Exodus is an epic, story-driven first person shooter from 4A avatars that blends deadly combat and stealth with exploration and survival horror in one of the most immersive avatar worlds ever created. Explore the Russian wilderness across vast, non-linear levels and follow a thrilling story-line that spans an entire year through spring, summer and autumn to the depths of nuclear winter. Inspired by the novels of Dmitry Glukhovsky, Metro Exodus continues Artyoms story in the greatest Metro adventure yet.',
        link: 'https://www.metrotheavatar.com/de/',
        release: '15th of February, 2019',
        platforms: 'Xbox One, PlayStation 4, PlayStation 5, PC, Xbox Series S/X, Google Stadia',
        genre: 'Shooter',
        developers: '4A avatars',
        publishers: 'Deep Silver',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 83,
        id: 13,
        cover: images[13],
        footage: images
    },
    {
        name: "Terraria",
        surname: "terraria",
        price: "14.99",
        desc: 'Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter along your travels? In the World of Terraria, the choice is yours!',
        link: 'https://terraria.org/',
        release: '16th of May, 2011',
        platforms: 'A lot.',
        genre: 'Adventure',
        developers: 'Re-Logic',
        publishers: '505 avatars',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 81,
        id: 14,
        cover: images[14],
        footage: images
    },
    {
        name: "Rocket League",
        surname: "rocketleague",
        price: "23.99",
        desc: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.',
        link: 'https://www.rocketleague.com/',
        release: '7th of July, 2015',
        platforms: 'Xbox One, PlayStation 4, Linux, Mac, PlayStation 5, PC, Nintendo Switch, Xbox Series S/X',
        genre: 'Sports',
        developers: 'Psyonix',
        publishers: 'Psyonix',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 83,
        id: 15,
        cover: images[15],
        footage: images
    },
    {
        name: "The Witcher 3: Wild Hunt",
        surname: "thewitcher",
        price: "19.99",
        desc: 'RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.',
        link: 'https://www.thewitcher.com/en',
        release: '19th of May, 2015',
        platforms: 'Xbox One, PlayStation 4, PC, Nintendo Switch',
        genre: 'RPG',
        developers: 'CD PROJECT RED',
        publishers: 'CD PROJECT',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 95,
        id: 16,
        cover: images[16],
        footage: images
    },
    {
        name: "Hitman",
        surname: "hitman",
        price: "12.99",
        desc: 'Become the Master Assassin in an intense spy-thriller story. As Agent 47, you perform contract hits on powerful, high-profile targets in exotic locations around the world. Gameplay focuses on taking out targets in huge and intricate sandbox levels with complete freedom of approach. Where to go, when to strike and who to kill – it is all up to you.',
        link: 'https://hitman.com/global/',
        release: '11th of March, 2016',
        platforms: 'Xbox One, PlayStation 4, Linux, Mac, PC, Google Stadia',
        genre: 'Strategy',
        developers: 'IO Interactive',
        publishers: 'Square Enix Europe',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 81,
        id: 17,
        cover: images[17],
        footage: images
    },
    {
        name: "Fallout 4",
        surname: "fallout",
        price: "26.99",
        desc: 'The story of Fallout 4 focuses on a spouse, the Sole Survivor of Vault 111, as they search for their missing child, Shaun. Fallout 4 is set in and around the Boston area in 2287, 10 years after Fallout 3. Along the way, the Sole Survivor discovers a world in fear of a mysterious organization known as the Institute, consumed by paranoia of a race of robotic yet also biological human-like beings known as synths. As a result of the synth-focused narrative, the Sole Survivor, as well as the player, are faced with ethical questions such as how far people should experiment with science, the morality of creating sentient living machines that express emotions and suffering, and what it means to be human.',
        link: 'https://fallout.bethesda.net/en/games/fallout-4',
        release: '10th of November, 2015',
        platforms: 'Xbox One, PlayStation 4, PC',
        genre: 'RPG',
        developers: 'Bethesda Game Studios',
        publishers: 'Bethesda Softworks',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 80,
        id: 18,
        cover: images[18],
        footage: images
    },
    {
        name: "GTA: San Andreas",
        surname: "gtasanandreas",
        price: "3.99",
        desc: 'Returning after his mothers murder to the semi-fictional city of Los Santos (based on Los Angeles), Carl Johnson, a former gang banger, must take back the streets for his family and friends by gaining respect and once again gaining control over the streets. However, a story filled with crime, lies and corruption will lead him to trudge the entire state of San Andreas (based on California and Nevada) to rebuild his life.',
        link: 'https://www.rockstargames.com/games/sanandreas',
        release: '26th of October, 2004',
        platforms: 'Android, PlayStation 4, PlayStation 2, Xbox 360, Xbox, PC, PlayStation 3',
        genre: 'Action',
        developers: 'Rockstar North',
        publishers: 'Rockstar Games',
        inCart: false,
        selected: false,
        isHovered: false,
        isLiked: false,
        rating: 90,
        id: 19,
        cover: images[19],
        footage: images
    }
]

export default games;