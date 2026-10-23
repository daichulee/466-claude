/* ============================================================
   V466 RUNESTONE — CONTENT DATA
   Edit this file to add/update marches and modules.
   No build step needed — plain data, consumed by js/app.js

   TRANSLATIONS: narrative fields (title, summary, objective,
   whenToUse, counters, commonMistakes, pros, cons, troopComposition,
   useCase, quickSteps, hero notes) use the L(en, es, pt, fr, zh, ru)
   helper below so they render in whichever language is selected.
   Proper nouns — hero/skill/mount/equipment names, and the short
   in-combat stat blurbs (e.g. "-18% enemy ATK for 8s") — stay in
   English only for now; they're easy to extend the same way later.

   Hero composition rule: exactly 2 heroes per march (main +
   secondary commander). Each hero has exactly 2 skills that
   belong to that hero only — do not mix skills between heroes.
   ============================================================ */

function L(en, es, pt, fr, zh, ru) {
  return { en, es, pt, fr, zh, ru };
}

const TRIBE_STATUS = {
  kingdom: "#466",
  power: "Top 20 Kingdom",
  activity: "Active",
};

// Hall of Glory, Tribe Chronicles and Event Tips were pulled from this
// menu — this site is being split in two for security: this one holds
// the "secret" debuff march content (trusted members only), while
// tribe-wide/social sections like those move to a separate, publicly
// shared site later. Event Tips in particular is more useful to the
// whole tribe than to the experienced players this site targets.
// Nothing sealed left on this site for now — Tribe Strategies moved
// to a live (unlocked) home section below instead. Keep this array
// around for whatever gets sealed next.
const LOCKED_MODULES = [];

// ---------------- Tribe Strategies (home section) ----------------
// Entries with `steps` are real, finished write-ups (shown in full, no draft tag).
// Entries with `sections` are also finished (grouped lists). Any entry without
// steps/sections would be a PLACEHOLDER draft.
// The user will hand over the actual strategy text later; swap the
// "summary" (and add a detail page, if these grow one) at that point.
const TRIBE_STRATEGIES = [
  {
    id: "ball-formation",
    icon: "shield",
    title: L("Ball Formation Fighting", "Pelea en Formación de Bola", "Luta em Formação de Bola", "Combat en Formation de Boule", "球形阵战斗", "Бой в формации «шар»"),
    summary: L("Fight as a single, tight group to minimize our damage and maximize kills.", "Pelear como un único grupo compacto para minimizar nuestro daño recibido y maximizar las bajas.", "Lutar como um único grupo compacto para minimizar nossos danos e maximizar as baixas.", "Combattre comme un seul groupe compact pour minimiser nos pertes et maximiser les éliminations.", "作为一个紧密的整体作战，尽量减少我方损失，最大化击杀。", "Сражаться единой плотной группой, чтобы минимизировать наши потери и максимизировать убийства."),
    image: "assets/strategies/ball-formation.jpg",
    related: ["field-battles"],
    imageCaption: L("Top left: the right way — one tight ball. The other three: what to avoid.", "Arriba a la izquierda: lo correcto, una sola bola compacta. Los otros tres: lo que hay que evitar.", "Em cima à esquerda: o certo, uma única bola compacta. Os outros três: o que evitar.", "En haut à gauche : la bonne façon, une seule boule compacte. Les trois autres : à éviter.", "左上：正确做法——一个紧密的球形阵。其余三张：应避免的情况。", "Вверху слева: правильно — один плотный шар. Остальные три: чего избегать."),
    why: L("A tight ball puts all our marches in the same spot, so every unit adds damage to the same target and every unit is covered by the rest. Scattered marches get picked off one by one and hand the enemy easy kills; in a ball, each kill costs them more than it costs us.", "Una bola compacta junta todas nuestras marchas en el mismo lugar: cada unidad suma daño al mismo objetivo y todas se cubren entre sí. Las marchas dispersas las van eliminando una por una y le regalan bajas fáciles al enemigo; en bola, cada baja le cuesta más al enemigo que a nosotros.", "Uma bola compacta junta todas as nossas marchas no mesmo ponto: cada unidade soma dano no mesmo alvo e todas se protegem. Marchas dispersas são eliminadas uma a uma e dão baixas fáceis ao inimigo; em bola, cada baixa custa mais ao inimigo do que a nós.", "Une boule compacte réunit toutes nos marches au même endroit : chaque unité ajoute des dégâts sur la même cible et toutes se couvrent mutuellement. Des marches dispersées sont éliminées une à une et offrent des éliminations faciles à l'ennemi ; en boule, chaque élimination lui coûte plus qu'à nous.", "紧密的球形阵让所有行军集中在同一位置：每支部队都向同一目标输出伤害，并互相掩护。分散的行军会被逐个击破，白白送给敌人击杀；成球后，每次击杀对敌人的代价都高于对我们的代价。", "Плотный шар собирает все наши марши в одной точке: каждый отряд наносит урон по одной цели, и все прикрывают друг друга. Разрозненные марши выбивают по одному, отдавая врагу лёгкие убийства; в шаре каждое убийство обходится врагу дороже, чем нам."),
    mistakes: [
      L("Spreading out around the marker instead of packing in tight (bottom left of the diagram).", "Desparramarse alrededor del marcador en vez de apretarse bien (abajo a la izquierda del diagrama).", "Se espalhar ao redor do marcador em vez de ficar bem junto (embaixo à esquerda no diagrama).", "S'étaler autour du marqueur au lieu de se serrer (en bas à gauche du schéma).", "在标记周围散开，而不是紧紧聚拢（图中左下）。", "Разбредаться вокруг маркера вместо плотной группы (внизу слева на схеме)."),
      L("Leaving a few marches outside the ball — stragglers are the first to be picked off (bottom right).", "Dejar algunas marchas afuera de la bola: las que quedan sueltas son las primeras en caer (abajo a la derecha).", "Deixar algumas marchas fora da bola: as isoladas são as primeiras a cair (embaixo à direita).", "Laisser quelques marches hors de la boule : les isolées sont les premières éliminées (en bas à droite).", "让少数行军落在阵型之外——落单的最先被击杀（图中右下）。", "Оставлять несколько маршей вне шара — отставших выбивают первыми (внизу справа)."),
      L("Moving ahead of the marker or the main group.", "Adelantarse al marcador o al grupo principal.", "Avançar na frente do marcador ou do grupo principal.", "Avancer devant le marqueur ou le groupe principal.", "跑在标记或主力队伍前面。", "Выдвигаться вперёд маркера или основной группы."),
      L("Ignoring the red screen and staying out to keep fighting.", "Ignorar la pantalla roja y quedarse afuera para seguir peleando.", "Ignorar a tela vermelha e ficar de fora para continuar lutando.", "Ignorer l'écran rouge et rester dehors pour continuer à combattre.", "无视红屏，留在阵外继续战斗。", "Игнорировать красный экран и оставаться снаружи, чтобы продолжать бой."),
      L("Chasing far-away targets instead of the closest enemies.", "Perseguir objetivos lejanos en vez de los enemigos más cercanos.", "Perseguir alvos distantes em vez dos inimigos mais próximos.", "Poursuivre des cibles éloignées plutôt que les ennemis les plus proches.", "追击远处的目标，而不是最近的敌人。", "Гнаться за далёкими целями вместо ближайших врагов."),
    ],
    steps: [
      L("Gather exactly at the AXE MARKER (or the bookmark your R4 sets).", "Juntate exactamente en el MARCADOR DE HACHA (o en el marcador que ponga tu R4).", "Reúna-se exatamente no MARCADOR DE MACHADO (ou no marcador que seu R4 colocar).", "Rassemblez-vous exactement sur le MARQUEUR HACHE (ou sur le marqueur posé par votre R4).", "准确集合在斧头标记处（或你的R4设置的标记）。", "Соберитесь точно у МАРКЕРА ТОПОРА (или у метки, которую поставит ваш R4)."),
      L("Move only when the marker or the main group moves.", "Movete solo cuando se mueva el marcador o el grupo principal.", "Mova-se somente quando o marcador ou o grupo principal se mover.", "Ne bougez que lorsque le marqueur ou le groupe principal bouge.", "仅当标记或主力队伍移动时才移动。", "Двигайтесь только тогда, когда движется маркер или основная группа."),
      L("If your screen turns red, fall back into the middle of the group immediately.", "Si tu pantalla se pone roja, volvé de inmediato al centro del grupo.", "Se a tela ficar vermelha, volte imediatamente para o meio do grupo.", "Si votre écran devient rouge, repliez-vous immédiatement au milieu du groupe.", "如果屏幕变红，立即撤回到队伍中央。", "Если экран стал красным, немедленно отступайте в центр группы."),
      L("If it's not red, focus fire on the nearest enemies, or on those who failed to retreat and got caught inside our ball.", "Si no está roja, concentrá el fuego en los enemigos más cercanos o en los que no lograron retirarse y quedaron atrapados dentro de nuestra bola.", "Se não estiver vermelha, concentre o fogo nos inimigos mais próximos ou nos que não conseguiram recuar e ficaram presos dentro da nossa bola.", "S'il n'est pas rouge, concentrez le feu sur les ennemis les plus proches ou sur ceux qui n'ont pas réussi à se replier et se sont retrouvés pris dans notre boule.", "如果屏幕没有变红，集火最近的敌人，或那些来不及撤退、被困在我们阵型中的敌人。", "Если экран не красный, фокусируйте огонь на ближайших врагах или на тех, кто не успел отступить и попал внутрь нашего шара."),
    ],
    keyPoints: [
      L("Never fight alone.", "Nunca pelees solo.", "Nunca lute sozinho.", "Ne combattez jamais seul.", "绝不单独作战。", "Никогда не сражайтесь в одиночку."),
      L("Red screen = instant retreat.", "Pantalla roja = retirada inmediata.", "Tela vermelha = recuar na hora.", "Écran rouge = repli immédiat.", "屏幕变红 = 立即撤退。", "Красный экран = немедленное отступление."),
      L("Stay tight and move with the group.", "Mantenete compacto y movete con el grupo.", "Fique junto e se mova com o grupo.", "Restez soudés et avancez avec le groupe.", "保持紧凑，随队伍行动。", "Держитесь плотно и двигайтесь вместе с группой."),
      L("Target Infantry or Archers first. In big fights, zoom out and click the white dots nearest to your ball or group.", "Atacá primero a Infantería o Arqueros. En peleas grandes, alejá el zoom y tocá los puntos blancos más cercanos a tu bola o grupo.", "Mire primeiro em Infantaria ou Arqueiros. Em lutas grandes, afaste o zoom e clique nos pontos brancos mais próximos da sua bola ou grupo.", "Ciblez d'abord l'Infanterie ou les Archers. Dans les grands combats, dézoomez et cliquez sur les points blancs les plus proches de votre boule ou groupe.", "优先攻击步兵或弓兵。大规模战斗中，缩小视角，点击离你的阵型或队伍最近的白点。", "Сначала атакуйте пехоту или лучников. В больших боях отдалите камеру и нажимайте на белые точки, ближайшие к вашему шару или группе."),
    ],
  },
  {
    id: "field-battles",
    icon: "target",
    title: L("Field Battles", "Batallas de Campo", "Batalhas de Campo", "Batailles sur le Terrain", "野战", "Полевые сражения"),
    summary: L("Field battles in KvK4 are more crowded and more exciting. We play them zoomed out, tightly packed and with our strongest commanders.", "Las batallas de campo en KvK4 son más concurridas y más emocionantes. Las jugamos con el zoom alejado, bien compactos y con nuestros comandantes más fuertes.", "As batalhas de campo na KvK4 são mais cheias e mais emocionantes. Jogamos com o zoom afastado, bem compactos e com nossos comandantes mais fortes.", "Les batailles sur le terrain en KvK4 sont plus denses et plus palpitantes. On les joue dézoomé, bien serrés et avec nos commandants les plus forts.", "KvK4中的野战更拥挤、也更刺激。我们缩小视角、紧密抱团，并派出最强的统帅出战。", "Полевые сражения в KvK4 стали масштабнее и интереснее. Мы играем с отдалённой камерой, плотной группой и с самыми сильными командирами."),
    sections: [
      {
        title: L("Targeting", "Selección de objetivos", "Seleção de alvos", "Ciblage", "目标选择", "Выбор целей"),
        items: [
          L("In crowded fights it's harder to pick out enemy archers or infantry, and that wastes time.", "En peleas con mucha gente cuesta distinguir arqueros o infantería enemigos, y eso hace perder tiempo.", "Em lutas lotadas é mais difícil identificar arqueiros ou infantaria inimigos, e isso faz perder tempo.", "Dans les combats bondés, il est plus difficile de repérer les archers ou l'infanterie ennemis, ce qui fait perdre du temps.", "在拥挤的战斗中更难分辨敌方弓兵或步兵，这会浪费时间。", "В людных боях труднее выделить вражеских лучников или пехоту, и это отнимает время."),
          L("In large-scale fights, play fully zoomed out and follow the dots. It's the most efficient way, and it also keeps you from accidentally focusing yellow (ally) armies.", "En peleas grandes, jugá con el zoom totalmente alejado y seguí los puntos. Es lo más eficiente y además evita que ataques por error a ejércitos amarillos (aliados).", "Em lutas grandes, jogue com o zoom totalmente afastado e siga os pontos. É a forma mais eficiente e também evita mirar por engano em exércitos amarelos (aliados).", "Dans les grands combats, jouez complètement dézoomé et suivez les points. C'est la méthode la plus efficace, et elle évite de cibler par erreur les armées jaunes (alliées).", "大规模战斗中，请完全缩小视角，跟着圆点打。这是最高效的方式，也能避免误打黄色（友军）部队。", "В больших сражениях играйте с полностью отдалённой камерой и следуйте за точками. Это самый эффективный способ, к тому же так вы случайно не атакуете жёлтые (союзные) армии."),
        ],
      },
      {
        title: L("Fighting as one ball", "Pelear como una sola bola", "Lutar como uma única bola", "Combattre comme une seule boule", "像一个球阵一样作战", "Бой единым шаром"),
        items: [
          L("We play tightly packed, like a single ball. Moving away from the group is pure suicide.", "Jugamos bien compactos, como una sola bola. Alejarse del grupo es un suicidio.", "Jogamos bem compactos, como uma única bola. Se afastar do grupo é puro suicídio.", "On joue bien serrés, comme une seule boule. S'éloigner du groupe, c'est du suicide pur et simple.", "我们像一个整体球阵一样紧密作战。脱离队伍就是纯粹送死。", "Мы играем плотно, как единый шар. Отрываться от группы — чистое самоубийство."),
          L("A video explaining it is in our Telegram channel, under “KvK Strategies”.", "Hay un video que lo explica en nuestro canal de Telegram, en “KvK Strategies”.", "Há um vídeo explicando isso no nosso canal do Telegram, em “KvK Strategies”.", "Une vidéo qui l'explique est dans notre canal Telegram, sous « KvK Strategies ».", "相关讲解视频在我们的Telegram频道“KvK Strategies”中。", "Видео с объяснением есть в нашем Telegram-канале в разделе «KvK Strategies»."),
          L("If you get focused while inside the ball, take a few steps back and then re-enter the fight.", "Si te focalizan estando dentro de la bola, retrocedé unos pasos y volvé a entrar a la pelea.", "Se você for focado dentro da bola, recue alguns passos e depois volte para a luta.", "Si vous êtes focalisé à l'intérieur de la boule, reculez de quelques pas puis réengagez-vous.", "如果你在球阵中被集火，先后退几步，再重新加入战斗。", "Если вас сфокусили внутри шара, отойдите на несколько шагов назад и снова вступайте в бой."),
          L("If a white dot (enemy) gets inside our own formation, focus it immediately and eliminate enemies within our formation as fast as possible.", "Si un punto blanco (enemigo) entra en nuestra formación, atacalo de inmediato y eliminá a los enemigos dentro de la formación lo más rápido posible.", "Se um ponto branco (inimigo) entrar na nossa formação, ataque-o imediatamente e elimine os inimigos dentro da formação o mais rápido possível.", "Si un point blanc (ennemi) se retrouve dans notre formation, focalisez-le immédiatement et éliminez les ennemis présents dans la formation le plus vite possible.", "如果有白点（敌人）进入我们的阵型内部，立即集火，尽快清除阵型内的敌人。", "Если белая точка (враг) оказалась внутри нашего строя, немедленно фокусируйте её и как можно быстрее уничтожайте врагов внутри строя."),
        ],
      },
      {
        title: L("Who to bring", "Quién va al campo", "Quem vai ao campo", "Qui part sur le terrain", "谁上场", "Кто выходит на поле"),
        items: [
          L("Be on the field with your strong, trusted commanders. Send the rest of your armies (whichever commander they have) to rally or defend.", "Estate en el campo con tus comandantes fuertes y de confianza. Mandá el resto de tus ejércitos (con el comandante que sea) a hacer rally o a defender.", "Esteja no campo com seus comandantes fortes e de confiança. Envie o resto dos seus exércitos (com qualquer comandante) para rally ou defesa.", "Soyez sur le terrain avec vos commandants forts et de confiance. Envoyez le reste de vos armées (quel que soit leur commandant) en ralliement ou en défense.", "带着你强力且信任的统帅上场。其余部队（无论带哪位统帅）派去集结或防守。", "Выходите на поле с сильными и проверенными командирами. Остальные армии (с любым командиром) отправляйте на ралли или в оборону."),
        ],
      },
    ],
    related: ["ball-formation"],
  },
  {
    id: "rallies",
    icon: "swords",
    title: L("Rallies", "Rallies", "Rallies", "Ralliements", "集结", "Ралли"),
    summary: L("How to fill rallies, and how to split your armies between the field and rallies so the tribe stays strong in both.", "Cómo llenar rallies y cómo repartir tus ejércitos entre el campo y los rallies para que la tribu sea fuerte en ambos.", "Como encher rallies e como dividir seus exércitos entre o campo e os rallies para que a tribo seja forte nos dois.", "Comment remplir les ralliements et répartir vos armées entre le terrain et les ralliements pour que la tribu reste forte sur les deux fronts.", "如何填满集结，以及如何在野战和集结之间分配部队，让部落在两方面都保持强大。", "Как заполнять ралли и как распределять армии между полем и ралли, чтобы племя было сильным и там, и там."),
    sections: [
      {
        title: L("Filling rallies", "Llenar rallies", "Preencher rallies", "Remplir les ralliements", "填集结", "Заполнение ралли"),
        items: [
          L("Every rally must be filled entirely with T5 troops.", "Todos los rallies tienen que llenarse completos con tropas T5.", "Todos os rallies devem ser preenchidos inteiramente com tropas T5.", "Tous les ralliements doivent être remplis entièrement avec des troupes T5.", "所有集结都必须全部用T5部队填满。", "Каждое ралли нужно заполнять исключительно войсками T5."),
          L("If you can't join a rally directly, send one march next to the objective where the rally was launched, and fill it from there when the rally's HP gets low.", "Si no podés unirte directo a un rally, mandá una marcha junto al objetivo donde se lanzó el rally y llenalo desde ahí cuando a la vida del rally le quede poco.", "Se você não conseguir entrar direto em um rally, envie uma marcha para perto do objetivo onde o rally foi lançado e preencha dali quando o HP do rally ficar baixo.", "Si vous ne pouvez pas rejoindre un ralliement directement, envoyez une marche à côté de l'objectif où le ralliement a été lancé, puis remplissez-le depuis là quand les PV du ralliement deviennent bas.", "如果无法直接加入集结，请派一支行军到发起集结的目标旁边，等集结的生命值变低时再从那里填入。", "Если не получается присоединиться к ралли напрямую, отправьте один марш к цели, где запущено ралли, и заполните его оттуда, когда здоровье ралли станет низким."),
          L("While marching, keep track of T5 rally-filler troops on the move, so you don't get ambushed.", "Mientras marchás, vigilá constantemente las tropas T5 de relleno de rally que están en movimiento, para que no te embosquen.", "Enquanto marcha, fique sempre de olho nas tropas T5 de preenchimento de rally em movimento, para não ser emboscado.", "Pendant le déplacement, surveillez en permanence les troupes T5 de remplissage de ralliement en mouvement, afin de ne pas tomber dans une embuscade.", "行军途中请时刻留意正在移动的T5集结填充部队，避免遭到伏击。", "Во время марша постоянно следите за движущимися войсками T5 для заполнения ралли, чтобы не попасть в засаду."),
        ],
      },
      {
        title: L("Splitting your armies", "Repartir tus ejércitos", "Dividir seus exércitos", "Répartir vos armées", "分配你的部队", "Распределение армий"),
        items: [
          L("Your strongest commanders stay on the field. If they only fill rallies, our field strength drops significantly.", "Tus comandantes más fuertes se quedan en el campo. Si solo llenan rallies, nuestra fuerza en el campo cae mucho.", "Seus comandantes mais fortes ficam no campo. Se eles só preencherem rallies, nossa força no campo cai bastante.", "Vos commandants les plus forts restent sur le terrain. S'ils ne font que remplir des ralliements, notre force sur le terrain chute nettement.", "你最强的统帅留在野战。如果他们只用来填集结，我们的野战实力会大幅下降。", "Ваши сильнейшие командиры остаются на поле. Если они будут только заполнять ралли, наша сила в полевых боях заметно упадёт."),
          L("Example: if you have 3 armies you trust, fight on the field with those 3 and use your remaining 2 slots to fill rallies or flags.", "Ejemplo: si tenés 3 ejércitos de confianza, peleá en el campo con esos 3 y usá tus 2 espacios restantes para llenar rallies o banderas.", "Exemplo: se você tem 3 exércitos de confiança, lute no campo com esses 3 e use os 2 espaços restantes para preencher rallies ou bandeiras.", "Exemple : si vous avez 3 armées de confiance, combattez sur le terrain avec ces 3 et utilisez vos 2 emplacements restants pour remplir des ralliements ou des drapeaux.", "例如：如果你有3支信得过的部队，就用这3支在野战中作战，剩下的2个队列用来填集结或旗帜。", "Пример: если у вас 3 надёжные армии, сражайтесь ими на поле, а оставшиеся 2 слота используйте для заполнения ралли или флагов."),
          L("This rule applies to everyone.", "Esta regla vale para todos.", "Esta regra vale para todos.", "Cette règle s'applique à tout le monde.", "这条规则适用于所有人。", "Это правило действует для всех."),
          L("Reference setup: 4 armies on the field and 1 filling rallies or flags.", "Esquema de referencia: 4 ejércitos en el campo y 1 llenando rallies o banderas.", "Esquema de referência: 4 exércitos no campo e 1 preenchendo rallies ou bandeiras.", "Configuration de référence : 4 armées sur le terrain et 1 qui remplit des ralliements ou des drapeaux.", "参考配置：4支部队野战，1支部队填集结或旗帜。", "Ориентир: 4 армии на поле и 1, заполняющая ралли или флаги."),
        ],
      },
    ],
    related: ["field-battles"],
  },
  {
    id: "flag-castle-defence",
    icon: "shield",
    title: L("Flag & Castle Defence", "Defensa de Banderas y Castillos", "Defesa de Bandeiras e Castelos", "Défense des Drapeaux et des Châteaux", "旗帜与城堡防守", "Защита флагов и замков"),
    summary: L("Defence takes a bit more micro-management, but when we all do it together we gain a big advantage. This is where professionalism begins.", "La defensa requiere un poco más de micro-gestión, pero cuando todos la hacemos juntos ganamos una ventaja enorme. Acá empieza el profesionalismo.", "A defesa exige um pouco mais de microgestão, mas quando todos fazemos juntos ganhamos uma grande vantagem. É aqui que começa o profissionalismo.", "La défense demande un peu plus de micro-gestion, mais quand nous la faisons tous ensemble, nous gagnons un avantage considérable. C'est là que commence le professionnalisme.", "防守需要多一点微操，但当我们所有人一起执行时，就能获得巨大优势。专业从这里开始。", "Оборона требует чуть больше микроменеджмента, но когда мы делаем это все вместе, мы получаем огромное преимущество. Именно здесь начинается профессионализм."),
    sections: [
      {
        title: L("Communication", "Comunicación", "Comunicação", "Communication", "沟通", "Коммуникация"),
        items: [
          L("Map pins are our most important communication tool. With hundreds of players fighting at once, instant strategy and communication are critical.", "Los pines del mapa son nuestra herramienta de comunicación más importante. Con cientos de jugadores peleando a la vez, la estrategia y la comunicación instantáneas son críticas.", "Os pins do mapa são nossa ferramenta de comunicação mais importante. Com centenas de jogadores lutando ao mesmo tempo, estratégia e comunicação instantâneas são críticas.", "Les repères sur la carte sont notre outil de communication le plus important. Avec des centaines de joueurs qui combattent en même temps, la stratégie et la communication instantanées sont essentielles.", "地图标记是我们最重要的沟通工具。数百名玩家同时作战，即时的策略与沟通至关重要。", "Метки на карте — наш главный инструмент связи. Когда одновременно сражаются сотни игроков, мгновенная стратегия и коммуникация критически важны."),
          L("Zoom out regularly and pay close attention to the pins.", "Alejá el zoom seguido y prestá mucha atención a los pines.", "Afaste o zoom com frequência e fique atento aos pins.", "Dézoomez régulièrement et faites bien attention aux repères.", "请经常缩小视角，密切留意地图标记。", "Регулярно отдаляйте камеру и внимательно следите за метками."),
          L("Also follow the R4 instructions shared in the tribe chat.", "Seguí también las indicaciones de los R4 que se comparten en el chat de la tribu.", "Siga também as instruções dos R4 compartilhadas no chat da tribo.", "Suivez aussi les consignes des R4 partagées dans le chat de la tribu.", "同时请遵循R4在部落聊天中发布的指示。", "Также следуйте указаниям R4 в чате племени."),
        ],
      },
      {
        title: L("Filling the defence", "Llenar la defensa", "Preencher a defesa", "Remplir la défense", "填满防守", "Заполнение обороны"),
        items: [
          L("Each defensive objective has an exact troop type, specified by a pin. Filling with the wrong type wastes space and reduces defensive strength.", "Cada objetivo defensivo tiene un tipo de tropa exacto, indicado con un pin. Llenar con el tipo equivocado desperdicia espacio y reduce la fuerza defensiva.", "Cada objetivo defensivo tem um tipo de tropa exato, indicado por um pin. Preencher com o tipo errado desperdiça espaço e reduz a força defensiva.", "Chaque objectif défensif a un type de troupe précis, indiqué par un repère. Remplir avec le mauvais type gaspille de la place et réduit la force défensive.", "每个防守目标都会通过标记指定确切的兵种。用错兵种会浪费名额并降低防守强度。", "Для каждой цели обороны точный тип войск указывается меткой. Если заполнить не тем типом, место пропадает зря, а оборона слабеет."),
          L("Don't click the objective to enter it from far away: your march reserves its space until it arrives, and the defence can't be filled quickly. First walk next to the objective, then enter it.", "No entres al objetivo desde lejos: tu marcha reserva el lugar hasta que llega y la defensa no se puede llenar rápido. Primero caminá hasta al lado del objetivo y recién ahí entrá.", "Não entre no objetivo de longe: sua marcha reserva a vaga até chegar e a defesa não enche rápido. Primeiro caminhe até ao lado do objetivo e só então entre.", "N'entrez pas dans l'objectif depuis loin : votre marche réserve la place jusqu'à son arrivée et la défense ne se remplit pas vite. Allez d'abord à côté de l'objectif, puis entrez.", "不要在远处直接点击进入目标：你的行军会一直占着名额直到抵达，导致防守无法快速填满。请先走到目标旁边，再进入。", "Не заходите в цель издалека: ваш марш резервирует место, пока не дойдёт, и оборона не заполняется быстро. Сначала подойдите к цели вплотную, потом заходите."),
        ],
      },
      {
        title: L("Reaching the objective", "Llegar al objetivo", "Chegar ao objetivo", "Rejoindre l'objectif", "抵达目标", "Как добраться до цели"),
        items: [
          L("Don't be afraid to teleport to flag areas.", "No tengas miedo de teletransportarte a las zonas de banderas.", "Não tenha medo de se teletransportar para as áreas das bandeiras.", "N'ayez pas peur de vous téléporter vers les zones de drapeaux.", "不要害怕传送到旗帜区域。", "Не бойтесь телепортироваться в зоны флагов."),
          L("Jumping from friendly castles to the defensive objective is the easiest method, and it quickly lowers enemy morale.", "Saltar desde castillos aliados hasta el objetivo defensivo es el método más fácil y baja rápido la moral del enemigo.", "Saltar dos castelos aliados até o objetivo defensivo é o método mais fácil e reduz rapidamente o moral do inimigo.", "Sauter depuis les châteaux alliés jusqu'à l'objectif défensif est la méthode la plus simple, et elle fait vite baisser le moral de l'ennemi.", "从友方城堡跳到防守目标是最简单的方法，还能迅速降低敌方士气。", "Прыжок из союзных замков к цели обороны — самый простой способ, и он быстро снижает боевой дух врага."),
        ],
      },
    ],
  },
];

const MARCH_CATEGORIES = ["all", "field", "rally", "debuff", "gathering", "flank", "pve"];

// Shown above the march grid when a category is selected, so people
// know what that role is actually for before they start filtering
// individual cards. Only "debuff" is filled in for now.
const CATEGORY_INTRO = {
  debuff: L(
    "A debuff march's job isn't to deal damage — it's to reduce the defensive capabilities of the opponent, apply negative effects, and survive as long as possible while doing it cheaply. What the debuff troops themselves deal doesn't matter; what matters is the status they inflict on the target.",
    "El trabajo de una marcha debuff no es hacer daño — es reducir las capacidades defensivas del oponente, aplicar efectos negativos y sobrevivir el mayor tiempo posible haciéndolo de la forma más barata. No importa el daño que hagan las tropas debuff en sí; lo que importa es el estado que le infligen al objetivo.",
    "O trabalho de uma marcha de debuff não é causar dano — é reduzir as capacidades defensivas do oponente, aplicar efeitos negativos e sobreviver o máximo possível fazendo isso da forma mais barata. O dano que as tropas de debuff em si causam não importa; o que importa é o estado que elas infligem ao alvo.",
    "Le rôle d'une marche debuff n'est pas d'infliger des dégâts — c'est de réduire les capacités défensives de l'adversaire, d'appliquer des effets négatifs et de survivre le plus longtemps possible en le faisant à moindre coût. Peu importe les dégâts que les troupes debuff elles-mêmes infligent ; ce qui compte, c'est le statut qu'elles imposent à la cible.",
    "减益行军的任务不是造成伤害，而是削弱对手的防御能力、施加负面效果，并以低成本尽可能长时间地存活。减益部队本身造成多少伤害并不重要；重要的是它们施加在目标身上的状态。",
    "Задача марша с дебаффами не в том, чтобы наносить урон — а в том, чтобы снижать защитные характеристики противника, накладывать негативные эффекты и выживать как можно дольше, делая это максимально дёшево. Неважно, какой урон наносят сами войска с дебаффами; важен статус, который они накладывают на цель."
  ),
};

// Shared troop-tier cost breakdown, shown inside every debuff march's
// Troop Composition section (the tradeoffs are the same across all of
// them — no need to repeat the wording per march).
const TROOP_TIER_COSTS = [
  {
    tier: "T3",
    pros: L(
      "Lowest cost. Good for starting the swarm with your main debuffers. Won't hand the enemy merit points.",
      "El costo más bajo. Buena opción para arrancar el swarm con tus debuffers principales. No le da puntos de mérito al enemigo.",
      "O custo mais baixo. Boa opção para começar o swarm com seus debuffers principais. Não entrega pontos de mérito ao inimigo.",
      "Coût le plus bas. Bonne option pour démarrer l'essaim avec vos principaux debuffers. Ne donne pas de points de mérite à l'ennemi.",
      "成本最低。适合用你的主力减益英雄开启集群。不会给敌人送出功勋点。",
      "Самая низкая стоимость. Хороший вариант для начала роя с вашими основными дебаферами. Не отдаёт врагу очки заслуг."
    ),
    cons: L(
      "May not survive long enough to matter for the rally, ruining your debuff uptime.",
      "Puede que no sobrevivan el tiempo suficiente como para que importe en el rally, arruinando el uptime del debuff.",
      "Pode não sobreviver tempo suficiente para fazer diferença no rally, arruinando o uptime do debuff.",
      "Peut ne pas survivre assez longtemps pour compter dans le ralliement, ruinant votre temps de debuff actif.",
      "可能撑不到对集结产生影响的时候，从而毁掉你的减益持续时间。",
      "Могут не прожить достаточно долго, чтобы это имело значение для ралли, что портит аптайм дебаффа."
    ),
  },
  {
    tier: "T5",
    pros: L(
      "Balanced cost — you're probably already building plenty of these for rallies and defense.",
      "Costo equilibrado — probablemente ya estés construyendo muchas de estas para rallies y defensa.",
      "Custo equilibrado — você provavelmente já está construindo muitas dessas para rallies e defesa.",
      "Coût équilibré — vous en construisez probablement déjà beaucoup pour les ralliements et la défense.",
      "成本均衡——你大概本来就在为集结和防守大量训练这类部队。",
      "Сбалансированная стоимость — вы наверняка уже строите много таких войск для ралли и обороны."
    ),
    cons: L(
      "Overusing them can deplete your stock and leave you short for rallies or defense.",
      "Usarlas de más puede agotar tu stock y dejarte corto para rallies o defensa.",
      "Usá-las demais pode esgotar seu estoque e deixar você sem tropas para rallies ou defesa.",
      "Les surutiliser peut épuiser votre stock et vous laisser à court pour les ralliements ou la défense.",
      "过度使用会耗尽库存，导致集结或防守时兵力不足。",
      "Чрезмерное использование может истощить ваш запас и оставить нехватку для ралли или обороны."
    ),
  },
  {
    tier: "T7+",
    pros: L(
      "Highest stats and survivability of the three.",
      "Las estadísticas y la supervivencia más altas de las tres opciones.",
      "As maiores estatísticas e sobrevivência das três opções.",
      "Les statistiques et la survie les plus élevées des trois.",
      "三者中属性和生存能力最高。",
      "Самые высокие характеристики и живучесть из трёх вариантов."
    ),
    cons: L(
      "Very high troop cost — only worth it with your main debuffers, and only if resources allow it.",
      "Costo de tropa muy alto — solo vale la pena con tus debuffers principales, y solo si los recursos lo permiten.",
      "Custo de tropa altíssimo — só vale a pena com seus debuffers principais, e só se os recursos permitirem.",
      "Coût en troupes très élevé — ne vaut la peine qu'avec vos principaux debuffers, et seulement si les ressources le permettent.",
      "部队成本极高——只值得配给你的主力减益英雄，并且要资源允许。",
      "Очень высокая стоимость войск — оправдана только с вашими основными дебаферами, и только если позволяют ресурсы."
    ),
  },
];

const SKILL_TIER_LIST = [
  { tier: "S", skills: ["Blessed Negation", "Containment", "Hela's Curse"] },
  { tier: "A", skills: ["Divine Blessing", "Dampened Spirits", "Blessed by Fate"] },
  { tier: "B", skills: ["Venom Aggregation", "Devastating Charge", "Fiery Detonation", "Furious Hack and Slash"] },
  { tier: "C", skills: ["Poison Arrow", "Silent Invasion", "Silencer", "Bone-corroding Arrow"] },
  { tier: "D", skills: ["French Crossbow", "Valkyrie's Gaze", "Breaking Free"] },
];

const HERO_TIER_LIST = [
  { tier: "S", heroes: ["Artur", "Leandra"] },
  { tier: "A", heroes: ["Rosky", "Yulmi"] },
  { tier: "B", heroes: ["Rolfe", "Hobert", "Ivana", "Charlton"] },
  { tier: "C", heroes: ["Varka", "Ragnar", "Gunnar", "Cecia"] },
  { tier: "D", heroes: ["Aethelflaed", "Gregory", "Sigurd", "Jens"] },
];

const STRATEGY_OVERVIEW = [
  {
    title: L("Swarm vs. Solo", "Swarm vs. Solo", "Swarm vs. Solo", "Essaim vs. Solo", "集群对单人", "Рой против Соло"),
    body: L(
      "It's always preferable to focus on the swarm strategy — a coordinated debuff attack from 6 or more players, striking one to two seconds after the previous attacker. A swarm is far less costly per player and lets you use fewer debuffers overall. Falling back to solo debuffing is a valid choice when a swarm isn't realistic (low activity, off hours), but expect noticeably higher losses.",
      "Siempre es preferible enfocarse en la estrategia swarm — un ataque debuff coordinado de 6 o más jugadores, golpeando uno o dos segundos después del atacante anterior. Un swarm es mucho menos costoso por jugador y te permite usar menos debuffers en total. Recurrir al debuff solo es una opción válida cuando un swarm no es realista (poca actividad, horarios de baja conexión), pero esperá pérdidas notablemente más altas.",
      "É sempre preferível focar na estratégia de swarm — um ataque de debuff coordenado de 6 ou mais jogadores, atacando um ou dois segundos depois do atacante anterior. Um swarm custa muito menos por jogador e permite usar menos debuffers no total. Recorrer ao debuff solo é uma opção válida quando um swarm não é realista (pouca atividade, horários de baixa conexão), mas espere perdas visivelmente maiores.",
      "Il est toujours préférable de se concentrer sur la stratégie d'essaim — une attaque debuff coordonnée de 6 joueurs ou plus, frappant une à deux secondes après l'attaquant précédent. Un essaim coûte beaucoup moins cher par joueur et permet d'utiliser moins de debuffers au total. Se rabattre sur le debuff solo est un choix valable quand un essaim n'est pas réaliste (faible activité, heures creuses), mais attendez-vous à des pertes nettement plus élevées.",
      "始终优先采用集群策略——由6名或更多玩家协同发起的减益攻击，每人在前一名攻击者之后一到两秒出手。集群的人均成本低得多，整体上也能少用一些减益英雄。当集群不现实时（活跃度低、非高峰时段），退回单人减益也是合理选择，但要预期明显更高的损失。",
      "Всегда предпочтительнее делать ставку на стратегию роя — скоординированную атаку с дебаффами от 6 и более игроков, бьющих с интервалом в одну-две секунды после предыдущего атакующего. Рой обходится намного дешевле в пересчёте на игрока и позволяет использовать меньше дебаферов в целом. Переход на соло-дебафф — допустимый выбор, когда рой нереалистичен (низкая активность, неудобное время), но тогда ждите заметно более высоких потерь."
    ),
  },
  {
    title: L("The Containment mechanic", "El mecanismo de Containment", "O mecanismo de Containment", "Le mécanisme de Containment", "Containment 机制", "Механика Containment"),
    body: L(
      "Most of the swarm strategy is built around one skill: Containment, which applies Broken Blade to the target every 12 seconds. While Broken Blade is active, the target's basic counterattacks are neutralized — that's what keeps swarm losses low. It stops working entirely against status immunity (e.g. Divine Shield), which is when most swarm losses actually happen.",
      "La mayor parte de la estrategia swarm está construida alrededor de una sola habilidad: Containment, que aplica Broken Blade al objetivo cada 12 segundos. Mientras Broken Blade está activo, los contraataques básicos del objetivo quedan neutralizados — eso es lo que mantiene bajas las pérdidas del swarm. Deja de funcionar por completo contra inmunidad a estados (por ej. Divine Shield), que es cuando ocurren la mayoría de las pérdidas reales del swarm.",
      "A maior parte da estratégia de swarm é construída em torno de uma única habilidade: Containment, que aplica Broken Blade ao alvo a cada 12 segundos. Enquanto Broken Blade está ativo, os contra-ataques básicos do alvo são neutralizados — é isso que mantém as perdas do swarm baixas. Ela deixa de funcionar por completo contra imunidade a estados (por ex. Divine Shield), que é justamente quando acontece a maioria das perdas reais do swarm.",
      "La majeure partie de la stratégie d'essaim repose sur une seule compétence : Containment, qui applique Broken Blade à la cible toutes les 12 secondes. Tant que Broken Blade est actif, les contre-attaques de base de la cible sont neutralisées — c'est ce qui maintient les pertes de l'essaim basses. Elle cesse complètement de fonctionner contre l'immunité aux statuts (par ex. Divine Shield), et c'est là que se produisent la plupart des véritables pertes de l'essaim.",
      "集群策略的大部分都围绕一个技能构建：Containment，它每12秒对目标施加一次 Broken Blade。Broken Blade 生效期间，目标的普通反击会被压制——这正是集群损失保持较低的原因。它对状态免疫（例如 Divine Shield）完全无效，而集群的大部分实际损失正是发生在这种时候。",
      "Бо́льшая часть стратегии роя строится вокруг одного навыка: Containment, который накладывает Broken Blade на цель каждые 12 секунд. Пока Broken Blade активен, обычные контратаки цели нейтрализованы — именно это удерживает потери роя на низком уровне. Навык полностью перестаёт работать против иммунитета к статусам (например, Divine Shield), и именно тогда происходит большинство реальных потерь роя."
    ),
  },
  {
    title: L("What a debuff march is actually for", "Para qué sirve realmente una marcha debuff", "Para que serve de verdade uma marcha de debuff", "À quoi sert vraiment une marche debuff", "减益行军到底有什么用", "Для чего на самом деле нужен марш с дебаффами"),
    body: L(
      "A debuff march's job isn't to deal damage. It's to reduce the target's defensive capabilities, apply negative effects, and survive as long as possible while doing it cheaply. The damage the debuff troops themselves deal doesn't matter — what matters is the status inflicted on the target.",
      "El trabajo de una marcha debuff no es hacer daño. Es reducir las capacidades defensivas del objetivo, aplicar efectos negativos y sobrevivir el mayor tiempo posible haciéndolo de forma barata. No importa el daño que hagan las tropas debuff en sí — lo que importa es el estado infligido al objetivo.",
      "O trabalho de uma marcha de debuff não é causar dano. É reduzir as capacidades defensivas do alvo, aplicar efeitos negativos e sobreviver o máximo possível fazendo isso de forma barata. O dano que as próprias tropas de debuff causam não importa — o que importa é o estado infligido ao alvo.",
      "Le rôle d'une marche debuff n'est pas d'infliger des dégâts. C'est de réduire les capacités défensives de la cible, d'appliquer des effets négatifs et de survivre le plus longtemps possible en le faisant à moindre coût. Les dégâts infligés par les troupes debuff elles-mêmes n'ont pas d'importance — ce qui compte, c'est le statut imposé à la cible.",
      "减益行军的任务不是造成伤害，而是削弱目标的防御能力、施加负面效果，并以低成本尽可能长时间地存活。减益部队自身造成的伤害并不重要——重要的是施加在目标身上的状态。",
      "Задача марша с дебаффами не в том, чтобы наносить урон. Она в том, чтобы снижать защитные характеристики цели, накладывать негативные эффекты и выживать как можно дольше, делая это максимально дёшево. Урон, который наносят сами войска с дебаффами, неважен — важен статус, наложенный на цель."
    ),
  },
  {
    title: L("A note on this reference", "Una nota sobre esta referencia", "Uma nota sobre esta referência", "Une note sur cette référence", "关于本参考资料的说明", "Примечание об этом справочнике"),
    body: L(
      "This tier list is a snapshot, not an official ranking — the original author built it from personal testing and community feedback, without full transparency from the game's publisher on exact numbers. Treat it as a practical starting point, not gospel, and expect it to shift as the meta does.",
      "Esta tier list es una foto del momento, no un ranking oficial — el autor original la armó a partir de testeo personal y feedback de la comunidad, sin transparencia total del publisher del juego sobre los números exactos. Tratala como un punto de partida práctico, no como palabra santa, y esperá que cambie a medida que cambie el meta.",
      "Esta tier list é um retrato do momento, não um ranking oficial — o autor original a montou a partir de testes pessoais e feedback da comunidade, sem transparência total da publisher do jogo sobre os números exatos. Trate-a como um ponto de partida prático, não como verdade absoluta, e espere que ela mude conforme o meta mudar.",
      "Cette tier list est une photographie du moment, pas un classement officiel — l'auteur original l'a construite à partir de tests personnels et des retours de la communauté, sans transparence totale de l'éditeur du jeu sur les chiffres exacts. Considérez-la comme un point de départ pratique, pas comme une vérité absolue, et attendez-vous à ce qu'elle évolue avec le méta.",
      "这份等级榜只是一个快照，并非官方排名——原作者根据个人测试和社区反馈制作，游戏发行商并未完全公开确切数值。请把它当作实用的起点，而不是金科玉律，并预期它会随版本环境变化而调整。",
      "Этот тир-лист — снимок текущего момента, а не официальный рейтинг: автор составил его на основе личного тестирования и отзывов сообщества, без полной прозрачности точных цифр со стороны издателя игры. Относитесь к нему как к практической отправной точке, а не как к истине в последней инстанции, и ожидайте, что он будет меняться вместе с метой."
    ),
  },
];

// ---------------- Password gate decoy content (Field Reference) ----------------
// The Field Reference page is reachable directly via #/reference,
// not just through a march detail page, so it needs its own decoy
// data — same shape as the real reference datasets above, entirely
// made-up names, so nothing real is ever present in the page while
// the debuff passphrase hasn't been entered this session.
const DECOY_STRATEGY_OVERVIEW = [
  {
    title: L("Swarm vs. Solo", "Swarm vs. Solo", "Swarm vs. Solo", "Essaim vs. Solo", "集群对单人", "Рой против Соло"),
    body: L(
      "It's always preferable to focus on the swarm strategy — a coordinated debuff attack from 6 or more players, striking one to two seconds after the previous attacker. A swarm is far less costly per player and lets you use fewer debuffers overall. Falling back to solo debuffing is a valid choice when a swarm isn't realistic (low activity, off hours), but expect noticeably higher losses.",
      "Siempre es preferible enfocarse en la estrategia swarm — un ataque debuff coordinado de 6 o más jugadores, golpeando uno o dos segundos después del atacante anterior. Un swarm es mucho menos costoso por jugador y te permite usar menos debuffers en total. Recurrir al debuff solo es una opción válida cuando un swarm no es realista (poca actividad, horarios de baja conexión), pero esperá pérdidas notablemente más altas.",
      "É sempre preferível focar na estratégia de swarm — um ataque de debuff coordenado de 6 ou mais jogadores, atacando um ou dois segundos depois do atacante anterior. Um swarm custa muito menos por jogador e permite usar menos debuffers no total. Recorrer ao debuff solo é uma opção válida quando um swarm não é realista (pouca atividade, horários de baixa conexão), mas espere perdas visivelmente maiores.",
      "Il est toujours préférable de se concentrer sur la stratégie d'essaim — une attaque debuff coordonnée de 6 joueurs ou plus, frappant une à deux secondes après l'attaquant précédent. Un essaim coûte beaucoup moins cher par joueur et permet d'utiliser moins de debuffers au total. Se rabattre sur le debuff solo est un choix valable quand un essaim n'est pas réaliste (faible activité, heures creuses), mais attendez-vous à des pertes nettement plus élevées.",
      "始终优先采用集群策略——由6名或更多玩家协同发起的减益攻击，每人在前一名攻击者之后一到两秒出手。集群的人均成本低得多，整体上也能少用一些减益英雄。当集群不现实时（活跃度低、非高峰时段），退回单人减益也是合理选择，但要预期明显更高的损失。",
      "Всегда предпочтительнее делать ставку на стратегию роя — скоординированную атаку с дебаффами от 6 и более игроков, бьющих с интервалом в одну-две секунды после предыдущего атакующего. Рой обходится намного дешевле в пересчёте на игрока и позволяет использовать меньше дебаферов в целом. Переход на соло-дебафф — допустимый выбор, когда рой нереалистичен (низкая активность, неудобное время), но тогда ждите заметно более высоких потерь."
    ),
  },
  {
    title: L("The Wardbreaker mechanic", "El mecanismo de Wardbreaker", "O mecanismo de Wardbreaker", "Le mécanisme de Wardbreaker", "Wardbreaker 机制", "Механика Wardbreaker"),
    body: L(
      "Most of the swarm strategy is built around one skill: Wardbreaker, which weakens the target's defenses on a short cooldown. That's what keeps swarm losses low. It stops working entirely against status immunity (e.g. Divine Shield), which is when most swarm losses actually happen.",
      "La mayor parte de la estrategia swarm está construida alrededor de una sola habilidad: Wardbreaker, que debilita las defensas del objetivo con un cooldown corto. Eso es lo que mantiene bajas las pérdidas del swarm. Deja de funcionar por completo contra la inmunidad a estados (p. ej. Divine Shield), que es justo cuando ocurren la mayoría de las pérdidas del swarm.",
      "A maior parte da estratégia de swarm é construída em torno de uma única habilidade: Wardbreaker, que enfraquece as defesas do alvo com um cooldown curto. É isso que mantém as perdas do swarm baixas. Ela deixa de funcionar por completo contra imunidade a estados (por ex. Divine Shield), que é justamente quando acontece a maioria das perdas do swarm.",
      "La majeure partie de la stratégie d'essaim repose sur une seule compétence : Wardbreaker, qui affaiblit les défenses de la cible avec un temps de recharge court. C'est ce qui maintient les pertes de l'essaim basses. Elle cesse complètement de fonctionner contre l'immunité aux statuts (par ex. Divine Shield), et c'est justement là que se produisent la plupart des pertes de l'essaim.",
      "集群策略的大部分都围绕一个技能构建：Wardbreaker，它以较短的冷却时间削弱目标的防御。这正是集群损失保持较低的原因。它对状态免疫（例如 Divine Shield）完全无效，而集群的大部分损失正是发生在这种时候。",
      "Бо́льшая часть стратегии роя строится вокруг одного навыка: Wardbreaker, который ослабляет защиту цели с коротким временем восстановления. Именно это удерживает потери роя на низком уровне. Навык полностью перестаёт работать против иммунитета к статусам (например, Divine Shield), и именно тогда происходит большинство потерь роя."
    ),
  },
  {
    title: L("What a debuff march is actually for", "Para qué sirve realmente una marcha debuff", "Para que serve de verdade uma marcha de debuff", "À quoi sert vraiment une marche debuff", "减益行军到底有什么用", "Для чего на самом деле нужен марш с дебаффами"),
    body: L(
      "A debuff march's job isn't to deal damage. It's to reduce the target's defensive capabilities, apply negative effects, and survive as long as possible while doing it cheaply. The damage the debuff troops themselves deal doesn't matter — what matters is the status inflicted on the target.",
      "El trabajo de una marcha debuff no es hacer daño. Es reducir las capacidades defensivas del objetivo, aplicar efectos negativos y sobrevivir el mayor tiempo posible haciéndolo de forma barata. No importa el daño que hagan las tropas debuff en sí — lo que importa es el estado que se le inflige al objetivo.",
      "O trabalho de uma marcha de debuff não é causar dano. É reduzir as capacidades defensivas do alvo, aplicar efeitos negativos e sobreviver o máximo possível fazendo isso de forma barata. O dano que as próprias tropas de debuff causam não importa — o que importa é o estado infligido ao alvo.",
      "Le rôle d'une marche debuff n'est pas d'infliger des dégâts. C'est de réduire les capacités défensives de la cible, d'appliquer des effets négatifs et de survivre le plus longtemps possible en le faisant à moindre coût. Les dégâts infligés par les troupes debuff elles-mêmes n'ont pas d'importance — ce qui compte, c'est le statut imposé à la cible.",
      "减益行军的任务不是造成伤害，而是削弱目标的防御能力、施加负面效果，并以低成本尽可能长时间地存活。减益部队自身造成的伤害并不重要——重要的是施加在目标身上的状态。",
      "Задача марша с дебаффами не в том, чтобы наносить урон. Она в том, чтобы снижать защитные характеристики цели, накладывать негативные эффекты и выживать как можно дольше, делая это максимально дёшево. Урон, который наносят сами войска с дебаффами, неважен — важен статус, наложенный на цель."
    ),
  },
  {
    title: L("A note on this reference", "Una nota sobre esta referencia", "Uma nota sobre esta referência", "Une note sur cette référence", "关于本参考资料的说明", "Примечание об этом справочнике"),
    body: L(
      "This tier list is a snapshot, not an official ranking — the original author built it from personal testing and community feedback, without full transparency from the game's publisher on exact numbers. Treat it as a practical starting point, not gospel, and expect it to shift as the meta does.",
      "Esta tier list es una foto del momento, no un ranking oficial — el autor original la armó con pruebas propias y feedback de la comunidad, sin transparencia total por parte del publisher del juego sobre los números exactos. Tomala como un punto de partida práctico, no como palabra santa, y esperá que cambie a medida que cambie el meta.",
      "Esta tier list é um retrato do momento, não um ranking oficial — o autor original a montou a partir de testes pessoais e feedback da comunidade, sem transparência total da publisher do jogo sobre os números exatos. Trate-a como um ponto de partida prático, não como verdade absoluta, e espere que ela mude conforme o meta mudar.",
      "Cette tier list est une photographie du moment, pas un classement officiel — l'auteur original l'a construite à partir de tests personnels et des retours de la communauté, sans transparence totale de l'éditeur du jeu sur les chiffres exacts. Considérez-la comme un point de départ pratique, pas comme une vérité absolue, et attendez-vous à ce qu'elle évolue avec le méta.",
      "这份等级榜只是一个快照，并非官方排名——原作者根据个人测试和社区反馈制作，游戏发行商并未完全公开确切数值。请把它当作实用的起点，而不是金科玉律，并预期它会随版本环境变化而调整。",
      "Этот тир-лист — снимок текущего момента, а не официальный рейтинг: автор составил его на основе личного тестирования и отзывов сообщества, без полной прозрачности точных цифр со стороны издателя игры. Относитесь к нему как к практической отправной точке, а не как к истине в последней инстанции, и ожидайте, что он будет меняться вместе с метой."
    ),
  },
];

const DECOY_SKILL_TIER_LIST = [
  { tier: "S", skills: ["Wardbreaker", "Null Ward", "Grim Verdict"] },
  { tier: "A", skills: ["Dawnbreak", "Hollow Step", "Fatewoven"] },
  { tier: "B", skills: ["Venom Lash", "Crushing Charge", "Ember Burst", "Reckless Swing"] },
  { tier: "C", skills: ["Barbed Shot", "Shade Step", "Mute Strike", "Rust Arrow"] },
  { tier: "D", skills: ["Old Crossbow", "Raven's Gaze", "Loose Chains"] },
];

const DECOY_HERO_TIER_LIST = [
  { tier: "S", heroes: ["Skjold", "Freya"] },
  { tier: "A", heroes: ["Torvald", "Mireille"] },
  { tier: "B", heroes: ["Baldric", "Oswin", "Ingrid", "Percival"] },
  { tier: "C", heroes: ["Dagrun", "Alaric", "Wenna", "Cedric"] },
  { tier: "D", heroes: ["Hildegard", "Osric", "Brynjar", "Maelis"] },
];

// ---------------- Password gate decoy content (march detail) ----------------
// Shown INSTEAD of the real march detail whenever the debuff
// passphrase hasn't been entered for this session — not just
// blurred behind the modal like before, so there's nothing real
// left in the page for someone to read via dev tools while it's
// locked. Same shape as a real march object, entirely made-up
// names (none of these exist in the asset catalog, so they render
// with the normal letter-fallback style automatically).
const DECOY_DEBUFF_MARCH = {
  id: "decoy",
  title: L("Debuff — 1 March: Skjold & Freya", "Debuff — 1 Marcha: Skjold y Freya", "Debuff — 1 Marcha: Skjold e Freya", "Debuff — 1 Marche : Skjold et Freya", "减益 — 1支行军：Skjold 与 Freya", "Дебафф — 1 Марш: Скьольд и Фрейя"),
  category: "debuff",
  strategy: "swarm",
  difficulty: 2,
  status: "proven",
  media: [],
  recommendedTier: "T5 (see tier cost notes)",
  recommendedHeroes: ["Skjold", "Freya"],
  summary: L(
    "A balanced generalist debuff march built around Wardbreaker, softening a target's defenses before the rally lands.",
    "Una marcha debuff generalista y equilibrada, construida alrededor de Wardbreaker, que debilita las defensas de un objetivo antes de que aterrice el rally.",
    "Uma marcha de debuff generalista e equilibrada, construída em torno de Wardbreaker, que enfraquece as defesas de um alvo antes de o rally chegar.",
    "Une marche debuff généraliste et équilibrée, construite autour de Wardbreaker, qui affaiblit les défenses d'une cible avant l'arrivée du ralliement.",
    "一支均衡的通用型减益行军，围绕 Wardbreaker 构建，在集结抵达前削弱目标的防御。",
    "Сбалансированный универсальный марш с дебаффами, построенный вокруг Wardbreaker, ослабляющий защиту цели перед прибытием ралли."
  ),
  detail: {
    useCase: L("Debuff · Swarm · Rally support", "Debuff · Swarm · Apoyo de rally", "Debuff · Swarm · Apoio de rally", "Debuff · Essaim · Soutien de ralliement", "减益 · 集群 · 集结支援", "Дебафф · Рой · Поддержка ралли"),
    quickSteps: [
      L("Coordinate timing with the rest of the swarm before sending.", "Coordiná el timing con el resto del swarm antes de enviar.", "Coordene o timing com o resto do swarm antes de enviar.", "Coordonnez le timing avec le reste de l'essaim avant d'envoyer.", "出发前与集群其余成员协调好时机。", "Согласуйте тайминг с остальным роем перед отправкой."),
      L("Send alongside the other swarm debuffers, not alone.", "Enviala junto con el resto de los debuffers del swarm, no sola.", "Envie junto com os outros debuffers do swarm, não sozinha.", "Envoyez-la avec les autres debuffers de l'essaim, pas seule.", "与集群中的其他减益英雄一起派出，不要单独出击。", "Отправляйте вместе с остальными дебаферами роя, а не в одиночку."),
      L("Let Wardbreaker weaken the target's defenses.", "Dejá que Wardbreaker debilite las defensas del objetivo.", "Deixe Wardbreaker enfraquecer as defesas do alvo.", "Laissez Wardbreaker affaiblir les défenses de la cible.", "让 Wardbreaker 削弱目标的防御。", "Дайте Wardbreaker ослабить защиту цели."),
      L("Hold position while the swarm's rally lands.", "Mantené posición mientras aterriza el rally del swarm.", "Mantenha a posição enquanto o rally do swarm chega.", "Tenez votre position pendant que le ralliement de l'essaim arrive.", "在集群的集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли роя."),
    ],
    objective: L(
      "Weaken an enemy garrison's defensive stats before the rally arrives, so the killing blow lands with minimal losses.",
      "Debilitar las estadísticas defensivas de una guarnición enemiga antes de que llegue el rally, para que el golpe final aterrice con pérdidas mínimas.",
      "Enfraquecer as estatísticas defensivas de uma guarnição inimiga antes de o rally chegar, para que o golpe final aconteça com perdas mínimas.",
      "Affaiblir les statistiques défensives d'une garnison ennemie avant l'arrivée du ralliement, pour que le coup de grâce arrive avec des pertes minimales.",
      "在集结抵达前削弱敌方驻军的防御属性，使致命一击以最小的损失落下。",
      "Ослабить защитные характеристики вражеского гарнизона до прибытия ралли, чтобы решающий удар прошёл с минимальными потерями."
    ),
    whenToUse: L(
      "Use as part of a coordinated swarm of 6 or more debuffers, timed one to two seconds after the previous attacker.",
      "Usala como parte de un swarm coordinado de 6 o más debuffers, con el timing de uno a dos segundos después del atacante anterior.",
      "Use como parte de um swarm coordenado de 6 ou mais debuffers, com o timing de um a dois segundos depois do atacante anterior.",
      "À utiliser dans le cadre d'un essaim coordonné de 6 debuffers ou plus, synchronisé une à deux secondes après l'attaquant précédent.",
      "作为由6名或更多减益英雄组成的协同集群的一部分使用，时机为前一名攻击者之后一到两秒。",
      "Используйте как часть скоординированного роя из 6 и более дебаферов, с интервалом в одну-две секунды после предыдущего атакующего."
    ),
    counters: L(
      "Vulnerable to status immunity effects and to marches with high individual troop toughness.",
      "Vulnerable a efectos de inmunidad a estados y a marchas con tropas individuales muy resistentes.",
      "Vulnerável a efeitos de imunidade a estados e a marchas com tropas individuais muito resistentes.",
      "Vulnérable aux effets d'immunité aux statuts et aux marches dont les troupes individuelles sont très résistantes.",
      "易受状态免疫效果影响，也怕单兵体质很高的行军。",
      "Уязвим к эффектам иммунитета к статусам и к маршам с высокой индивидуальной прочностью войск."
    ),
    commonMistakes: [
      L("Sending it alone instead of as part of a coordinated swarm.", "Enviarla sola en vez de como parte de un swarm coordinado.", "Enviá-la sozinha em vez de como parte de um swarm coordenado.", "L'envoyer seule au lieu de dans le cadre d'un essaim coordonné.", "单独派出，而不是作为协同集群的一部分。", "Отправлять его в одиночку вместо скоординированного роя."),
      L("Not confirming Wardbreaker is active before sending.", "No confirmar que Wardbreaker esté activo antes de enviar.", "Não confirmar que Wardbreaker está ativo antes de enviar.", "Ne pas confirmer que Wardbreaker est actif avant d'envoyer.", "出发前没有确认 Wardbreaker 已生效。", "Не проверять, активен ли Wardbreaker, перед отправкой."),
    ],
    pros: [
      L("Reliable, low-fuss swarm debuffer", "Debuffer de swarm confiable y sin complicaciones", "Debuffer de swarm confiável e sem complicação", "Debuffer d'essaim fiable et sans complications", "可靠、省心的集群减益英雄", "Надёжный, беспроблемный дебафер для роя"),
      L("Only needs two widely-available heroes", "Solo necesita dos héroes ampliamente disponibles", "Só precisa de dois heróis amplamente disponíveis", "Ne nécessite que deux héros largement disponibles", "只需要两名容易获得的英雄", "Требует всего двух широкодоступных героев"),
    ],
    cons: [
      L("Needs a coordinated swarm to reach full value", "Necesita un swarm coordinado para alcanzar todo su valor", "Precisa de um swarm coordenado para atingir todo o seu valor", "Nécessite un essaim coordonné pour atteindre sa pleine valeur", "需要协同集群才能发挥全部价值", "Требует скоординированного роя, чтобы раскрыть весь потенциал"),
      L("Lower ceiling than the higher-investment options", "Techo más bajo que las opciones de mayor inversión", "Teto mais baixo que as opções de maior investimento", "Plafond plus bas que les options nécessitant plus d'investissement", "上限低于投入更高的选项", "Более низкий потолок, чем у вариантов с бо́льшими вложениями"),
    ],
    heroes: [
      {
        name: "Skjold",
        rarity: "Epic",
        roleTag: "Debuff",
        commander: "main",
        note: L("Carries Wardbreaker, the core skill this build is built around.", "Lleva Wardbreaker, la habilidad central alrededor de la cual está construida esta build.", "Leva Wardbreaker, a habilidade central em torno da qual esta build é construída.", "Porte Wardbreaker, la compétence centrale autour de laquelle cette build est construite.", "携带 Wardbreaker，这套配置正是围绕这个核心技能构建的。", "Несёт Wardbreaker, ключевой навык, вокруг которого построена эта сборка."),
        skills: [{ name: "Wardbreaker", note: "Weakens target defenses" }, null],
      },
      {
        name: "Freya",
        rarity: "Legendary",
        roleTag: "Support",
        commander: "secondary",
        note: L("Rounds out the kit — her exact skill picks are flexible here.", "Completa el kit — la elección exacta de sus habilidades es flexible acá.", "Completa o kit — a escolha exata das habilidades dela é flexível aqui.", "Complète le kit — le choix exact de ses compétences est flexible ici.", "补全整套配置——她的具体技能选择在此较为灵活。", "Дополняет набор — конкретный выбор её навыков здесь гибкий."),
        skills: [null, null],
      },
    ],
    troopComposition: L(
      "Prefer pikemen with defense mounts/equipment; infantry as second choice; archers last.",
      "Preferí piqueros con monturas/equipo de defensa; infantería como segunda opción; arqueros al final.",
      "Prefira piqueiros com montarias/equipamento de defesa; infantaria como segunda opção; arqueiros por último.",
      "Privilégiez les piquiers avec montures/équipement défensifs ; l'infanterie en second choix ; les archers en dernier.",
      "优先选择配备防御坐骑/装备的长枪兵；步兵次之；弓兵最后。",
      "Предпочтительны копейщики с защитными ездовыми/снаряжением; пехота как второй вариант; лучники в последнюю очередь."
    ),
    troopTierNote: true,
    mount: null,
    mountSkills: [null, null],
    equipment: [null, null, null, null],
    related: [],
  },
};

const MARCHES = [
  {
    id: "swarm-1-leandra-artur",
    title: L("Swarm — 1 March: Leandra & Artur", "Swarm — 1 Marcha: Leandra y Artur", "Swarm — 1 Marcha: Leandra e Artur", "Essaim — 1 Marche : Leandra et Artur", "集群 — 1支行军：Leandra 与 Artur", "Рой — 1 Марш: Леандра и Артур"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 2,
    status: "proven",
    media: [],
    recommendedTier: "T3 – T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Artur"],
    summary: L(
      "The single-march swarm option. Generalist debuffs that cost you the least losses: counterattack reduction, defense reduction, rage depletion, and Broken Blade on the target.",
      "La opción de swarm con una sola marcha. Debuffs generalistas que te cuestan las menores pérdidas: reducción de contraataque, reducción de defensa, pérdida de rabia y Broken Blade sobre el objetivo.",
      "A opção de swarm com uma única marcha. Debuffs generalistas que custam as menores perdas: redução de contra-ataque, redução de defesa, perda de raiva e Broken Blade sobre o alvo.",
      "L'option d'essaim à une seule marche. Debuffs généralistes qui vous coûtent le moins de pertes : réduction des contre-attaques, réduction de défense, épuisement de rage et Broken Blade sur la cible.",
      "单行军集群方案。通用型减益，损失最小：降低反击、降低防御、削减怒气，并对目标施加 Broken Blade。",
      "Вариант роя с одним маршем. Универсальные дебаффы с наименьшими потерями: снижение контратак, снижение защиты, истощение рабочей ярости и Broken Blade на цели."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Rally support", "Debuff · Swarm · Apoyo de rally", "Debuff · Swarm · Apoio de rally", "Debuff · Essaim · Soutien de ralliement", "减益 · 集群 · 集结支援", "Дебафф · Рой · Поддержка ралли"),
      quickSteps: [
        L("Wait for the war commanders' call — don't start a swarm on your own.", "Esperá el llamado de los comandantes de guerra — no arranques un swarm por tu cuenta.", "Espere o chamado dos comandantes de guerra — não comece um swarm por conta própria.", "Attendez le signal des commandants de guerre — ne lancez pas un essaim de votre propre initiative.", "等待战争指挥官的号令——不要自行发起集群。", "Дождитесь команды военных командиров — не начинайте рой самостоятельно."),
        L("Strike one to two seconds after the previous attacker in the swarm.", "Golpeá uno o dos segundos después del atacante anterior en el swarm.", "Ataque um ou dois segundos depois do atacante anterior no swarm.", "Frappez une à deux secondes après l'attaquant précédent de l'essaim.", "在集群中前一名攻击者之后一到两秒出手。", "Атакуйте через одну-две секунды после предыдущего атакующего в рое."),
        L("Let Containment apply Broken Blade to neutralize counterattacks.", "Dejá que Containment aplique Broken Blade para neutralizar los contraataques.", "Deixe Containment aplicar Broken Blade para neutralizar os contra-ataques.", "Laissez Containment appliquer Broken Blade pour neutraliser les contre-attaques.", "让 Containment 施加 Broken Blade 以压制反击。", "Дайте Containment наложить Broken Blade, чтобы нейтрализовать контратаки."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Give the rally the highest possible survivability with the fewest heroes: Artur's Containment shuts down counterattacks via Broken Blade, while Leandra rounds it out with defense reduction and rage depletion.",
        "Darle al rally la mayor supervivencia posible con la menor cantidad de héroes: Containment de Artur frena los contraataques vía Broken Blade, mientras Leandra completa el combo con reducción de defensa y pérdida de rabia.",
        "Dar ao rally a maior sobrevivência possível com o menor número de heróis: Containment do Artur barra os contra-ataques via Broken Blade, enquanto Leandra completa o combo com redução de defesa e perda de raiva.",
        "Donner au ralliement la meilleure survie possible avec le moins de héros : Containment d'Artur bloque les contre-attaques via Broken Blade, tandis que Leandra complète le combo avec réduction de défense et épuisement de rage.",
        "用最少的英雄为集结提供尽可能高的生存能力：Artur 的 Containment 通过 Broken Blade 封死反击，而 Leandra 以降低防御和削减怒气补全整套效果。",
        "Дать ралли максимально возможную живучесть с минимальным числом героев: Containment Артура останавливает контратаки через Broken Blade, а Леандра дополняет это снижением защиты и истощением ярости."
      ),
      whenToUse: L(
        "This is the default single-march swarm setup — the best option if you only want to run one debuff march. If you need more debuff coverage, use one of the two-march Swarm combinations instead, but expect more injuries and remember to fill the empty slots with A-tier skills.",
        "Esta es la configuración de swarm con una marcha por defecto — la mejor opción si solo querés correr una marcha debuff. Si necesitás más cobertura de debuff, usá una de las combinaciones de Swarm con dos marchas en su lugar, pero esperá más heridos y acordate de completar los slots vacíos con habilidades A-tier.",
        "Esta é a configuração padrão de swarm com uma marcha — a melhor opção se você só quer rodar uma marcha de debuff. Se precisar de mais cobertura de debuff, use uma das combinações de Swarm com duas marchas, mas espere mais feridos e lembre-se de preencher os slots vazios com habilidades de tier A.",
        "C'est la configuration d'essaim à une marche par défaut — la meilleure option si vous ne voulez faire tourner qu'une seule marche debuff. Si vous avez besoin de plus de couverture debuff, utilisez plutôt l'une des combinaisons d'Essaim à deux marches, mais attendez-vous à plus de blessés et pensez à remplir les emplacements vides avec des compétences de tier A.",
        "这是默认的单行军集群配置——如果你只想出一支减益行军，这是最佳选择。如果需要更多减益覆盖，请改用双行军集群组合，但要预期更多伤兵，并记得用A级技能补满空槽。",
        "Это стандартная конфигурация роя с одним маршем — лучший вариант, если вы хотите вести только один марш с дебаффами. Если нужно больше покрытия дебаффов, используйте одну из комбинаций роя с двумя маршами, но тогда ждите больше раненых и не забудьте заполнить пустые слоты навыками A-тира."
      ),
      counters: L(
        "Vulnerable to status immunity (e.g. from Divine Shield) — Broken Blade can't be applied while it's up, and that's when most of the swarm's losses happen. Also depends on the swarm actually being coordinated; going in solo loses most of the value.",
        "Vulnerable a la inmunidad a estados (p. ej. por Divine Shield) — Broken Blade no se puede aplicar mientras está activa, y es justo ahí cuando ocurren la mayoría de las pérdidas del swarm. También depende de que el swarm esté realmente coordinado; ir sola pierde la mayor parte del valor.",
        "Vulnerável à imunidade a estados (por ex. por Divine Shield) — Broken Blade não pode ser aplicado enquanto ela estiver ativa, e é justamente aí que acontece a maioria das perdas do swarm. Também depende de o swarm estar realmente coordenado; ir sozinha perde a maior parte do valor.",
        "Vulnérable à l'immunité aux statuts (par ex. via Divine Shield) — Broken Blade ne peut pas être appliqué tant qu'elle est active, et c'est justement là que se produisent la plupart des pertes de l'essaim. Dépend aussi d'une réelle coordination de l'essaim ; y aller seule fait perdre l'essentiel de la valeur.",
        "易受状态免疫（例如来自 Divine Shield）影响——免疫期间无法施加 Broken Blade，而集群的大部分损失正是发生在这个时候。同时也取决于集群是否真正协同；单独出击会损失大部分价值。",
        "Уязвим к иммунитету к статусам (например, от Divine Shield) — пока он активен, Broken Blade наложить нельзя, и именно тогда происходит большинство потерь роя. Также зависит от реальной координации роя; одиночная отправка теряет бо́льшую часть ценности."
      ),
      commonMistakes: [
        L("Starting the swarm without the war commanders' call — timing is coordinated, not improvised.", "Arrancar el swarm sin el llamado de los comandantes de guerra — el timing es coordinado, no improvisado.", "Começar o swarm sem o chamado dos comandantes de guerra — o timing é coordenado, não improvisado.", "Lancer l'essaim sans le signal des commandants de guerre — le timing est coordonné, pas improvisé.", "没有战争指挥官的号令就发起集群——时机是协同安排的，不是临时发挥的。", "Начинать рой без команды военных командиров — тайминг координируется, а не импровизируется."),
        L("Leaving Leandra's skill slots on generic picks instead of the current S/A-tier options.", "Dejar los slots de habilidad de Leandra con elecciones genéricas en vez de las opciones S/A-tier actuales.", "Deixar os slots de habilidade da Leandra com escolhas genéricas em vez das opções atuais de tier S/A.", "Laisser les emplacements de compétences de Leandra sur des choix génériques au lieu des options de tier S/A actuelles.", "把 Leandra 的技能槽留给通用技能，而不是当前的 S/A 级选项。", "Оставлять слоты навыков Леандры с общими вариантами вместо актуальных S/A-тир опций."),
        L("Not accounting for status-immune targets, where losses spike.", "No tener en cuenta los objetivos inmunes a estados, donde las pérdidas se disparan.", "Não levar em conta alvos imunes a estados, onde as perdas disparam.", "Ne pas tenir compte des cibles immunisées aux statuts, où les pertes explosent.", "没有考虑状态免疫的目标，这类目标上损失会激增。", "Не учитывать цели с иммунитетом к статусам, где потери резко возрастают."),
      ],
      pros: [
        L("Lowest losses of any debuff option — the generalist pick", "Las menores pérdidas de cualquier opción debuff — la elección generalista", "As menores perdas de qualquer opção de debuff — a escolha generalista", "Les pertes les plus basses de toutes les options debuff — le choix généraliste", "所有减益方案中损失最低——通用型首选", "Наименьшие потери среди всех вариантов дебаффа — универсальный выбор"),
        L("Only needs two heroes, both widely available", "Solo necesita dos héroes, ambos ampliamente disponibles", "Só precisa de dois heróis, ambos amplamente disponíveis", "Ne nécessite que deux héros, tous deux largement disponibles", "只需要两名英雄，且都很容易获得", "Требует всего двух героев, оба широкодоступны"),
        L("Straightforward to run if you only want one march", "Fácil de correr si solo querés una marcha", "Fácil de rodar se você só quer uma marcha", "Simple à utiliser si vous ne voulez qu'une seule marche", "如果只想出一支行军，运用起来很简单", "Прост в использовании, если нужен только один марш"),
      ],
      cons: [
        L("Still needs a coordinated swarm (6+ players) to hit full value", "Igual necesita un swarm coordinado (6+ jugadores) para alcanzar todo su valor", "Ainda precisa de um swarm coordenado (6+ jogadores) para atingir todo o seu valor", "Nécessite quand même un essaim coordonné (6+ joueurs) pour atteindre sa pleine valeur", "仍然需要协同集群（6名以上玩家）才能发挥全部价值", "Всё равно требует скоординированного роя (6+ игроков) для полной ценности"),
        L("Less debuff coverage than the two-march Swarm setup", "Menos cobertura de debuff que la configuración de Swarm con dos marchas", "Menos cobertura de debuff que a configuração de Swarm com duas marchas", "Moins de couverture debuff que la configuration d'Essaim à deux marches", "减益覆盖少于双行军集群配置", "Меньше покрытия дебаффов, чем конфигурация роя с двумя маршами"),
      ],
      heroes: [
        {
          name: "Artur",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Carries Containment — the key skill this entire swarm strategy is built around, applying Broken Blade to the target every 12 seconds and neutralizing its basic counterattacks.",
            "Lleva Containment — la habilidad clave alrededor de la cual está construida toda esta estrategia de swarm, aplicando Broken Blade al objetivo cada 12 segundos y neutralizando sus contraataques básicos.",
            "Leva Containment — a habilidade-chave em torno da qual toda esta estratégia de swarm é construída, aplicando Broken Blade ao alvo a cada 12 segundos e neutralizando seus contra-ataques básicos.",
            "Porte Containment — la compétence clé autour de laquelle toute cette stratégie d'essaim est construite, appliquant Broken Blade à la cible toutes les 12 secondes et neutralisant ses contre-attaques de base.",
            "携带 Containment——整个集群策略围绕的关键技能，每12秒对目标施加 Broken Blade，压制其普通反击。",
            "Несёт Containment — ключевой навык, вокруг которого построена вся эта стратегия роя, накладывающий Broken Blade на цель каждые 12 секунд и нейтрализующий её базовые контратаки."
          ),
          skills: [
            { name: "Containment", note: "Applies Broken Blade every 12s" },
            null,
          ],
        },
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Support",
          commander: "secondary",
          note: L(
            "Rounds out the generalist kit with defense reduction and rage depletion on the target. Her exact skill picks are flexible here — fill per the current skill tier list.",
            "Completa el kit generalista con reducción de defensa y pérdida de rabia sobre el objetivo. La elección exacta de sus habilidades es flexible acá — completala según la tier list de habilidades actual.",
            "Completa o kit generalista com redução de defesa e perda de raiva no alvo. A escolha exata das habilidades dela é flexível aqui — preencha conforme a tier list de habilidades atual.",
            "Complète le kit généraliste avec réduction de défense et épuisement de rage sur la cible. Le choix exact de ses compétences est flexible ici — à remplir selon la tier list de compétences actuelle.",
            "以降低防御和削减怒气补全通用配置。她的具体技能选择在此较为灵活——按当前技能等级榜填写。",
            "Дополняет универсальный набор снижением защиты и истощением ярости цели. Конкретный выбор её навыков здесь гибкий — заполняйте по актуальному тир-листу навыков."
          ),
          skills: [null, null],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-leandra-yulmi", "swarm-2-rosky-artur"],
    },
  },
  {
    id: "swarm-2-leandra-yulmi",
    title: L("Swarm — 2 Marches: Leandra & Yulmi", "Swarm — 2 Marchas: Leandra y Yulmi", "Swarm — 2 Marchas: Leandra e Yulmi", "Essaim — 2 Marches : Leandra et Yulmi", "集群 — 2支行军：Leandra 与 Yulmi", "Рой — 2 Марша: Леандра и Юлми"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Yulmi"],
    summary: L(
      "One half of the most-used two-march Swarm setup (paired with Rosky & Artur). Leandra's burn interaction reliably triggers Fiery Detonation while Yulmi brings Hela's Curse.",
      "Una mitad de la configuración de Swarm con dos marchas más usada (emparejada con Rosky y Artur). La interacción de quemadura de Leandra activa de forma confiable Fiery Detonation, mientras Yulmi aporta Hela's Curse.",
      "Uma metade da configuração de Swarm com duas marchas mais usada (emparelhada com Rosky e Artur). A interação de queimadura da Leandra ativa de forma confiável Fiery Detonation, enquanto Yulmi traz Hela's Curse.",
      "Une moitié de la configuration d'Essaim à deux marches la plus utilisée (associée à Rosky et Artur). L'interaction de brûlure de Leandra déclenche de manière fiable Fiery Detonation, tandis que Yulmi apporte Hela's Curse.",
      "最常用的双行军集群配置的一半（与 Rosky 和 Artur 搭配）。Leandra 的灼烧联动能稳定触发 Fiery Detonation，而 Yulmi 带来 Hela's Curse。",
      "Одна половина самой часто используемой конфигурации роя с двумя маршами (в паре с Роски и Артуром). Взаимодействие с поджогом у Леандры надёжно активирует Fiery Detonation, пока Юлми приносит Hela's Curse."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Two-march setup (pair with Rosky & Artur)", "Debuff · Swarm · Configuración de dos marchas (emparejar con Rosky y Artur)", "Debuff · Swarm · Configuração de duas marchas (emparelhar com Rosky e Artur)", "Debuff · Essaim · Configuration à deux marches (associer à Rosky et Artur)", "减益 · 集群 · 双行军配置（与 Rosky 和 Artur 搭配）", "Дебафф · Рой · Конфигурация из двух маршей (в паре с Роски и Артуром)"),
      quickSteps: [
        L("Send together with the Rosky & Artur march — this is a two-march combo, not a standalone.", "Enviala junto con la marcha Rosky y Artur — es un combo de dos marchas, no una marcha independiente.", "Envie junto com a marcha Rosky e Artur — é um combo de duas marchas, não uma marcha independente.", "Envoyez-la avec la marche Rosky et Artur — c'est un combo à deux marches, pas une marche indépendante.", "与 Rosky 和 Artur 的行军一同派出——这是双行军组合，不是独立行军。", "Отправляйте вместе с маршем Роски и Артура — это комбинация из двух маршей, а не самостоятельный марш."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Leandra's burn chance keep Fiery Detonation reliably active.", "Dejá que la chance de quemadura de Leandra mantenga a Fiery Detonation activo de forma confiable.", "Deixe a chance de queimadura da Leandra manter Fiery Detonation ativo de forma confiável.", "Laissez la chance de brûlure de Leandra maintenir Fiery Detonation activement actif.", "让 Leandra 的灼烧几率稳定维持 Fiery Detonation 的触发。", "Дайте шансу поджога Леандры надёжно поддерживать активность Fiery Detonation."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Add health-stat reduction (Hela's Curse) and burn-triggered Fiery Detonation to the swarm's debuff coverage — this march is designed to run alongside Rosky & Artur, not alone.",
        "Sumar reducción de vida (Hela's Curse) y Fiery Detonation activado por quemadura a la cobertura de debuff del swarm — esta marcha está pensada para correr junto a Rosky y Artur, no sola.",
        "Somar redução de vida (Hela's Curse) e Fiery Detonation ativado por queimadura à cobertura de debuff do swarm — esta marcha foi pensada para rodar junto com Rosky e Artur, não sozinha.",
        "Ajouter une réduction des points de vie (Hela's Curse) et Fiery Detonation déclenché par brûlure à la couverture debuff de l'essaim — cette marche est conçue pour tourner avec Rosky et Artur, pas seule.",
        "为集群的减益覆盖增添生命属性削减（Hela's Curse）和由灼烧触发的 Fiery Detonation——这支行军设计为与 Rosky 和 Artur 一起出战，而非单独行动。",
        "Добавить снижение характеристик здоровья (Hela's Curse) и активируемый поджогом Fiery Detonation к покрытию дебаффов роя — этот марш рассчитан на использование вместе с Роски и Артуром, а не в одиночку."
      ),
      whenToUse: L(
        "The most useful two-march Swarm combination in most situations, run together with Rosky & Artur. Pick this over the single-march option when you want fuller debuff coverage and can accept somewhat higher losses.",
        "La combinación de Swarm con dos marchas más útil en la mayoría de las situaciones, corriendo junto con Rosky y Artur. Elegí esta por sobre la opción de una sola marcha cuando quieras más cobertura de debuff y puedas aceptar pérdidas algo más altas.",
        "A combinação de Swarm com duas marchas mais útil na maioria das situações, rodando junto com Rosky e Artur. Escolha esta em vez da opção de uma marcha quando quiser mais cobertura de debuff e puder aceitar perdas um pouco maiores.",
        "La combinaison d'Essaim à deux marches la plus utile dans la plupart des situations, utilisée avec Rosky et Artur. Préférez-la à l'option à une seule marche quand vous voulez une couverture debuff plus complète et pouvez accepter des pertes un peu plus élevées.",
        "在大多数情况下最实用的双行军集群组合，与 Rosky 和 Artur 一同出战。当你想要更完整的减益覆盖，并且能接受略高的损失时，请选择它而不是单行军方案。",
        "Самая полезная комбинация роя с двумя маршами в большинстве ситуаций, используется вместе с Роски и Артуром. Выбирайте её вместо варианта с одним маршем, когда хотите более полное покрытие дебаффов и готовы принять несколько более высокие потери."
      ),
      counters: L(
        "Fiery Detonation has no reliable activation on its own — it depends entirely on Leandra's burn chance landing. Devastating Charge can be swapped in when the enemy leans on shields or heals.",
        "Fiery Detonation no tiene una activación confiable por sí sola — depende por completo de que la chance de quemadura de Leandra se dé. Se puede cambiar por Devastating Charge cuando el enemigo depende de escudos o curación.",
        "Fiery Detonation não tem uma ativação confiável por si só — depende por completo de a chance de queimadura da Leandra acontecer. Pode ser trocada por Devastating Charge quando o inimigo depende de escudos ou cura.",
        "Fiery Detonation n'a pas d'activation fiable par elle-même — elle dépend entièrement du déclenchement de la chance de brûlure de Leandra. Devastating Charge peut la remplacer quand l'ennemi s'appuie sur des boucliers ou des soins.",
        "Fiery Detonation 自身没有可靠的触发方式——完全取决于 Leandra 的灼烧几率能否命中。当敌人依赖护盾或治疗时，可以换成 Devastating Charge。",
        "У Fiery Detonation нет надёжной активации самого по себе — он полностью зависит от срабатывания шанса поджога Леандры. Можно заменить на Devastating Charge, когда враг полагается на щиты или лечение."
      ),
      commonMistakes: [
        L("Running this march without its Rosky & Artur pair — it's designed as half of a two-march setup.", "Correr esta marcha sin su par Rosky y Artur — está pensada como la mitad de una configuración de dos marchas.", "Rodar esta marcha sem o par Rosky e Artur — ela foi pensada como a metade de uma configuração de duas marchas.", "Utiliser cette marche sans sa paire Rosky et Artur — elle est conçue comme la moitié d'une configuration à deux marches.", "没有搭配 Rosky 和 Artur 就单独出这支行军——它设计为双行军配置的一半。", "Использовать этот марш без пары Роски и Артура — он задуман как половина конфигурации из двух маршей."),
        L("Leaving the second skill slots unfilled instead of prioritizing current S/A tier picks.", "Dejar los segundos slots de habilidad sin completar en vez de priorizar las opciones S/A-tier actuales.", "Deixar os segundos slots de habilidade sem preencher em vez de priorizar as opções atuais de tier S/A.", "Laisser les deuxièmes emplacements de compétences vides au lieu de prioriser les choix de tier S/A actuels.", "不填满第二技能槽，而是没有优先选择当前的 S/A 级技能。", "Оставлять вторые слоты навыков незаполненными вместо приоритизации актуальных S/A-тир вариантов."),
      ],
      pros: [
        L("Reliable burn uptime thanks to Leandra's kit", "Uptime de quemadura confiable gracias al kit de Leandra", "Uptime de queimadura confiável graças ao kit da Leandra", "Temps de brûlure actif fiable grâce au kit de Leandra", "得益于 Leandra 的技能组，灼烧持续时间稳定", "Надёжный аптайм поджога благодаря набору Леандры"),
        L("Hela's Curse needs no specific hero prerequisite", "Hela's Curse no necesita ningún héroe específico como prerrequisito", "Hela's Curse não precisa de nenhum herói específico como pré-requisito", "Hela's Curse ne nécessite aucun héros spécifique comme prérequis", "Hela's Curse 不需要特定英雄作为前提", "Hela's Curse не требует конкретного героя в качестве предпосылки"),
        L("Fuller debuff coverage than the single-march option", "Más cobertura de debuff que la opción de una sola marcha", "Mais cobertura de debuff que a opção de uma marcha", "Couverture debuff plus complète que l'option à une seule marche", "减益覆盖比单行军方案更完整", "Более полное покрытие дебаффов, чем вариант с одним маршем"),
      ],
      cons: [
        L("Only half the setup — needs Rosky & Artur alongside it", "Solo la mitad de la configuración — necesita a Rosky y Artur junto a ella", "Só metade da configuração — precisa de Rosky e Artur junto com ela", "Seulement la moitié de la configuration — nécessite Rosky et Artur à ses côtés", "只是配置的一半——需要 Rosky 和 Artur 配合", "Только половина конфигурации — нужны Роски и Артур рядом"),
        L("Fiery Detonation's activation depends on Leandra's burn chance landing", "La activación de Fiery Detonation depende de que se dé la chance de quemadura de Leandra", "A ativação de Fiery Detonation depende de a chance de queimadura da Leandra acontecer", "L'activation de Fiery Detonation dépend du déclenchement de la chance de brûlure de Leandra", "Fiery Detonation 的触发取决于 Leandra 的灼烧几率能否命中", "Активация Fiery Detonation зависит от срабатывания шанса поджога Леандры"),
        L("Higher expected losses than the single-march option", "Pérdidas esperadas más altas que la opción de una sola marcha", "Perdas esperadas mais altas que a opção de uma marcha", "Pertes attendues plus élevées que l'option à une seule marche", "预期损失高于单行军方案", "Более высокие ожидаемые потери, чем в варианте с одним маршем"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Her burn-on-basic-attack chance is what keeps Fiery Detonation reliably active on this march.",
            "Su chance de quemadura en ataque básico es lo que mantiene a Fiery Detonation activo de forma confiable en esta marcha.",
            "A chance dela de queimar no ataque básico é o que mantém Fiery Detonation ativo de forma confiável nesta marcha.",
            "Sa chance de brûlure sur attaque de base est ce qui maintient Fiery Detonation activement actif sur cette marche.",
            "她普通攻击附带灼烧的几率，是这支行军中 Fiery Detonation 能稳定触发的关键。",
            "Её шанс поджога при базовой атаке — это то, что надёжно поддерживает активность Fiery Detonation в этом марше."
          ),
          skills: [
            { name: "Fiery Detonation", note: "Needs a burn source — relies on Leandra's own burn chance" },
            null,
          ],
        },
        {
          name: "Yulmi",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Innate active skill reduces the target's health point stats, on top of carrying Hela's Curse.",
            "Su habilidad activa innata reduce las estadísticas de vida del objetivo, además de llevar Hela's Curse.",
            "A habilidade ativa inata reduz as estatísticas de vida do alvo, além de levar Hela's Curse.",
            "Sa compétence active innée réduit les statistiques de points de vie de la cible, en plus de porter Hela's Curse.",
            "天生主动技能会降低目标的生命属性，同时还携带 Hela's Curse。",
            "Врождённая активная способность снижает характеристики здоровья цели, в дополнение к несению Hela's Curse."
          ),
          skills: [
            { name: "Hela's Curse", note: "S-tier, no hero prerequisite" },
            null,
          ],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-rosky-artur", "swarm-1-leandra-artur"],
    },
  },
  {
    id: "swarm-2-rosky-artur",
    title: L("Swarm — 2 Marches: Rosky & Artur", "Swarm — 2 Marchas: Rosky y Artur", "Swarm — 2 Marchas: Rosky e Artur", "Essaim — 2 Marches : Rosky et Artur", "集群 — 2支行军：Rosky 与 Artur", "Рой — 2 Марша: Роски и Артур"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Rosky", "Artur"],
    summary: L(
      "The other half of the most-used two-march Swarm setup (paired with Leandra & Yulmi). Rosky strips target defenses while Artur's Containment keeps Broken Blade active.",
      "La otra mitad de la configuración de Swarm con dos marchas más usada (emparejada con Leandra y Yulmi). Rosky despoja de defensas al objetivo mientras Containment de Artur mantiene a Broken Blade activo.",
      "A outra metade da configuração de Swarm com duas marchas mais usada (emparelhada com Leandra e Yulmi). Rosky despoja o alvo de defesas enquanto Containment do Artur mantém Broken Blade ativo.",
      "L'autre moitié de la configuration d'Essaim à deux marches la plus utilisée (associée à Leandra et Yulmi). Rosky dépouille la cible de ses défenses tandis que Containment d'Artur maintient Broken Blade actif.",
      "最常用的双行军集群配置的另一半（与 Leandra 和 Yulmi 搭配）。Rosky 削除目标的防御，而 Artur 的 Containment 维持 Broken Blade 持续生效。",
      "Другая половина самой часто используемой конфигурации роя с двумя маршами (в паре с Леандрой и Юлми). Роски снимает защиту цели, пока Containment Артура поддерживает активность Broken Blade."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Two-march setup (pair with Leandra & Yulmi)", "Debuff · Swarm · Configuración de dos marchas (emparejar con Leandra y Yulmi)", "Debuff · Swarm · Configuração de duas marchas (emparelhar com Leandra e Yulmi)", "Debuff · Essaim · Configuration à deux marches (associer à Leandra et Yulmi)", "减益 · 集群 · 双行军配置（与 Leandra 和 Yulmi 搭配）", "Дебафф · Рой · Конфигурация из двух маршей (в паре с Леандрой и Юлми)"),
      quickSteps: [
        L("Send together with the Leandra & Yulmi march — this is a two-march combo, not a standalone.", "Enviala junto con la marcha Leandra y Yulmi — es un combo de dos marchas, no una marcha independiente.", "Envie junto com a marcha Leandra e Yulmi — é um combo de duas marchas, não uma marcha independente.", "Envoyez-la avec la marche Leandra et Yulmi — c'est un combo à deux marches, pas une marche indépendante.", "与 Leandra 和 Yulmi 的行军一同派出——这是双行军组合，不是独立行军。", "Отправляйте вместе с маршем Леандры и Юлми — это комбинация из двух маршей, а не самостоятельный марш."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Containment apply Broken Blade to neutralize counterattacks.", "Dejá que Containment aplique Broken Blade para neutralizar los contraataques.", "Deixe Containment aplicar Broken Blade para neutralizar os contra-ataques.", "Laissez Containment appliquer Broken Blade pour neutraliser les contre-attaques.", "让 Containment 施加 Broken Blade 以压制反击。", "Дайте Containment наложить Broken Blade, чтобы нейтрализовать контратаки."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Pair defense reduction (Rosky's innate skill) with Broken Blade uptime (Artur's Containment) — this march is designed to run alongside Leandra & Yulmi, not alone.",
        "Combinar la reducción de defensa (habilidad innata de Rosky) con uptime de Broken Blade (Containment de Artur) — esta marcha está pensada para correr junto a Leandra y Yulmi, no sola.",
        "Combinar redução de defesa (habilidade inata da Rosky) com uptime de Broken Blade (Containment do Artur) — esta marcha foi pensada para rodar junto com Leandra e Yulmi, não sozinha.",
        "Associer la réduction de défense (compétence innée de Rosky) au temps actif de Broken Blade (Containment d'Artur) — cette marche est conçue pour tourner avec Leandra et Yulmi, pas seule.",
        "将降低防御（Rosky 的天生技能）与 Broken Blade 持续时间（Artur 的 Containment）结合——这支行军设计为与 Leandra 和 Yulmi 一起出战，而非单独行动。",
        "Совместить снижение защиты (врождённая способность Роски) с аптаймом Broken Blade (Containment Артура) — этот марш рассчитан на использование вместе с Леандрой и Юлми, а не в одиночку."
      ),
      whenToUse: L(
        "The most useful two-march Swarm combination in most situations, run together with Leandra & Yulmi. If more than about 5 debuffers in the swarm are already running Rosky, consider swapping him for Rolfe instead — same idea, trades the defense reduction for extra Broken Blade uptime.",
        "La combinación de Swarm con dos marchas más útil en la mayoría de las situaciones, corriendo junto con Leandra y Yulmi. Si más de unos 5 debuffers en el swarm ya están usando a Rosky, considerá cambiarlo por Rolfe — misma idea, cambia la reducción de defensa por uptime extra de Broken Blade.",
        "A combinação de Swarm com duas marchas mais útil na maioria das situações, rodando junto com Leandra e Yulmi. Se mais de uns 5 debuffers no swarm já estão usando Rosky, considere trocá-lo por Rolfe — mesma ideia, troca a redução de defesa por uptime extra de Broken Blade.",
        "La combinaison d'Essaim à deux marches la plus utile dans la plupart des situations, utilisée avec Leandra et Yulmi. Si plus d'environ 5 debuffers de l'essaim utilisent déjà Rosky, envisagez de le remplacer par Rolfe — même idée, échange la réduction de défense contre un temps actif supplémentaire de Broken Blade.",
        "在大多数情况下最实用的双行军集群组合，与 Leandra 和 Yulmi 一同出战。如果集群中已有约5名以上减益英雄在使用 Rosky，可考虑换成 Rolfe——思路相同，用降低防御换取额外的 Broken Blade 持续时间。",
        "Самая полезная комбинация роя с двумя маршами в большинстве ситуаций, используется вместе с Леандрой и Юлми. Если более ~5 дебаферов в рое уже используют Роски, рассмотрите замену на Рольфа — та же идея, но взамен снижения защиты даёт дополнительный аптайм Broken Blade."
      ),
      counters: L(
        "Rosky's debuff only lasts 4 seconds, so its uptime is the fragile part of this pairing if too many marches overlap on him. Vulnerable to status immunity like the rest of the swarm strategy.",
        "El debuff de Rosky dura solo 4 segundos, así que su uptime es la parte frágil de este emparejamiento si demasiadas marchas se superponen en él. Vulnerable a la inmunidad a estados como el resto de la estrategia de swarm.",
        "O debuff da Rosky dura só 4 segundos, então o uptime dele é a parte frágil desta combinação se marchas demais se sobrepuserem nele. Vulnerável à imunidade a estados como o resto da estratégia de swarm.",
        "Le debuff de Rosky ne dure que 4 secondes, donc son temps actif est le point faible de cette association si trop de marches se superposent sur lui. Vulnérable à l'immunité aux statuts comme le reste de la stratégie d'essaim.",
        "Rosky 的减益只持续4秒，所以如果太多行军都集中在他身上，持续时间就是这个组合的脆弱环节。与集群策略的其余部分一样，易受状态免疫影响。",
        "Дебафф Роски длится всего 4 секунды, так что его аптайм — самое уязвимое место этой пары, если на нём пересекается слишком много маршей. Уязвим к иммунитету к статусам, как и вся остальная стратегия роя."
      ),
      commonMistakes: [
        L("Running this march without its Leandra & Yulmi pair — it's designed as half of a two-march setup.", "Correr esta marcha sin su par Leandra y Yulmi — está pensada como la mitad de una configuración de dos marchas.", "Rodar esta marcha sem o par Leandra e Yulmi — ela foi pensada como a metade de uma configuração de duas marchas.", "Utiliser cette marche sans sa paire Leandra et Yulmi — elle est conçue comme la moitié d'une configuration à deux marches.", "没有搭配 Leandra 和 Yulmi 就单独出这支行军——它设计为双行军配置的一半。", "Использовать этот марш без пары Леандры и Юлми — он задуман как половина конфигурации из двух маршей."),
        L("Stacking too many Rosky marches in the same swarm instead of rotating some to Rolfe.", "Acumular demasiadas marchas con Rosky en el mismo swarm en vez de rotar algunas a Rolfe.", "Acumular marchas demais com Rosky no mesmo swarm em vez de rotacionar algumas para Rolfe.", "Empiler trop de marches avec Rosky dans le même essaim au lieu d'en faire tourner certaines vers Rolfe.", "同一个集群里堆叠太多 Rosky 行军，而不是把一部分轮换成 Rolfe。", "Накапливать слишком много маршей с Роски в одном рое вместо того, чтобы часть переключить на Рольфа."),
      ],
      pros: [
        L("Strong defense-reduction + Broken Blade combination", "Combinación sólida de reducción de defensa + Broken Blade", "Combinação sólida de redução de defesa + Broken Blade", "Combinaison solide de réduction de défense + Broken Blade", "降低防御 + Broken Blade 的强力组合", "Сильная комбинация снижения защиты + Broken Blade"),
        L("Containment is the most reliable Broken Blade source available", "Containment es la fuente más confiable de Broken Blade disponible", "Containment é a fonte de Broken Blade mais confiável disponível", "Containment est la source de Broken Blade la plus fiable disponible", "Containment 是目前最可靠的 Broken Blade 来源", "Containment — самый надёжный доступный источник Broken Blade"),
        L("Rolfe swap available if the swarm is overloaded on Rosky", "Cambio por Rolfe disponible si el swarm está sobrecargado de Rosky", "Troca por Rolfe disponível se o swarm estiver sobrecarregado de Rosky", "Remplacement par Rolfe disponible si l'essaim est surchargé en Rosky", "如果集群里 Rosky 过多，可以换成 Rolfe", "Доступна замена на Рольфа, если рой перегружен Роски"),
      ],
      cons: [
        L("Only half the setup — needs Leandra & Yulmi alongside it", "Solo la mitad de la configuración — necesita a Leandra y Yulmi junto a ella", "Só metade da configuração — precisa de Leandra e Yulmi junto com ela", "Seulement la moitié de la configuration — nécessite Leandra et Yulmi à ses côtés", "只是配置的一半——需要 Leandra 和 Yulmi 配合", "Только половина конфигурации — нужны Леандра и Юлми рядом"),
        L("Rosky's own debuff has a short 4-second duration", "El propio debuff de Rosky tiene una duración corta de 4 segundos", "O próprio debuff do Rosky tem uma duração curta de 4 segundos", "Le debuff propre de Rosky a une courte durée de 4 secondes", "Rosky 自身的减益持续时间较短，只有4秒", "Собственный дебафф Роски имеет короткую продолжительность в 4 секунды"),
      ],
      heroes: [
        {
          name: "Rosky",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Innate active skill reduces the target's defenses (4s duration). If more than ~5 debuffers in the swarm are already running Rosky, swap this slot for Rolfe instead for extra Broken Blade uptime.",
            "Su habilidad activa innata reduce las defensas del objetivo (4s de duración). Si más de ~5 debuffers en el swarm ya están usando a Rosky, cambiá este slot por Rolfe para obtener uptime extra de Broken Blade.",
            "A habilidade ativa inata reduz as defesas do alvo (4s de duração). Se mais de ~5 debuffers no swarm já estão usando Rosky, troque este slot por Rolfe para obter uptime extra de Broken Blade.",
            "Compétence active innée réduit les défenses de la cible (durée de 4s). Si plus de ~5 debuffers de l'essaim utilisent déjà Rosky, remplacez cet emplacement par Rolfe pour un temps actif supplémentaire de Broken Blade.",
            "天生主动技能会降低目标的防御（持续4秒）。如果集群中已有约5名以上减益英雄在使用 Rosky，请把这个位置换成 Rolfe，以获得额外的 Broken Blade 持续时间。",
            "Врождённая активная способность снижает защиту цели (продолжительность 4с). Если более ~5 дебаферов в рое уже используют Роски, замените этот слот на Рольфа для дополнительного аптайма Broken Blade."
          ),
          skills: [null, null],
        },
        {
          name: "Artur",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Carries Containment, applying Broken Blade to the target every 12 seconds and neutralizing its basic counterattacks.",
            "Lleva Containment, aplicando Broken Blade al objetivo cada 12 segundos y neutralizando sus contraataques básicos.",
            "Leva Containment, aplicando Broken Blade ao alvo a cada 12 segundos e neutralizando seus contra-ataques básicos.",
            "Porte Containment, appliquant Broken Blade à la cible toutes les 12 secondes et neutralisant ses contre-attaques de base.",
            "携带 Containment，每12秒对目标施加一次 Broken Blade，压制其普通反击。",
            "Несёт Containment, накладывающий Broken Blade на цель каждые 12 секунд и нейтрализующий её базовые контратаки."
          ),
          skills: [
            { name: "Containment", note: "Applies Broken Blade every 12s" },
            null,
          ],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-leandra-yulmi", "swarm-1-leandra-artur"],
    },
  },
  {
    id: "swarm-2-leandra-charlton",
    title: L("Swarm — 2 Marches: Leandra & Charlton", "Swarm — 2 Marchas: Leandra y Charlton", "Swarm — 2 Marchas: Leandra e Charlton", "Essaim — 2 Marches : Leandra et Charlton", "集群 — 2支行军：Leandra 与 Charlton", "Рой — 2 Марша: Леандра и Чарлтон"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Charlton"],
    summary: L(
      "A variant of the Leandra side of the two-march Swarm setup, built to enable Devastating Charge reliably against shield- or heal-heavy targets.",
      "Una variante del lado Leandra de la configuración de Swarm con dos marchas, pensada para habilitar Devastating Charge de forma confiable contra objetivos que dependen de escudos o curación.",
      "Uma variante do lado Leandra da configuração de Swarm com duas marchas, pensada para habilitar Devastating Charge de forma confiável contra alvos que dependem de escudos ou cura.",
      "Une variante du côté Leandra de la configuration d'Essaim à deux marches, conçue pour activer Devastating Charge de manière fiable contre des cibles fortement dépendantes de boucliers ou de soins.",
      "双行军集群配置中 Leandra 一侧的变体，旨在针对依赖护盾或治疗的目标，稳定地启用 Devastating Charge。",
      "Вариант стороны Леандры в конфигурации роя с двумя маршами, созданный для надёжной активации Devastating Charge против целей, сильно полагающихся на щиты или лечение."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Devastating Charge enabler", "Debuff · Swarm · Habilitador de Devastating Charge", "Debuff · Swarm · Habilitador de Devastating Charge", "Debuff · Essaim · Activateur de Devastating Charge", "减益 · 集群 · Devastating Charge 启用者", "Дебафф · Рой · Активатор Devastating Charge"),
      quickSteps: [
        L("Send together with the Rosky & Artur march — this replaces Leandra & Yulmi as the Leandra-side march.", "Enviala junto con la marcha Rosky y Artur — esta reemplaza a Leandra y Yulmi como la marcha del lado Leandra.", "Envie junto com a marcha Rosky e Artur — esta substitui Leandra e Yulmi como a marcha do lado Leandra.", "Envoyez-la avec la marche Rosky et Artur — elle remplace Leandra et Yulmi comme marche du côté Leandra.", "与 Rosky 和 Artur 的行军一同派出——这支行军取代 Leandra 和 Yulmi，作为 Leandra 一侧的行军。", "Отправляйте вместе с маршем Роски и Артура — этот марш заменяет Леандру и Юлми в качестве марша со стороны Леандры."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Charlton's rage-skill poison and Devastating Charge's 6-second interval line up.", "Dejá que el veneno de la habilidad de rabia de Charlton se sincronice con el intervalo de 6 segundos de Devastating Charge.", "Deixe o veneno da habilidade de raiva do Charlton se sincronizar com o intervalo de 6 segundos de Devastating Charge.", "Laissez le poison de la compétence de rage de Charlton se synchroniser avec l'intervalle de 6 secondes de Devastating Charge.", "让 Charlton 怒气技能的中毒与 Devastating Charge 的6秒间隔对齐。", "Дайте яду от навыка ярости Чарлтона синхронизироваться с 6-секундным интервалом Devastating Charge."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Swap in Charlton to add a reliable poison source, so Devastating Charge can be used against a target that leans on shields or heals instead of the generalist Fiery Detonation setup.",
        "Sumar a Charlton para agregar una fuente de veneno confiable, de forma que se pueda usar Devastating Charge contra un objetivo que dependa de escudos o curación, en vez de la configuración generalista con Fiery Detonation.",
        "Incluir Charlton para adicionar uma fonte de veneno confiável, de forma que Devastating Charge possa ser usado contra um alvo que dependa de escudos ou cura, em vez da configuração generalista com Fiery Detonation.",
        "Intégrer Charlton pour ajouter une source de poison fiable, afin que Devastating Charge puisse être utilisé contre une cible qui s'appuie sur des boucliers ou des soins, au lieu de la configuration généraliste avec Fiery Detonation.",
        "换入 Charlton 以增加一个可靠的中毒来源，这样就能针对依赖护盾或治疗的目标使用 Devastating Charge，而不是通用的 Fiery Detonation 配置。",
        "Заменить на Чарлтона, чтобы добавить надёжный источник яда — тогда Devastating Charge можно использовать против цели, полагающейся на щиты или лечение, вместо универсальной конфигурации с Fiery Detonation."
      ),
      whenToUse: L(
        "Use this instead of Leandra & Yulmi when the target relies heavily on shields, heals, or both — the generalist swarm setup doesn't punish that as hard.",
        "Usala en vez de Leandra y Yulmi cuando el objetivo dependa fuertemente de escudos, curación, o ambos — la configuración de swarm generalista no castiga eso con la misma fuerza.",
        "Use esta em vez de Leandra e Yulmi quando o alvo depender fortemente de escudos, cura ou ambos — a configuração de swarm generalista não pune isso com a mesma força.",
        "Utilisez ceci au lieu de Leandra et Yulmi quand la cible dépend fortement de boucliers, de soins, ou des deux — la configuration d'essaim généraliste ne punit pas cela aussi durement.",
        "当目标严重依赖护盾、治疗或两者兼有时，用它来替代 Leandra 和 Yulmi——通用集群配置对此的惩罚力度没有这么大。",
        "Используйте это вместо Леандры и Юлми, когда цель сильно полагается на щиты, лечение или и то, и другое — универсальная конфигурация роя наказывает это не так жёстко."
      ),
      counters: L(
        "Needs Charlton's skills, mount, and equipment re-set for this role, so it's less convenient if he's also your field/rally hero. Vulnerable to status immunity like the rest of the swarm strategy.",
        "Necesita resetear las habilidades, montura y equipo de Charlton para este rol, así que es menos conveniente si también es tu héroe de campo/rally. Vulnerable a la inmunidad a estados como el resto de la estrategia de swarm.",
        "Precisa resetar as habilidades, montaria e equipamento do Charlton para este papel, então é menos conveniente se ele também for seu herói de campo/rally. Vulnerável à imunidade a estados como o resto da estratégia de swarm.",
        "Nécessite de réinitialiser les compétences, la monture et l'équipement de Charlton pour ce rôle, ce qui est moins pratique s'il est aussi votre héros de terrain/ralliement. Vulnérable à l'immunité aux statuts comme le reste de la stratégie d'essaim.",
        "需要为这个定位重新设置 Charlton 的技能、坐骑和装备，所以如果他同时也是你的野战/集结英雄，就不太方便。与集群策略的其余部分一样，易受状态免疫影响。",
        "Требует сброса навыков, ездового и снаряжения Чарлтона под эту роль, так что это менее удобно, если он также ваш полевой герой/герой ралли. Уязвим к иммунитету к статусам, как и вся остальная стратегия роя."
      ),
      commonMistakes: [
        L("Running this without re-setting Charlton's talents toward defense/health first.", "Usarla sin resetear primero los talentos de Charlton hacia defensa/vida.", "Usá-la sem antes resetar os talentos do Charlton para defesa/vida.", "L'utiliser sans d'abord réinitialiser les talents de Charlton vers la défense/vie.", "没有先把 Charlton 的天赋重置为偏向防御/生命就使用它。", "Использовать это без предварительного сброса талантов Чарлтона в сторону защиты/здоровья."),
        L("Using it as a default instead of only against shield- or heal-heavy targets.", "Usarla como opción por defecto en vez de solo contra objetivos que dependen de escudos o curación.", "Usá-la como padrão em vez de só contra alvos que dependem de escudos ou cura.", "L'utiliser par défaut au lieu de seulement contre des cibles dépendantes de boucliers ou de soins.", "把它当作默认选项，而不是只用于依赖护盾或治疗的目标。", "Использовать это по умолчанию, а не только против целей, полагающихся на щиты или лечение."),
      ],
      pros: [
        L("Reliable poison source makes Devastating Charge usable", "Una fuente de veneno confiable hace usable a Devastating Charge", "Uma fonte de veneno confiável torna Devastating Charge utilizável", "Une source de poison fiable rend Devastating Charge utilisable", "可靠的中毒来源让 Devastating Charge 变得可用", "Надёжный источник яда делает Devastating Charge пригодным к использованию"),
        L("Charlton's sixth talent adds extra damage taken + survivability on its own", "El sexto talento de Charlton suma daño recibido extra + supervivencia por sí solo", "O sexto talento do Charlton soma dano recebido extra + sobrevivência por si só", "Le sixième talent de Charlton ajoute à lui seul des dégâts subis supplémentaires + de la survie", "Charlton 的第六天赋本身就能带来额外的承受伤害 + 生存能力", "Шестой талант Чарлтона сам по себе добавляет дополнительный получаемый урон + живучесть"),
        L("Faster rage cycle lets Dampened Spirits trigger more often", "Un ciclo de rabia más rápido permite que Dampened Spirits se active más seguido", "Um ciclo de raiva mais rápido permite que Dampened Spirits ative com mais frequência", "Un cycle de rage plus rapide permet à Dampened Spirits de se déclencher plus souvent", "更快的怒气循环让 Dampened Spirits 触发得更频繁", "Более быстрый цикл ярости позволяет Dampened Spirits срабатывать чаще"),
      ],
      cons: [
        L("Requires re-setting Charlton's kit if he's used elsewhere", "Requiere resetear el kit de Charlton si se lo usa en otro lado", "Exige resetar o kit do Charlton se ele for usado em outro lugar", "Nécessite de réinitialiser le kit de Charlton s'il est utilisé ailleurs", "如果 Charlton 在别处使用，需要重新设置他的配置", "Требует сброса набора Чарлтона, если он используется где-то ещё"),
        L("Only worth it against shield/heal-heavy targets — otherwise Leandra & Yulmi is simpler", "Solo vale la pena contra objetivos que dependen de escudos/curación — si no, Leandra y Yulmi es más simple", "Só vale a pena contra alvos que dependem de escudos/cura — senão, Leandra e Yulmi é mais simples", "Rentable uniquement contre des cibles dépendantes de boucliers/soins — sinon Leandra et Yulmi est plus simple", "只对依赖护盾/治疗的目标值得使用——否则 Leandra 和 Yulmi 更简单", "Оправдано только против целей со щитами/лечением — в остальных случаях Леандра и Юлми проще"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Same core role as in the generalist setup — her kit stays the constant across both Leandra-side variants.",
            "Mismo rol central que en la configuración generalista — su kit es la constante en ambas variantes del lado Leandra.",
            "Mesmo papel central da configuração generalista — o kit dela é a constante nas duas variantes do lado Leandra.",
            "Même rôle central que dans la configuration généraliste — son kit reste la constante dans les deux variantes du côté Leandra.",
            "与通用配置中的核心定位相同——她的技能组在 Leandra 一侧的两种变体中保持不变。",
            "Та же основная роль, что и в универсальной конфигурации — её набор остаётся постоянным в обоих вариантах стороны Леандры."
          ),
          skills: [
            { name: "Devastating Charge", note: "6s interval — needs a reliable poison source to trigger" },
            null,
          ],
        },
        {
          name: "Charlton",
          rarity: "Epic",
          roleTag: "Support",
          commander: "secondary",
          note: L(
            "Rage skill applies a 3-second poison, reliably feeding Devastating Charge. Third talent hastens his rage cycle and dispels; sixth talent increases damage taken by the target and adds some evasion.",
            "Su habilidad de rabia aplica un veneno de 3 segundos, alimentando a Devastating Charge de forma confiable. El tercer talento acelera su ciclo de rabia y dispersa; el sexto talento aumenta el daño recibido por el objetivo y suma algo de evasión.",
            "A habilidade de raiva aplica um veneno de 3 segundos, alimentando Devastating Charge de forma confiável. O terceiro talento acelera o ciclo de raiva dele e dispersa; o sexto talento aumenta o dano recebido pelo alvo e soma um pouco de esquiva.",
            "La compétence de rage applique un poison de 3 secondes, alimentant de manière fiable Devastating Charge. Le troisième talent accélère son cycle de rage et dissipe ; le sixième talent augmente les dégâts subis par la cible et ajoute un peu d'esquive.",
            "怒气技能施加持续3秒的中毒，稳定地为 Devastating Charge 提供触发条件。第三天赋加快他的怒气循环并驱散；第六天赋提高目标受到的伤害，并附带少量闪避。",
            "Навык ярости накладывает яд на 3 секунды, надёжно питая Devastating Charge. Третий талант ускоряет его цикл ярости и снимает эффекты; шестой талант увеличивает получаемый целью урон и добавляет немного уклонения."
          ),
          skills: [null, null],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-rosky-artur", "swarm-2-leandra-sheila"],
    },
  },
  {
    id: "swarm-2-leandra-sheila",
    title: L("Swarm — 2 Marches: Leandra & Sheila", "Swarm — 2 Marchas: Leandra y Sheila", "Swarm — 2 Marchas: Leandra e Sheila", "Essaim — 2 Marches : Leandra et Sheila", "集群 — 2支行军：Leandra 与 Sheila", "Рой — 2 Марша: Леандра и Шейла"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Sheila"],
    summary: L(
      "The highest poison-uptime variant of the Leandra-side Swarm march, for the highest-reliability Devastating Charge against shield- or heal-heavy targets.",
      "La variante con mayor uptime de veneno del lado Leandra de la marcha Swarm, para la activación más confiable de Devastating Charge contra objetivos que dependen de escudos o curación.",
      "A variante com maior uptime de veneno do lado Leandra da marcha Swarm, para a ativação mais confiável de Devastating Charge contra alvos que dependem de escudos ou cura.",
      "La variante au temps actif de poison le plus élevé du côté Leandra de la marche d'Essaim, pour le Devastating Charge le plus fiable contre des cibles dépendantes de boucliers ou de soins.",
      "Leandra 一侧集群行军中中毒持续时间最长的变体，针对依赖护盾或治疗的目标，提供最高可靠性的 Devastating Charge。",
      "Вариант стороны Леандры с самым высоким аптаймом яда для максимально надёжного Devastating Charge против целей, сильно полагающихся на щиты или лечение."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Devastating Charge enabler (highest poison uptime)", "Debuff · Swarm · Habilitador de Devastating Charge (mayor uptime de veneno)", "Debuff · Swarm · Habilitador de Devastating Charge (maior uptime de veneno)", "Debuff · Essaim · Activateur de Devastating Charge (temps de poison le plus élevé)", "减益 · 集群 · Devastating Charge 启用者（中毒持续时间最长）", "Дебафф · Рой · Активатор Devastating Charge (максимальный аптайм яда)"),
      quickSteps: [
        L("Send together with the Rosky & Artur march — this replaces Leandra & Yulmi as the Leandra-side march.", "Enviala junto con la marcha Rosky y Artur — esta reemplaza a Leandra y Yulmi como la marcha del lado Leandra.", "Envie junto com a marcha Rosky e Artur — esta substitui Leandra e Yulmi como a marcha do lado Leandra.", "Envoyez-la avec la marche Rosky et Artur — elle remplace Leandra et Yulmi comme marche du côté Leandra.", "与 Rosky 和 Artur 的行军一同派出——这支行军取代 Leandra 和 Yulmi，作为 Leandra 一侧的行军。", "Отправляйте вместе с маршем Роски и Артура — этот марш заменяет Леандру и Юлми в качестве марша со стороны Леандры."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Sheila's rage-skill poison keep Devastating Charge's 6-second interval reliably fed.", "Dejá que el veneno de la habilidad de rabia de Sheila alimente de forma confiable el intervalo de 6 segundos de Devastating Charge.", "Deixe o veneno da habilidade de raiva da Sheila alimentar de forma confiável o intervalo de 6 segundos de Devastating Charge.", "Laissez le poison de la compétence de rage de Sheila alimenter de manière fiable l'intervalle de 6 secondes de Devastating Charge.", "让 Sheila 怒气技能的中毒稳定地为 Devastating Charge 的6秒间隔提供触发条件。", "Дайте яду от навыка ярости Шейлы надёжно поддерживать 6-секундный интервал Devastating Charge."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Pair Leandra with the single longest poison-uptime source available, for the most reliable Devastating Charge trigger against a target that leans on shields or heals.",
        "Combinar a Leandra con la fuente de veneno de mayor duración disponible, para la activación más confiable de Devastating Charge contra un objetivo que dependa de escudos o curación.",
        "Combinar Leandra com a fonte de veneno de maior duração disponível, para a ativação mais confiável de Devastating Charge contra um alvo que dependa de escudos ou cura.",
        "Associer Leandra à la source de poison au temps actif le plus long disponible, pour le déclenchement le plus fiable de Devastating Charge contre une cible qui s'appuie sur des boucliers ou des soins.",
        "将 Leandra 与目前持续时间最长的单一中毒来源搭配，针对依赖护盾或治疗的目标，获得最可靠的 Devastating Charge 触发。",
        "Совместить Леандру с самым долгим доступным источником яда для максимально надёжной активации Devastating Charge против цели, полагающейся на щиты или лечение."
      ),
      whenToUse: L(
        "Use this instead of Leandra & Yulmi (or Leandra & Charlton) when the target relies heavily on shields, heals, or both, and you want the most reliable poison uptime of the available options.",
        "Usala en vez de Leandra y Yulmi (o Leandra y Charlton) cuando el objetivo dependa fuertemente de escudos, curación, o ambos, y quieras el uptime de veneno más confiable de las opciones disponibles.",
        "Use esta em vez de Leandra e Yulmi (ou Leandra e Charlton) quando o alvo depender fortemente de escudos, cura ou ambos, e você quiser o uptime de veneno mais confiável das opções disponíveis.",
        "Utilisez ceci au lieu de Leandra et Yulmi (ou Leandra et Charlton) quand la cible dépend fortement de boucliers, de soins, ou des deux, et que vous voulez le temps de poison le plus fiable parmi les options disponibles.",
        "当目标严重依赖护盾、治疗或两者兼有，并且你想要现有选项中最可靠的中毒持续时间时，用它来替代 Leandra 和 Yulmi（或 Leandra 和 Charlton）。",
        "Используйте это вместо Леандры и Юлми (или Леандры и Чарлтона), когда цель сильно полагается на щиты, лечение или и то, и другое, и вам нужен самый надёжный аптайм яда из доступных вариантов."
      ),
      counters: L(
        "Sheila herself has no debuff capability — she's purely a poison source here. Vulnerable to status immunity like the rest of the swarm strategy.",
        "Sheila en sí no tiene capacidad de debuff — acá es pura fuente de veneno. Vulnerable a la inmunidad a estados como el resto de la estrategia de swarm.",
        "A Sheila em si não tem capacidade de debuff — aqui ela é puramente uma fonte de veneno. Vulnerável à imunidade a estados como o resto da estratégia de swarm.",
        "Sheila elle-même n'a aucune capacité de debuff — elle n'est ici qu'une source de poison pure. Vulnérable à l'immunité aux statuts comme le reste de la stratégie d'essaim.",
        "Sheila 本身没有减益能力——在这里她纯粹是中毒来源。与集群策略的其余部分一样，易受状态免疫影响。",
        "Сама Шейла не обладает способностью к дебаффу — здесь она чисто источник яда. Уязвим к иммунитету к статусам, как и вся остальная стратегия роя."
      ),
      commonMistakes: [
        L("Using it as a default instead of only against shield- or heal-heavy targets.", "Usarla como opción por defecto en vez de solo contra objetivos que dependen de escudos o curación.", "Usá-la como padrão em vez de só contra alvos que dependem de escudos ou cura.", "L'utiliser par défaut au lieu de seulement contre des cibles dépendantes de boucliers ou de soins.", "把它当作默认选项，而不是只用于依赖护盾或治疗的目标。", "Использовать это по умолчанию, а не только против целей, полагающихся на щиты или лечение."),
        L("Expecting Sheila to contribute any debuff value beyond feeding the poison window.", "Esperar que Sheila aporte algún valor de debuff más allá de alimentar la ventana de veneno.", "Esperar que a Sheila contribua com algum valor de debuff além de alimentar a janela de veneno.", "S'attendre à ce que Sheila apporte une quelconque valeur de debuff au-delà d'alimenter la fenêtre de poison.", "期望 Sheila 除了维持中毒窗口之外还能提供任何减益价值。", "Ожидать, что Шейла внесёт какую-либо ценность дебаффа помимо поддержания окна яда."),
      ],
      pros: [
        L("Longest poison uptime of the three Devastating Charge variants (4 seconds)", "El mayor uptime de veneno de las tres variantes de Devastating Charge (4 segundos)", "O maior uptime de veneno das três variantes de Devastating Charge (4 segundos)", "Temps de poison le plus long des trois variantes de Devastating Charge (4 secondes)", "三种 Devastating Charge 变体中中毒持续时间最长（4秒）", "Самый долгий аптайм яда среди трёх вариантов Devastating Charge (4 секунды)"),
        L("Most reliable Devastating Charge activation available", "La activación más confiable de Devastating Charge disponible", "A ativação mais confiável de Devastating Charge disponível", "L'activation de Devastating Charge la plus fiable disponible", "目前最可靠的 Devastating Charge 触发方式", "Самая надёжная доступная активация Devastating Charge"),
      ],
      cons: [
        L("Sheila offers nothing beyond the poison trigger — no debuff value of her own", "Sheila no ofrece nada más allá del gatillo de veneno — sin valor de debuff propio", "A Sheila não oferece nada além do gatilho de veneno — sem valor de debuff próprio", "Sheila n'offre rien au-delà du déclencheur de poison — aucune valeur de debuff propre", "Sheila 除了触发中毒之外一无所有——自身没有减益价值", "Шейла не предлагает ничего, кроме активации яда — никакой собственной ценности дебаффа"),
        L("Only worth it against shield/heal-heavy targets — otherwise Leandra & Yulmi is simpler", "Solo vale la pena contra objetivos que dependen de escudos/curación — si no, Leandra y Yulmi es más simple", "Só vale a pena contra alvos que dependem de escudos/cura — senão, Leandra e Yulmi é mais simples", "Rentable uniquement contre des cibles dépendantes de boucliers/soins — sinon Leandra et Yulmi est plus simple", "只对依赖护盾/治疗的目标值得使用——否则 Leandra 和 Yulmi 更简单", "Оправдано только против целей со щитами/лечением — в остальных случаях Леандра и Юлми проще"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Same core role as in the generalist setup — her kit stays the constant across both Leandra-side variants.",
            "Mismo rol central que en la configuración generalista — su kit es la constante en ambas variantes del lado Leandra.",
            "Mesmo papel central da configuração generalista — o kit dela é a constante nas duas variantes do lado Leandra.",
            "Même rôle central que dans la configuration généraliste — son kit reste la constante dans les deux variantes du côté Leandra.",
            "与通用配置中的核心定位相同——她的技能组在 Leandra 一侧的两种变体中保持不变。",
            "Та же основная роль, что и в универсальной конфигурации — её набор остаётся постоянным в обоих вариантах стороны Леандры."
          ),
          skills: [
            { name: "Devastating Charge", note: "6s interval — needs a reliable poison source to trigger" },
            null,
          ],
        },
        {
          name: "Sheila",
          rarity: "Epic",
          roleTag: "Support",
          commander: "secondary",
          note: L(
            "Rage skill always applies a 4-second poison — the longest and most reliable poison uptime of the available options, but no debuff capability of her own.",
            "Su habilidad de rabia siempre aplica un veneno de 4 segundos — el uptime de veneno más largo y confiable de las opciones disponibles, pero sin capacidad de debuff propia.",
            "A habilidade de raiva sempre aplica um veneno de 4 segundos — o uptime de veneno mais longo e confiável das opções disponíveis, mas sem capacidade de debuff própria.",
            "La compétence de rage applique toujours un poison de 4 secondes — le temps de poison le plus long et le plus fiable des options disponibles, mais sans capacité de debuff propre.",
            "怒气技能总是施加持续4秒的中毒——在现有选项中持续时间最长、最可靠，但自身没有减益能力。",
            "Навык ярости всегда накладывает яд на 4 секунды — самый долгий и надёжный аптайм яда из доступных вариантов, но без собственной способности к дебаффу."
          ),
          skills: [null, null],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-leandra-charlton", "swarm-2-leandra-sasha"],
    },
  },
  {
    id: "swarm-2-leandra-sasha",
    title: L("Swarm — 2 Marches: Leandra & Sasha", "Swarm — 2 Marchas: Leandra y Sasha", "Swarm — 2 Marchas: Leandra e Sasha", "Essaim — 2 Marches : Leandra et Sasha", "集群 — 2支行军：Leandra 与 Sasha", "Рой — 2 Марша: Леандра и Саша"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Sasha"],
    summary: L(
      "A mixed poison/burn variant of the Leandra-side Swarm march, leaning mainly on poison, for Devastating Charge against shield- or heal-heavy targets.",
      "Una variante mixta de veneno/quemadura del lado Leandra de la marcha Swarm, apoyada principalmente en veneno, para Devastating Charge contra objetivos que dependen de escudos o curación.",
      "Uma variante mista de veneno/queimadura do lado Leandra da marcha Swarm, apoiada principalmente em veneno, para Devastating Charge contra alvos que dependem de escudos ou cura.",
      "Une variante mixte poison/brûlure du côté Leandra de la marche d'Essaim, s'appuyant principalement sur le poison, pour Devastating Charge contre des cibles dépendantes de boucliers ou de soins.",
      "Leandra 一侧集群行军的中毒/灼烧混合变体，主要依靠中毒，针对依赖护盾或治疗的目标启用 Devastating Charge。",
      "Смешанный вариант яд/поджог стороны Леандры роя, опирающийся в основном на яд, для Devastating Charge против целей, сильно полагающихся на щиты или лечение."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Devastating Charge enabler (mixed poison/burn)", "Debuff · Swarm · Habilitador de Devastating Charge (veneno/quemadura mixto)", "Debuff · Swarm · Habilitador de Devastating Charge (veneno/queimadura misto)", "Debuff · Essaim · Activateur de Devastating Charge (poison/brûlure mixte)", "减益 · 集群 · Devastating Charge 启用者（中毒/灼烧混合）", "Дебафф · Рой · Активатор Devastating Charge (смешанный яд/поджог)"),
      quickSteps: [
        L("Send together with the Rosky & Artur march — this replaces Leandra & Yulmi as the Leandra-side march.", "Enviala junto con la marcha Rosky y Artur — esta reemplaza a Leandra y Yulmi como la marcha del lado Leandra.", "Envie junto com a marcha Rosky e Artur — esta substitui Leandra e Yulmi como a marcha do lado Leandra.", "Envoyez-la avec la marche Rosky et Artur — elle remplace Leandra et Yulmi comme marche du côté Leandra.", "与 Rosky 和 Artur 的行军一同派出——这支行军取代 Leandra 和 Yulmi，作为 Leandra 一侧的行军。", "Отправляйте вместе с маршем Роски и Артура — этот марш заменяет Леандру и Юлми в качестве марша со стороны Леандры."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Sasha's rage-skill poison feed Devastating Charge's 6-second interval.", "Dejá que el veneno de la habilidad de rabia de Sasha alimente el intervalo de 6 segundos de Devastating Charge.", "Deixe o veneno da habilidade de raiva da Sasha alimentar o intervalo de 6 segundos de Devastating Charge.", "Laissez le poison de la compétence de rage de Sasha alimenter l'intervalle de 6 secondes de Devastating Charge.", "让 Sasha 怒气技能的中毒为 Devastating Charge 的6秒间隔提供触发条件。", "Дайте яду от навыка ярости Саши поддерживать 6-секундный интервал Devastating Charge."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Mix poison and burn uptime — mainly poison from Sasha's rage skill — to keep Devastating Charge triggering against a target that leans on shields or heals.",
        "Combinar uptime de veneno y quemadura — principalmente veneno de la habilidad de rabia de Sasha — para mantener a Devastating Charge activándose contra un objetivo que dependa de escudos o curación.",
        "Combinar uptime de veneno e queimadura — principalmente veneno da habilidade de raiva da Sasha — para manter Devastating Charge ativando contra um alvo que dependa de escudos ou cura.",
        "Combiner le temps actif de poison et de brûlure — principalement du poison via la compétence de rage de Sasha — pour maintenir le déclenchement de Devastating Charge contre une cible qui s'appuie sur des boucliers ou des soins.",
        "混合中毒与灼烧的持续时间——主要是 Sasha 怒气技能带来的中毒——以便在面对依赖护盾或治疗的目标时，持续触发 Devastating Charge。",
        "Совместить аптайм яда и поджога — в основном яд от навыка ярости Саши — чтобы поддерживать срабатывание Devastating Charge против цели, полагающейся на щиты или лечение."
      ),
      whenToUse: L(
        "Use this instead of Leandra & Yulmi (or the Charlton/Sheila variants) when the target relies heavily on shields, heals, or both, and Sasha is the more available hero.",
        "Usala en vez de Leandra y Yulmi (o las variantes con Charlton/Sheila) cuando el objetivo dependa fuertemente de escudos, curación, o ambos, y Sasha sea el héroe más disponible.",
        "Use esta em vez de Leandra e Yulmi (ou das variantes com Charlton/Sheila) quando o alvo depender fortemente de escudos, cura ou ambos, e a Sasha for a heroína mais disponível.",
        "Utilisez ceci au lieu de Leandra et Yulmi (ou des variantes Charlton/Sheila) quand la cible dépend fortement de boucliers, de soins, ou des deux, et que Sasha est le héros le plus disponible.",
        "当目标严重依赖护盾、治疗或两者兼有，并且 Sasha 是你更容易拿到的英雄时，用它来替代 Leandra 和 Yulmi（或 Charlton/Sheila 变体）。",
        "Используйте это вместо Леандры и Юлми (или вариантов с Чарлтоном/Шейлой), когда цель сильно полагается на щиты, лечение или и то, и другое, а Саша — более доступный герой."
      ),
      counters: L(
        "Sasha's Nature mark poison rarely lands with proper timing, so her rage skill's 3-second poison is the only uptime you can actually rely on. Vulnerable to status immunity like the rest of the swarm strategy.",
        "El veneno de la marca de Naturaleza de Sasha rara vez se da con el timing correcto, así que el veneno de 3 segundos de su habilidad de rabia es el único uptime en el que realmente se puede confiar. Vulnerable a la inmunidad a estados como el resto de la estrategia de swarm.",
        "O veneno da marca de Natureza da Sasha raramente acontece com o timing certo, então o veneno de 3 segundos da habilidade de raiva dela é o único uptime em que realmente dá para confiar. Vulnerável à imunidade a estados como o resto da estratégia de swarm.",
        "Le poison de la marque de Nature de Sasha se déclenche rarement avec le bon timing, donc le poison de 3 secondes de sa compétence de rage est le seul temps actif sur lequel on peut vraiment compter. Vulnérable à l'immunité aux statuts comme le reste de la stratégie d'essaim.",
        "Sasha 的自然印记中毒很少能在恰当的时机生效，所以她怒气技能的3秒中毒是唯一真正可以依靠的持续时间。与集群策略的其余部分一样，易受状态免疫影响。",
        "Яд от метки Природы Саши редко срабатывает с нужным таймингом, так что 3-секундный яд от её навыка ярости — единственный аптайм, на который реально можно рассчитывать. Уязвим к иммунитету к статусам, как и вся остальная стратегия роя."
      ),
      commonMistakes: [
        L("Using it as a default instead of only against shield- or heal-heavy targets.", "Usarla como opción por defecto en vez de solo contra objetivos que dependen de escudos o curación.", "Usá-la como padrão em vez de só contra alvos que dependem de escudos ou cura.", "L'utiliser par défaut au lieu de seulement contre des cibles dépendantes de boucliers ou de soins.", "把它当作默认选项，而不是只用于依赖护盾或治疗的目标。", "Использовать это по умолчанию, а не только против целей, полагающихся на щиты или лечение."),
        L("Counting on Sasha's Nature mark poison landing reliably — it usually doesn't.", "Contar con que el veneno de la marca de Naturaleza de Sasha se dé de forma confiable — normalmente no pasa.", "Contar com o veneno da marca de Natureza da Sasha acontecendo de forma confiável — normalmente não acontece.", "Compter sur un déclenchement fiable du poison de la marque de Nature de Sasha — ce n'est généralement pas le cas.", "指望 Sasha 的自然印记中毒稳定生效——通常不会。", "Рассчитывать на надёжное срабатывание яда от метки Природы Саши — обычно этого не происходит."),
      ],
      pros: [
        L("Reliable 3-second poison uptime from Sasha's rage skill", "Uptime de veneno confiable de 3 segundos de la habilidad de rabia de Sasha", "Uptime de veneno confiável de 3 segundos da habilidade de raiva da Sasha", "Temps de poison fiable de 3 secondes via la compétence de rage de Sasha", "Sasha 怒气技能带来可靠的3秒中毒持续时间", "Надёжный 3-секундный аптайм яда от навыка ярости Саши"),
        L("Viable alternative when Sheila or Charlton aren't available", "Alternativa viable cuando Sheila o Charlton no están disponibles", "Alternativa viável quando Sheila ou Charlton não estão disponíveis", "Alternative viable quand Sheila ou Charlton ne sont pas disponibles", "在没有 Sheila 或 Charlton 时是可行的替代方案", "Жизнеспособная альтернатива, когда Шейла или Чарлтон недоступны"),
      ],
      cons: [
        L("Shorter poison uptime than the Sheila variant", "Uptime de veneno más corto que la variante con Sheila", "Uptime de veneno mais curto que a variante com Sheila", "Temps de poison plus court que la variante Sheila", "中毒持续时间比 Sheila 变体更短", "Более короткий аптайм яда, чем в варианте с Шейлой"),
        L("Only worth it against shield/heal-heavy targets — otherwise Leandra & Yulmi is simpler", "Solo vale la pena contra objetivos que dependen de escudos/curación — si no, Leandra y Yulmi es más simple", "Só vale a pena contra alvos que dependem de escudos/cura — senão, Leandra e Yulmi é mais simples", "Rentable uniquement contre des cibles dépendantes de boucliers/soins — sinon Leandra et Yulmi est plus simple", "只对依赖护盾/治疗的目标值得使用——否则 Leandra 和 Yulmi 更简单", "Оправдано только против целей со щитами/лечением — в остальных случаях Леандра и Юлми проще"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Same core role as in the generalist setup — her kit stays the constant across both Leandra-side variants.",
            "Mismo rol central que en la configuración generalista — su kit es la constante en ambas variantes del lado Leandra.",
            "Mesmo papel central da configuração generalista — o kit dela é a constante nas duas variantes do lado Leandra.",
            "Même rôle central que dans la configuration généraliste — son kit reste la constante dans les deux variantes du côté Leandra.",
            "与通用配置中的核心定位相同——她的技能组在 Leandra 一侧的两种变体中保持不变。",
            "Та же основная роль, что и в универсальной конфигурации — её набор остаётся постоянным в обоих вариантах стороны Леандры."
          ),
          skills: [
            { name: "Devastating Charge", note: "6s interval — needs a reliable poison source to trigger" },
            null,
          ],
        },
        {
          name: "Sasha",
          rarity: "Epic",
          roleTag: "Support",
          commander: "secondary",
          note: L(
            "Rage skill reliably applies a 3-second poison; her Nature mark can also add poison but rarely lands with the right timing to count on.",
            "Su habilidad de rabia aplica de forma confiable un veneno de 3 segundos; su marca de Naturaleza también puede sumar veneno pero rara vez se da con el timing correcto como para contar con ella.",
            "A habilidade de raiva aplica de forma confiável um veneno de 3 segundos; a marca de Natureza dela também pode somar veneno, mas raramente acontece com o timing certo para contar com ela.",
            "La compétence de rage applique de manière fiable un poison de 3 secondes ; sa marque de Nature peut aussi ajouter du poison mais se déclenche rarement avec le bon timing pour qu'on puisse compter dessus.",
            "怒气技能稳定施加持续3秒的中毒；她的自然印记也能附加中毒，但很少在恰当的时机生效，不能指望。",
            "Навык ярости надёжно накладывает яд на 3 секунды; её метка Природы также может добавить яд, но редко срабатывает с нужным таймингом, чтобы на неё полагаться."
          ),
          skills: [null, null],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-leandra-sheila", "swarm-2-leandra-alf"],
    },
  },
  {
    id: "swarm-2-leandra-alf",
    title: L("Swarm — 2 Marches: Leandra & Alf", "Swarm — 2 Marchas: Leandra y Alf", "Swarm — 2 Marchas: Leandra e Alf", "Essaim — 2 Marches : Leandra et Alf", "集群 — 2支行军：Leandra 与 Alf", "Рой — 2 Марша: Леандра и Альф"),
    category: "debuff",
    strategy: "swarm",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Alf"],
    summary: L(
      "A mixed burn/poison variant of the Leandra-side Swarm march, leaning mainly on burn, for Devastating Charge against shield- or heal-heavy targets.",
      "Una variante mixta de quemadura/veneno del lado Leandra de la marcha Swarm, apoyada principalmente en quemadura, para Devastating Charge contra objetivos que dependen de escudos o curación.",
      "Uma variante mista de queimadura/veneno do lado Leandra da marcha Swarm, apoiada principalmente em queimadura, para Devastating Charge contra alvos que dependem de escudos ou cura.",
      "Une variante mixte brûlure/poison du côté Leandra de la marche d'Essaim, s'appuyant principalement sur la brûlure, pour Devastating Charge contre des cibles dépendantes de boucliers ou de soins.",
      "Leandra 一侧集群行军的灼烧/中毒混合变体，主要依靠灼烧，针对依赖护盾或治疗的目标启用 Devastating Charge。",
      "Смешанный вариант поджог/яд стороны Леандры роя, опирающийся в основном на поджог, для Devastating Charge против целей, сильно полагающихся на щиты или лечение."
    ),
    detail: {
      useCase: L("Debuff · Swarm · Devastating Charge enabler (mixed burn/poison, faster rage)", "Debuff · Swarm · Habilitador de Devastating Charge (quemadura/veneno mixto, rabia más rápida)", "Debuff · Swarm · Habilitador de Devastating Charge (queimadura/veneno misto, raiva mais rápida)", "Debuff · Essaim · Activateur de Devastating Charge (brûlure/poison mixte, rage plus rapide)", "减益 · 集群 · Devastating Charge 启用者（灼烧/中毒混合，怒气更快）", "Дебафф · Рой · Активатор Devastating Charge (смешанный поджог/яд, более быстрая ярость)"),
      quickSteps: [
        L("Send together with the Rosky & Artur march — this replaces Leandra & Yulmi as the Leandra-side march.", "Enviala junto con la marcha Rosky y Artur — esta reemplaza a Leandra y Yulmi como la marcha del lado Leandra.", "Envie junto com a marcha Rosky e Artur — esta substitui Leandra e Yulmi como a marcha do lado Leandra.", "Envoyez-la avec la marche Rosky et Artur — elle remplace Leandra et Yulmi comme marche du côté Leandra.", "与 Rosky 和 Artur 的行军一同派出——这支行军取代 Leandra 和 Yulmi，作为 Leandra 一侧的行军。", "Отправляйте вместе с маршем Роски и Артура — этот марш заменяет Леандру и Юлми в качестве марша со стороны Леандры."),
        L("Wait for the war commanders' call before engaging.", "Esperá el llamado de los comandantes de guerra antes de atacar.", "Espere o chamado dos comandantes de guerra antes de atacar.", "Attendez le signal des commandants de guerre avant d'engager.", "交战前等待战争指挥官的号令。", "Дождитесь команды военных командиров перед атакой."),
        L("Let Alf's rage-skill status chance help feed Devastating Charge's 6-second interval.", "Dejá que la chance de estado de la habilidad de rabia de Alf ayude a alimentar el intervalo de 6 segundos de Devastating Charge.", "Deixe a chance de estado da habilidade de raiva do Alf ajudar a alimentar o intervalo de 6 segundos de Devastating Charge.", "Laissez la chance de statut de la compétence de rage d'Alf aider à alimenter l'intervalle de 6 secondes de Devastating Charge.", "让 Alf 怒气技能的状态几率帮助为 Devastating Charge 的6秒间隔提供触发条件。", "Дайте шансу статуса от навыка ярости Альфа помогать поддерживать 6-секундный интервал Devastating Charge."),
        L("Hold position while the rally lands.", "Mantené posición mientras aterriza el rally.", "Mantenha a posição enquanto o rally chega.", "Tenez votre position pendant que le ralliement arrive.", "集结抵达期间保持阵位。", "Удерживайте позицию, пока прибывает ралли."),
      ],
      objective: L(
        "Mix burn and poison uptime — mainly burn from Alf's rage skill — while benefiting from his third talent's faster rage cycle, to keep Devastating Charge triggering against a target that leans on shields or heals.",
        "Combinar uptime de quemadura y veneno — principalmente quemadura de la habilidad de rabia de Alf — aprovechando el ciclo de rabia más rápido de su tercer talento, para mantener a Devastating Charge activándose contra un objetivo que dependa de escudos o curación.",
        "Combinar uptime de queimadura e veneno — principalmente queimadura da habilidade de raiva do Alf — aproveitando o ciclo de raiva mais rápido do terceiro talento dele, para manter Devastating Charge ativando contra um alvo que dependa de escudos ou cura.",
        "Combiner le temps actif de brûlure et de poison — principalement la brûlure de la compétence de rage d'Alf — tout en profitant du cycle de rage plus rapide de son troisième talent, pour maintenir le déclenchement de Devastating Charge contre une cible qui s'appuie sur des boucliers ou des soins.",
        "混合灼烧与中毒的持续时间——主要是 Alf 怒气技能带来的灼烧——同时受益于他第三天赋带来的更快怒气循环，以便在面对依赖护盾或治疗的目标时，持续触发 Devastating Charge。",
        "Совместить аптайм поджога и яда — в основном поджог от навыка ярости Альфа — пользуясь более быстрым циклом ярости от его третьего таланта, чтобы поддерживать срабатывание Devastating Charge против цели, полагающейся на щиты или лечение."
      ),
      whenToUse: L(
        "Use this instead of Leandra & Yulmi (or the Charlton/Sheila/Sasha variants) when the target relies heavily on shields, heals, or both, and you want the fastest rage cycle of the available options.",
        "Usala en vez de Leandra y Yulmi (o las variantes con Charlton/Sheila/Sasha) cuando el objetivo dependa fuertemente de escudos, curación, o ambos, y quieras el ciclo de rabia más rápido de las opciones disponibles.",
        "Use esta em vez de Leandra e Yulmi (ou das variantes com Charlton/Sheila/Sasha) quando o alvo depender fortemente de escudos, cura ou ambos, e você quiser o ciclo de raiva mais rápido das opções disponíveis.",
        "Utilisez ceci au lieu de Leandra et Yulmi (ou des variantes Charlton/Sheila/Sasha) quand la cible dépend fortement de boucliers, de soins, ou des deux, et que vous voulez le cycle de rage le plus rapide parmi les options disponibles.",
        "当目标严重依赖护盾、治疗或两者兼有，并且你想要现有选项中最快的怒气循环时，用它来替代 Leandra 和 Yulmi（或 Charlton/Sheila/Sasha 变体）。",
        "Используйте это вместо Леандры и Юлми (или вариантов с Чарлтоном/Шейлой/Сашей), когда цель сильно полагается на щиты, лечение или и то, и другое, и вам нужен самый быстрый цикл ярости из доступных вариантов."
      ),
      counters: L(
        "Neither of Alf's status chances — burn or poison — is guaranteed to apply, so his contribution is the least reliable of the Devastating Charge variants. Vulnerable to status immunity like the rest of the swarm strategy.",
        "Ninguna de las chances de estado de Alf — quemadura o veneno — está garantizada, así que su aporte es el menos confiable de las variantes de Devastating Charge. Vulnerable a la inmunidad a estados como el resto de la estrategia de swarm.",
        "Nenhuma das chances de estado do Alf — queimadura ou veneno — é garantida, então a contribuição dele é a menos confiável das variantes de Devastating Charge. Vulnerável à imunidade a estados como o resto da estratégia de swarm.",
        "Aucune des chances de statut d'Alf — brûlure ou poison — n'est garantie, donc sa contribution est la moins fiable des variantes de Devastating Charge. Vulnérable à l'immunité aux statuts comme le reste de la stratégie d'essaim.",
        "Alf 的两种状态几率——灼烧或中毒——都不保证生效，所以他的贡献是 Devastating Charge 各变体中最不可靠的。与集群策略的其余部分一样，易受状态免疫影响。",
        "Ни один из шансов статуса Альфа — поджог или яд — не гарантирован, так что его вклад наименее надёжен среди вариантов Devastating Charge. Уязвим к иммунитету к статусам, как и вся остальная стратегия роя."
      ),
      commonMistakes: [
        L("Using it as a default instead of only against shield- or heal-heavy targets.", "Usarla como opción por defecto en vez de solo contra objetivos que dependen de escudos o curación.", "Usá-la como padrão em vez de só contra alvos que dependem de escudos ou cura.", "L'utiliser par défaut au lieu de seulement contre des cibles dépendantes de boucliers ou de soins.", "把它当作默认选项，而不是只用于依赖护盾或治疗的目标。", "Использовать это по умолчанию, а не только против целей, полагающихся на щиты или лечение."),
        L("Expecting Alf's status chance to apply every cycle — it's a 40% chance, not guaranteed.", "Esperar que la chance de estado de Alf se aplique en cada ciclo — es un 40% de chance, no está garantizada.", "Esperar que a chance de estado do Alf se aplique a cada ciclo — é uma chance de 40%, não garantida.", "S'attendre à ce que la chance de statut d'Alf s'applique à chaque cycle — c'est une chance de 40 %, pas une garantie.", "期望 Alf 的状态几率每个循环都生效——那只是40%的几率，并非保证。", "Ожидать, что шанс статуса Альфа сработает в каждом цикле — это 40% шанс, а не гарантия."),
      ],
      pros: [
        L("Fastest rage cycle of the Devastating Charge variants, thanks to Alf's third talent", "El ciclo de rabia más rápido de las variantes de Devastating Charge, gracias al tercer talento de Alf", "O ciclo de raiva mais rápido das variantes de Devastating Charge, graças ao terceiro talento do Alf", "Cycle de rage le plus rapide des variantes de Devastating Charge, grâce au troisième talent d'Alf", "得益于 Alf 的第三天赋，是 Devastating Charge 各变体中怒气循环最快的", "Самый быстрый цикл ярости среди вариантов Devastating Charge благодаря третьему таланту Альфа"),
        L("Viable alternative when Sheila and Sasha aren't available", "Alternativa viable cuando Sheila y Sasha no están disponibles", "Alternativa viável quando Sheila e Sasha não estão disponíveis", "Alternative viable quand Sheila et Sasha ne sont pas disponibles", "在没有 Sheila 和 Sasha 时是可行的替代方案", "Жизнеспособная альтернатива, когда Шейла и Саша недоступны"),
      ],
      cons: [
        L("Least reliable status application of the three variants — neither burn nor poison is guaranteed", "La aplicación de estado menos confiable de las tres variantes — ni la quemadura ni el veneno están garantizados", "A aplicação de estado menos confiável das três variantes — nem a queimadura nem o veneno são garantidos", "Application de statut la moins fiable des trois variantes — ni la brûlure ni le poison ne sont garantis", "三种变体中状态施加最不可靠——灼烧和中毒都无法保证", "Наименее надёжное наложение статуса среди трёх вариантов — ни поджог, ни яд не гарантированы"),
        L("Only worth it against shield/heal-heavy targets — otherwise Leandra & Yulmi is simpler", "Solo vale la pena contra objetivos que dependen de escudos/curación — si no, Leandra y Yulmi es más simple", "Só vale a pena contra alvos que dependem de escudos/cura — senão, Leandra e Yulmi é mais simples", "Rentable uniquement contre des cibles dépendantes de boucliers/soins — sinon Leandra et Yulmi est plus simple", "只对依赖护盾/治疗的目标值得使用——否则 Leandra 和 Yulmi 更简单", "Оправдано только против целей со щитами/лечением — в остальных случаях Леандра и Юлми проще"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Same core role as in the generalist setup — her kit stays the constant across both Leandra-side variants.",
            "Mismo rol central que en la configuración generalista — su kit es la constante en ambas variantes del lado Leandra.",
            "Mesmo papel central da configuração generalista — o kit dela é a constante nas duas variantes do lado Leandra.",
            "Même rôle central que dans la configuration généraliste — son kit reste la constante dans les deux variantes du côté Leandra.",
            "与通用配置中的核心定位相同——她的技能组在 Leandra 一侧的两种变体中保持不变。",
            "Та же основная роль, что и в универсальной конфигурации — её набор остаётся постоянным в обоих вариантах стороны Леандры."
          ),
          skills: [
            { name: "Devastating Charge", note: "6s interval — needs a reliable poison/burn source to trigger" },
            null,
          ],
        },
        {
          name: "Alf",
          rarity: "Epic",
          roleTag: "Support",
          commander: "secondary",
          note: L(
            "Rage skill has a 40% chance to apply a 3-second poison and a 40% chance to apply a 3-second burn — not guaranteed, but his third talent gives this march the fastest rage cycle of the Devastating Charge variants.",
            "Su habilidad de rabia tiene un 40% de chance de aplicar un veneno de 3 segundos y un 40% de chance de aplicar una quemadura de 3 segundos — no está garantizado, pero su tercer talento le da a esta marcha el ciclo de rabia más rápido de las variantes de Devastating Charge.",
            "A habilidade de raiva tem 40% de chance de aplicar um veneno de 3 segundos e 40% de chance de aplicar uma queimadura de 3 segundos — não é garantido, mas o terceiro talento dele dá a esta marcha o ciclo de raiva mais rápido das variantes de Devastating Charge.",
            "La compétence de rage a 40 % de chance d'appliquer un poison de 3 secondes et 40 % de chance d'appliquer une brûlure de 3 secondes — pas garanti, mais son troisième talent donne à cette marche le cycle de rage le plus rapide des variantes de Devastating Charge.",
            "怒气技能有40%几率施加持续3秒的中毒，另有40%几率施加持续3秒的灼烧——并不保证，但他的第三天赋让这支行军拥有 Devastating Charge 各变体中最快的怒气循环。",
            "Навык ярости имеет 40% шанс наложить яд на 3 секунды и 40% шанс наложить поджог на 3 секунды — не гарантировано, но третий талант даёт этому маршу самый быстрый цикл ярости среди вариантов Devastating Charge."
          ),
          skills: [null, null],
        },
      ],
      troopComposition: L(
        "Prefer pikemen with defense mounts, defense mount parts, and pikemen equipment to minimize losses. No defensive mount/gear? Infantry is the second-best option, archers last (weakest defense stats). Reset hero talents toward defense and health.",
        "Preferí piqueros con monturas de defensa, partes de montura de defensa y equipo de piquero para minimizar las pérdidas. ¿No tenés montura/equipo defensivo? La infantería es la segunda mejor opción, los arqueros al final (las estadísticas de defensa más débiles). Reseteá los talentos de los héroes hacia defensa y vida.",
        "Prefira piqueiros com montarias de defesa, partes de montaria de defesa e equipamento de piqueiro para minimizar as perdas. Sem montaria/equipamento defensivo? A infantaria é a segunda melhor opção, os arqueiros por último (estatísticas de defesa mais fracas). Resete os talentos dos heróis para defesa e vida.",
        "Privilégiez les piquiers avec montures défensives, pièces de monture défensive et équipement de piquier pour minimiser les pertes. Pas de monture/équipement défensif ? L'infanterie est le deuxième meilleur choix, les archers en dernier (statistiques de défense les plus faibles). Réinitialisez les talents des héros vers la défense et la vie.",
        "优先选择配备防御坐骑、防御坐骑部件和长枪兵装备的长枪兵，以尽量减少损失。没有防御坐骑/装备？步兵是次优选择，弓兵最后（防御属性最弱）。将英雄天赋重置为偏向防御和生命。",
        "Предпочтительны копейщики с защитными ездовыми, частями защитного ездового и снаряжением копейщика, чтобы минимизировать потери. Нет защитного ездового/снаряжения? Пехота — второй по качеству вариант, лучники в последнюю очередь (самые слабые показатели защиты). Сбросьте таланты героев в сторону защиты и здоровья."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["swarm-2-leandra-sasha", "swarm-2-leandra-sheila"],
    },
  },
  {
    id: "solo-1-leandra-artur",
    title: L("Solo — 1 March: Leandra & Artur", "Solo — 1 Marcha: Leandra y Artur", "Solo — 1 Marcha: Leandra e Artur", "Solo — 1 Marche : Leandra et Artur", "单人 — 1支行军：Leandra 与 Artur", "Соло — 1 Марш: Леандра и Артур"),
    category: "debuff",
    strategy: "solo",
    difficulty: 1,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Artur"],
    summary: L(
      "High survivability, low impact. The same build as the Swarm single-march option, with Leandra's last skill filled with Dampened Spirits for a bit more impact when running it alone.",
      "Alta supervivencia, bajo impacto. La misma build que la opción de una sola marcha del Swarm, con el último slot de habilidad de Leandra completado con Dampened Spirits para algo más de impacto al correrla sola.",
      "Alta sobrevivência, baixo impacto. A mesma build da opção de uma marcha do Swarm, com o último slot de habilidade da Leandra preenchido com Dampened Spirits para um pouco mais de impacto ao rodá-la sozinha.",
      "Survie élevée, faible impact. La même build que l'option d'Essaim à une marche, avec la dernière compétence de Leandra remplie par Dampened Spirits pour un peu plus d'impact en jouant seul.",
      "生存能力高，影响力低。与集群单行军方案相同的配置，只是把 Leandra 的最后一个技能换成 Dampened Spirits，使单独出战时多一点影响力。",
      "Высокая живучесть, низкий импакт. Та же сборка, что и вариант роя с одним маршем, с заполненным последним слотом навыка Леандры через Dampened Spirits для чуть большего импакта при использовании в одиночку."
    ),
    detail: {
      useCase: L("Debuff · Solo · Low activity / no swarm available", "Debuff · Solo · Baja actividad / sin swarm disponible", "Debuff · Solo · Baixa atividade / sem swarm disponível", "Debuff · Solo · Faible activité / pas d'essaim disponible", "减益 · 单人 · 活跃度低 / 没有集群可用", "Дебафф · Соло · Низкая активность / рой недоступен"),
      quickSteps: [
        L("Confirm no coordinated swarm is available before committing to solo.", "Confirmá que no hay un swarm coordinado disponible antes de comprometerte a ir solo.", "Confirme que não há um swarm coordenado disponível antes de se comprometer a ir solo.", "Confirmez qu'aucun essaim coordonné n'est disponible avant de vous engager en solo.", "在决定单人出战之前，先确认没有协同集群可用。", "Убедитесь, что скоординированный рой недоступен, прежде чем идти соло."),
        L("Send alone — no timing sync needed.", "Enviala sola — no necesita sincronizar timing.", "Envie sozinha — não precisa sincronizar timing.", "Envoyez-la seule — aucune synchronisation de timing nécessaire.", "单独派出——无需同步时机。", "Отправляйте в одиночку — синхронизация тайминга не нужна."),
        L("Let Containment apply Broken Blade to reduce counterattacks.", "Dejá que Containment aplique Broken Blade para reducir los contraataques.", "Deixe Containment aplicar Broken Blade para reduzir os contra-ataques.", "Laissez Containment appliquer Broken Blade pour réduire les contre-attaques.", "让 Containment 施加 Broken Blade 以降低反击。", "Дайте Containment наложить Broken Blade, чтобы снизить контратаки."),
        L("Accept higher losses than the swarm version of this same build.", "Aceptá pérdidas más altas que la versión swarm de esta misma build.", "Aceite perdas maiores que a versão swarm desta mesma build.", "Acceptez des pertes plus élevées que la version essaim de cette même build.", "接受比这套配置的集群版本更高的损失。", "Примите более высокие потери, чем в роевой версии этой же сборки."),
      ],
      objective: L(
        "Give you a safe, familiar debuff option when running solo — the same Artur & Leandra core as the swarm build, just accepting it won't hit as hard without the group behind it.",
        "Darte una opción de debuff segura y familiar al ir solo — el mismo núcleo Artur y Leandra que la build de swarm, aceptando que no va a golpear tan fuerte sin el grupo detrás.",
        "Dar a você uma opção de debuff segura e familiar ao ir solo — o mesmo núcleo Artur e Leandra da build de swarm, aceitando que ela não vai bater tão forte sem o grupo por trás.",
        "Vous offrir une option de debuff sûre et familière en solo — le même noyau Artur et Leandra que la build d'essaim, en acceptant simplement qu'elle ne frappera pas aussi fort sans le groupe derrière.",
        "在你单人出战时提供一个安全、熟悉的减益选项——核心与集群配置相同，都是 Artur 和 Leandra，只是接受没有团队支持时打击力度不会那么强。",
        "Дать безопасный, знакомый вариант дебаффа при игре в одиночку — то же ядро Артур и Леандра, что и в роевой сборке, просто с пониманием, что без поддержки группы удар будет слабее."
      ),
      whenToUse: L(
        "Best when swarm coordination isn't available (off hours, low activity) and you still want the safest possible solo debuffer. It's always preferable to focus on the swarm strategy when enough players are online — fall back to solo only when that's not realistic.",
        "Mejor cuando no hay coordinación de swarm disponible (fuera de horario, poca actividad) y todavía querés el debuffer solo más seguro posible. Siempre es preferible enfocarse en la estrategia swarm cuando hay suficientes jugadores conectados — recurrí al solo solo cuando eso no sea realista.",
        "Melhor quando não há coordenação de swarm disponível (fora de horário, pouca atividade) e você ainda quer o debuffer solo mais seguro possível. É sempre preferível focar na estratégia de swarm quando há jogadores suficientes online — recorra ao solo só quando isso não for realista.",
        "Idéal quand la coordination d'essaim n'est pas disponible (heures creuses, faible activité) et que vous voulez quand même le debuffer solo le plus sûr possible. Il est toujours préférable de se concentrer sur la stratégie d'essaim quand assez de joueurs sont en ligne — ne passez au solo que lorsque ce n'est pas réaliste.",
        "最适合无法进行集群协同（非高峰时段、活跃度低）而你仍想要尽可能安全的单人减益英雄的情况。当有足够玩家在线时，始终优先采用集群策略——只有在不现实时才退回单人。",
        "Лучше всего, когда координация роя недоступна (неудобное время, низкая активность), а вам всё ещё нужен максимально безопасный соло-дебафер. Всегда предпочтительнее делать ставку на стратегию роя, когда онлайн достаточно игроков — переходите на соло только когда это нереалистично."
      ),
      counters: L(
        "Lower impact than any of the other solo options — it trades power for survivability. Still vulnerable to status immunity like Divine Shield, same as the swarm version.",
        "Menor impacto que cualquiera de las otras opciones solo — cambia poder por supervivencia. Igual es vulnerable a la inmunidad a estados como Divine Shield, lo mismo que la versión swarm.",
        "Impacto menor que qualquer uma das outras opções solo — troca poder por sobrevivência. Ainda é vulnerável à imunidade a estados como Divine Shield, igual à versão swarm.",
        "Impact plus faible que n'importe quelle autre option solo — elle échange la puissance contre la survie. Toujours vulnérable à l'immunité aux statuts comme Divine Shield, comme la version essaim.",
        "影响力低于其他任何单人选项——以威力换取生存能力。与集群版本一样，仍然易受 Divine Shield 之类的状态免疫影响。",
        "Более низкий импакт, чем у любого другого соло-варианта — он меняет силу на живучесть. Всё ещё уязвим к иммунитету к статусам вроде Divine Shield, как и роевая версия."
      ),
      commonMistakes: [
        L("Using this when a swarm was actually available — check first, swarm is always the better trade.", "Usar esta opción cuando en realidad había un swarm disponible — fijate primero, el swarm siempre es el mejor trato.", "Usar esta opção quando na verdade havia um swarm disponível — confira primeiro, o swarm é sempre o melhor negócio.", "L'utiliser alors qu'un essaim était en fait disponible — vérifiez d'abord, l'essaim est toujours le meilleur compromis.", "在其实有集群可用时使用这个方案——先检查，集群永远是更划算的选择。", "Использовать это, когда рой на самом деле был доступен — сначала проверьте, рой всегда выгоднее."),
        L("Leaving Leandra's last skill on a flex pick instead of Dampened Spirits.", "Dejar el último slot de habilidad de Leandra en una elección flexible en vez de Dampened Spirits.", "Deixar o último slot de habilidade da Leandra em uma escolha flexível em vez de Dampened Spirits.", "Laisser la dernière compétence de Leandra sur un choix flexible au lieu de Dampened Spirits.", "把 Leandra 的最后一个技能留给灵活选择，而不是 Dampened Spirits。", "Оставлять последний навык Леандры на гибком выборе вместо Dampened Spirits."),
      ],
      pros: [
        L("Highest survivability of the four solo options", "La mayor supervivencia de las cuatro opciones solo", "A maior sobrevivência das quatro opções solo", "La survie la plus élevée des quatre options solo", "四种单人选项中生存能力最高", "Самая высокая живучесть среди четырёх соло-вариантов"),
        L("Reuses a build you may already know from the Swarm strategy", "Reutiliza una build que ya podés conocer de la estrategia Swarm", "Reaproveita uma build que você talvez já conheça da estratégia Swarm", "Réutilise une build que vous connaissez peut-être déjà de la stratégie d'Essaim", "复用你可能已经从集群策略中熟悉的配置", "Использует сборку, которую вы, возможно, уже знаете по стратегии роя"),
        L("Cheap to run — good default when unsure", "Barata de correr — buena opción por defecto cuando hay dudas", "Barata de rodar — boa opção padrão na dúvida", "Peu coûteuse à utiliser — bon choix par défaut en cas de doute", "使用成本低——拿不准时是不错的默认选择", "Дёшево в использовании — хороший вариант по умолчанию при сомнениях"),
      ],
      cons: [
        L("Lowest impact of the four solo options", "El menor impacto de las cuatro opciones solo", "O menor impacto das quatro opções solo", "L'impact le plus faible des quatre options solo", "四种单人选项中影响力最低", "Самый низкий импакт среди четырёх соло-вариантов"),
        L("Still needs Dampened Spirits on Leandra to be worth the trip", "Igual necesita Dampened Spirits en Leandra para que valga la pena", "Ainda precisa de Dampened Spirits na Leandra para valer a pena", "Nécessite quand même Dampened Spirits sur Leandra pour que ça vaille le coup", "仍然需要 Leandra 装备 Dampened Spirits，这一趟才值得", "Всё равно требует Dampened Spirits у Леандры, чтобы стоило того"),
      ],
      heroes: [
        {
          name: "Artur",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L("Carries Containment, applying Broken Blade to the target every 12 seconds.", "Lleva Containment, aplicando Broken Blade al objetivo cada 12 segundos.", "Leva Containment, aplicando Broken Blade ao alvo a cada 12 segundos.", "Porte Containment, appliquant Broken Blade à la cible toutes les 12 secondes.", "携带 Containment，每12秒对目标施加一次 Broken Blade。", "Несёт Containment, накладывая Broken Blade на цель каждые 12 секунд."),
          skills: [{ name: "Containment", note: "Applies Broken Blade every 12s" }, null],
        },
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Support",
          commander: "secondary",
          note: L("Fill her last skill with Dampened Spirits for extra impact when running this build solo.", "Completá su último slot de habilidad con Dampened Spirits para impacto extra al correr esta build sola.", "Preencha o último slot de habilidade dela com Dampened Spirits para impacto extra ao rodar esta build solo.", "Remplissez sa dernière compétence avec Dampened Spirits pour un impact supplémentaire en jouant cette build en solo.", "单人使用这套配置时，把她的最后一个技能填入 Dampened Spirits 以获得额外影响力。", "Заполните её последний навык через Dampened Spirits для дополнительного импакта при соло-использовании этой сборки."),
          skills: [{ name: "Dampened Spirits", note: "A-tier — adds impact for the solo version" }, null],
        },
      ],
      troopComposition: L(
        "Same troop priority as the swarm version: pikemen with defense mounts/equipment first, infantry second, archers last. Expect to lose more troops than you would in a coordinated swarm.",
        "Misma prioridad de tropas que la versión swarm: piqueros con monturas/equipo de defensa primero, infantería segundo, arqueros al final. Esperá perder más tropas de las que perderías en un swarm coordinado.",
        "A mesma prioridade de tropas da versão swarm: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere perder mais tropas do que perderia em um swarm coordenado.",
        "Même priorité de troupes que la version essaim : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous à perdre plus de troupes que dans un essaim coordonné.",
        "与集群版本相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。预计损失的兵力会比在协同集群中更多。",
        "Та же приоритетность войск, что и в роевой версии: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте потерять больше войск, чем в скоординированном рое."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-1-charlton-ivana", "solo-1-rosky-ivana", "solo-1-hobert-ivana"],
    },
  },
  {
    id: "solo-1-charlton-ivana",
    title: L("Solo — 1 March: Charlton & Ivana", "Solo — 1 Marcha: Charlton y Ivana", "Solo — 1 Marcha: Charlton e Ivana", "Solo — 1 Marche : Charlton et Ivana", "单人 — 1支行军：Charlton 与 Ivana", "Соло — 1 Марш: Чарлтон и Ивана"),
    category: "debuff",
    strategy: "solo",
    difficulty: 2,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Charlton", "Ivana"],
    summary: L(
      "Above-low survivability, high impact. A generalist option that adds a purge on top of Ivana's rage-draining silence kit.",
      "Supervivencia por encima de baja, alto impacto. Una opción generalista que suma un purge encima del kit de silencio de Ivana que drena rabia.",
      "Sobrevivência acima de baixa, alto impacto. Uma opção generalista que soma um purge ao kit de silêncio da Ivana que drena raiva.",
      "Survie supérieure à faible, impact élevé. Une option généraliste qui ajoute une purge au kit de silence d'Ivana qui draine la rage.",
      "生存能力高于低档，影响力高。一个通用型选项，在 Ivana 消耗怒气的沉默组合之上，再加一个驱散。",
      "Живучесть выше низкой, высокий импакт. Универсальный вариант, добавляющий purge поверх набора Иваны по молчанию, истощающего ярость."
    ),
    detail: {
      useCase: L("Debuff · Solo · High-impact generalist", "Debuff · Solo · Generalista de alto impacto", "Debuff · Solo · Generalista de alto impacto", "Debuff · Solo · Généraliste à fort impact", "减益 · 单人 · 高影响力通用型", "Дебафф · Соло · Универсал с высоким импактом"),
      quickSteps: [
        L("Confirm no coordinated swarm is available before committing to solo.", "Confirmá que no hay un swarm coordinado disponible antes de comprometerte a ir solo.", "Confirme que não há um swarm coordenado disponível antes de se comprometer a ir solo.", "Confirmez qu'aucun essaim coordonné n'est disponible avant de vous engager en solo.", "在决定单人出战之前，先确认没有协同集群可用。", "Убедитесь, что скоординированный рой недоступен, прежде чем идти соло."),
        L("Send alone.", "Enviala sola.", "Envie sozinha.", "Envoyez-la seule.", "单独派出。", "Отправляйте в одиночку."),
        L("Let Ivana's silence skills drain the target's rage bar.", "Dejá que las habilidades de silencio de Ivana drenen la barra de rabia del objetivo.", "Deixe as habilidades de silêncio da Ivana drenarem a barra de raiva do alvo.", "Laissez les compétences de silence d'Ivana drainer la barre de rage de la cible.", "让 Ivana 的沉默技能消耗目标的怒气条。", "Дайте навыкам молчания Иваны истощать полосу ярости цели."),
        L("Lean on Charlton's own debuff kit and purge for extra pressure.", "Apoyate en el kit de debuff propio de Charlton y el purge para presión extra.", "Apoie-se no kit de debuff próprio do Charlton e no purge para pressão extra.", "Appuyez-vous sur le kit de debuff propre à Charlton et sur la purge pour une pression supplémentaire.", "依靠 Charlton 自身的减益组合和驱散来施加额外压力。", "Опирайтесь на собственный набор дебаффов Чарлтона и purge для дополнительного давления."),
      ],
      objective: L(
        "Combine Ivana's rage-draining silence kit with Charlton's own debuff capabilities and a purge, for a stronger solo option than the pure-survivability Leandra & Artur build.",
        "Combinar el kit de silencio de Ivana que drena rabia con las capacidades de debuff propias de Charlton y un purge, para una opción solo más fuerte que la build de pura supervivencia de Leandra y Artur.",
        "Combinar o kit de silêncio da Ivana que drena raiva com as capacidades de debuff próprias do Charlton e um purge, para uma opção solo mais forte que a build de pura sobrevivência de Leandra e Artur.",
        "Combiner le kit de silence d'Ivana qui draine la rage avec les capacités de debuff propres à Charlton et une purge, pour une option solo plus forte que la build de pure survie Leandra et Artur.",
        "将 Ivana 消耗怒气的沉默组合，与 Charlton 自身的减益能力和一个驱散相结合，打造出比纯生存型的 Leandra 与 Artur 配置更强的单人选项。",
        "Совместить набор молчания Иваны, истощающий ярость, с собственными способностями дебаффа Чарлтона и purge — для более сильного соло-варианта, чем чисто выживальческая сборка Леандры и Артура."
      ),
      whenToUse: L(
        "Pick this over Leandra & Artur when you want more impact and can accept the lower (but still reasonable) survivability. All the Ivana-based solo marches share the same skill set on her — she isn't rebuilt per pairing.",
        "Elegí esta en vez de Leandra y Artur cuando quieras más impacto y puedas aceptar la supervivencia más baja (pero todavía razonable). Todas las marchas solo basadas en Ivana comparten el mismo set de habilidades en ella — no se rearma según el compañero.",
        "Escolha esta em vez de Leandra e Artur quando quiser mais impacto e puder aceitar a sobrevivência mais baixa (mas ainda razoável). Todas as marchas solo baseadas na Ivana compartilham o mesmo conjunto de habilidades nela — ela não é remontada conforme o parceiro.",
        "Choisissez celle-ci plutôt que Leandra et Artur quand vous voulez plus d'impact et pouvez accepter une survie plus faible (mais toujours raisonnable). Toutes les marches solo basées sur Ivana partagent le même ensemble de compétences sur elle — elle n'est pas reconstruite selon le partenaire.",
        "当你想要更高的影响力，并且能接受较低（但仍然合理）的生存能力时，选择它而不是 Leandra 与 Artur。所有基于 Ivana 的单人行军都共用她的同一套技能——她不会因搭档不同而重新配置。",
        "Выбирайте это вместо Леандры и Артура, когда хотите больше импакта и готовы принять более низкую (но всё ещё разумную) живучесть. Все соло-марши на базе Иваны используют один и тот же набор навыков у неё — он не пересобирается под пару."
      ),
      counters: L(
        "Lower survivability than the Leandra & Artur solo option. Depends on Ivana's rage skill and first-talent silence interaction landing to matter.",
        "Menor supervivencia que la opción solo de Leandra y Artur. Depende de que la habilidad de rabia de Ivana y la interacción de silencio de su primer talento se den para que importe.",
        "Sobrevivência menor que a opção solo de Leandra e Artur. Depende de a habilidade de raiva da Ivana e a interação de silêncio do primeiro talento dela acontecerem para fazer diferença.",
        "Survie plus faible que l'option solo Leandra et Artur. Dépend du déclenchement de la compétence de rage d'Ivana et de l'interaction de silence de son premier talent pour compter.",
        "生存能力低于 Leandra 与 Artur 的单人选项。要发挥作用，取决于 Ivana 的怒气技能和第一天赋的沉默联动能否生效。",
        "Более низкая живучесть, чем у соло-варианта Леандры и Артура. Зависит от срабатывания навыка ярости Иваны и взаимодействия молчания первого таланта, чтобы это имело значение."
      ),
      commonMistakes: [
        L("Expecting Leandra & Artur-level survivability — this build trades some of that for impact.", "Esperar una supervivencia al nivel de Leandra y Artur — esta build cambia algo de eso por impacto.", "Esperar sobrevivência no nível de Leandra e Artur — esta build troca parte disso por impacto.", "S'attendre à une survie au niveau de Leandra et Artur — cette build en sacrifie une partie pour l'impact.", "期望获得 Leandra 与 Artur 水平的生存能力——这套配置牺牲了一部分生存能力来换取影响力。", "Ожидать живучести на уровне Леандры и Артура — эта сборка меняет часть этого на импакт."),
        L("Skipping Ivana's silence skill in favor of something else — the rage-drain interaction is the point.", "Saltearse la habilidad de silencio de Ivana por otra cosa — la interacción de drenaje de rabia es el punto central.", "Pular a habilidade de silêncio da Ivana por outra coisa — a interação de drenagem de raiva é o ponto central.", "Sauter la compétence de silence d'Ivana au profit d'autre chose — l'interaction de drain de rage est tout l'intérêt.", "为了别的东西而跳过 Ivana 的沉默技能——怒气消耗联动才是重点。", "Пропускать навык молчания Иваны ради чего-то другого — истощение ярости и есть суть."),
      ],
      pros: [
        L("Highest overall value among the solo options — generalist with a real purge", "El mayor valor general entre las opciones solo — generalista con un purge real", "O maior valor geral entre as opções solo — generalista com um purge de verdade", "La meilleure valeur globale parmi les options solo — généraliste avec une vraie purge", "单人选项中整体价值最高——带有真正驱散的通用型", "Самая высокая общая ценность среди соло-вариантов — универсал с настоящим purge"),
        L("Ivana's rage drain reliably chips at the target's ability uptime", "El drenaje de rabia de Ivana desgasta de forma confiable el uptime de habilidades del objetivo", "A drenagem de raiva da Ivana desgasta de forma confiável o uptime de habilidades do alvo", "Le drain de rage d'Ivana entame de manière fiable le temps d'activité des compétences de la cible", "Ivana 的怒气消耗稳定地削弱目标的技能持续时间", "Истощение ярости Иваны надёжно подтачивает аптайм способностей цели"),
      ],
      cons: [
        L("More losses expected than Leandra & Artur", "Se esperan más pérdidas que con Leandra y Artur", "Esperam-se mais perdas que com Leandra e Artur", "Plus de pertes attendues qu'avec Leandra et Artur", "预期损失比 Leandra 与 Artur 更多", "Ожидается больше потерь, чем с Леандрой и Артуром"),
        L("Charlton's own skill picks are flexible here — no single indispensable pick named", "Las elecciones de habilidad propias de Charlton son flexibles acá — no hay ninguna elección indispensable nombrada", "As escolhas de habilidade próprias do Charlton são flexíveis aqui — nenhuma escolha indispensável é indicada", "Les choix de compétences propres à Charlton sont flexibles ici — aucun choix indispensable n'est nommé", "Charlton 自己的技能选择在这里很灵活——没有指定任何不可或缺的选择", "Собственный выбор навыков Чарлтона здесь гибкий — ни один незаменимый вариант не назван"),
      ],
      heroes: [
        {
          name: "Charlton",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L("Brings his own debuff capabilities and a purge on top of Ivana's rage-drain kit.", "Aporta sus propias capacidades de debuff y un purge encima del kit de drenaje de rabia de Ivana.", "Traz suas próprias capacidades de debuff e um purge além do kit de drenagem de raiva da Ivana.", "Apporte ses propres capacités de debuff et une purge en plus du kit de drain de rage d'Ivana.", "在 Ivana 消耗怒气的组合之上，带来他自己的减益能力和一个驱散。", "Приносит собственные способности дебаффа и purge поверх набора истощения ярости Иваны."),
          skills: [null, null],
        },
        {
          name: "Ivana",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Built around her rage skill and first-talent interaction with silence sources, draining as much of the target's rage bar as possible. All Ivana-based solo marches share this same skill set.",
            "Construida alrededor de su habilidad de rabia y la interacción de su primer talento con fuentes de silencio, drenando tanto como sea posible la barra de rabia del objetivo. Todas las marchas solo basadas en Ivana comparten este mismo set de habilidades.",
            "Construída em torno da habilidade de raiva dela e da interação do primeiro talento com fontes de silêncio, drenando o máximo possível da barra de raiva do alvo. Todas as marchas solo baseadas na Ivana compartilham este mesmo conjunto de habilidades.",
            "Construite autour de sa compétence de rage et de l'interaction de son premier talent avec les sources de silence, drainant autant que possible la barre de rage de la cible. Toutes les marches solo basées sur Ivana partagent ce même ensemble de compétences.",
            "围绕她的怒气技能以及第一天赋与沉默来源的联动构建，尽可能多地消耗目标的怒气条。所有基于 Ivana 的单人行军都共用这套技能。",
            "Построена вокруг её навыка ярости и взаимодействия первого таланта с источниками молчания, истощая полосу ярости цели как можно сильнее. Все соло-марши на базе Иваны используют этот же набор навыков."
          ),
          skills: [{ name: "Silencer", note: "Feeds Ivana's rage-drain interaction" }, null],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last. Expect noticeably higher losses than any swarm option.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo de defensa primero, infantería segundo, arqueros al final. Esperá pérdidas notablemente más altas que cualquier opción de swarm.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere perdas visivelmente maiores que em qualquer opção de swarm.",
        "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous à des pertes nettement plus élevées que n'importe quelle option d'essaim.",
        "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。预计损失会明显高于任何集群选项。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте заметно более высокие потери, чем в любом варианте роя."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-1-leandra-artur", "solo-1-rosky-ivana", "solo-1-hobert-ivana"],
    },
  },
  {
    id: "solo-1-rosky-ivana",
    title: L("Solo — 1 March: Rosky & Ivana", "Solo — 1 Marcha: Rosky y Ivana", "Solo — 1 Marcha: Rosky e Ivana", "Solo — 1 Marche : Rosky et Ivana", "单人 — 1支行军：Rosky 与 Ivana", "Соло — 1 Марш: Роски и Ивана"),
    category: "debuff",
    strategy: "solo",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Rosky", "Ivana"],
    summary: L(
      "Low survivability, high impact. A generalist option pairing Rosky's defense reduction with Ivana's rage-draining silence kit.",
      "Supervivencia baja, alto impacto. Una opción generalista que combina la reducción de defensa de Rosky con el kit de silencio de Ivana que drena rabia.",
      "Baixa sobrevivência, alto impacto. Uma opção generalista que combina a redução de defesa da Rosky com o kit de silêncio da Ivana que drena raiva.", "Survie faible, impact élevé. Une option généraliste associant la réduction de défense de Rosky au kit de silence d'Ivana qui draine la rage.", "生存能力低，影响力高。一个通用型选项，将 Rosky 的降防与 Ivana 消耗怒气的沉默组合搭配在一起。",
      "Низкая живучесть, высокий импакт. Универсальный вариант, сочетающий снижение защиты Роски с набором молчания Иваны, истощающим ярость."
    ),
    detail: {
      useCase: L("Debuff · Solo · High-impact generalist", "Debuff · Solo · Generalista de alto impacto", "Debuff · Solo · Generalista de alto impacto", "Debuff · Solo · Généraliste à fort impact", "减益 · 单人 · 高影响力通用型", "Дебафф · Соло · Универсал с высоким импактом"),
      quickSteps: [
        L("Confirm no coordinated swarm is available before committing to solo.", "Confirmá que no hay un swarm coordinado disponible antes de comprometerte a ir solo.", "Confirme que não há um swarm coordenado disponível antes de se comprometer a ir solo.", "Confirmez qu'aucun essaim coordonné n'est disponible avant de vous engager en solo.", "在决定单人出战之前，先确认没有协同集群可用。", "Убедитесь, что скоординированный рой недоступен, прежде чем идти соло."),
        L("Send alone.", "Enviá sola.", "Envie sozinha.", "Envoyez-la seule.", "单独派出。", "Отправляйте в одиночку."),
        L("Let Rosky's innate skill strip target defenses.", "Dejá que la habilidad innata de Rosky despoje las defensas del objetivo.", "Deixe a habilidade inata da Rosky despojar as defesas do alvo.", "Laissez la compétence innée de Rosky retirer les défenses de la cible.", "让 Rosky 的天生技能削除目标的防御。", "Дайте врождённому навыку Роски снять защиту цели."),
        L("Let Ivana's silence kit drain the target's rage bar.", "Dejá que el kit de silencio de Ivana drene la barra de rabia del objetivo.", "Deixe o kit de silêncio da Ivana drenar a barra de raiva do alvo.", "Laissez le kit de silence d'Ivana drainer la barre de rage de la cible.", "让 Ivana 的沉默组合消耗目标的怒气条。", "Дайте набору молчания Иваны истощить полосу ярости цели."),
      ],
      objective: L(
        "Pair Rosky's defense reduction with Ivana's rage-drain kit for a high-impact solo option — accept lower survivability in exchange.",
        "Combiná la reducción de defensa de Rosky con el kit de drenaje de rabia de Ivana para una opción solo de alto impacto — a cambio de aceptar menor supervivencia.",
        "Combinar a redução de defesa da Rosky com o kit de drenagem de raiva da Ivana para uma opção solo de alto impacto — em troca de aceitar menor sobrevivência.", "Associer la réduction de défense de Rosky au kit de drain de rage d'Ivana pour une option solo à fort impact — en acceptant en échange une survie plus faible.", "将 Rosky 的降防与 Ivana 的怒气消耗组合搭配，打造高影响力的单人选项——代价是接受较低的生存能力。",
        "Совместить снижение защиты Роски с набором истощения ярости Иваны для высокоимпактного соло-варианта — взамен принимая более низкую живучесть."
      ),
      whenToUse: L(
        "Use when impact matters more than keeping your march intact and Charlton isn't available or you'd rather keep the defense-reduction angle from the swarm build.",
        "Usala cuando el impacto importa más que mantener la marcha intacta y Charlton no está disponible o preferís conservar el ángulo de reducción de defensa de la versión swarm.",
        "Use quando o impacto importa mais que manter a marcha intacta e o Charlton não está disponível ou você prefere manter o ângulo de redução de defesa da versão swarm.", "À utiliser quand l'impact compte plus que de garder votre marche intacte et que Charlton n'est pas disponible, ou que vous préférez conserver l'angle de réduction de défense de la version essaim.", "当影响力比保持行军完整更重要，并且 Charlton 不可用，或你更想保留集群配置中的降防思路时使用。",
        "Используйте, когда импакт важнее сохранности марша и Чарлтон недоступен, или вы предпочитаете сохранить аспект снижения защиты из сборки роя."
      ),
      counters: L(
        "Lowest survivability of the four solo options. Rosky's own debuff only lasts 4 seconds, same limitation as in the swarm version.",
        "La supervivencia más baja de las cuatro opciones solo. El debuff de Rosky dura solo 4 segundos, la misma limitación que en la versión swarm.",
        "A menor sobrevivência das quatro opções solo. O debuff da Rosky dura só 4 segundos, a mesma limitação da versão swarm.", "La survie la plus faible des quatre options solo. Le debuff propre à Rosky ne dure que 4 secondes, même limitation que dans la version essaim.", "四种单人选项中生存能力最低。Rosky 自身的减益只持续4秒，与集群版本的限制相同。",
        "Самая низкая живучесть среди четырёх соло-вариантов. Собственный дебафф Роски длится всего 4 секунды — то же ограничение, что и в версии роя."
      ),
      commonMistakes: [
        L("Running this expecting swarm-level survivability — it won't have it.", "Usarla esperando supervivencia de nivel swarm — no la va a tener.", "Usá-la esperando sobrevivência de nível swarm — ela não vai ter.", "La lancer en s'attendant à une survie de niveau essaim — elle ne l'aura pas.", "期望它有集群级别的生存能力——它没有。", "Использовать это, ожидая живучести уровня роя — её не будет."),
        L("Not having a rebuild plan ready given the higher expected losses.", "No tener un plan de reconstrucción listo dadas las pérdidas esperadas más altas.", "Não ter um plano de reconstrução pronto, dadas as perdas esperadas mais altas.", "Ne pas avoir de plan de reconstruction prêt malgré les pertes attendues plus élevées.", "鉴于预期损失更高，没有准备好重建计划。", "Не иметь готового плана восстановления при более высоких ожидаемых потерях."),
      ],
      pros: [
        L("Strong defense-reduction + rage-drain combination", "Fuerte combinación de reducción de defensa + drenaje de rabia", "Forte combinação de redução de defesa + drenagem de raiva", "Forte combinaison réduction de défense + drain de rage", "强力的降防 + 怒气消耗组合", "Сильное сочетание снижения защиты и истощения ярости"),
        L("Same reliable Ivana silence kit as the other Ivana-based solo marches", "El mismo kit de silencio confiable de Ivana que las otras marchas solo basadas en Ivana", "O mesmo kit de silêncio confiável da Ivana das outras marchas solo baseadas nela", "Le même kit de silence fiable d'Ivana que les autres marches solo basées sur Ivana", "与其他基于 Ivana 的单人行军使用同一套可靠的 Ivana 沉默组合", "Тот же надёжный набор молчания Иваны, что и в других соло-маршах на её базе"),
      ],
      cons: [
        L("Lowest survivability among the solo options", "La supervivencia más baja entre las opciones solo", "A menor sobrevivência entre as opções solo", "La survie la plus faible parmi les options solo", "单人选项中生存能力最低", "Самая низкая живучесть среди соло-вариантов"),
        L("Rosky's debuff duration is short (4s), same as in the swarm build", "La duración del debuff de Rosky es corta (4s), igual que en la versión swarm", "A duração do debuff da Rosky é curta (4s), igual à build swarm", "La durée du debuff de Rosky est courte (4 s), comme dans la build essaim", "Rosky 的减益持续时间较短（4秒），与集群配置相同", "Длительность дебаффа Роски короткая (4с), как и в сборке роя"),
      ],
      heroes: [
        {
          name: "Rosky",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L("Innate active skill reduces the target's defenses for 4 seconds.", "La habilidad activa innata reduce las defensas del objetivo durante 4 segundos.", "A habilidade ativa inata reduz as defesas do alvo por 4 segundos.", "La compétence active innée réduit les défenses de la cible pendant 4 secondes.", "天生主动技能会降低目标的防御，持续4秒。", "Врождённый активный навык снижает защиту цели на 4 секунды."),
          skills: [null, null],
        },
        {
          name: "Ivana",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Built around her rage skill and first-talent interaction with silence sources. Same shared skill set as the other Ivana-based solo marches.",
            "Armada alrededor de su habilidad de rabia y la interacción del primer talento con fuentes de silencio. El mismo set de habilidades que las otras marchas solo basadas en Ivana.",
            "Construída em torno da habilidade de raiva dela e da interação do primeiro talento com fontes de silêncio. O mesmo conjunto de habilidades das outras marchas solo baseadas na Ivana.", "Construite autour de sa compétence de rage et de l'interaction de son premier talent avec les sources de silence. Même ensemble de compétences que les autres marches solo basées sur Ivana.", "围绕她的怒气技能以及第一天赋与沉默来源的联动构建。与其他基于 Ivana 的单人行军使用同一套技能。",
            "Построена вокруг её навыка ярости и взаимодействия первого таланта с источниками молчания. Тот же общий набор навыков, что и в других соло-маршах на базе Иваны."
          ),
          skills: [{ name: "Silencer", note: "Feeds Ivana's rage-drain interaction" }, null],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last. Expect this to be the highest-loss solo option of the four.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final. Esperá que sea la opción solo con más pérdidas de las cuatro.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere que esta seja a opção solo com mais perdas das quatro.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous à ce que ce soit l'option solo avec le plus de pertes des quatre.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。预计这是四种单人选项中损失最高的一个。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте, что это будет соло-вариант с наибольшими потерями из четырёх."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-1-leandra-artur", "solo-1-charlton-ivana", "solo-1-hobert-ivana"],
    },
  },
  {
    id: "solo-1-hobert-ivana",
    title: L("Solo — 1 March: Hobert & Ivana", "Solo — 1 Marcha: Hobert y Ivana", "Solo — 1 Marcha: Hobert e Ivana", "Solo — 1 Marche : Hobert et Ivana", "单人 — 1支行军：Hobert 与 Ivana", "Соло — 1 Марш: Хоберт и Ивана"),
    category: "debuff",
    strategy: "solo",
    difficulty: 3,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Hobert", "Ivana"],
    summary: L(
      "Low survivability, mid impact. Use this when you need extra purges rather than raw damage or defense reduction.",
      "Supervivencia baja, impacto medio. Usala cuando necesitás purges extra en vez de daño bruto o reducción de defensa.",
      "Baixa sobrevivência, impacto médio. Use quando precisar de purges extras em vez de dano bruto ou redução de defesa.", "Survie faible, impact moyen. À utiliser quand vous avez besoin de purges supplémentaires plutôt que de dégâts bruts ou de réduction de défense.", "生存能力低，影响力中等。当你需要额外的驱散，而不是纯粹的伤害或降防时使用。",
      "Низкая живучесть, средний импакт. Используйте, когда нужны дополнительные purge, а не чистый урон или снижение защиты."
    ),
    detail: {
      useCase: L("Debuff · Solo · Extra purge coverage", "Debuff · Solo · Cobertura extra de purge", "Debuff · Solo · Cobertura extra de purge", "Debuff · Solo · Couverture de purge supplémentaire", "减益 · 单人 · 额外驱散覆盖", "Дебафф · Соло · Дополнительное покрытие purge"),
      quickSteps: [
        L("Confirm no coordinated swarm is available before committing to solo.", "Confirmá que no hay un swarm coordinado disponible antes de comprometerte a ir solo.", "Confirme que não há um swarm coordenado disponível antes de se comprometer a ir solo.", "Confirmez qu'aucun essaim coordonné n'est disponible avant de vous engager en solo.", "在决定单人出战之前，先确认没有协同集群可用。", "Убедитесь, что скоординированный рой недоступен, прежде чем идти соло."),
        L("Send alone.", "Enviá sola.", "Envie sozinha.", "Envoyez-la seule.", "单独派出。", "Отправляйте в одиночку."),
        L("Let Hobert's kit provide extra purges.", "Dejá que el kit de Hobert aporte purges extra.", "Deixe o kit do Hobert fornecer purges extras.", "Laissez le kit de Hobert fournir des purges supplémentaires.", "让 Hobert 的技能组提供额外的驱散。", "Дайте набору Хоберта обеспечить дополнительные purge."),
        L("Let Ivana's silence kit drain the target's rage bar.", "Dejá que el kit de silencio de Ivana drene la barra de rabia del objetivo.", "Deixe o kit de silêncio da Ivana drenar a barra de raiva do alvo.", "Laissez le kit de silence d'Ivana drainer la barre de rage de la cible.", "让 Ivana 的沉默组合消耗目标的怒气条。", "Дайте набору молчания Иваны истощить полосу ярости цели."),
      ],
      objective: L(
        "Trade some of Rosky or Charlton's impact for extra purge coverage from Hobert, still riding on Ivana's rage-drain kit.",
        "Cambiá algo del impacto de Rosky o Charlton por cobertura extra de purge de Hobert, manteniendo el kit de drenaje de rabia de Ivana.",
        "Trocar parte do impacto da Rosky ou do Charlton por cobertura extra de purge do Hobert, mantendo o kit de drenagem de raiva da Ivana.", "Sacrifier une partie de l'impact de Rosky ou de Charlton contre une couverture de purge supplémentaire de Hobert, tout en s'appuyant sur le kit de drain de rage d'Ivana.", "用 Rosky 或 Charlton 的一部分影响力，换取 Hobert 提供的额外驱散覆盖，同时仍然依靠 Ivana 消耗怒气的组合。",
        "Обменять часть импакта Роски или Чарлтона на дополнительное покрытие purge от Хоберта, по-прежнему опираясь на набор истощения ярости Иваны."
      ),
      whenToUse: L(
        "Pick this over Rosky & Ivana or Charlton & Ivana specifically when the target's buffs make extra purges more valuable than raw defense reduction.",
        "Elegila por sobre Rosky y Ivana o Charlton y Ivana específicamente cuando los buffs del objetivo hacen que los purges extra valgan más que la reducción de defensa bruta.",
        "Escolha-a em vez de Rosky e Ivana ou Charlton e Ivana especificamente quando os buffs do alvo fizerem os purges extras valerem mais que a redução de defesa bruta.", "À choisir plutôt que Rosky et Ivana ou Charlton et Ivana précisément quand les buffs de la cible rendent les purges supplémentaires plus précieuses que la réduction de défense brute.", "只有当目标的增益让额外驱散比纯粹的降防更有价值时，才选择它而不是 Rosky 与 Ivana 或 Charlton 与 Ivana。",
        "Выбирайте это вместо Роски и Иваны или Чарлтона и Иваны именно тогда, когда баффы цели делают дополнительные purge ценнее чистого снижения защиты."
      ),
      counters: L(
        "Mid impact — not the strongest of the four solo options, and survivability is still on the low end.",
        "Impacto medio — no es la más fuerte de las cuatro opciones solo, y la supervivencia sigue siendo baja.",
        "Impacto médio — não é a mais forte das quatro opções solo, e a sobrevivência continua baixa.", "Impact moyen — pas la plus forte des quatre options solo, et la survie reste plutôt faible.", "影响力中等——不是四种单人选项中最强的，而且生存能力仍然偏低。",
        "Средний импакт — не самый сильный из четырёх соло-вариантов, а живучесть всё ещё на низком уровне."
      ),
      commonMistakes: [
        L("Using this by default instead of Charlton & Ivana, which is generally the stronger all-around pick.", "Usarla por defecto en vez de Charlton y Ivana, que en general es la opción más fuerte en todo sentido.", "Usá-la por padrão em vez de Charlton e Ivana, que em geral é a opção mais forte em todos os sentidos.", "L'utiliser par défaut au lieu de Charlton et Ivana, qui est en général le choix le plus solide sur tous les plans.", "默认使用它而不是 Charlton 与 Ivana——后者总体上通常是更强的选择。", "Использовать это по умолчанию вместо Чарлтона и Иваны, которые в целом сильнее по всем параметрам."),
      ],
      pros: [
        L("Extra purge coverage the other solo options don't have", "Cobertura extra de purge que las otras opciones solo no tienen", "Cobertura extra de purge que as outras opções solo não têm", "Couverture de purge supplémentaire que les autres options solo n'ont pas", "其他单人选项没有的额外驱散覆盖", "Дополнительное покрытие purge, которого нет у других соло-вариантов"),
        L("Same reliable Ivana silence kit as the other Ivana-based solo marches", "El mismo kit de silencio confiable de Ivana que las otras marchas solo basadas en Ivana", "O mesmo kit de silêncio confiável da Ivana das outras marchas solo baseadas nela", "Le même kit de silence fiable d'Ivana que les autres marches solo basées sur Ivana", "与其他基于 Ivana 的单人行军使用同一套可靠的 Ivana 沉默组合", "Тот же надёжный набор молчания Иваны, что и в других соло-маршах на её базе"),
      ],
      cons: [
        L("Mid impact — not as strong as Charlton & Ivana or Rosky & Ivana on paper", "Impacto medio — no tan fuerte como Charlton y Ivana o Rosky y Ivana en el papel", "Impacto médio — não tão forte quanto Charlton e Ivana ou Rosky e Ivana no papel", "Impact moyen — moins fort que Charlton et Ivana ou Rosky et Ivana sur le papier", "影响力中等——纸面上不如 Charlton 与 Ivana 或 Rosky 与 Ivana 强", "Средний импакт — на бумаге не так силён, как Чарлтон и Ивана или Роски и Ивана"),
        L("Survivability is still on the low end, same as the other Ivana pairings", "La supervivencia sigue siendo baja, igual que en las otras combinaciones con Ivana", "A sobrevivência continua baixa, igual às outras combinações com Ivana", "La survie reste plutôt faible, comme pour les autres associations avec Ivana", "生存能力仍然偏低，与其他 Ivana 搭配相同", "Живучесть всё ещё на низком уровне, как и в других парах с Иваной"),
      ],
      heroes: [
        {
          name: "Hobert",
          rarity: "Epic",
          roleTag: "Support",
          commander: "main",
          note: L("Brings extra purge coverage — pick this pairing when that matters more than raw debuff power.", "Aporta cobertura extra de purge — elegí esta combinación cuando eso importa más que el poder de debuff bruto.", "Traz cobertura extra de purge — escolha esta combinação quando isso importar mais que o poder de debuff bruto.", "Apporte une couverture de purge supplémentaire — choisissez cette association quand cela compte plus que la puissance de debuff brute.", "提供额外的驱散覆盖——当这一点比纯粹的减益威力更重要时，选择这个搭配。", "Приносит дополнительное покрытие purge — выбирайте эту пару, когда это важнее чистой силы дебаффа."),
          skills: [null, null],
        },
        {
          name: "Ivana",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Built around her rage skill and first-talent interaction with silence sources. Same shared skill set as the other Ivana-based solo marches.",
            "Armada alrededor de su habilidad de rabia y la interacción del primer talento con fuentes de silencio. El mismo set de habilidades que las otras marchas solo basadas en Ivana.",
            "Construída em torno da habilidade de raiva dela e da interação do primeiro talento com fontes de silêncio. O mesmo conjunto de habilidades das outras marchas solo baseadas na Ivana.", "Construite autour de sa compétence de rage et de l'interaction de son premier talent avec les sources de silence. Même ensemble de compétences que les autres marches solo basées sur Ivana.", "围绕她的怒气技能以及第一天赋与沉默来源的联动构建。与其他基于 Ivana 的单人行军使用同一套技能。",
            "Построена вокруг её навыка ярости и взаимодействия первого таланта с источниками молчания. Тот же общий набор навыков, что и в других соло-маршах на базе Иваны."
          ),
          skills: [{ name: "Silencer", note: "Feeds Ivana's rage-drain interaction" }, null],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-1-leandra-artur", "solo-1-charlton-ivana", "solo-1-rosky-ivana"],
    },
  },
  {
    id: "solo-2-artur-ivana",
    title: L("Solo — 2 Marches: Artur & Ivana", "Solo — 2 Marchas: Artur y Ivana", "Solo — 2 Marchas: Artur e Ivana", "Solo — 2 Marches : Artur et Ivana", "单人 — 2支行军：Artur 与 Ivana", "Соло — 2 Марша: Артур и Ивана"),
    category: "debuff",
    strategy: "solo",
    difficulty: 4,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Artur", "Ivana"],
    summary: L(
      "One half of a two-march solo setup (paired with Charlton & Leandra). Lower losses than most 2-march solo combos, at the cost of somewhat lower overall impact.",
      "Una mitad de una configuración solo de dos marchas (combinada con Charlton y Leandra). Menos pérdidas que la mayoría de las combinaciones solo de 2 marchas, a costa de un impacto general algo menor.",
      "Uma metade de uma configuração solo de duas marchas (combinada com Charlton e Leandra). Menos perdas que a maioria das combinações solo de 2 marchas, ao custo de um impacto geral um pouco menor.", "Une moitié d'une configuration solo à deux marches (associée à Charlton et Leandra). Moins de pertes que la plupart des combos solo à 2 marches, au prix d'un impact global un peu plus faible.", "双行军单人配置的一半（与 Charlton 和 Leandra 搭配）。损失低于大多数双行军单人组合，代价是整体影响力略低。",
      "Одна половина сборки из двух соло-маршей (в паре с Чарлтоном и Леандрой). Меньше потерь, чем в большинстве соло-комбо из 2 маршей, ценой несколько более низкого общего импакта."
    ),
    detail: {
      useCase: L("Debuff · Solo · Two-march setup (pair with Charlton & Leandra)", "Debuff · Solo · Configuración de dos marchas (combinar con Charlton y Leandra)", "Debuff · Solo · Configuração de duas marchas (combinar com Charlton e Leandra)", "Debuff · Solo · Configuration à deux marches (à associer à Charlton et Leandra)", "减益 · 单人 · 双行军配置（与 Charlton 和 Leandra 搭配）", "Дебафф · Соло · Сборка из двух маршей (в паре с Чарлтоном и Леандрой)"),
      quickSteps: [
        L("Send together with the Charlton & Leandra march — this pair is meant to run as a set.", "Enviala junto con la marcha de Charlton y Leandra — este par está pensado para usarse en conjunto.", "Envie junto com a marcha de Charlton e Leandra — este par foi pensado para ser usado em conjunto.", "Envoyez-la avec la marche de Charlton et Leandra — cette paire est conçue pour fonctionner en ensemble.", "与 Charlton 和 Leandra 的行军一同派出——这一对设计为成套使用。", "Отправляйте вместе с маршем Чарлтона и Леандры — эта пара рассчитана на совместное использование."),
        L("Let Containment apply Broken Blade to reduce counterattacks.", "Dejá que Containment aplique Broken Blade para reducir los contraataques.", "Deixe Containment aplicar Broken Blade para reduzir os contra-ataques.", "Laissez Containment appliquer Broken Blade pour réduire les contre-attaques.", "让 Containment 施加 Broken Blade 以降低反击。", "Дайте Containment наложить Broken Blade, чтобы снизить контратаки."),
        L("Let Ivana's full silence kit drain the target's rage bar.", "Dejá que el kit completo de silencio de Ivana drene la barra de rabia del objetivo.", "Deixe o kit completo de silêncio da Ivana drenar a barra de raiva do alvo.", "Laissez le kit de silence complet d'Ivana drainer la barre de rage de la cible.", "让 Ivana 完整的沉默组合消耗目标的怒气条。", "Дайте полному набору молчания Иваны истощить полосу ярости цели."),
      ],
      objective: L(
        "Cover counterattack reduction (Artur) and rage-bar denial (Ivana) as one half of a two-march solo setup, trading some impact for lower losses than the Leandra & Ivana pairing.",
        "Cubrí la reducción de contraataques (Artur) y la negación de la barra de rabia (Ivana) como una mitad de una configuración solo de dos marchas, cambiando algo de impacto por menos pérdidas que la combinación Leandra e Ivana.",
        "Cobrir a redução de contra-ataques (Artur) e a negação da barra de raiva (Ivana) como uma metade de uma configuração solo de duas marchas, trocando um pouco de impacto por menos perdas que a combinação Leandra e Ivana.", "Couvrir la réduction des contre-attaques (Artur) et le déni de la barre de rage (Ivana) comme une moitié d'une configuration solo à deux marches, en sacrifiant un peu d'impact contre moins de pertes que l'association Leandra et Ivana.", "覆盖反击削减（Artur）与怒气条压制（Ivana），作为双行军单人配置的一半，用一部分影响力换取比 Leandra 与 Ivana 搭配更低的损失。",
        "Обеспечить снижение контратак (Артур) и подавление полосы ярости (Ивана) как половину сборки из двух соло-маршей, обменивая часть импакта на меньшие потери по сравнению с парой Леандра и Ивана."
      ),
      whenToUse: L(
        "Use this dual-march combo, together with Charlton & Leandra, when running 2 solo debuff marches and you'd rather keep losses on the lower side of the 2-march options.",
        "Usá esta combinación de dos marchas, junto con Charlton y Leandra, cuando corras 2 marchas debuff solo y prefieras mantener las pérdidas del lado más bajo de las opciones de 2 marchas.",
        "Use esta combinação de duas marchas, junto com Charlton e Leandra, quando rodar 2 marchas de debuff solo e preferir manter as perdas no lado mais baixo das opções de 2 marchas.", "Utilisez ce combo à deux marches, avec Charlton et Leandra, quand vous lancez 2 marches debuff en solo et préférez garder les pertes du côté bas des options à 2 marches.", "在出两支单人减益行军、并且更想把损失控制在双行军选项中偏低一侧时，将这个双行军组合与 Charlton 和 Leandra 一起使用。",
        "Используйте это комбо из двух маршей вместе с Чарлтоном и Леандрой, когда запускаете 2 соло-марша дебаффа и предпочитаете держать потери на низкой стороне среди вариантов из 2 маршей."
      ),
      counters: L(
        "Running 2 marches solo still means noticeably higher losses than any swarm option — this combo just keeps it more manageable than the Leandra & Ivana + Hobert & Artur alternative.",
        "Correr 2 marchas solo igual implica pérdidas notablemente más altas que cualquier opción swarm — esta combinación solo las mantiene más manejables que la alternativa Leandra e Ivana + Hobert y Artur.",
        "Rodar 2 marchas solo ainda significa perdas visivelmente mais altas que qualquer opção de swarm — esta combinação só as mantém mais controláveis que a alternativa Leandra e Ivana + Hobert e Artur.", "Lancer 2 marches en solo implique toujours des pertes nettement plus élevées que n'importe quelle option d'essaim — ce combo les rend simplement plus gérables que l'alternative Leandra et Ivana + Hobert et Artur.", "同时出2支单人行军仍然意味着损失明显高于任何集群选项——这个组合只是比 Leandra 与 Ivana + Hobert 与 Artur 的替代方案更容易控制。",
        "Запуск 2 маршей соло всё равно означает заметно более высокие потери, чем в любом варианте роя — это комбо просто делает их более управляемыми, чем альтернатива Леандра и Ивана + Хоберт и Артур."
      ),
      commonMistakes: [
        L("Running this march without its Charlton & Leandra pair.", "Usar esta marcha sin su par de Charlton y Leandra.", "Usar esta marcha sem o par de Charlton e Leandra.", "Lancer cette marche sans sa paire Charlton et Leandra.", "没有搭配 Charlton 和 Leandra 就单独出这支行军。", "Использовать этот марш без пары Чарлтон и Леандра."),
        L("Not giving Ivana her full silence skill set — the 2-march version leans on having every silence skill available, not just one.", "No darle a Ivana su set completo de habilidades de silencio — la versión de 2 marchas depende de tener todas las habilidades de silencio disponibles, no solo una.", "Não dar à Ivana o conjunto completo de habilidades de silêncio — a versão de 2 marchas depende de ter todas as habilidades de silêncio disponíveis, não só uma.", "Ne pas donner à Ivana son ensemble complet de compétences de silence — la version à 2 marches repose sur la disponibilité de toutes les compétences de silence, pas d'une seule.", "没有给 Ivana 完整的沉默技能组——双行军版本依赖所有沉默技能都可用，而不是只有一个。", "Не дать Иване полный набор навыков молчания — версия из 2 маршей опирается на наличие всех навыков молчания, а не только одного."),
      ],
      pros: [
        L("Lower losses than the other 2-march solo combo", "Menos pérdidas que la otra combinación solo de 2 marchas", "Menos perdas que a outra combinação solo de 2 marchas", "Moins de pertes que l'autre combo solo à 2 marches", "损失低于另一个双行军单人组合", "Меньше потерь, чем в другом соло-комбо из 2 маршей"),
        L("Containment is a reliable, familiar counterattack-reduction source", "Containment es una fuente confiable y conocida de reducción de contraataques", "Containment é uma fonte confiável e conhecida de redução de contra-ataques", "Containment est une source fiable et familière de réduction des contre-attaques", "Containment 是可靠且熟悉的反击削减来源", "Containment — надёжный, знакомый источник снижения контратак"),
      ],
      cons: [
        L("Somewhat lower impact than the Leandra & Ivana pairing", "Impacto algo menor que la combinación Leandra e Ivana", "Impacto um pouco menor que a combinação Leandra e Ivana", "Impact un peu plus faible que l'association Leandra et Ivana", "影响力略低于 Leandra 与 Ivana 的搭配", "Несколько более низкий импакт, чем у пары Леандра и Ивана"),
        L("Only half the setup — needs Charlton & Leandra alongside it", "Solo es la mitad de la configuración — necesita a Charlton y Leandra junto a ella", "Só metade da configuração — precisa de Charlton e Leandra junto com ela", "Seulement la moitié de la configuration — nécessite Charlton et Leandra à ses côtés", "只是配置的一半——需要 Charlton 和 Leandra 配合", "Это лишь половина сборки — нужен Чарлтон и Леандра рядом"),
      ],
      heroes: [
        {
          name: "Artur",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L("Carries Containment, applying Broken Blade to the target every 12 seconds.", "Lleva Containment, aplicando Broken Blade al objetivo cada 12 segundos.", "Leva Containment, aplicando Broken Blade ao alvo a cada 12 segundos.", "Porte Containment, qui applique Broken Blade à la cible toutes les 12 secondes.", "携带 Containment，每12秒对目标施加一次 Broken Blade。", "Несёт Containment, накладывая Broken Blade на цель каждые 12 секунд."),
          skills: [{ name: "Containment", note: "Applies Broken Blade every 12s" }, null],
        },
        {
          name: "Ivana",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "The 2-march solo version leans harder on her kit than the 1-march version — load every silence skill available, not just one.",
            "La versión solo de 2 marchas depende más de su kit que la versión de 1 marcha — cargá todas las habilidades de silencio disponibles, no solo una.",
            "A versão solo de 2 marchas depende mais do kit dela que a versão de 1 marcha — carregue todas as habilidades de silêncio disponíveis, não só uma.", "La version solo à 2 marches s'appuie davantage sur son kit que la version à 1 marche — chargez toutes les compétences de silence disponibles, pas une seule.", "双行军单人版本比单行军版本更依赖她的技能组——装上所有可用的沉默技能，而不是只装一个。",
            "Соло-версия из 2 маршей сильнее опирается на её набор, чем версия из 1 марша — загрузите все доступные навыки молчания, а не только один."
          ),
          skills: [
            { name: "Silencer", note: "Feeds Ivana's rage-drain interaction" },
            { name: "Silent Invasion", note: "Extra silence coverage for the 2-march version" },
          ],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last. Expect the highest losses of any setup in this guide when running 2 solo marches at once.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final. Esperá las pérdidas más altas de cualquier configuración de esta guía al correr 2 marchas solo a la vez.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere as maiores perdas de qualquer configuração deste guia ao rodar 2 marchas solo ao mesmo tempo.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous aux pertes les plus élevées de toutes les configurations de ce guide en lançant 2 marches solo à la fois.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。同时出2支单人行军时，预计会是本指南所有配置中损失最高的。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте самые высокие потери среди всех сборок этого руководства при запуске 2 соло-маршей одновременно."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-2-charlton-leandra", "solo-2-leandra-ivana", "solo-2-hobert-artur"],
    },
  },
  {
    id: "solo-2-charlton-leandra",
    title: L("Solo — 2 Marches: Charlton & Leandra", "Solo — 2 Marchas: Charlton y Leandra", "Solo — 2 Marchas: Charlton e Leandra", "Solo — 2 Marches : Charlton et Leandra", "单人 — 2支行军：Charlton 与 Leandra", "Соло — 2 Марша: Чарлтон и Леандра"),
    category: "debuff",
    strategy: "solo",
    difficulty: 4,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Charlton", "Leandra"],
    summary: L(
      "The other half of the Artur & Ivana two-march solo setup. The guide calls this the best combo for using Charlton — it increases poison uptime and makes Leandra's burn-triggered skills fire more often.",
      "La otra mitad de la configuración solo de dos marchas con Artur e Ivana. La guía marca esta como la mejor combinación para usar a Charlton — aumenta el tiempo activo del veneno y hace que las habilidades de Leandra gatilladas por quemadura se activen más seguido.",
      "A outra metade da configuração solo de duas marchas com Artur e Ivana. O guia a chama de melhor combinação para usar o Charlton — aumenta o uptime do veneno e faz as habilidades da Leandra acionadas por queimadura ativarem com mais frequência.", "L'autre moitié de la configuration solo à deux marches avec Artur et Ivana. Le guide en fait le meilleur combo pour utiliser Charlton — il augmente le temps actif du poison et fait se déclencher plus souvent les compétences de Leandra activées par la brûlure.", "Artur 与 Ivana 双行军单人配置的另一半。指南称其为使用 Charlton 的最佳组合——它能提高中毒持续时间，并让 Leandra 由灼烧触发的技能更频繁地生效。",
      "Другая половина сборки из двух соло-маршей с Артуром и Иваной. Руководство называет это лучшим комбо для использования Чарлтона — оно увеличивает аптайм яда и заставляет навыки Леандры, запускаемые горением, срабатывать чаще."
    ),
    detail: {
      useCase: L("Debuff · Solo · Two-march setup (pair with Artur & Ivana)", "Debuff · Solo · Configuración de dos marchas (combinar con Artur e Ivana)", "Debuff · Solo · Configuração de duas marchas (combinar com Artur e Ivana)", "Debuff · Solo · Configuration à deux marches (à associer à Artur et Ivana)", "减益 · 单人 · 双行军配置（与 Artur 和 Ivana 搭配）", "Дебафф · Соло · Сборка из двух маршей (в паре с Артуром и Иваной)"),
      quickSteps: [
        L("Send together with the Artur & Ivana march — this pair is meant to run as a set.", "Enviala junto con la marcha de Artur e Ivana — este par está pensado para usarse en conjunto.", "Envie junto com a marcha de Artur e Ivana — este par foi pensado para ser usado em conjunto.", "Envoyez-la avec la marche d'Artur et Ivana — cette paire est conçue pour fonctionner en ensemble.", "与 Artur 和 Ivana 的行军一同派出——这一对设计为成套使用。", "Отправляйте вместе с маршем Артура и Иваны — эта пара рассчитана на совместное использование."),
        L("Let Charlton's kit increase poison uptime and Leandra's rage generation.", "Dejá que el kit de Charlton aumente el tiempo activo del veneno y la generación de rabia de Leandra.", "Deixe o kit do Charlton aumentar o uptime do veneno e a geração de raiva da Leandra.", "Laissez le kit de Charlton augmenter le temps actif du poison et la génération de rage de Leandra.", "让 Charlton 的技能组提高中毒持续时间和 Leandra 的怒气生成。", "Дайте набору Чарлтона увеличить аптайм яда и генерацию ярости Леандры."),
        L("Let Leandra's burn chance trigger Fiery Detonation and Dampened Spirits more often.", "Dejá que la chance de quemadura de Leandra gatille Fiery Detonation y Dampened Spirits más seguido.", "Deixe a chance de queimadura da Leandra acionar Fiery Detonation e Dampened Spirits com mais frequência.", "Laissez la chance de brûlure de Leandra déclencher plus souvent Fiery Detonation et Dampened Spirits.", "让 Leandra 的灼烧几率更频繁地触发 Fiery Detonation 和 Dampened Spirits。", "Дайте шансу горения Леандры чаще запускать Fiery Detonation и Dampened Spirits."),
      ],
      objective: L(
        "Stack poison uptime and burn-triggered skill activations from Charlton and Leandra together, as the second march of a two-march solo setup with Artur & Ivana.",
        "Acumulá el tiempo activo del veneno y las activaciones de habilidades gatilladas por quemadura de Charlton y Leandra juntos, como la segunda marcha de una configuración solo de dos marchas con Artur e Ivana.",
        "Acumular uptime de veneno e ativações de habilidades acionadas por queimadura de Charlton e Leandra juntos, como a segunda marcha de uma configuração solo de duas marchas com Artur e Ivana.", "Cumuler le temps actif du poison et les activations de compétences déclenchées par la brûlure de Charlton et Leandra ensemble, comme deuxième marche d'une configuration solo à deux marches avec Artur et Ivana.", "将 Charlton 与 Leandra 的中毒持续时间和灼烧触发技能叠加在一起，作为与 Artur 和 Ivana 搭配的双行军单人配置的第二支行军。",
        "Накапливать аптайм яда и активации навыков по горению от Чарлтона и Леандры вместе, как второй марш сборки из двух соло-маршей с Артуром и Иваной."
      ),
      whenToUse: L(
        "This is the guide's preferred way to use Charlton in the solo strategy — pairing him here works better than putting him with Ivana. Swap Fiery Detonation for Devastating Charge if the target makes burn unreliable. Don't have Charlton available or convenient to re-kit? Hobert can fill this slot as the simpler default partner for Leandra, just without the extra poison/rage synergy.",
        "Esta es la forma preferida de la guía para usar a Charlton en la estrategia solo — combinarlo acá funciona mejor que ponerlo con Ivana. Cambiá Fiery Detonation por Devastating Charge si el objetivo hace que la quemadura sea poco confiable. ¿No tenés a Charlton disponible o no es cómodo re-equiparlo? Hobert puede ocupar este lugar como pareja por defecto más simple para Leandra, aunque sin la sinergia extra de veneno/rabia.",
        "Esta é a forma preferida do guia de usar o Charlton na estratégia solo — combiná-lo aqui funciona melhor que colocá-lo com a Ivana. Troque Fiery Detonation por Devastating Charge se o alvo tornar a queimadura pouco confiável. Não tem o Charlton disponível ou não é cômodo reequipá-lo? O Hobert pode ocupar este lugar como parceiro padrão mais simples para a Leandra, só que sem a sinergia extra de veneno/raiva.", "C'est la façon préférée du guide d'utiliser Charlton dans la stratégie solo — l'associer ici fonctionne mieux que de le mettre avec Ivana. Remplacez Fiery Detonation par Devastating Charge si la cible rend la brûlure peu fiable. Vous n'avez pas Charlton sous la main ou il est peu pratique de le rééquiper ? Hobert peut occuper cette place comme partenaire par défaut plus simple pour Leandra, simplement sans la synergie supplémentaire poison/rage.", "这是指南在单人策略中使用 Charlton 的首选方式——把他放在这里比放在 Ivana 身边效果更好。如果目标让灼烧变得不可靠，就把 Fiery Detonation 换成 Devastating Charge。没有 Charlton，或者重新配置他不方便？Hobert 可以填补这个位置，作为 Leandra 更简单的默认搭档，只是没有额外的中毒/怒气联动。",
        "Это предпочтительный способ руководства использовать Чарлтона в соло-стратегии — пара здесь работает лучше, чем с Иваной. Замените Fiery Detonation на Devastating Charge, если цель делает горение ненадёжным. Нет Чарлтона под рукой или неудобно его переснаряжать? Хоберт может занять это место как более простой партнёр по умолчанию для Леандры, просто без дополнительной синергии яда/ярости."
      ),
      counters: L(
        "Fiery Detonation's activation still depends on Leandra's burn chance landing, same limitation as in the swarm version.",
        "La activación de Fiery Detonation sigue dependiendo de que la chance de quemadura de Leandra se dé, la misma limitación que en la versión swarm.",
        "A ativação de Fiery Detonation continua dependendo de a chance de queimadura da Leandra acontecer, a mesma limitação da versão swarm.", "L'activation de Fiery Detonation dépend toujours du déclenchement de la chance de brûlure de Leandra, même limitation que dans la version essaim.", "Fiery Detonation 的触发仍然取决于 Leandra 的灼烧几率能否命中，与集群版本的限制相同。",
        "Активация Fiery Detonation всё ещё зависит от срабатывания шанса горения Леандры — то же ограничение, что и в версии роя."
      ),
      commonMistakes: [
        L("Pairing Charlton with Ivana instead of here — the guide specifically calls this out as his better solo home.", "Combinar a Charlton con Ivana en vez de acá — la guía marca específicamente este como su mejor lugar en la estrategia solo.", "Combinar o Charlton com a Ivana em vez de aqui — o guia indica especificamente este como o melhor lugar dele na estratégia solo.", "Associer Charlton à Ivana plutôt qu'ici — le guide indique précisément que c'est sa meilleure place en solo.", "把 Charlton 与 Ivana 搭配，而不是放在这里——指南明确指出这里才是他在单人策略中更好的归宿。", "Ставить Чарлтона в пару с Иваной вместо этого — руководство прямо указывает, что здесь его лучшее место в соло."),
        L("Running this march without its Artur & Ivana pair.", "Usar esta marcha sin su par de Artur e Ivana.", "Usar esta marcha sem o par de Artur e Ivana.", "Lancer cette marche sans sa paire Artur et Ivana.", "没有搭配 Artur 和 Ivana 就单独出这支行军。", "Использовать этот марш без пары Артур и Ивана."),
      ],
      pros: [
        L("The guide's recommended home for Charlton in the solo strategy", "El lugar recomendado por la guía para Charlton en la estrategia solo", "O lugar recomendado pelo guia para o Charlton na estratégia solo", "La place recommandée par le guide pour Charlton dans la stratégie solo", "指南推荐的 Charlton 在单人策略中的归宿", "Рекомендованное руководством место для Чарлтона в соло-стратегии"),
        L("Increases both poison uptime and rage generation on top of Leandra's burn synergy", "Aumenta tanto el tiempo activo del veneno como la generación de rabia, además de la sinergia de quemadura de Leandra", "Aumenta tanto o uptime do veneno quanto a geração de raiva, além da sinergia de queimadura da Leandra", "Augmente à la fois le temps actif du poison et la génération de rage, en plus de la synergie de brûlure de Leandra", "在 Leandra 的灼烧联动之上，同时提高中毒持续时间和怒气生成", "Увеличивает и аптайм яда, и генерацию ярости поверх синергии горения Леандры"),
      ],
      cons: [
        L("Only half the setup — needs Artur & Ivana alongside it", "Solo es la mitad de la configuración — necesita a Artur e Ivana junto a ella", "Só metade da configuração — precisa de Artur e Ivana junto com ela", "Seulement la moitié de la configuration — nécessite Artur et Ivana à ses côtés", "只是配置的一半——需要 Artur 和 Ivana 配合", "Это лишь половина сборки — нужен Артур и Ивана рядом"),
        L("Fiery Detonation's reliability still depends on Leandra's burn chance", "La confiabilidad de Fiery Detonation sigue dependiendo de la chance de quemadura de Leandra", "A confiabilidade de Fiery Detonation continua dependendo da chance de queimadura da Leandra", "La fiabilité de Fiery Detonation dépend toujours de la chance de brûlure de Leandra", "Fiery Detonation 的可靠性仍然取决于 Leandra 的灼烧几率", "Надёжность Fiery Detonation всё ещё зависит от шанса горения Леандры"),
      ],
      heroes: [
        {
          name: "Charlton",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "main",
          note: L(
            "Increases poison uptime and Leandra's rage generation — the guide's recommended pairing for him over Ivana.",
            "Aumenta el tiempo activo del veneno y la generación de rabia de Leandra — la combinación recomendada por la guía para él, por sobre Ivana.",
            "Aumenta o uptime do veneno e a geração de raiva da Leandra — a combinação recomendada pelo guia para ele, em vez de com a Ivana.", "Augmente le temps actif du poison et la génération de rage de Leandra — l'association recommandée par le guide pour lui, plutôt qu'avec Ivana.", "提高中毒持续时间和 Leandra 的怒气生成——指南为他推荐的搭配，优于与 Ivana 搭配。",
            "Увеличивает аптайм яда и генерацию ярости Леандры — рекомендованная руководством пара для него вместо Иваны."
          ),
          skills: [null, null],
        },
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L(
            "Her burn chance triggers Fiery Detonation and makes Dampened Spirits happen more often here. Swap Fiery Detonation for Devastating Charge if burn becomes unreliable.",
            "Su chance de quemadura gatilla Fiery Detonation y hace que Dampened Spirits se dé más seguido acá. Cambiá Fiery Detonation por Devastating Charge si la quemadura se vuelve poco confiable.",
            "A chance de queimadura dela aciona Fiery Detonation e faz Dampened Spirits acontecer com mais frequência aqui. Troque Fiery Detonation por Devastating Charge se a queimadura ficar pouco confiável.", "Sa chance de brûlure déclenche Fiery Detonation et fait se produire Dampened Spirits plus souvent ici. Remplacez Fiery Detonation par Devastating Charge si la brûlure devient peu fiable.", "她的灼烧几率会触发 Fiery Detonation，并让 Dampened Spirits 在这里更频繁地生效。如果灼烧变得不可靠，就把 Fiery Detonation 换成 Devastating Charge。",
            "Её шанс горения запускает Fiery Detonation и заставляет Dampened Spirits срабатывать здесь чаще. Замените Fiery Detonation на Devastating Charge, если горение станет ненадёжным."
          ),
          skills: [
            { name: "Fiery Detonation", note: "Relies on Leandra's own burn chance — swap for Devastating Charge if unreliable" },
            { name: "Dampened Spirits", note: "Triggers more often thanks to Charlton's synergy" },
          ],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-2-artur-ivana", "solo-2-leandra-ivana", "solo-2-hobert-artur"],
    },
  },
  {
    id: "solo-2-leandra-ivana",
    title: L("Solo — 2 Marches: Leandra & Ivana", "Solo — 2 Marchas: Leandra e Ivana", "Solo — 2 Marchas: Leandra e Ivana", "Solo — 2 Marches : Leandra et Ivana", "单人 — 2支行军：Leandra 与 Ivana", "Соло — 2 Марша: Леандра и Ивана"),
    category: "debuff",
    strategy: "solo",
    difficulty: 4,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Leandra", "Ivana"],
    summary: L(
      "One half of the higher-impact two-march solo setup (paired with Hobert & Artur). Ivana lasts a little longer here thanks to extra counterattack reduction and a healing interaction from Leandra's third talent.",
      "Una mitad de la configuración solo de dos marchas de mayor impacto (combinada con Hobert y Artur). Ivana dura un poco más acá gracias a la reducción extra de contraataques y una interacción de curación del tercer talento de Leandra.",
      "Uma metade da configuração solo de duas marchas de maior impacto (combinada com Hobert e Artur). A Ivana dura um pouco mais aqui graças à redução extra de contra-ataques e a uma interação de cura do terceiro talento da Leandra.", "Une moitié de la configuration solo à deux marches à plus fort impact (associée à Hobert et Artur). Ivana tient un peu plus longtemps ici grâce à une réduction supplémentaire des contre-attaques et à une interaction de soin du troisième talent de Leandra.", "影响力更高的双行军单人配置的一半（与 Hobert 和 Artur 搭配）。得益于额外的反击削减和 Leandra 第三天赋的治疗联动，Ivana 在这里能撑得稍久一些。",
      "Одна половина более импактной сборки из двух соло-маршей (в паре с Хобертом и Артуром). Ивана держится здесь немного дольше благодаря дополнительному снижению контратак и лечебному взаимодействию третьего таланта Леандры."
    ),
    detail: {
      useCase: L("Debuff · Solo · Two-march setup (pair with Hobert & Artur)", "Debuff · Solo · Configuración de dos marchas (combinar con Hobert y Artur)", "Debuff · Solo · Configuração de duas marchas (combinar com Hobert e Artur)", "Debuff · Solo · Configuration à deux marches (à associer à Hobert et Artur)", "减益 · 单人 · 双行军配置（与 Hobert 和 Artur 搭配）", "Дебафф · Соло · Сборка из двух маршей (в паре с Хобертом и Артуром)"),
      quickSteps: [
        L("Send together with the Hobert & Artur march — this pair is meant to run as a set.", "Enviala junto con la marcha de Hobert y Artur — este par está pensado para usarse en conjunto.", "Envie junto com a marcha de Hobert e Artur — este par foi pensado para ser usado em conjunto.", "Envoyez-la avec la marche de Hobert et Artur — cette paire est conçue pour fonctionner en ensemble.", "与 Hobert 和 Artur 的行军一同派出——这一对设计为成套使用。", "Отправляйте вместе с маршем Хоберта и Артура — эта пара рассчитана на совместное использование."),
        L("Let Ivana's full silence kit drain the target's rage bar.", "Dejá que el kit completo de silencio de Ivana drene la barra de rabia del objetivo.", "Deixe o kit completo de silêncio da Ivana drenar a barra de raiva do alvo.", "Laissez le kit de silence complet d'Ivana drainer la barre de rage de la cible.", "让 Ivana 完整的沉默组合消耗目标的怒气条。", "Дайте полному набору молчания Иваны истощить полосу ярости цели."),
        L("Lean on Leandra's third talent for extra counterattack reduction and healing on Ivana.", "Apoyate en el tercer talento de Leandra para reducción extra de contraataques y curación sobre Ivana.", "Apoie-se no terceiro talento da Leandra para redução extra de contra-ataques e cura sobre a Ivana.", "Appuyez-vous sur le troisième talent de Leandra pour une réduction supplémentaire des contre-attaques et des soins sur Ivana.", "依靠 Leandra 的第三天赋获得额外的反击削减，并为 Ivana 提供治疗。", "Опирайтесь на третий талант Леандры для дополнительного снижения контратак и лечения Иваны."),
      ],
      objective: L(
        "Extend Ivana's survivability through Leandra's talent interactions, as the higher-impact alternative to the Artur & Ivana + Charlton & Leandra setup.",
        "Extendé la supervivencia de Ivana a través de las interacciones de talento de Leandra, como la alternativa de mayor impacto a la configuración Artur e Ivana + Charlton y Leandra.",
        "Estender a sobrevivência da Ivana por meio das interações de talento da Leandra, como a alternativa de maior impacto à configuração Artur e Ivana + Charlton e Leandra.", "Prolonger la survie d'Ivana grâce aux interactions de talents de Leandra, comme alternative à plus fort impact à la configuration Artur et Ivana + Charlton et Leandra.", "通过 Leandra 的天赋联动延长 Ivana 的生存能力，作为 Artur 与 Ivana + Charlton 与 Leandra 配置之外影响力更高的替代方案。",
        "Продлить живучесть Иваны через взаимодействия талантов Леандры, как более импактную альтернативу сборке Артур и Ивана + Чарлтон и Леандра."
      ),
      whenToUse: L(
        "Use this combo, together with Hobert & Artur, when you want more impact from your two solo marches and can accept the tradeoffs versus the Artur & Ivana pairing.",
        "Usá esta combinación, junto con Hobert y Artur, cuando quieras más impacto de tus dos marchas solo y puedas aceptar las contras frente a la combinación Artur e Ivana.",
        "Use esta combinação, junto com Hobert e Artur, quando quiser mais impacto das suas duas marchas solo e puder aceitar as desvantagens em relação à combinação Artur e Ivana.", "Utilisez ce combo, avec Hobert et Artur, quand vous voulez plus d'impact de vos deux marches solo et pouvez accepter les compromis par rapport à l'association Artur et Ivana.", "当你希望两支单人行军发挥更高的影响力，并且能接受相对 Artur 与 Ivana 搭配的取舍时，将这个组合与 Hobert 和 Artur 一起使用。",
        "Используйте это комбо вместе с Хобертом и Артуром, когда хотите больше импакта от двух соло-маршей и готовы принять компромиссы по сравнению с парой Артур и Ивана."
      ),
      counters: L(
        "Leandra's second skill can shorten Ivana's rage-skill cooldown by 1-2 seconds, but the guide notes this interaction isn't reliable — don't plan around it landing.",
        "La segunda habilidad de Leandra puede acortar el enfriamiento de la habilidad de rabia de Ivana en 1-2 segundos, pero la guía aclara que esta interacción no es confiable — no planifiques asumiendo que se va a dar.",
        "A segunda habilidade da Leandra pode encurtar o cooldown da habilidade de raiva da Ivana em 1-2 segundos, mas o guia ressalta que essa interação não é confiável — não planeje contando que ela aconteça.", "La deuxième compétence de Leandra peut raccourcir le temps de recharge de la compétence de rage d'Ivana de 1 à 2 secondes, mais le guide note que cette interaction n'est pas fiable — ne planifiez pas en comptant dessus.", "Leandra 的第二个技能可以把 Ivana 怒气技能的冷却缩短1-2秒，但指南指出这个联动并不可靠——不要围绕它一定生效来制定计划。",
        "Второй навык Леандры может сократить перезарядку навыка ярости Иваны на 1-2 секунды, но руководство отмечает, что это взаимодействие ненадёжно — не стройте план в расчёте на него."
      ),
      commonMistakes: [
        L("Running this march without its Hobert & Artur pair.", "Usar esta marcha sin su par de Hobert y Artur.", "Usar esta marcha sem o par de Hobert e Artur.", "Lancer cette marche sans sa paire Hobert et Artur.", "没有搭配 Hobert 和 Artur 就单独出这支行军。", "Использовать этот марш без пары Хоберт и Артур."),
        L("Counting on Leandra's rage-cooldown interaction as if it were reliable — it isn't.", "Contar con la interacción de enfriamiento de rabia de Leandra como si fuera confiable — no lo es.", "Contar com a interação de cooldown de raiva da Leandra como se fosse confiável — não é.", "Compter sur l'interaction de temps de recharge de rage de Leandra comme si elle était fiable — elle ne l'est pas.", "把 Leandra 的怒气冷却联动当作可靠的来指望——它并不可靠。", "Рассчитывать на взаимодействие перезарядки ярости Леандры как на надёжное — это не так."),
      ],
      pros: [
        L("Ivana survives a little longer here than in the 1-march Ivana pairings", "Ivana sobrevive un poco más acá que en las combinaciones de 1 marcha", "A Ivana sobrevive um pouco mais aqui do que nas combinações de 1 marcha", "Ivana survit un peu plus longtemps ici que dans les associations Ivana à 1 marche", "Ivana 在这里比在单行军 Ivana 搭配中存活得稍久一些", "Ивана выживает здесь немного дольше, чем в парах с 1 маршем"),
        L("Higher overall impact than the Artur & Ivana / Charlton & Leandra combo", "Mayor impacto general que la combinación Artur e Ivana / Charlton y Leandra", "Maior impacto geral que a combinação Artur e Ivana / Charlton e Leandra", "Impact global plus élevé que le combo Artur et Ivana / Charlton et Leandra", "整体影响力高于 Artur 与 Ivana / Charlton 与 Leandra 组合", "Более высокий общий импакт, чем у комбо Артур и Ивана / Чарлтон и Леандра"),
      ],
      cons: [
        L("Only half the setup — needs Hobert & Artur alongside it", "Solo es la mitad de la configuración — necesita a Hobert y Artur junto a ella", "Só metade da configuração — precisa de Hobert e Artur junto com ela", "Seulement la moitié de la configuration — nécessite Hobert et Artur à ses côtés", "只是配置的一半——需要 Hobert 和 Artur 配合", "Это лишь половина сборки — нужен Хоберт и Артур рядом"),
        L("Leandra's rage-cooldown interaction with Ivana isn't reliable", "La interacción de enfriamiento de rabia de Leandra con Ivana no es confiable", "A interação de cooldown de raiva da Leandra com a Ivana não é confiável", "L'interaction de temps de recharge de rage de Leandra avec Ivana n'est pas fiable", "Leandra 与 Ivana 之间的怒气冷却联动并不可靠", "Взаимодействие перезарядки ярости Леандры с Иваной ненадёжно"),
      ],
      heroes: [
        {
          name: "Leandra",
          rarity: "Legendary",
          roleTag: "Support",
          commander: "main",
          note: L(
            "Her third talent adds counterattack reduction and a healing interaction that helps Ivana last longer here. Her second skill can shorten Ivana's rage-skill cooldown by 1-2s, but unreliably.",
            "Su tercer talento suma reducción de contraataques y una interacción de curación que ayuda a Ivana a durar más acá. Su segunda habilidad puede acortar el enfriamiento de la habilidad de rabia de Ivana en 1-2s, pero de forma poco confiable.",
            "O terceiro talento dela soma redução de contra-ataques e uma interação de cura que ajuda a Ivana a durar mais aqui. A segunda habilidade dela pode encurtar o cooldown da habilidade de raiva da Ivana em 1-2s, mas de forma pouco confiável.", "Son troisième talent ajoute une réduction des contre-attaques et une interaction de soin qui aide Ivana à tenir plus longtemps ici. Sa deuxième compétence peut raccourcir le temps de recharge de la compétence de rage d'Ivana de 1 à 2 s, mais de façon peu fiable.", "她的第三天赋增加反击削减和治疗联动，帮助 Ivana 在这里撑得更久。她的第二个技能可以把 Ivana 怒气技能的冷却缩短1-2秒，但并不可靠。",
            "Её третий талант добавляет снижение контратак и лечебное взаимодействие, помогающее Иване продержаться здесь дольше. Её второй навык может сократить перезарядку навыка ярости Иваны на 1-2с, но ненадёжно."
          ),
          skills: [null, null],
        },
        {
          name: "Ivana",
          rarity: "Legendary",
          roleTag: "Debuff",
          commander: "secondary",
          note: L("The 2-march solo version leans on her full kit — load every silence skill available.", "La versión solo de 2 marchas depende de su kit completo — cargá todas las habilidades de silencio disponibles.", "A versão solo de 2 marchas depende do kit completo dela — carregue todas as habilidades de silêncio disponíveis.", "La version solo à 2 marches s'appuie sur son kit complet — chargez toutes les compétences de silence disponibles.", "双行军单人版本依赖她的完整技能组——装上所有可用的沉默技能。", "Соло-версия из 2 маршей опирается на её полный набор — загрузите все доступные навыки молчания."),
          skills: [
            { name: "Silencer", note: "Feeds Ivana's rage-drain interaction" },
            { name: "Silent Invasion", note: "Extra silence coverage for the 2-march version" },
          ],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last. Expect the highest losses of any setup in this guide when running 2 solo marches at once.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final. Esperá las pérdidas más altas de cualquier configuración de esta guía al correr 2 marchas solo a la vez.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere as maiores perdas de qualquer configuração deste guia ao rodar 2 marchas solo ao mesmo tempo.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous aux pertes les plus élevées de toutes les configurations de ce guide en lançant 2 marches solo à la fois.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。同时出2支单人行军时，预计会是本指南所有配置中损失最高的。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте самые высокие потери среди всех сборок этого руководства при запуске 2 соло-маршей одновременно."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-2-hobert-artur", "solo-2-artur-ivana", "solo-2-charlton-leandra"],
    },
  },
  {
    id: "solo-2-hobert-artur",
    title: L("Solo — 2 Marches: Hobert & Artur", "Solo — 2 Marchas: Hobert y Artur", "Solo — 2 Marchas: Hobert e Artur", "Solo — 2 Marches : Hobert et Artur", "单人 — 2支行军：Hobert 与 Artur", "Соло — 2 Марша: Хоберт и Артур"),
    category: "debuff",
    strategy: "solo",
    difficulty: 4,
    status: "proven",
    media: [],
    recommendedTier: "T5 – T7+ (see tier cost notes)",
    recommendedHeroes: ["Hobert", "Artur"],
    summary: L(
      "The other half of the higher-impact two-march solo setup. Hobert's second skill shortens Artur's rage cycle by up to 4 seconds via his rage generation — swap in Rosky if Hobert isn't available.",
      "La otra mitad de la configuración solo de dos marchas de mayor impacto. La segunda habilidad de Hobert acorta el ciclo de rabia de Artur hasta 4 segundos gracias a su generación de rabia — cambiá por Rosky si Hobert no está disponible.",
      "A outra metade da configuração solo de duas marchas de maior impacto. A segunda habilidade do Hobert encurta o ciclo de raiva do Artur em até 4 segundos por meio da geração de raiva dele — troque pela Rosky se o Hobert não estiver disponível.", "L'autre moitié de la configuration solo à deux marches à plus fort impact. La deuxième compétence de Hobert raccourcit le cycle de rage d'Artur jusqu'à 4 secondes via sa génération de rage — remplacez par Rosky si Hobert n'est pas disponible.", "影响力更高的双行军单人配置的另一半。Hobert 的第二个技能借助他的怒气生成，把 Artur 的怒气循环最多缩短4秒——如果没有 Hobert，可换成 Rosky。",
      "Другая половина более импактной сборки из двух соло-маршей. Второй навык Хоберта сокращает цикл ярости Артура до 4 секунд за счёт его генерации ярости — замените на Роски, если Хоберт недоступен."
    ),
    detail: {
      useCase: L("Debuff · Solo · Two-march setup (pair with Leandra & Ivana)", "Debuff · Solo · Configuración de dos marchas (combinar con Leandra e Ivana)", "Debuff · Solo · Configuração de duas marchas (combinar com Leandra e Ivana)", "Debuff · Solo · Configuration à deux marches (à associer à Leandra et Ivana)", "减益 · 单人 · 双行军配置（与 Leandra 和 Ivana 搭配）", "Дебафф · Соло · Сборка из двух маршей (в паре с Леандрой и Иваной)"),
      quickSteps: [
        L("Send together with the Leandra & Ivana march — this pair is meant to run as a set.", "Enviala junto con la marcha de Leandra e Ivana — este par está pensado para usarse en conjunto.", "Envie junto com a marcha de Leandra e Ivana — este par foi pensado para ser usado em conjunto.", "Envoyez-la avec la marche de Leandra et Ivana — cette paire est conçue pour fonctionner en ensemble.", "与 Leandra 和 Ivana 的行军一同派出——这一对设计为成套使用。", "Отправляйте вместе с маршем Леандры и Иваны — эта пара рассчитана на совместное использование."),
        L("Let Containment apply Broken Blade to reduce counterattacks.", "Dejá que Containment aplique Broken Blade para reducir los contraataques.", "Deixe Containment aplicar Broken Blade para reduzir os contra-ataques.", "Laissez Containment appliquer Broken Blade pour réduire les contre-attaques.", "让 Containment 施加 Broken Blade 以降低反击。", "Дайте Containment наложить Broken Blade, чтобы снизить контратаки."),
        L("Let Hobert's second skill shorten Artur's rage cycle via his own rage generation.", "Dejá que la segunda habilidad de Hobert acorte el ciclo de rabia de Artur a través de su propia generación de rabia.", "Deixe a segunda habilidade do Hobert encurtar o ciclo de raiva do Artur por meio da própria geração de raiva dele.", "Laissez la deuxième compétence de Hobert raccourcir le cycle de rage d'Artur via sa propre génération de rage.", "让 Hobert 的第二个技能借助他自身的怒气生成，缩短 Artur 的怒气循环。", "Дайте второму навыку Хоберта сократить цикл ярости Артура за счёт его собственной генерации ярости."),
      ],
      objective: L(
        "Shorten Artur's effective rage cycle using Hobert's synergy, as the second march of the higher-impact two-march solo setup with Leandra & Ivana.",
        "Acortá el ciclo de rabia efectivo de Artur usando la sinergia de Hobert, como la segunda marcha de la configuración solo de dos marchas de mayor impacto con Leandra e Ivana.",
        "Encurtar o ciclo de raiva efetivo do Artur usando a sinergia do Hobert, como a segunda marcha da configuração solo de duas marchas de maior impacto com Leandra e Ivana.", "Raccourcir le cycle de rage effectif d'Artur grâce à la synergie de Hobert, comme deuxième marche de la configuration solo à deux marches à plus fort impact avec Leandra et Ivana.", "借助 Hobert 的联动缩短 Artur 的有效怒气循环，作为与 Leandra 和 Ivana 搭配的高影响力双行军单人配置的第二支行军。",
        "Сократить эффективный цикл ярости Артура с помощью синергии Хоберта — как второй марш более импактной сборки из двух соло-маршей с Леандрой и Иваной."
      ),
      whenToUse: L(
        "Use this combo, together with Leandra & Ivana, when you want the strongest two-march solo setup available. If Hobert isn't available, Rosky is a straightforward swap — you lose the rage-cycle interaction but keep the core Artur debuff intact.",
        "Usá esta combinación, junto con Leandra e Ivana, cuando quieras la configuración solo de dos marchas más fuerte disponible. Si Hobert no está disponible, Rosky es un cambio directo — perdés la interacción del ciclo de rabia pero mantenés intacto el debuff principal de Artur.",
        "Use esta combinação, junto com Leandra e Ivana, quando quiser a configuração solo de duas marchas mais forte disponível. Se o Hobert não estiver disponível, a Rosky é uma troca direta — você perde a interação do ciclo de raiva, mas mantém intacto o debuff principal do Artur.", "Utilisez ce combo, avec Leandra et Ivana, quand vous voulez la configuration solo à deux marches la plus forte disponible. Si Hobert n'est pas disponible, Rosky est un remplacement direct — vous perdez l'interaction du cycle de rage mais conservez intact le debuff principal d'Artur.", "当你想要目前最强的双行军单人配置时，将这个组合与 Leandra 和 Ivana 一起使用。如果没有 Hobert，Rosky 是直接的替换——你会失去怒气循环联动，但 Artur 的核心减益保持不变。",
        "Используйте это комбо вместе с Леандрой и Иваной, когда хотите самую сильную из доступных сборок из двух соло-маршей. Если Хоберт недоступен, Роски — простая замена — вы теряете взаимодействие цикла ярости, но сохраняете основной дебафф Артура."
      ),
      counters: L(
        "Depends on Artur's rage generation and Hobert's second skill both being active to get the full 4-second rage-cycle reduction — without Hobert, that specific benefit is lost.",
        "Depende de que la generación de rabia de Artur y la segunda habilidad de Hobert estén activas al mismo tiempo para obtener la reducción completa de 4 segundos del ciclo de rabia — sin Hobert, ese beneficio específico se pierde.",
        "Depende de a geração de raiva do Artur e da segunda habilidade do Hobert estarem ativas ao mesmo tempo para obter a redução completa de 4 segundos do ciclo de raiva — sem o Hobert, esse benefício específico se perde.", "Dépend de l'activité simultanée de la génération de rage d'Artur et de la deuxième compétence de Hobert pour obtenir la réduction complète de 4 secondes du cycle de rage — sans Hobert, cet avantage précis est perdu.", "需要 Artur 的怒气生成和 Hobert 的第二个技能同时生效，才能获得完整的4秒怒气循环缩减——没有 Hobert，这项特定收益就会丢失。",
        "Зависит от одновременной активности генерации ярости Артура и второго навыка Хоберта для полного сокращения цикла ярости на 4 секунды — без Хоберта эта конкретная выгода теряется."
      ),
      commonMistakes: [
        L("Running this march without its Leandra & Ivana pair.", "Usar esta marcha sin su par de Leandra e Ivana.", "Usar esta marcha sem o par de Leandra e Ivana.", "Lancer cette marche sans sa paire Leandra et Ivana.", "没有搭配 Leandra 和 Ivana 就单独出这支行军。", "Использовать этот марш без пары Леандра и Ивана."),
        L("Swapping in Rosky and expecting the same rage-cycle benefit Hobert provides.", "Cambiar por Rosky esperando el mismo beneficio de ciclo de rabia que da Hobert.", "Trocar pela Rosky esperando o mesmo benefício de ciclo de raiva que o Hobert oferece.", "Remplacer par Rosky en s'attendant au même avantage de cycle de rage que Hobert procure.", "换成 Rosky 却期望获得与 Hobert 相同的怒气循环收益。", "Заменять на Роски, ожидая ту же выгоду от цикла ярости, что даёт Хоберт."),
      ],
      pros: [
        L("Strongest two-march solo setup in the guide when paired with Leandra & Ivana", "La configuración solo de dos marchas más fuerte de la guía cuando se combina con Leandra e Ivana", "A configuração solo de duas marchas mais forte do guia quando combinada com Leandra e Ivana", "La configuration solo à deux marches la plus forte du guide quand elle est associée à Leandra et Ivana", "与 Leandra 和 Ivana 搭配时，是指南中最强的双行军单人配置", "Самая сильная сборка из двух соло-маршей в руководстве при сочетании с Леандрой и Иваной"),
        L("Hobert's rage-cycle interaction meaningfully speeds up Artur's Broken Blade uptime", "La interacción de ciclo de rabia de Hobert acelera notablemente el tiempo activo de Broken Blade de Artur", "A interação de ciclo de raiva do Hobert acelera notavelmente o uptime de Broken Blade do Artur", "L'interaction de cycle de rage de Hobert accélère nettement le temps actif de Broken Blade d'Artur", "Hobert 的怒气循环联动显著加快了 Artur 的 Broken Blade 持续时间", "Взаимодействие цикла ярости Хоберта заметно ускоряет аптайм Broken Blade у Артура"),
      ],
      cons: [
        L("Only half the setup — needs Leandra & Ivana alongside it", "Solo es la mitad de la configuración — necesita a Leandra e Ivana junto a ella", "Só metade da configuração — precisa de Leandra e Ivana junto com ela", "Seulement la moitié de la configuration — nécessite Leandra et Ivana à ses côtés", "只是配置的一半——需要 Leandra 和 Ivana 配合", "Это лишь половина сборки — нужна Леандра и Ивана рядом"),
        L("The rage-cycle benefit is lost if you swap Hobert for Rosky", "El beneficio del ciclo de rabia se pierde si cambiás a Hobert por Rosky", "O benefício do ciclo de raiva se perde se você trocar o Hobert pela Rosky", "L'avantage du cycle de rage est perdu si vous remplacez Hobert par Rosky", "如果把 Hobert 换成 Rosky，怒气循环的收益就会丢失", "Выгода цикла ярости теряется, если заменить Хоберта на Роски"),
      ],
      heroes: [
        {
          name: "Hobert",
          rarity: "Epic",
          roleTag: "Support",
          commander: "main",
          note: L(
            "His second skill lets Artur's own rage generation shorten the rage cycle by up to 4 seconds. Swap for Rosky if Hobert isn't available, but expect to lose this specific benefit.",
            "Su segunda habilidad permite que la propia generación de rabia de Artur acorte el ciclo de rabia hasta 4 segundos. Cambiá por Rosky si Hobert no está disponible, pero esperá perder este beneficio específico.",
            "A segunda habilidade dele permite que a própria geração de raiva do Artur encurte o ciclo de raiva em até 4 segundos. Troque pela Rosky se o Hobert não estiver disponível, mas espere perder esse benefício específico.", "Sa deuxième compétence permet à la propre génération de rage d'Artur de raccourcir le cycle de rage jusqu'à 4 secondes. Remplacez par Rosky si Hobert n'est pas disponible, mais attendez-vous à perdre cet avantage précis.", "他的第二个技能让 Artur 自身的怒气生成把怒气循环最多缩短4秒。如果没有 Hobert，可换成 Rosky，但要预期会失去这项特定收益。",
            "Его второй навык позволяет собственной генерации ярости Артура сократить цикл ярости до 4 секунд. Замените на Роски, если Хоберт недоступен, но ожидайте потерю этой конкретной выгоды."
          ),
          skills: [null, null],
        },
        {
          name: "Artur",
          rarity: "Epic",
          roleTag: "Debuff",
          commander: "secondary",
          note: L("Carries Containment, applying Broken Blade to the target every 12 seconds.", "Lleva Containment, aplicando Broken Blade al objetivo cada 12 segundos.", "Leva Containment, aplicando Broken Blade ao alvo a cada 12 segundos.", "Porte Containment, qui applique Broken Blade à la cible toutes les 12 secondes.", "携带 Containment，每12秒对目标施加一次 Broken Blade。", "Несёт Containment, накладывая Broken Blade на цель каждые 12 секунд."),
          skills: [{ name: "Containment", note: "Applies Broken Blade every 12s" }, null],
        },
      ],
      troopComposition: L(
        "Same troop priority as the other debuff marches: pikemen with defense mounts/equipment first, infantry second, archers last. Expect the highest losses of any setup in this guide when running 2 solo marches at once.",
        "Misma prioridad de tropas que las otras marchas debuff: piqueros con monturas/equipo defensivo primero, infantería segundo, arqueros al final. Esperá las pérdidas más altas de cualquier configuración de esta guía al correr 2 marchas solo a la vez.",
        "A mesma prioridade de tropas das outras marchas de debuff: piqueiros com montarias/equipamento de defesa primeiro, infantaria segundo, arqueiros por último. Espere as maiores perdas de qualquer configuração deste guia ao rodar 2 marchas solo ao mesmo tempo.", "Même priorité de troupes que les autres marches debuff : piquiers avec montures/équipement défensifs d'abord, infanterie ensuite, archers en dernier. Attendez-vous aux pertes les plus élevées de toutes les configurations de ce guide en lançant 2 marches solo à la fois.", "与其他减益行军相同的兵种优先级：优先选择配备防御坐骑/装备的长枪兵，步兵次之，弓兵最后。同时出2支单人行军时，预计会是本指南所有配置中损失最高的。",
        "Та же приоритетность войск, что и в других маршах дебаффа: копейщики с защитными ездовыми/снаряжением первыми, пехота второй, лучники последними. Ожидайте самые высокие потери среди всех сборок этого руководства при запуске 2 соло-маршей одновременно."
      ),
      troopTierNote: true,
      mount: null,
      mountSkills: [null, null],
      equipment: [null, null, null, null],
      related: ["solo-2-leandra-ivana", "solo-2-artur-ivana", "solo-2-charlton-leandra"],
    },
  },
];
