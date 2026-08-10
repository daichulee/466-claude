/* ============================================================
   V466 RUNESTONE — CONTENT DATA
   Edit this file to add/update marches and modules.
   No build step needed — plain data, consumed by js/app.js

   Hero composition rule: exactly 2 heroes per march (main +
   secondary commander). Each hero has exactly 2 skills that
   belong to that hero only — do not mix skills between heroes.
   ============================================================ */

const TRIBE_STATUS = {
  kingdom: "#466",
  power: "Top 20 Kingdom",
  activity: "Active",
};

const LOCKED_MODULES = [
  { id: "hero-database", icon: "shield", seal: "seal-hero", titleKey: "module.heroDatabase" },
  { id: "kvk-strategies", icon: "swords", seal: "seal-kvk", titleKey: "module.kvkStrategies" },
  { id: "event-guides", icon: "calendar", seal: "seal-events", titleKey: "module.eventGuides" },
  { id: "academy", icon: "book", seal: "seal-academy", titleKey: "module.academy" },
  { id: "hall-of-glory", icon: "trophy", seal: "seal-glory", titleKey: "module.hallOfGlory" },
  { id: "tribe-chronicles", icon: "scroll", seal: "seal-chronicles", titleKey: "module.tribeChronicles" },
];

const MARCH_CATEGORIES = ["all", "field", "rally", "debuff", "gathering", "flank", "pve"];

const MARCHES = [
  {
    id: "debuff-march-1",
    title: "Debuff March Option 1",
    category: "debuff",
    difficulty: 2,
    status: "proven",
    recommendedTier: "T10 — T11",
    recommendedHeroes: ["Reina", "Lagertha"],
    summary: "Applies stacking attack-down and defense-down debuffs before the main rally lands, softening high-value garrisons.",
    detail: {
      useCase: "Debuff · Field · Rally support",
      quickSteps: [
        "Scout the target garrison and confirm its buffs.",
        "Send this march 3–5s ahead of the rally.",
        "Let debuffs land, then hold formation.",
        "Retreat immediately once the rally lands.",
      ],
      objective: "Weaken an enemy garrison's combat stats before your rally or field army arrives, so the killing blow lands with minimal losses.",
      whenToUse: "Send this ahead of a scheduled rally, ideally 3-5 seconds before the rally march lands, against garrisons with high defensive buffs.",
      counters: "Vulnerable to enemy anti-debuff cleanse skills and to marches with high individual troop toughness that shrug off shred effects.",
      commonMistakes: [
        "Sending it too early, letting the debuff expire before the rally lands",
        "Using it against targets without checking for cleanse-capable defenders",
        "Pairing with the wrong troop type for the kingdom's current meta",
      ],
      pros: ["Reduces rally losses significantly", "Cheap in resources relative to impact", "Flexible timing window"],
      cons: ["Weak alone in direct combat", "Debuff duration is short", "Needs precise timing coordination"],
      heroes: [
        {
          name: "Reina",
          rarity: "Legendary",
          roleTag: "Support",
          commander: "main",
          note: "Carries the core debuff package.",
          skills: [
            { name: "Weakening Cry", note: "-18% enemy ATK for 8s" },
            { name: "Iron Resolve", note: "+12% troop defense" },
          ],
        },
        {
          name: "Lagertha",
          rarity: "Legendary",
          roleTag: "Infantry",
          commander: "secondary",
          note: "Adds survivability and control uptime.",
          skills: [
            { name: "Shattered Guard", note: "-10% enemy DEF" },
            { name: "Swift March", note: "+15% march speed" },
          ],
        },
      ],
      troopComposition: "70% Infantry / 20% Archers / 10% Cavalry — prioritize survivability over damage.",
      mount: { name: "Frost Wolf", level: 40, type: "Speed", marker: "Awakened" },
      mountSkills: [
        { name: "Howling Charge", note: "+8% march speed on activation" },
        { name: "Frost Bite", note: "Chance to slow enemy reinforcements" },
      ],
      equipment: ["Bronze Warhelm", "Chained Gauntlets", "Sealed Greaves", "Shard of the North"],
      related: ["Debuff March Option 2", "Debuff March Option 3"],
    },
  },
  {
    id: "debuff-march-2",
    title: "Debuff March Option 2",
    category: "debuff",
    difficulty: 3,
    status: "proven",
    recommendedTier: "T11",
    recommendedHeroes: ["Molner", "Jasser"],
    summary: "Heavier debuff load focused on defense shred, built for cracking fortified garrisons ahead of a coordinated multi-rally push.",
    detail: {
      useCase: "Debuff · KVK · Multi-rally chain",
      quickSteps: [
        "Scout to confirm stacked defense buffs on target.",
        "Sync hero skill cooldowns before sending.",
        "Send ahead of the first rally in the chain.",
        "Hand off to the next rally without overlapping debuffs.",
      ],
      objective: "Strip defensive stats from a heavily-garrisoned target so a following chain of rallies breaks through without stalling.",
      whenToUse: "Use ahead of KVK multi-rally chains on high-value structures, particularly when scouting shows stacked defense buffs.",
      counters: "Countered by dedicated anti-shred defensive setups and by targets that swap garrison heroes mid-siege.",
      commonMistakes: [
        "Not confirming garrison composition via scout before sending",
        "Sending without hero skill cooldowns ready",
        "Overlapping with a teammate's identical debuff, wasting the stack cap",
      ],
      pros: ["Strong defense shred", "Synergizes well with chained rallies", "Good scaling into late KVK"],
      cons: ["Resource-heavy to build", "Requires precise hero skill timing", "Less effective solo"],
      heroes: [
        {
          name: "Molner",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: "Carries the defense-shred core.",
          skills: [
            { name: "Armor Rend", note: "-22% enemy DEF for 6s" },
            { name: "Steady Line", note: "+10% troop HP" },
          ],
        },
        {
          name: "Jasser",
          rarity: "Epic",
          roleTag: "Utility",
          commander: "secondary",
          note: "Adds troop load and follow-up pressure.",
          skills: [
            { name: "Forced March", note: "+12% march speed" },
            { name: "Focused Strike", note: "+8% ATK vs debuffed targets" },
          ],
        },
      ],
      troopComposition: "60% Infantry / 30% Archers / 10% Cavalry — balanced for sustained pressure.",
      mount: { name: "Iron Boar", level: 42, type: "Tank", marker: "Ascended" },
      mountSkills: [
        { name: "Bulwark Charge", note: "+10% troop toughness on charge" },
        { name: "Tremor Step", note: "Brief enemy formation disruption" },
      ],
      equipment: ["Warlord's Crown", "Chained Gauntlets", "Sealed Greaves", "Ember Standard"],
      related: ["Debuff March Option 1", "Debuff March Option 3"],
    },
  },
  {
    id: "debuff-march-3",
    title: "Debuff March Option 3",
    category: "debuff",
    difficulty: 1,
    status: "testing",
    recommendedTier: "T9 — T10",
    recommendedHeroes: ["Edith", "Reina"],
    summary: "Lightweight, low-cost debuff march for early-to-mid KVK stages, easy to build with limited hero investment.",
    detail: {
      useCase: "Debuff · Early KVK · Farming rallies",
      quickSteps: [
        "Check target isn't fortified beyond T9-T10 range.",
        "Send solo, no coordination window needed.",
        "Apply debuff and disengage quickly.",
        "Reuse on the next low-value target.",
      ],
      objective: "Provide a cheap, repeatable debuff option for smaller-scale skirmishes where a full heavy build isn't justified.",
      whenToUse: "Best for early KVK stages, farming rallies, or when covering multiple simultaneous targets with limited resources.",
      counters: "Easily outclassed by fortified garrisons; not intended for high-value late-KVK targets.",
      commonMistakes: [
        "Using it against targets that need the heavier Option 2 build",
        "Under-investing in troop tier, making it fragile",
      ],
      pros: ["Cheap to build", "Fast to deploy repeatedly", "Good for new tribe members"],
      cons: ["Weak against fortified targets", "Currently in testing — numbers may change", "Limited scaling late-game"],
      heroes: [
        {
          name: "Edith",
          rarity: "Epic",
          roleTag: "Utility",
          commander: "main",
          note: "Keeps the build cheap and fast to cycle.",
          skills: [
            { name: "Light Footing", note: "+6% march speed" },
            { name: "Quick Recall", note: "Reduced march return time" },
          ],
        },
        {
          name: "Reina",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: "Adds a light attack-down layer.",
          skills: [
            { name: "Weakening Cry", note: "-14% enemy ATK for 6s" },
            { name: "Basic Guard", note: "+5% troop defense" },
          ],
        },
      ],
      troopComposition: "80% Infantry / 20% Archers — simple and cost-efficient.",
      mount: { name: "Field Hound", level: 30, type: "Speed", marker: "Standard" },
      mountSkills: [
        { name: "Quick Sprint", note: "+5% march speed on activation" },
        { name: "Light Paws", note: "Slightly reduced detection range" },
      ],
      equipment: ["Bronze Warhelm", "Shard of the North", "Traveler's Boots", "Simple Sigil"],
      related: ["Debuff March Option 1", "Debuff March Option 2"],
    },
  },
];
