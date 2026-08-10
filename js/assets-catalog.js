/* ============================================================
   V466 RUNESTONE — ASSET CATALOG
   Single source of truth for every hero / skill / mount / equipment
   image used across the site (march detail cards, Create March
   builder, and — later — Hero Database, KVK Strategies, etc.
   once those sections unlock).

   TO UPDATE AN IMAGE: replace the file at the given `image` path
   with your own (same filename, or update the path here). No
   other code needs to change. If a file is missing or fails to
   load, the UI falls back to a styled letter badge automatically
   — the layout never breaks.

   TO ADD A NEW ASSET: add an entry to the matching array below,
   drop the image file in the matching /assets/ subfolder.
   ============================================================ */

const ASSET_CATALOG = {
  heroes: [
    { id: "reina",   type: "hero", label: "Reina",   image: "assets/heroes/reina.png" },
    { id: "lagertha", type: "hero", label: "Lagertha", image: "assets/heroes/lagertha.png" },
    { id: "molner",  type: "hero", label: "Molner",  image: "assets/heroes/molner.png" },
    { id: "jasser",  type: "hero", label: "Jasser",  image: "assets/heroes/jasser.png" },
    { id: "edith",   type: "hero", label: "Edith",   image: "assets/heroes/edith.png" },
    { id: "cyrus",   type: "hero", label: "Cyrus",   image: "assets/heroes/cyrus.png" },
    { id: "astrid",  type: "hero", label: "Astrid",  image: "assets/heroes/astrid.png" },
    { id: "halvar",  type: "hero", label: "Halvar",  image: "assets/heroes/halvar.png" },
    { id: "sigrun",  type: "hero", label: "Sigrun",  image: "assets/heroes/sigrun.png" },
    { id: "bjorn",   type: "hero", label: "Bjorn",   image: "assets/heroes/bjorn.png" },
  ],

  heroSkills: [
    { id: "weakening-cry",    type: "heroSkill", label: "Weakening Cry",    image: "assets/skills/weakening-cry.png" },
    { id: "iron-resolve",     type: "heroSkill", label: "Iron Resolve",     image: "assets/skills/iron-resolve.png" },
    { id: "shattered-guard",  type: "heroSkill", label: "Shattered Guard",  image: "assets/skills/shattered-guard.png" },
    { id: "swift-march",      type: "heroSkill", label: "Swift March",      image: "assets/skills/swift-march.png" },
    { id: "armor-rend",       type: "heroSkill", label: "Armor Rend",       image: "assets/skills/armor-rend.png" },
    { id: "steady-line",      type: "heroSkill", label: "Steady Line",      image: "assets/skills/steady-line.png" },
    { id: "forced-march",     type: "heroSkill", label: "Forced March",     image: "assets/skills/forced-march.png" },
    { id: "focused-strike",   type: "heroSkill", label: "Focused Strike",   image: "assets/skills/focused-strike.png" },
    { id: "light-footing",    type: "heroSkill", label: "Light Footing",    image: "assets/skills/light-footing.png" },
    { id: "quick-recall",     type: "heroSkill", label: "Quick Recall",     image: "assets/skills/quick-recall.png" },
    { id: "basic-guard",      type: "heroSkill", label: "Basic Guard",      image: "assets/skills/basic-guard.png" },
    { id: "war-exhaustion",   type: "heroSkill", label: "War Exhaustion",   image: "assets/skills/war-exhaustion.png" },
    { id: "shield-break",     type: "heroSkill", label: "Shield Break",     image: "assets/skills/shield-break.png" },
    { id: "rallying-horn",    type: "heroSkill", label: "Rallying Horn",    image: "assets/skills/rallying-horn.png" },
    { id: "venom-strike",     type: "heroSkill", label: "Venom Strike",     image: "assets/skills/venom-strike.png" },
    { id: "stone-wall",       type: "heroSkill", label: "Stone Wall",       image: "assets/skills/stone-wall.png" },
    { id: "berserker-rage",   type: "heroSkill", label: "Berserker Rage",   image: "assets/skills/berserker-rage.png" },
    { id: "arcane-shroud",    type: "heroSkill", label: "Arcane Shroud",    image: "assets/skills/arcane-shroud.png" },
    { id: "piercing-volley",  type: "heroSkill", label: "Piercing Volley",  image: "assets/skills/piercing-volley.png" },
    { id: "frozen-ground",    type: "heroSkill", label: "Frozen Ground",    image: "assets/skills/frozen-ground.png" },
  ],

  mounts: [
    { id: "frost-wolf",  type: "mount", label: "Frost Wolf",  image: "assets/mounts/frost-wolf.png" },
    { id: "iron-boar",   type: "mount", label: "Iron Boar",   image: "assets/mounts/iron-boar.png" },
    { id: "field-hound", type: "mount", label: "Field Hound", image: "assets/mounts/field-hound.png" },
    { id: "dire-bear",   type: "mount", label: "Dire Bear",   image: "assets/mounts/dire-bear.png" },
    { id: "shadow-elk",  type: "mount", label: "Shadow Elk",  image: "assets/mounts/shadow-elk.png" },
  ],

  mountSkills: [
    { id: "howling-charge", type: "mountSkill", label: "Howling Charge", image: "assets/mount-skills/howling-charge.png" },
    { id: "frost-bite",     type: "mountSkill", label: "Frost Bite",     image: "assets/mount-skills/frost-bite.png" },
    { id: "bulwark-charge", type: "mountSkill", label: "Bulwark Charge", image: "assets/mount-skills/bulwark-charge.png" },
    { id: "tremor-step",    type: "mountSkill", label: "Tremor Step",    image: "assets/mount-skills/tremor-step.png" },
    { id: "quick-sprint",   type: "mountSkill", label: "Quick Sprint",   image: "assets/mount-skills/quick-sprint.png" },
    { id: "light-paws",     type: "mountSkill", label: "Light Paws",     image: "assets/mount-skills/light-paws.png" },
    { id: "iron-hide",      type: "mountSkill", label: "Iron Hide",      image: "assets/mount-skills/iron-hide.png" },
    { id: "stone-skin",     type: "mountSkill", label: "Stone Skin",     image: "assets/mount-skills/stone-skin.png" },
    { id: "wild-charge",    type: "mountSkill", label: "Wild Charge",    image: "assets/mount-skills/wild-charge.png" },
    { id: "swift-hooves",   type: "mountSkill", label: "Swift Hooves",   image: "assets/mount-skills/swift-hooves.png" },
  ],

  // troopType: which troop the gear suits — used to filter the Create March equipment step
  equipment: [
    { id: "bronze-warhelm",      type: "equipment", label: "Bronze Warhelm",      troopType: "infantry", image: "assets/equipment/bronze-warhelm.png" },
    { id: "warlords-crown",      type: "equipment", label: "Warlord's Crown",     troopType: "infantry", image: "assets/equipment/warlords-crown.png" },
    { id: "shard-of-the-north",  type: "equipment", label: "Shard of the North",  troopType: "archers",  image: "assets/equipment/shard-of-the-north.png" },
    { id: "ember-standard",      type: "equipment", label: "Ember Standard",      troopType: "archers",  image: "assets/equipment/ember-standard.png" },
    { id: "sealed-greaves",      type: "equipment", label: "Sealed Greaves",      troopType: "pikemen",  image: "assets/equipment/sealed-greaves.png" },
    { id: "chained-gauntlets",   type: "equipment", label: "Chained Gauntlets",   troopType: "pikemen",  image: "assets/equipment/chained-gauntlets.png" },
    { id: "travelers-boots",     type: "equipment", label: "Traveler's Boots",    troopType: "gathering", image: "assets/equipment/travelers-boots.png" },
    { id: "simple-sigil",        type: "equipment", label: "Simple Sigil",        troopType: "gathering", image: "assets/equipment/simple-sigil.png" },
  ],
};

/**
 * Look up a catalog asset by category + id.
 */
function findAsset(category, id) {
  if (!id) return null;
  const list = ASSET_CATALOG[category] || [];
  return list.find((a) => a.id === id || a.label.toLowerCase() === String(id).toLowerCase()) || null;
}

/**
 * Render an asset thumbnail with automatic fallback to a styled
 * letter badge if the image is missing or fails to load.
 * sizeClass: a CSS class controlling the thumbnail's box size/shape
 * (see .asset-thumb variants in css/assets.css).
 */
function assetThumbHTML(asset, sizeClass) {
  if (!asset) return "";
  const letter = asset.label.charAt(0).toUpperCase();
  return `
    <div class="asset-thumb ${sizeClass || ""}">
      <img src="${asset.image}" alt="${asset.label}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="asset-fallback" style="display:none;">${letter}</div>
    </div>
  `;
}
