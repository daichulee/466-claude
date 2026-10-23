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
    { id: "leandra",  type: "hero", label: "Leandra",  image: "assets/heroes/leandra.png" },
    { id: "artur",    type: "hero", label: "Artur",    image: "assets/heroes/artur.png" },
    { id: "rosky",    type: "hero", label: "Rosky",    image: "assets/heroes/rosky.png" },
    { id: "rolfe",    type: "hero", label: "Rolfe",    image: "assets/heroes/rolfe.png" },
    { id: "charlton", type: "hero", label: "Charlton", image: "assets/heroes/charlton.png" },
    { id: "ivana",    type: "hero", label: "Ivana",    image: "assets/heroes/ivana.png" },
    { id: "hobert",   type: "hero", label: "Hobert",   image: "assets/heroes/hobert.png" },
    { id: "yulmi",    type: "hero", label: "Yulmi",    image: "assets/heroes/yulmi.png" },
    { id: "varka",       type: "hero", label: "Varka",       image: "assets/heroes/varka.png" },
    { id: "ragnar",      type: "hero", label: "Ragnar",      image: "assets/heroes/ragnar.png" },
    { id: "gunnar",      type: "hero", label: "Gunnar",      image: "assets/heroes/gunnar.png" },
    { id: "cecia",       type: "hero", label: "Cecia",       image: "assets/heroes/cecia.png" },
    { id: "aethelflaed", type: "hero", label: "Aethelflaed", image: "assets/heroes/aethelflaed.png" },
    { id: "gregory",     type: "hero", label: "Gregory",     image: "assets/heroes/gregory.png" },
    { id: "sigurd",      type: "hero", label: "Sigurd",      image: "assets/heroes/sigurd.png" },
    { id: "jens",        type: "hero", label: "Jens",        image: "assets/heroes/jens.png" },
    // Not debuff-tier heroes on their own (no debuff capability), but used
    // as poison/burn sources to help trigger Devastating Charge in a few
    // Leandra variant marches below.
    { id: "sheila",      type: "hero", label: "Sheila",      image: "assets/heroes/sheila.png" },
    { id: "sasha",       type: "hero", label: "Sasha",       image: "assets/heroes/sasha.png" },
    { id: "alf",         type: "hero", label: "Alf",         image: "assets/heroes/alf.png" },
  ],

  heroSkills: [
    // "Disarmament" was a naming mistake for this same skill in an earlier
    // guide draft — corrected to its real name, Containment, below.
    { id: "blessed-negation",       type: "heroSkill", label: "Blessed Negation",         image: "assets/skills/blessed-negation.png" },
    { id: "containment",            type: "heroSkill", label: "Containment",              image: "assets/skills/containment.png" },
    { id: "helas-curse",            type: "heroSkill", label: "Hela's Curse",             image: "assets/skills/helas-curse.png" },
    { id: "divine-blessing",        type: "heroSkill", label: "Divine Blessing",          image: "assets/skills/divine-blessing.png" },
    { id: "dampened-spirits",       type: "heroSkill", label: "Dampened Spirits",         image: "assets/skills/dampened-spirits.png" },
    { id: "blessed-by-fate",        type: "heroSkill", label: "Blessed by Fate",          image: "assets/skills/blessed-by-fate.png" },
    { id: "venom-aggregation",      type: "heroSkill", label: "Venom Aggregation",        image: "assets/skills/venom-aggregation.png" },
    { id: "devastating-charge",     type: "heroSkill", label: "Devastating Charge",       image: "assets/skills/devastating-charge.png" },
    { id: "fiery-detonation",       type: "heroSkill", label: "Fiery Detonation",         image: "assets/skills/fiery-detonation.png" },
    { id: "furious-hack-and-slash", type: "heroSkill", label: "Furious Hack and Slash",   image: "assets/skills/furious-hack-and-slash.png" },
    { id: "poison-arrow",           type: "heroSkill", label: "Poison Arrow",             image: "assets/skills/poison-arrow.png" },
    { id: "silent-invasion",        type: "heroSkill", label: "Silent Invasion",          image: "assets/skills/silent-invasion.png" },
    { id: "silencer",               type: "heroSkill", label: "Silencer",                 image: "assets/skills/silencer.png" },
    { id: "bone-corroding-arrow",   type: "heroSkill", label: "Bone-corroding Arrow",     image: "assets/skills/bone-corroding-arrow.png" },
    { id: "french-crossbow",        type: "heroSkill", label: "French Crossbow",          image: "assets/skills/french-crossbow.png" },
    { id: "valkyries-gaze",         type: "heroSkill", label: "Valkyrie's Gaze",          image: "assets/skills/valkyries-gaze.png" },
    { id: "breaking-free",          type: "heroSkill", label: "Breaking Free",            image: "assets/skills/breaking-free.png" },
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
