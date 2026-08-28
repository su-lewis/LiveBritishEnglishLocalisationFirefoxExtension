console.log("🇬🇧 NoAmericanisms V18.FINAL loaded! Rich Text Editor Support Active.");

// 1. THE STRICT DICTIONARY (Single words & Phrases)
// These are safe to translate on any website without breaking context.
// 1. THE STRICT DICTIONARY (Single words & Phrases)
// These are safe to translate on any website without breaking context.
const standardDict = {
    // Standard Spelling & Grammar Variations
    "color": "colour", "colors": "colours",
    "flavor": "flavour", "flavors": "flavours",
    "humor": "humour", "humors": "humours",
    "labor": "labour", "labors": "labours",
    "neighbor": "neighbour", "neighbors": "neighbours",
    "behavior": "behaviour", "behaviors": "behaviours",
    "favorite": "favourite", "favorites": "favourites",
    "rumor": "rumour", "rumors": "rumours",
    "armor": "armour",
    "apologize": "apologise", "apologized": "apologised",
    "organize": "organise", "organized": "organised",
    "recognize": "recognise", "recognised": "recognised",
    "recognizable": "recognisable", "unrecognizable": "unrecognisable",
    "realize": "realise", "realized": "realised",
    "defense": "defence", "defenses": "defences",
    "offense": "offence", "offenses": "offences",
    "meter": "metre", "meters": "metres",
    "center": "centre", "centers": "centres",
    "aluminum": "aluminium",
    "math": "maths",
    "gray": "grey",
    "jewelry": "jewellery",
    "pajamas": "pyjamas",
    "theater": "theatre",
    "liter": "litre",
    "traveled": "travelled",
    "traveling": "travelling",
    "canceled": "cancelled",
    "canceling": "cancelling",
    "enroll": "enrol",
    "fulfillment": "fulfilment",
    "skillful": "skilful",
    "installment": "instalment",
    "analog": "analogue",
    "catalog": "catalogue",
    "dialog": "dialogue",
    "alphabetize": "alphabetise",
    "alphabetized": "alphabetised",
    "normalcy": "normality",
    "burglarize": "burgle",
    "burglarized": "burgled",
    "mustache": "moustache",
    "mold": "mould", "molds": "moulds", "moldy": "mouldy",
    "smolder": "smoulder", "smoldering": "smouldering",
    "cozy": "cosy",
    "kiddo": "lad",
    "homeboy": "lad",
    "homeboys": "lads",
    "frat boy": "university lad",
    "frat boys": "university lads",
    "boyo": "lad",

    // Titles & Politeness
    "ma'am": "madam",
    "m'am": "madam",
    "maam": "madam",

    // Medical & Emergency
    "emergency room": "A&E",
    "er": "A&E",
    "tylenol": "paracetamol",
    "advil": "ibuprofen",
    "operating room": "operating theatre",
    "getting a shot": "getting a jab",
    "got a shot": "got a jab",

    // Transport & Vehicles
    "airplane": "aeroplane",
    "automobile": "car",
    "truck": "lorry", "trucks": "lorries",
    "semi-truck": "articulated lorry",
    "tow truck": "recovery vehicle",
    "fire truck": "fire engine",
    "divided highway": "dual carriageway",
    "driver's license": "driving licence",
    "driver license": "driving licence",
    "license plate": "number plate",
    "emergency brake": "handbrake",
    "expressway": "motorway",
    "freeway": "motorway",
    "learner's permit": "provisional licence",
    "mass transit": "public transport",
    "parking garage": "multi-storey car park",
    "station wagon": "estate car",
    "stickshift": "manual",
    "stop light": "traffic light",
    "streetcar": "tram",
    "turn signal": "indicator",
    "gas station": "petrol station",
    "parking lot": "car park",
    "windshield": "windscreen",
    "crosswalk": "pedestrian crossing",
    "overpass": "flyover",
    "car tire": "car tyre", "flat tire": "flat tire",
    "car hood": "car bonnet",
    "car trunk": "car boot",
    "gas pedal": "accelerator",
    "gasoline": "petrol",
    "out of gas": "out of petrol",
    "traffic jam": "tailback",
    "taking the subway": "taking the underground",
    "take the subway": "take the underground",
    "train station": "railway station",
    "transportation": "transport",
    "traffic circle": "roundabout",
    "turnpike": "toll road",
    "railroad": "railway",

    // Food, Groceries & Cooking
    "blood sausage": "black pudding",
    "candy apple": "toffee apple", "candied apple": "toffee apple",
    "cotton candy": "candy floss",
    "dishwashing liquid": "washing-up liquid",
    "french press": "cafetière",
    "ground beef": "minced beef",
    "hard candy": "boiled sweets",
    "heavy cream": "double cream",
    "lunch meat": "luncheon meat",
    "powdered sugar": "icing sugar",
    "rutabaga": "swede",
    "scallion": "spring onion",
    "shredded cheese": "grated cheese",
    "skim milk": "skimmed milk",
    "whole milk": "full-fat milk",
    "french fries": "chips", "fries": "chips",
    "potato chips": "crisps",
    "cookie": "biscuit", "cookies": "biscuits",
    "eggplant": "aubergine",
    "zucchini": "courgette",
    "arugula": "rocket",
    "cilantro": "coriander",
    "popsicle": "ice lolly",
    "appetizer": "starter",
    "entree": "main course", "entrees": "main courses",
    "take-out": "takeaway", "takeout": "takeaway",
    "eaterie": "restaurant", "eatery": "restaurant",
    "hoagie": "butty",
    "disco fries": "cheesy chips and gravy",
    "graham cracker": "digestive biscuit",
    "lima bean": "butter bean",
    "fava bean": "broad bean",
    "garbanzo bean": "chickpea", "garbanzo beans": "chickpeas",
    "bell pepper": "pepper", "bell peppers": "peppers",
    "silverware": "cutlery",
    "skillet": "frying pan",
    "stove": "cooker",
    "broil": "grill", "broiled": "grilled",
    "canola oil": "rapeseed oil",
    "cornmeal": "maize flour",
    "jello": "jelly",
    "draft beer": "draught beer",

    // Home, Clothing, Shopping & Services
    "baby carriage": "pram",
    "baseboard": "skirting board",
    "bobby pin": "hair grip",
    "checking account": "current account",
    "paycheck": "payslip",
    "coveralls": "boiler suit",
    "overalls": "dungarees",
    "diaper": "nappy",
    "dishrag": "dishcloth",
    "dish towel": "tea towel",
    "downspout": "drainpipe",
    "drywall": "plasterboard",
    "front desk": "reception",
    "laundromat": "launderette",
    "nightstand": "bedside table",
    "off-the-rack": "off-the-peg",
    "plastic wrap": "cling film", "saran wrap": "cling film",
    "restroom": "toilet", "bathroom": "toilet", "washroom": "toilet",
    "rowhouse": "terraced house",
    "scotch tape": "sellotape",
    "stroller": "pushchair",
    "sweatpants": "tracksuit bottoms",
    "thumbtack": "drawing pin",
    "undershirt": "vest",
    "suit vest": "waistcoat",
    "bathrobe": "dressing gown",
    "wastebasket": "wastepaper basket",
    "backyard": "back garden", "front yard": "front garden",
    "faucet": "tap",
    "flashlight": "torch",
    "garbage can": "dustbin", "trash can": "rubbish bin",
    "dumpster": "skip",
    "mailbox": "postbox",
    "mail": "post", "mailed": "posted", "mailing": "posting",
    "drugstore": "chemist",
    "liquor store": "off-licence",
    "thrift store": "charity shop",
    "hardware store": "DIY store",
    "grocery store": "supermarket",
    "washcloth": "flannel",
    "band-aid": "plaster", "band-aids": "plasters",
    "q-tip": "cotton bud", "cotton swab": "cotton bud",
    "pantyhose": "tights",
    "pants": "trousers",
    "pant suit": "trouser suit", "pantsuit": "trouser suit",
    "suspenders": "braces",
    "panties": "knickers",
    "sneakers": "trainers",
    "fanny pack": "bum bag",
    "shopping cart": "shopping trolley",
    "pacifier": "dummy",
    "galoshes": "wellington boots",
    "turtleneck": "polo neck",
    "sweater": "jumper",
    "shopping mall": "shopping centre",
    "strip mall": "retail park",
    "apartment building": "block of flats",
    "condo": "flat", "condominium": "flat",
    "duplex": "semi-detached house",
    "closet": "wardrobe",
    "drapes": "curtains",
    "crib": "cot",
    "eraser": "rubber",
    "zipper": "zip",

    // Life, City & Society
    "acclimate": "acclimatise",
    "bachelor party": "stag do", "bachelorette party": "hen do",
    "blacktop": "tarmac",
    "boardwalk": "promenade",
    "checkers": "draughts",
    "tic-tac-toe": "noughts and crosses",
    "jump rope": "skipping rope",
    "counterclockwise": "anti-clockwise", "counter-clockwise": "anti-clockwise",
    "cremains": "ashes",
    "downtown": "city centre",
    "green thumb": "green fingers",
    "horseback riding": "horse riding",
    "jackhammer": "pneumatic drill",
    "ladybug": "ladybird",
    "mail carrier": "postman", "mailman": "postman",
    "mortician": "undertaker",
    "paper route": "paper round",
    "penitentiary": "prison",
    "realtor": "estate agent",
    "sidewalk": "pavement",
    "soccer": "football",
    "vacationer": "holidaymaker",
    "cell phone": "mobile phone", "cellphone": "mobile phone",
    "zip code": "postcode",
    "apartment": "flat",
    "vacation": "holiday", "vacationing": "holidaying",
    "trash": "rubbish", "garbage": "rubbish",
    "elevator": "lift",
    "bodega": "corner shop",
    "movie theater": "cinema", "movie theatre": "cinema",
    "movie": "film", "movies": "films",
    "wait in line": "queue", "stand in line": "queue",
    "fire department": "fire brigade",

    // Education & Schooling
    "elementary school": "primary school",
    "middle school": "secondary school",
    "junior high": "secondary school",
    "high school": "secondary school",
    "public school": "comprehensive school", "public schools": "comprehensive schools",
    "private school": "independent school",
    "community college": "sixth form college",
    "go to college": "go to university",
    "going to college": "going to university",
    "in college": "at university",
    "college student": "university student",
    "college degree": "university degree",
    "graduated from college": "graduated from university",
    "graduate from college": "graduate from university",
    "college campus": "university campus",
    "valedictorian": "top student",
    "kindergarten": "reception",
    "pre-k": "nursery",
    "12th grade": "upper sixth", "twelfth grade": "upper sixth",
    "11th grade": "lower sixth", "eleventh grade": "lower sixth",
    "10th grade": "year 11", "tenth grade": "year 11",
    "9th grade": "year 10", "ninth grade": "year 10",
    "8th grade": "year 9", "eighth grade": "year 9",
    "7th grade": "year 8", "seventh grade": "year 8",
    "6th grade": "year 7", "sixth grade": "year 7",
    "5th grade": "year 6", "fifth grade": "year 6",
    "4th grade": "year 5", "fourth grade": "year 5",
    "3rd grade": "year 4", "third grade": "year 4",
    "2nd grade": "year 3", "second grade": "year 3",
    "1st grade": "year 2", "first grade": "year 2",
    "math class": "maths lesson",
    'math': "maths",
    "recess": "break time",
    "principal": "headteacher",
    "vice principal": "deputy head",
    "homeroom": "form room",
    "sophomore": "second year",
    "freshman": "fresher",

    // Phrases, Idioms & Contextual Translations
    "you guys": "you lot",
    "enough already": "that is quite enough",
    "can i get a": "may i have a",
    "least worst": "least bad",
    "two-time": "double",
    "three-time": "triple",
    "24/7": "all day, every day",
    "deplane": "disembark",
    "wait on": "wait for",
    "touch base": "contact",
    "gotten": "got",
    "i'm good": "i am well",
    "bangs": "fringe",
    "ridiculosity": "ridiculousness",
    "a half hour": "half an hour",
    "heads up": "warning",
    "my bad": "my fault",
    "oftentimes": "often",
    "bi-weekly": "fortnightly", "biweekly": "fortnightly",
    "price hike": "price rise",
    "going forward": "in the future",
    "deliverable": "report", "deliverables": "reports",
    "million and a half": "one and a half million",
    "reach out to": "contact",
    "do the math": "do the maths",
    "expiration date": "expiry date",
    "scotch-irish": "scots-irish",
    "that'll learn you": "that'll teach you",
    "where's it at": "where is it",
    "where are you at": "where are you",
    "where you at": "where are you",
    "winningest": "most successful",
    "tv season": "tv series", "tv seasons": "tv series",
    "for free": "free",
    "could care less": "couldn't care less",
    "on accident": "by accident",
    "sweep under the rug": "sweep under the carpet",
    "drop in the bucket": "drop in the ocean",
    "throw a wrench": "throw a spanner",
    "knock on wood": "touch wood",
    "write me": "write to me",
    "teeter-totter": "see-saw",
    "y'all": "yous", "yall": "yous",
    "ya": "yes",
    "take a rain check": "postpone", "take a raincheck": "postpone",
    "cattywampus": "skew-whiff",
    "catty-corner": "skew-whiff", "kitty-corner": "skew-whiff",
    "catercorner": "diagonally opposite",
    "pitch a hissy fit": "throw a wobbly",
    "hissy fit": "wobbly",
    "ballpark figure": "rough estimate",
    "knock it out of the park": "smash it",
    "out of left field": "out of nowhere",
    "monday morning quarterback": "armchair critic",
    "my two cents": "my two pence",
    "john doe": "joe bloggs", "jane doe": "jane bloggs",
    "in the mail": "in the post",
    "give it a shot": "give it a go", "gave it a shot": "gave it a go",
    "was shot in": "was filmed in",
    "shot a movie": "filmed a film", "shoot a movie": "make a film",
    "a dime a dozen": "ten a penny",
    "shoot the breeze": "have a chinwag",
    "make a long story short": "to cut a long story short",
    "plead the fifth": "say no comment",
    "after credits": "end credits", "after-credits": "post-credits",
    "it is what it is": "that's just how it is",
    "to medal": "to win a medal",
    "medaled": "won a medal", "medalled": "won a medal",
    "video games": "computer games",
    "blow off steam": "let off steam",
    "goofy": "daft",
    "goofing around": "mucking about",
    "goofed up": "messed up",
    "goof off": "mess about",
    "smartass": "clever clogs",
    "addicting": "addictive",
    "snuck": "sneaked",
    "dove": "dived",
    "a ways": "a way",
    "frosting": "icing",
    "countertop": "worktop",
    "anyways": "anyway",
    "toward": "towards",
    "backward": "backwards",
    "forward": "forwards",
    "afterward": "afterwards",
    "exclamation point": "exclamation mark",
    "pay the check": "pay the bill",
    "ask for the check": "ask for the bill",
    "rooting for": "supporting",
    "root for": "support",
    "step up to the plate": "step up",
    "throw a curveball": "throw a spanner in the works",
    "out of bounds": "out of play",
    "rowboat": "roming boat",
    "sailboard": "windsurf",
    "lineup": "line-up",
    "teacup": "tea cup"
};

// 2. THE SLANG DICTIONARY
// Only active if the "Include Slang" switch is turned ON in the popup menu.
const slangDict = {
    // Modern & Internet Slang (Now thoroughly purged of post-1980s slang)
    "hi": "hiya", "yep": "yeah", "yup": "yeah",
    "nah": "no",
    "guy": "bloke", "guys": "chaps",
    "bro": "old chap", "bros": "chaps",
    "chill": "relax",
    "wacky": "bonkers",
    "dope": "smashing",
    "sup": "how do you do",
    "what's up": "what is the matter",
    "finna": "about to",
    "big yikes": "highly embarrassing",
    "glow up": "makeover",
    "tfw": "that feeling when",
    "iykyk": "if you know you know",
    "situationship": "fling",
    "no cap": "no lie",
    "cap": "porkies",
    "boujee": "posh",
    "cheugy": "naff",
    "snack": "handsome",
    "drip": "clobber",
    "bop": "splendid song",
    "sheesh": "blimey",
    "periodt": "and that is that",
    "catch these hands": "have a scrap",
    "drag": "slate",
    "finesse": "blag",
    "slaps": "is superb",
    "bussin'": "scrumptious", "bussin": "scrumptious",
    "sus": "dodgy",
    "guap": "dosh",
    "smol": "titchy",
    "clapback": "comeback",
    "touch grass": "get outside",
    "rizz": "charm",
    "cooked": "stuffed",
    "ate and left no crumbs": "did splendidly",
    "mid": "run-of-the-mill",
    "delulu": "barmy",
    "facts": "spot on",
    "on god": "upon my word",
    "say less": "say no more",
    "deadass": "dead serious",
    "bet": "agreed",
    "clout": "street cred",
    "living rent free": "living in your head", "living rent-free": "living in your head",
    "homie": "chum", "homies": "chums",
    "simp": "soppy fool",
    "flexing": "showing off", "flex": "show off",
    "ghosting me": "ignoring me", "ghosted me": "ignored me",
    "ghosting him": "ignoring him", "ghosted him": "ignored him",
    "ghosting her": "ignoring her", "ghosted her": "ignored her",

    // Traditional Slang & Informal
    "buddy": "friend",
    "buddies": "friends",
    "pal": "chum",
    "pals": "chums",
    "freaking": "bloody",
    "that sucks": "that's rubbish",
    "it sucks": "it's rubbish",
    "sucks": "is rubbish",
    "wimp": "wuss",
    "wimps": "wusses",
    "phony": "fraud",
    "bullcrap": "load of rubbish",
    "bs": "rubbish",
    "beat up": "battered",
    "hella": "really",
    "kinda": "kind of",
    "sorta": "sort of",
    "gotcha": "understood",
    "dunno": "don't know",
    "gonna": "going to",
    "wanna": "want to",
    "dude": "bloke", "dudes": "chaps",
    "bucks": "quid", "buck": "quid",
    "awesome": "brilliant",
    "jerk": "prat", "jerks": "prats",
    "cops": "police", "cop": "copper",
    "popo": "the Old Bill",
    "trashy": "tacky",
    "cram": "revise",
    "cut class": "skive", "skip class": "bunk off",
    "flunk": "fail",
    "gripe": "whinge",
    "hit the sack": "go to kip",
    "pig out": "stuff your face",
    "wasted": "plastered",
    "drive me up the wall": "drive me potty",
    "under the weather": "poorly",
    "boondocks": "the sticks",
    "booger": "bogey",
    "conniption": "tantrum",
    "cooties": "lurgy",
    "dweeb": "swot",
    "grifter": "con artist",
    "hickey": "love bite",
    "narc": "grass",
    "scalper": "ticket tout",
    "zilch": "nowt",
    "mom": "mum", "mommy": "mummy",
    "bummer": "shame",
    "psyched": "thrilled",
    "hang in there": "keep your chin up",
    "cut it out": "pack it in",
    "spill the tea": "spill the gossip",
    "for real": "genuinely",
    "chill out": "calm down",
    "hang out": "meet up",
    "dork": "plonker",
    "dorks": "plonkers",
    "goof": "wally",
    "goofs": "wallies",
    "dumbass": "muppet",
    "dumbasses": "muppets",
    "jackass": "prat",
    "jackasses": "prats",
    "douchebag": "pillock",
    "douchebags": "pillocks",
    "douche": "twit",
    "freaking out": "in a flap",
    "screwed up": "messed up",
    "screw up": "mess up",
    "freak out": "panic",

    // Regional American & Extra Berlitz Additions
    "rad": "brilliant",
    "stoked": "thrilled",
    "dead-ass": "dead serious",
    "swole": "brawny",
    "wylin'": "acting daft", "wildin'": "acting daft",
    "throwing shade": "slagging off",
    "fixin' to": "about to", "fixing to": "about to",
    "greenbacks": "banknotes",
    "dead presidents": "banknotes",
    "fuzz": "the rozzers",
    "airhead": "daft apeth",
    "grub": "nosh",
    "booze": "bevvy",
    "i'm beat": "i'm knackered", "im beat": "i'm knackered",
    "hit the books": "get revising",
    "the bomb": "the bee's knees",
    "suck up": "brown-noser", "kiss ass": "brown-noser",
    "straight fire": "first-rate",
    "big mad": "fuming",
    "real talk": "in all honesty",
    "ratchet": "tacky",
    "schmear": "dollop",
    "schvitz": "sweat",
    "stoop": "front steps",
    "buggin'": "going barmy",
    "dag gum it": "blimey",
    "worsh": "wash",
    "jit": "kid",
    "pub sub": "supermarket sandwich",
    "frunchroom": "front room",
    "sammich": "sarnie",
    "wawa": "corner shop",
    "have a blast": "have a smashing time",
    "ride shotgun": "sit in the front",
    "tune out": "switch off",
    "off the hook": "let off",
    "no biggie": "no worries", "no sweat": "no worries",
    "in the bag": "assured"
};

// --- DYNAMIC REGEX & SETTINGS ENGINE ---
let activeDictionary = {};
let regexMatcher = null;
let currentSettings = { reading: false, typing: true, slang: false };

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Safely escapes symbols
}

function buildDictionary() {
    activeDictionary = { ...standardDict };
    if (currentSettings.slang) Object.assign(activeDictionary, slangDict);

    const sortedKeys = Object.keys(activeDictionary).sort((a, b) => b.length - a.length);
    const escapedKeys = sortedKeys.map(escapeRegExp);
    regexMatcher = new RegExp(`\\b(${escapedKeys.join('|')})\\b`, 'gi');
}

// Load settings from Firefox memory
chrome.storage.local.get({ reading: false, typing: true, slang: false }, (settings) => {
    currentSettings = settings;
    buildDictionary();
    if (currentSettings.reading) scanAndReplaceWebsiteText();
});

// INSTANT TOGGLE: Revert translated text back to American instantly
function revertWebsiteText(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        if (node._originalText !== undefined) {
            node.nodeValue = node._originalText;
            delete node._originalText;
            delete node._translatedText;
        }
    }
}

// Listen for popup switch changes
chrome.storage.onChanged.addListener((changes) => {
    if (changes.reading) {
        currentSettings.reading = changes.reading.newValue;
        if (currentSettings.reading) scanAndReplaceWebsiteText();
        else revertWebsiteText();
    }
    if (changes.typing) currentSettings.typing = changes.typing.newValue;
    if (changes.slang) {
        currentSettings.slang = changes.slang.newValue;
        buildDictionary();
        if (currentSettings.reading) {
            revertWebsiteText();
            scanAndReplaceWebsiteText();
        }
    }
    if (!currentSettings.typing && overlay) overlay.style.display = 'none';
});

// --- HELPER: Ignore code, inputs, rich-text editors & extension UI ---
function isIgnoredNode(node) {
    const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!el) return true;
    if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(el.tagName)) return true;
    if (el.isContentEditable || el.closest('[contenteditable="true"]')) return true;
    if (el.closest('.brit-overlay, .brit-fix-menu')) return true;
    return false;
}

// --- READING FEATURE: AUTO-FIX WEBSITES ---
function replaceTextInNode(node) {
    if (isIgnoredNode(node)) return;
    if (node._translatedText === node.nodeValue) return;

    const original = node.nodeValue;
    regexMatcher.lastIndex = 0;

    const newText = original.replace(regexMatcher, (match) => {
        const lowerMatch = match.toLowerCase();
        const replacement = activeDictionary[lowerMatch];
        if (match[0] === match[0].toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        return replacement;
    });

    if (newText !== original) {
        node._originalText = original;
        node._translatedText = newText;
        node.nodeValue = newText;
    }
}

function scanAndReplaceWebsiteText(root = document.body) {
    if (!currentSettings.reading || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const nodesToReplace = [];
    while (node = walker.nextNode()) {
        if (!isIgnoredNode(node)) {
            nodesToReplace.push(node);
        }
    }
    nodesToReplace.forEach(replaceTextInNode);
}

const observer = new MutationObserver((mutations) => {
    if (!currentSettings.reading) return;

    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (isIgnoredNode(node)) return;

                if (node.nodeType === Node.ELEMENT_NODE) {
                    scanAndReplaceWebsiteText(node);
                } else if (node.nodeType === Node.TEXT_NODE) {
                    replaceTextInNode(node);
                }
            });
        }
        else if (mutation.type === 'characterData') {
            if (!isIgnoredNode(mutation.target)) {
                replaceTextInNode(mutation.target);
            }
        }
    });
});
observer.observe(document, { childList: true, subtree: true, characterData: true });

// --- TYPING FEATURE: BLUE UNDERLINES & CLICK-TO-FIX ---
// Now fully supports Rich Text Editors (contenteditable) like Gmail, Reddit, and WhatsApp!
const overlay = document.createElement('div');
overlay.className = 'brit-overlay';
overlay.style.display = 'none';
document.documentElement.appendChild(overlay);

const menu = document.createElement('div');
menu.className = 'brit-fix-menu';
document.documentElement.appendChild(menu);

let activeTarget = null;
let currentFix = null;

function syncOverlay() {
    if (!currentSettings.typing || !activeTarget) return;

    const rect = activeTarget.getBoundingClientRect();
    const style = window.getComputedStyle(activeTarget);

    overlay.style.display = 'block';
    overlay.style.top = (rect.top + window.scrollY) + 'px';
    overlay.style.left = (rect.left + window.scrollX) + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';

    const props = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'wordSpacing', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'boxSizing', 'textAlign'];
    for (let prop of props) overlay.style[prop] = style[prop];

    let text = "";
    if (activeTarget.tagName === 'TEXTAREA' || activeTarget.tagName === 'INPUT') {
        text = activeTarget.value || "";
    } else if (activeTarget.isContentEditable) {
        text = activeTarget.innerText || "";
    }

    // Mozilla Security Fix: Clear the overlay safely
    overlay.textContent = '';

    // Safety check: ensure text ends with a space so newlines format correctly
    if (text.endsWith('\n')) text += ' ';

    regexMatcher.lastIndex = 0;

    // Mozilla Security Fix: Safely append text and error spans without using innerHTML
    let lastIndex = 0;
    let match;

    while ((match = regexMatcher.exec(text)) !== null) {
        // Add the safe text before the match
        if (match.index > lastIndex) {
            overlay.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
        }

        // Create the blue squiggly error element safely
        const errorSpan = document.createElement('span');
        errorSpan.className = 'brit-error';
        errorSpan.textContent = match[0];
        overlay.appendChild(errorSpan);

        lastIndex = regexMatcher.lastIndex;
    }

    // Add any remaining text
    if (lastIndex < text.length) {
        overlay.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    overlay.scrollTop = activeTarget.scrollTop;
    overlay.scrollLeft = activeTarget.scrollLeft;
}

document.addEventListener('input', (e) => { if (e.target === activeTarget) syncOverlay(); });
document.addEventListener('scroll', (e) => { if (e.target === activeTarget) syncOverlay(); }, true);

document.addEventListener('focusin', (e) => {
    if (currentSettings.typing && (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.isContentEditable)) {
        activeTarget = e.target;
        syncOverlay();
    }
});

document.addEventListener('focusout', (e) => {
    if (e.target === activeTarget) {
        overlay.style.display = 'none';
        activeTarget = null;
    }
});

function getCaretPosition(element) {
    if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
        return element.selectionStart;
    } else if (element.isContentEditable) {
        let caretOffset = 0;
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
        return caretOffset;
    }
    return undefined;
}

function getPhraseAtCursor(text, pos) {
    regexMatcher.lastIndex = 0;
    let match;
    while ((match = regexMatcher.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        if (pos >= start && pos <= end) {
            return { word: match[0].toLowerCase(), start, end };
        }
    }
    return null;
}

document.addEventListener('mouseup', (e) => {
    if (!currentSettings.typing || menu.contains(e.target)) return;
    menu.style.display = 'none';
    const target = e.target;

    if (target.tagName !== 'TEXTAREA' && target.tagName !== 'INPUT' && !target.isContentEditable) return;

    const pos = getCaretPosition(target);
    if (pos === undefined) return;

    const text = (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') ? target.value : target.textContent;
    const phraseData = getPhraseAtCursor(text, pos);
    if (!phraseData) return;

    const { word, start, end } = phraseData;

    if (activeDictionary[word]) {
        // Mozilla Security Fix: Clear menu and rebuild using safe DOM methods
        menu.textContent = '';
        menu.appendChild(document.createTextNode('🇬🇧 Replace with: '));

        const strongTag = document.createElement('strong');
        strongTag.textContent = activeDictionary[word];
        menu.appendChild(strongTag);

        menu.style.display = 'flex';
        menu.style.top = (e.clientY + 15) + 'px';
        menu.style.left = e.clientX + 'px';
        currentFix = { target, british: activeDictionary[word], start, end };
    }
});

menu.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentFix) return;
    const { target, british, start, end } = currentFix;

    target.focus();

    if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') {
        target.setRangeText(british, start, end, 'end');
    } else if (target.isContentEditable) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        const range = document.createRange();

        let charCount = 0;
        let startNode, startOffset, endNode, endOffset;

        function traverseNodes(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let nextCharCount = charCount + node.length;
                if (!startNode && start >= charCount && start <= nextCharCount) {
                    startNode = node;
                    startOffset = start - charCount;
                }
                if (!endNode && end >= charCount && end <= nextCharCount) {
                    endNode = node;
                    endOffset = end - charCount;
                }
                charCount = nextCharCount;
            } else {
                for (let i = 0; i < node.childNodes.length; i++) {
                    traverseNodes(node.childNodes[i]);
                    if (endNode) break;
                }
            }
        }
        traverseNodes(target);

        if (startNode && endNode) {
            range.setStart(startNode, startOffset);
            range.setEnd(endNode, endOffset);
            selection.addRange(range);
            document.execCommand('insertText', false, british);
        }
    }

    menu.style.display = 'none';
    currentFix = null;
    syncOverlay();
});
