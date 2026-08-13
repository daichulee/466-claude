/* ============================================================
   V466 RUNESTONE — CONTENT DATA
   Edit this file to add/update marches and modules.
   No build step needed — plain data, consumed by js/app.js

   TRANSLATIONS: narrative fields (title, summary, objective,
   whenToUse, counters, commonMistakes, pros, cons, troopComposition,
   useCase, quickSteps, hero notes) use the L(en, es, pt, fr, zh)
   helper below so they render in whichever language is selected.
   Proper nouns — hero/skill/mount/equipment names, and the short
   in-combat stat blurbs (e.g. "-18% enemy ATK for 8s") — stay in
   English only for now; they're easy to extend the same way later.

   Hero composition rule: exactly 2 heroes per march (main +
   secondary commander). Each hero has exactly 2 skills that
   belong to that hero only — do not mix skills between heroes.
   ============================================================ */

function L(en, es, pt, fr, zh) {
  return { en, es, pt, fr, zh };
}

const TRIBE_STATUS = {
  kingdom: "#466",
  power: "Top 20 Kingdom",
  activity: "Active",
};

const LOCKED_MODULES = [
  { id: "event-tips", icon: "calendar", seal: "seal-events", titleKey: "module.eventTips" },
  { id: "tribe-strategies", icon: "swords", seal: "seal-kvk", titleKey: "module.tribeStrategies" },
  { id: "hall-of-glory", icon: "trophy", seal: "seal-glory", titleKey: "module.hallOfGlory" },
  { id: "tribe-chronicles", icon: "scroll", seal: "seal-chronicles", titleKey: "module.tribeChronicles" },
];

const MARCH_CATEGORIES = ["all", "field", "rally", "debuff", "gathering", "flank", "pve"];

const MARCHES = [
  {
    id: "debuff-march-1",
    title: L(
      "Debuff March Option 1",
      "Opción de Marcha Debuff 1",
      "Opção de Marcha Debuff 1",
      "Marche Debuff Option 1",
      "减益行军方案 1"
    ),
    category: "debuff",
    difficulty: 2,
    status: "proven",
    media: [
      { type: "image", src: "assets/marches/debuff-march-1/1.png" },
      { type: "image", src: "assets/marches/debuff-march-1/2.png" },
    ],
    recommendedTier: "T10 — T11",
    recommendedHeroes: ["Reina", "Lagertha"],
    summary: L(
      "Applies stacking attack-down and defense-down debuffs before the main rally lands, softening high-value garrisons.",
      "Aplica debuffs acumulables de ataque y defensa antes de que llegue el rally principal, ablandando guarniciones de alto valor.",
      "Aplica debuffs acumuláveis de ataque e defesa antes da chegada do rally principal, enfraquecendo guarnições de alto valor.",
      "Applique des debuffs cumulables d'attaque et de défense avant l'arrivée du rassemblement principal, affaiblissant les garnisons de grande valeur.",
      "在主力集结抵达前施加叠加的攻击/防御减益，削弱高价值驻军。"
    ),
    detail: {
      useCase: L(
        "Debuff · Field · Rally support",
        "Debuff · Campo · Apoyo de rally",
        "Debuff · Campo · Apoio de rally",
        "Debuff · Terrain · Soutien de rassemblement",
        "减益 · 野战 · 集结辅助"
      ),
      quickSteps: [
        L("Scout the target garrison and confirm its buffs.", "Explorá la guarnición objetivo y confirmá sus buffs.", "Explore a guarnição alvo e confirme seus buffs.", "Éclairez la garnison ciblée et confirmez ses buffs.", "侦察目标驻军，确认其增益状态。"),
        L("Send this march 3–5s ahead of the rally.", "Enviá esta marcha 3–5s antes que el rally.", "Envie esta marcha 3–5s antes do rally.", "Envoyez cette marche 3 à 5s avant le rassemblement.", "在集结抵达前 3–5 秒派出此部队。"),
        L("Let debuffs land, then hold formation.", "Dejá que los debuffs se apliquen y mantené formación.", "Deixe os debuffs aplicarem e mantenha a formação.", "Laissez les debuffs s'appliquer, puis tenez la formation.", "让减益生效后保持阵形。"),
        L("Retreat immediately once the rally lands.", "Retirate apenas llegue el rally.", "Recue assim que o rally chegar.", "Repliez-vous dès l'arrivée du rassemblement.", "集结抵达后立即撤离。"),
      ],
      objective: L(
        "Weaken an enemy garrison's combat stats before your rally or field army arrives, so the killing blow lands with minimal losses.",
        "Debilitar las estadísticas de combate de una guarnición enemiga antes de que llegue tu rally o ejército de campo, para que el golpe final tenga pérdidas mínimas.",
        "Enfraquecer os status de combate de uma guarnição inimiga antes da chegada do seu rally ou exército de campo, para que o golpe final tenha perdas mínimas.",
        "Affaiblir les statistiques de combat d'une garnison ennemie avant l'arrivée de votre rassemblement ou armée de terrain, pour que le coup final fasse un minimum de pertes.",
        "在你的集结或野战部队抵达前削弱敌方驻军的战斗属性，让最后一击的损失降到最低。"
      ),
      whenToUse: L(
        "Send this ahead of a scheduled rally, ideally 3-5 seconds before the rally march lands, against garrisons with high defensive buffs.",
        "Enviala antes de un rally programado, idealmente 3-5 segundos antes de que la marcha del rally llegue, contra guarniciones con buffs defensivos altos.",
        "Envie antes de um rally programado, idealmente 3-5 segundos antes da marcha do rally chegar, contra guarnições com buffs defensivos altos.",
        "Envoyez-la avant un rassemblement programmé, idéalement 3 à 5 secondes avant l'arrivée de la marche de rassemblement, contre des garnisons aux buffs défensifs élevés.",
        "在预定集结前派出，理想情况下在集结部队抵达前 3-5 秒，针对防御增益较高的驻军使用。"
      ),
      counters: L(
        "Vulnerable to enemy anti-debuff cleanse skills and to marches with high individual troop toughness that shrug off shred effects.",
        "Vulnerable a habilidades enemigas de limpieza anti-debuff y a marchas con mucha resistencia individual de tropa que resisten los efectos de shred.",
        "Vulnerável a habilidades inimigas de limpeza anti-debuff e a marchas com alta resistência individual de tropa que resistem a efeitos de shred.",
        "Vulnérable aux compétences ennemies de purge anti-debuff et aux marches à haute résistance individuelle des troupes qui résistent aux effets de réduction.",
        "容易被敌方的反减益驱散技能克制，也容易被个体韧性很高、能抵抗削弱效果的部队克制。"
      ),
      commonMistakes: [
        L(
          "Sending it too early, letting the debuff expire before the rally lands",
          "Enviarla demasiado temprano, dejando que el debuff expire antes de que llegue el rally",
          "Enviar cedo demais, deixando o debuff expirar antes do rally chegar",
          "L'envoyer trop tôt, laissant le debuff expirer avant l'arrivée du rassemblement",
          "派出过早，导致减益在集结抵达前就已失效"
        ),
        L(
          "Using it against targets without checking for cleanse-capable defenders",
          "Usarla contra objetivos sin chequear si tienen defensores con limpieza",
          "Usar contra alvos sem checar defensores com limpeza",
          "L'utiliser contre des cibles sans vérifier les défenseurs capables de purge",
          "在未确认对方是否有驱散能力的情况下使用"
        ),
        L(
          "Pairing with the wrong troop type for the kingdom's current meta",
          "Combinarla con el tipo de tropa equivocado para el meta actual del reino",
          "Combinar com o tipo de tropa errado para o meta atual do reino",
          "La combiner avec le mauvais type de troupe pour le méta actuel du royaume",
          "与不适合本王国当前流派的兵种搭配"
        ),
      ],
      pros: [
        L("Reduces rally losses significantly", "Reduce mucho las pérdidas del rally", "Reduz muito as perdas do rally", "Réduit fortement les pertes du rassemblement", "大幅减少集结伤亡"),
        L("Cheap in resources relative to impact", "Barata en recursos en relación al impacto", "Barata em recursos perto do impacto", "Peu coûteuse en ressources par rapport à l'impact", "相对效果而言资源消耗低"),
        L("Flexible timing window", "Ventana de timing flexible", "Janela de tempo flexível", "Fenêtre de timing flexible", "时机窗口灵活"),
      ],
      cons: [
        L("Weak alone in direct combat", "Débil sola en combate directo", "Fraca sozinha em combate direto", "Faible seule en combat direct", "单独直接作战较弱"),
        L("Debuff duration is short", "Duración de debuff corta", "Duração de debuff curta", "Durée de debuff courte", "减益持续时间短"),
        L("Needs precise timing coordination", "Necesita coordinación precisa de timing", "Precisa de coordenação precisa de tempo", "Nécessite une coordination de timing précise", "需要精确的时机配合"),
      ],
      heroes: [
        {
          name: "Reina",
          rarity: "Legendary",
          roleTag: "Support",
          commander: "main",
          note: L(
            "Carries the core debuff package.",
            "Lleva el paquete central de debuff.",
            "Carrega o pacote principal de debuff.",
            "Porte le cœur du kit de debuff.",
            "承担核心减益组合。"
          ),
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
          note: L(
            "Adds survivability and control uptime.",
            "Suma supervivencia y control.",
            "Adiciona sobrevivência e controle.",
            "Ajoute survie et contrôle.",
            "增加生存与控制能力。"
          ),
          skills: [
            { name: "Shattered Guard", note: "-10% enemy DEF" },
            { name: "Swift March", note: "+15% march speed" },
          ],
        },
      ],
      troopComposition: L(
        "70% Infantry / 20% Archers / 10% Cavalry — prioritize survivability over damage.",
        "70% Infantería / 20% Arqueros / 10% Caballería — priorizá supervivencia sobre daño.",
        "70% Infantaria / 20% Arqueiros / 10% Cavalaria — priorize sobrevivência sobre dano.",
        "70% Infanterie / 20% Archers / 10% Cavalerie — priorisez la survie plutôt que les dégâts.",
        "70% 步兵 / 20% 弓兵 / 10% 骑兵 —— 优先生存而非输出。"
      ),
      mount: { name: "Frost Wolf", level: 40, type: "Speed", marker: "Awakened" },
      mountSkills: [
        { name: "Howling Charge", note: "+8% march speed on activation" },
        { name: "Frost Bite", note: "Chance to slow enemy reinforcements" },
      ],
      equipment: ["Bronze Warhelm", "Chained Gauntlets", "Sealed Greaves", "Shard of the North"],
      related: ["debuff-march-2", "debuff-march-3"],
    },
  },
  {
    id: "debuff-march-2",
    title: L(
      "Debuff March Option 2",
      "Opción de Marcha Debuff 2",
      "Opção de Marcha Debuff 2",
      "Marche Debuff Option 2",
      "减益行军方案 2"
    ),
    category: "debuff",
    difficulty: 3,
    status: "proven",
    media: [
      { type: "image", src: "assets/marches/debuff-march-2/1.png" },
    ],
    recommendedTier: "T11",
    recommendedHeroes: ["Molner", "Jasser"],
    summary: L(
      "Heavier debuff load focused on defense shred, built for cracking fortified garrisons ahead of a coordinated multi-rally push.",
      "Carga de debuff más pesada enfocada en romper defensa, pensada para quebrar guarniciones fortificadas antes de un empuje coordinado de varios rallies.",
      "Carga de debuff mais pesada focada em quebrar defesa, feita para arrebentar guarnições fortificadas antes de um avanço coordenado com vários rallies.",
      "Charge de debuff plus lourde axée sur la réduction de défense, conçue pour percer des garnisons fortifiées avant une poussée coordonnée de plusieurs rassemblements.",
      "更重的减益配置，专注于破防，用于在多集结联动进攻前击穿坚固驻军。"
    ),
    detail: {
      useCase: L(
        "Debuff · KVK · Multi-rally chain",
        "Debuff · KVK · Cadena de rallies",
        "Debuff · KVK · Cadeia de rallies",
        "Debuff · KVK · Chaîne de rassemblements",
        "减益 · KVK · 多集结连携"
      ),
      quickSteps: [
        L("Scout to confirm stacked defense buffs on target.", "Explorá para confirmar buffs de defensa acumulados en el objetivo.", "Explore para confirmar buffs de defesa acumulados no alvo.", "Éclairez pour confirmer les buffs de défense cumulés sur la cible.", "侦察确认目标身上叠加的防御增益。"),
        L("Sync hero skill cooldowns before sending.", "Sincronizá los cooldowns de habilidades antes de enviarla.", "Sincronize os cooldowns das habilidades antes de enviar.", "Synchronisez les temps de recharge des compétences avant l'envoi.", "派出前同步好英雄技能冷却。"),
        L("Send ahead of the first rally in the chain.", "Enviala antes del primer rally de la cadena.", "Envie antes do primeiro rally da cadeia.", "Envoyez avant le premier rassemblement de la chaîne.", "在连携中第一波集结之前派出。"),
        L("Hand off to the next rally without overlapping debuffs.", "Pasá la posta al siguiente rally sin solapar debuffs.", "Passe a vez ao próximo rally sem sobrepor debuffs.", "Passez le relais au rassemblement suivant sans chevaucher les debuffs.", "与下一波集结交接时避免减益重叠。"),
      ],
      objective: L(
        "Strip defensive stats from a heavily-garrisoned target so a following chain of rallies breaks through without stalling.",
        "Quitar estadísticas defensivas de un objetivo muy fortificado para que una cadena de rallies siguiente rompa sin trabarse.",
        "Remover status defensivos de um alvo fortemente guarnecido para que uma cadeia de rallies seguinte passe sem travar.",
        "Retirer les statistiques défensives d'une cible fortement garnisonnée pour qu'une chaîne de rassemblements suivante perce sans bloquer.",
        "剥离重兵驻守目标的防御属性，让后续的集结连携能够顺利突破而不卡壳。"
      ),
      whenToUse: L(
        "Use ahead of KVK multi-rally chains on high-value structures, particularly when scouting shows stacked defense buffs.",
        "Usala antes de cadenas de rallies en KVK sobre estructuras de alto valor, sobre todo cuando la exploración muestra buffs de defensa acumulados.",
        "Use antes de cadeias de rallies em KVK sobre estruturas de alto valor, principalmente quando a exploração mostra buffs de defesa acumulados.",
        "Utilisez-la avant des chaînes de rassemblements en KVK sur des structures de grande valeur, surtout quand l'éclairage montre des buffs de défense cumulés.",
        "用于 KVK 多集结连携进攻高价值建筑前，尤其是侦察显示对方叠加了防御增益时。"
      ),
      counters: L(
        "Countered by dedicated anti-shred defensive setups and by targets that swap garrison heroes mid-siege.",
        "La contrarrestan configuraciones defensivas anti-shred dedicadas y objetivos que cambian héroes de guarnición en medio del asedio.",
        "É neutralizada por configurações defensivas anti-shred dedicadas e por alvos que trocam heróis de guarnição no meio do cerco.",
        "Contrée par des configurations défensives anti-réduction dédiées et par des cibles qui changent de héros de garnison en plein siège.",
        "会被专门的反破防防守配置克制，也会被在守城过程中更换驻守英雄的目标克制。"
      ),
      commonMistakes: [
        L(
          "Not confirming garrison composition via scout before sending",
          "No confirmar la composición de la guarnición por exploración antes de enviarla",
          "Não confirmar a composição da guarnição via exploração antes de enviar",
          "Ne pas confirmer la composition de la garnison par éclairage avant l'envoi",
          "派出前未通过侦察确认驻军构成"
        ),
        L(
          "Sending without hero skill cooldowns ready",
          "Enviarla sin tener listos los cooldowns de habilidades",
          "Enviar sem os cooldowns das habilidades prontos",
          "L'envoyer sans les temps de recharge des compétences prêts",
          "在英雄技能冷却未就绪时派出"
        ),
        L(
          "Overlapping with a teammate's identical debuff, wasting the stack cap",
          "Solaparla con el debuff idéntico de un compañero, desperdiciando el tope de stacks",
          "Sobrepor com o debuff idêntico de um colega, desperdiçando o limite de stacks",
          "La chevaucher avec le debuff identique d'un coéquipier, gaspillant le plafond de cumul",
          "与队友完全相同的减益重叠，浪费叠加上限"
        ),
      ],
      pros: [
        L("Strong defense shred", "Rompe defensa con fuerza", "Forte quebra de defesa", "Forte réduction de défense", "破防能力强"),
        L("Synergizes well with chained rallies", "Sinergiza bien con rallies encadenados", "Boa sinergia com rallies encadeados", "Bonne synergie avec les rassemblements enchaînés", "与连携集结配合良好"),
        L("Good scaling into late KVK", "Escala bien en KVK avanzado", "Escala bem no KVK avançado", "Bonne montée en puissance en KVK avancé", "在 KVK 后期扩展性好"),
      ],
      cons: [
        L("Resource-heavy to build", "Pesada en recursos para armar", "Pesada em recursos para montar", "Coûteuse en ressources à construire", "搭建资源消耗大"),
        L("Requires precise hero skill timing", "Necesita timing preciso de habilidades", "Precisa de timing preciso de habilidades", "Nécessite un timing précis des compétences", "需要精确的技能时机配合"),
        L("Less effective solo", "Menos efectiva sola", "Menos eficaz sozinha", "Moins efficace seule", "单独使用效果较弱"),
      ],
      heroes: [
        {
          name: "Molner",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Carries the defense-shred core.",
            "Lleva el núcleo de rotura de defensa.",
            "Carrega o núcleo de quebra de defesa.",
            "Porte le cœur de réduction de défense.",
            "承担破防核心。"
          ),
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
          note: L(
            "Adds troop load and follow-up pressure.",
            "Suma carga de tropa y presión de seguimiento.",
            "Adiciona carga de tropa e pressão de continuação.",
            "Ajoute de la charge de troupe et de la pression de suivi.",
            "增加部队承载与后续压制。"
          ),
          skills: [
            { name: "Forced March", note: "+12% march speed" },
            { name: "Focused Strike", note: "+8% ATK vs debuffed targets" },
          ],
        },
      ],
      troopComposition: L(
        "60% Infantry / 30% Archers / 10% Cavalry — balanced for sustained pressure.",
        "60% Infantería / 30% Arqueros / 10% Caballería — equilibrada para presión sostenida.",
        "60% Infantaria / 30% Arqueiros / 10% Cavalaria — equilibrada para pressão sustentada.",
        "60% Infanterie / 30% Archers / 10% Cavalerie — équilibrée pour une pression soutenue.",
        "60% 步兵 / 30% 弓兵 / 10% 骑兵 —— 均衡配置，适合持续施压。"
      ),
      mount: { name: "Iron Boar", level: 42, type: "Tank", marker: "Ascended" },
      mountSkills: [
        { name: "Bulwark Charge", note: "+10% troop toughness on charge" },
        { name: "Tremor Step", note: "Brief enemy formation disruption" },
      ],
      equipment: ["Warlord's Crown", "Chained Gauntlets", "Sealed Greaves", "Ember Standard"],
      related: ["debuff-march-1", "debuff-march-3"],
    },
  },
  {
    id: "debuff-march-3",
    title: L(
      "Debuff March Option 3",
      "Opción de Marcha Debuff 3",
      "Opção de Marcha Debuff 3",
      "Marche Debuff Option 3",
      "减益行军方案 3"
    ),
    category: "debuff",
    difficulty: 1,
    status: "testing",
    // No gallery images yet for this one — the section simply doesn't
    // render when `media` is empty. Add entries the same way as the
    // other two marches to turn it on.
    media: [],
    recommendedTier: "T9 — T10",
    recommendedHeroes: ["Edith", "Reina"],
    summary: L(
      "Lightweight, low-cost debuff march for early-to-mid KVK stages, easy to build with limited hero investment.",
      "Marcha de debuff liviana y barata para las etapas tempranas/medias de KVK, fácil de armar con poca inversión en héroes.",
      "Marcha de debuff leve e barata para as fases iniciais/médias do KVK, fácil de montar com pouco investimento em heróis.",
      "Marche debuff légère et peu coûteuse pour les phases précoces à intermédiaires du KVK, facile à construire avec un investissement limité en héros.",
      "轻量低成本的减益行军，适合 KVK 前中期，英雄投入少，容易搭建。"
    ),
    detail: {
      useCase: L(
        "Debuff · Early KVK · Farming rallies",
        "Debuff · KVK temprano · Farmeo de rallies",
        "Debuff · KVK inicial · Farm de rallies",
        "Debuff · KVK précoce · Farm de rassemblements",
        "减益 · KVK 前期 · 刷集结"
      ),
      quickSteps: [
        L("Check target isn't fortified beyond T9-T10 range.", "Chequeá que el objetivo no esté fortificado más allá de rango T9-T10.", "Confira se o alvo não está fortificado além do range T9-T10.", "Vérifiez que la cible n'est pas fortifiée au-delà de T9-T10.", "确认目标防御不超过 T9-T10 范围。"),
        L("Send solo, no coordination window needed.", "Enviala sola, no necesita ventana de coordinación.", "Envie sozinha, sem precisar de janela de coordenação.", "Envoyez-la seule, sans fenêtre de coordination nécessaire.", "单独派出，无需协同窗口。"),
        L("Apply debuff and disengage quickly.", "Aplicá el debuff y desenganchate rápido.", "Aplique o debuff e recue rápido.", "Appliquez le debuff et désengagez rapidement.", "施加减益后迅速脱离。"),
        L("Reuse on the next low-value target.", "Reusala en el próximo objetivo de bajo valor.", "Reutilize no próximo alvo de baixo valor.", "Réutilisez-la sur la prochaine cible de faible valeur.", "可在下一个低价值目标上重复使用。"),
      ],
      objective: L(
        "Provide a cheap, repeatable debuff option for smaller-scale skirmishes where a full heavy build isn't justified.",
        "Ofrecer una opción de debuff barata y repetible para escaramuzas chicas donde no se justifica una build pesada completa.",
        "Oferecer uma opção de debuff barata e repetível para escaramuças pequenas onde uma build pesada completa não se justifica.",
        "Offrir une option de debuff peu coûteuse et répétable pour de petites escarmouches où une build lourde complète ne se justifie pas.",
        "为不值得投入重型配置的小规模遭遇战提供一个便宜、可重复使用的减益方案。"
      ),
      whenToUse: L(
        "Best for early KVK stages, farming rallies, or when covering multiple simultaneous targets with limited resources.",
        "Ideal para etapas tempranas de KVK, farmeo de rallies, o cuando hay que cubrir varios objetivos a la vez con recursos limitados.",
        "Ideal para fases iniciais de KVK, farm de rallies, ou para cobrir vários alvos ao mesmo tempo com recursos limitados.",
        "Idéale pour les phases précoces du KVK, le farm de rassemblements, ou pour couvrir plusieurs cibles à la fois avec des ressources limitées.",
        "最适合 KVK 前期、刷集结，或资源有限需要同时覆盖多个目标时使用。"
      ),
      counters: L(
        "Easily outclassed by fortified garrisons; not intended for high-value late-KVK targets.",
        "La superan fácil las guarniciones fortificadas; no está pensada para objetivos de alto valor en KVK avanzado.",
        "É facilmente superada por guarnições fortificadas; não é pensada para alvos de alto valor no KVK avançado.",
        "Facilement surclassée par des garnisons fortifiées ; non destinée aux cibles de grande valeur en KVK avancé.",
        "容易被重兵驻守的目标克制；不适合用于 KVK 后期的高价值目标。"
      ),
      commonMistakes: [
        L(
          "Using it against targets that need the heavier Option 2 build",
          "Usarla contra objetivos que necesitan la build más pesada de la Opción 2",
          "Usar contra alvos que precisam da build mais pesada da Opção 2",
          "L'utiliser contre des cibles nécessitant la build plus lourde de l'Option 2",
          "用于需要方案 2 那种更重配置的目标"
        ),
        L(
          "Under-investing in troop tier, making it fragile",
          "Invertir poco en el tier de tropa, dejándola frágil",
          "Investir pouco no tier de tropa, deixando-a frágil",
          "Sous-investir dans le tier de troupe, la rendant fragile",
          "兵种等级投入不足，导致过于脆弱"
        ),
      ],
      pros: [
        L("Cheap to build", "Barata de armar", "Barata de montar", "Peu coûteuse à construire", "搭建成本低"),
        L("Fast to deploy repeatedly", "Rápida para desplegar seguido", "Rápida para reutilizar", "Rapide à redéployer", "可快速反复出征"),
        L("Good for new tribe members", "Buena para miembros nuevos de la tribu", "Boa para membros novos da tribo", "Bonne pour les nouveaux membres de la tribu", "适合部落新成员使用"),
      ],
      cons: [
        L("Weak against fortified targets", "Débil contra objetivos fortificados", "Fraca contra alvos fortificados", "Faible contre les cibles fortifiées", "面对重兵驻守目标较弱"),
        L("Currently in testing — numbers may change", "Todavía en prueba — los números pueden cambiar", "Ainda em teste — os números podem mudar", "Encore en test — les chiffres peuvent changer", "仍在测试中——数值可能调整"),
        L("Limited scaling late-game", "Escala poco en etapas avanzadas", "Escala pouco em fases avançadas", "Montée en puissance limitée en fin de partie", "后期扩展性有限"),
      ],
      heroes: [
        {
          name: "Edith",
          rarity: "Epic",
          roleTag: "Utility",
          commander: "main",
          note: L(
            "Keeps the build cheap and fast to cycle.",
            "Mantiene la build barata y rápida de repetir.",
            "Mantém a build barata e rápida de repetir.",
            "Garde la build peu coûteuse et rapide à répéter.",
            "维持配置低成本、可快速循环使用。"
          ),
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
          note: L(
            "Adds a light attack-down layer.",
            "Suma una capa liviana de reducción de ataque.",
            "Adiciona uma camada leve de redução de ataque.",
            "Ajoute une légère couche de réduction d'attaque.",
            "增加一层轻度攻击削弱。"
          ),
          skills: [
            { name: "Weakening Cry", note: "-14% enemy ATK for 6s" },
            { name: "Basic Guard", note: "+5% troop defense" },
          ],
        },
      ],
      troopComposition: L(
        "80% Infantry / 20% Archers — simple and cost-efficient.",
        "80% Infantería / 20% Arqueros — simple y eficiente en costo.",
        "80% Infantaria / 20% Arqueiros — simples e eficiente em custo.",
        "80% Infanterie / 20% Archers — simple et économique.",
        "80% 步兵 / 20% 弓兵 —— 简单且性价比高。"
      ),
      mount: { name: "Field Hound", level: 30, type: "Speed", marker: "Standard" },
      mountSkills: [
        { name: "Quick Sprint", note: "+5% march speed on activation" },
        { name: "Light Paws", note: "Slightly reduced detection range" },
      ],
      equipment: ["Bronze Warhelm", "Shard of the North", "Traveler's Boots", "Simple Sigil"],
      related: ["debuff-march-1", "debuff-march-2"],
    },
  },
];
