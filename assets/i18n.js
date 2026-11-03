// Emberseed 홈페이지 — 영어·일본어 글 사전. 한국어는 각 HTML 본문이 정본(키 = data-i18n).
// 키가 없으면 한국어가 그대로 보인다. 글을 고칠 땐 HTML(한국어) + 여기(en·ja) 두 곳.
const I18N = {
en: {
  // 공통
  "nav.team": "Team", "nav.game": "STALVERON", "nav.intro": "About the game", "nav.devlog": "Devlog", "nav.spinoff": "Spin-off novel", "nav.contact": "Contact",
  "team.title": "Team — Emberseed", "team.desc": "About Emberseed, an indie game studio: who, where, and what we're making.",
  "team.tag": "A small studio in Cheonan, South Korea. We're making our first game, STALVERON.",
  "team.members.h2": "Members",
  "team.m1.role": "Founder", "team.m1.p": "Game design, development, and the world and its story.",
  "team.m2.role": "SFX", "team.m2.p": "Mainly SFX, and sound direction alongside it.",
  "team.m3.role": "Writer", "team.m3.p": "Assistant writer.",
  "team.m4.role": "Illustration", "team.m4.p": "Draws the backgrounds and character illustrations.",
  "footer.copy": "© 2026 Emberseed. Cheonan, South Korea.",
  "btn.notify": "Sign up for updates", "btn.notify.news": "Sign up for updates",
  "js.mail.subject": "STALVERON updates sign-up", "js.mail.body": "Please send STALVERON news to this email address.",
  "js.fallback.p": "One email is enough. You can leave the subject empty.", "js.fallback.btn": "Sign up by email", "js.iframe.title": "Sign up for updates",

  // 회사(index)
  "home.title": "Emberseed — indie game studio",
  "home.desc": "Emberseed is an indie game studio. We're making our first game, STALVERON.",
  "home.notify.p": "We'll email you when there's news.",

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON. Observe. Plan. Execute. And doubt. A spectator dungeon-design game for PC (Steam), 2027.",
  "game.banner.tag": "Observe. Plan. Execute. And doubt.",
  "game.story.h2": "Walking cities, a fallen star",
  "game.story.p1": "Two hundred years after the catastrophe. To stay ahead of the winter storm that follows them, humanity rides giant legged cities, the Emberwalkers, across an endless sheet of ice. An Emberwalker's heart is the core of a ‘star’ that fell from the sky. The core of Elina's city, District 27, is cooling, and its legs are slowing down.",
  "game.story.p2": "Where they arrive in search of a new core, Elina comes face to face with a truth the world has hidden, and a past it has forgotten.",
  "game.hub.h2": "The control tent",
  "game.hub.p1": "Between expeditions, all the preparation happens here. Check the team that's about to go in, their jobs, personalities and stats, and set the condition at which they call a retreat.",
  "game.hub.p2": "Anything goes, as long as it gets them to the retreat state. Strengthen or weaken them through pre-work, and change the leader to move the team the way you want.",
  "game.play.h2": "Plan, execute, and revise",
  "game.play.p1": "Build defenses to bring them to the retreat state. Not too many, not too few. Plan thoroughly, and watch to the end.",
  "game.play.p2": "Even a nameless expedition member came in with their life on the line, for their Emberwalker, their family, or their beliefs.",
  "game.attune.h2": "Attunement",
  "game.attune.p1": "Elina gathers information through attunement. But time is limited. Choose the information you want, and attune.",
  "game.chars.h2": "Characters",
  "game.elina.role": "Core Controller, District 27", "game.elina.h3": "Elina", "game.elina.q": "I'm just… trying to light an ember that's gone out.",
  "game.mira.role": "Expedition Captain, District 27", "game.mira.h3": "Mira", "game.mira.q": "As long as we get paid properly, that's all that matters.",
  "game.berto.role": "Mayor of District 27", "game.berto.h3": "Berto", "game.berto.q": "In this hell of a world, I have a duty to keep the people of my district alive.",
  "game.kyle.role": "Chief Engineer, District 27", "game.kyle.h3": "Kyle",
  "game.hans.role": "Guard Captain, District 27", "game.hans.h3": "Hans",
  "game.elius.role": "Inquisitor, District 1", "game.elius.h3": "Elius",
  "game.erika.role": "A child of District 27", "game.erika.h3": "Erika",
  "game.keya.role": "Expedition member, District 12", "game.keya.h3": "Keya",
  "game.release.h2": "Release",
  "game.spec.platform": "Platform", "game.spec.platform.v": "PC (Steam)",
  "game.spec.date": "Release", "game.spec.date.v": "Early Access Q4 2027<br>Full release Q1 2028",
  "game.spec.genre": "Genre", "game.spec.genre.v": "Spectator dungeon design · narrative",
  "game.spec.lang": "Languages", "game.spec.lang.v": "Korean · English and more in preparation",


  // 데브로그
  "devlog.title": "Devlog — Emberseed",
  "devlog.desc": "STALVERON development notes. The road so far and the posts to come.",
  "devlog.h1": "Devlog",
  "devlog.p1.body": "Coming November 7.",
  "devlog.soon": "Coming soon",
"devlog.p1.h3": "Devlog #1: Dawn at the star-site",










  // 스핀오프
  "spin.title": "Spin-off — Emberseed",
  "spin.desc": "STALVERON spin-off novel. Five years before the game, in the steam greenhouse of walking city District 27.",
  "spin.h1": "Spin-off novel", "spin.wt": "(working title)",
"spin.ep1.when": "Nov 2026", "spin.ep1.soon": "Episode 1 is in preparation. We'll let you know by email when it's up.",
  "read.prev": "← Previous", "read.list": "Episodes", "read.next": "Next →",
  "spin.ep1.h3": "In preparation",




  // 연락
  "contact.title": "Contact — Emberseed",
  "contact.desc": "How to reach Emberseed, and sign up for updates.",
  "contact.h1": "Contact",
  "contact.tag": "Publishing, collaboration, press and testing inquiries: please email us.",
  "contact.b2c.h3": "Player news is separate", "contact.b2c.p": "If you'd like demo, store and serial news, leave your email on the sign-up page.",
  "nav.notify": "Sign up for updates",
  "notify.title": "Sign up for updates — Emberseed", "notify.desc": "Get STALVERON demo, store page and spin-off serial news by email.",
  "notify.h1": "Sign up for updates", "notify.tag": "We'll email you when there's news.",
  "contact.channels.h2": "Channels",
  "contact.k.mail": "Email", "contact.k.company": "Company", "contact.company.v": "Emberseed · Cheonan, South Korea",
  "contact.dim": "Streamer and tester demo-key requests, publishing and collaboration proposals: please email. We usually reply within a few days.",
},
ja: {
  // 공통
  "nav.team": "チーム紹介", "nav.game": "STALVERON", "nav.intro": "ゲーム紹介", "nav.devlog": "開発日誌", "nav.spinoff": "スピンオフ小説", "nav.contact": "お問い合わせ",
  "team.title": "チーム紹介 — Emberseed", "team.desc": "インディーゲーム開発チーム Emberseed の紹介。誰が、どこで、何を作っているか。",
  "team.tag": "韓国・天安の小さな開発チーム。初作品 STALVERON を制作中です。",
  "team.members.h2": "メンバー",
  "team.m1.role": "代表", "team.m1.p": "企画・開発、そして世界観とストーリーを担当しています。",
  "team.m2.role": "SFX", "team.m2.p": "SFX を主に担当し、サウンドディレクションも兼ねています。",
  "team.m3.role": "シナリオライター", "team.m3.p": "サブシナリオ担当です。",
  "team.m4.role": "イラスト", "team.m4.p": "背景と人物のイラストを描いています。",
  "footer.copy": "© 2026 Emberseed. 韓国・天安.",
  "btn.notify": "お知らせ登録", "btn.notify.news": "お知らせ登録",
  "js.mail.subject": "STALVERON お知らせ登録", "js.mail.body": "このメールアドレスに STALVERON のお知らせを送ってください。",
  "js.fallback.p": "メール一通で十分です。件名は空のままで構いません。", "js.fallback.btn": "メールで登録", "js.iframe.title": "お知らせ登録",

  // 회사(index)
  "home.title": "Emberseed — インディーゲーム開発チーム",
  "home.desc": "インディーゲーム開発チーム Emberseed。初作品 STALVERON を制作中です。",
  "home.notify.p": "新しいお知らせがあればメールでお届けします。",

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON。観測、計画、実行。そして疑え。観戦型ダンジョン設計ゲーム、PC（Steam）、2027年。",
  "game.banner.tag": "観測、計画、実行。そして疑え。",
  "game.story.h2": "歩く都市、落ちた星",
  "game.story.p1": "大災厄から二百年。人類は背後から迫る冬の嵐から逃れるため、脚の付いた巨大な都市エンバーウォーカーに乗り、果てしない氷の上を歩き続けています。エンバーウォーカーの心臓は、空から落ちてきた「星」の核。エリナの都市・27区の核は冷えつつあり、脚は少しずつ遅くなっています。",
  "game.story.p2": "新しい核を求めてたどり着いた場所で、エリナは世界が隠してきた真実と、忘れられた過去に向き合います。",
  "game.hub.h2": "管制テント",
  "game.hub.p1": "探査と探査のあいだ、準備はすべてここで行います。突入を控えた探査隊の職業・性格・能力値を確認し、撤退を求める状態を決めてください。",
  "game.hub.p2": "撤退を求める状態に合わせるためなら、何をしても構いません。事前作業で彼らを強化または弱体化し、リーダーを変えて探査隊を思いどおりに動かしてください。",
  "game.play.h2": "計画と実行、そして修正",
  "game.play.p1": "撤退を求める状態に合わせて防御施設を築いてください。多すぎても、少なすぎてもいけません。徹底的に計画し、最後まで見届けてください。",
  "game.play.p2": "名もなき探査隊員であっても、自分のエンバーウォーカーや家族、あるいは信念を守るために、命を懸けて入ってきた者たちです。",
  "game.attune.h2": "感応",
  "game.attune.p1": "エリナは感応を通じて情報を集めます。しかし時間は限られています。手に入れたい情報を選び、感応してください。",
  "game.chars.h2": "登場人物",
  "game.elina.role": "27区 核管制官", "game.elina.h3": "エリナ", "game.elina.q": "私はただ…消えてしまった火種を、もう一度ともしてみたいだけです。",
  "game.mira.role": "27区 探査隊長", "game.mira.h3": "ミラ", "game.mira.q": "私たちはどうせ、金さえきちんともらえればいいんだから。",
  "game.berto.role": "27区 市長", "game.berto.h3": "ベルト", "game.berto.q": "この地獄のような世界で、私には我が区の市民を生かす義務がある。",
  "game.kyle.role": "27区 機関部長", "game.kyle.h3": "カイル",
  "game.hans.role": "27区 警備隊長", "game.hans.h3": "ハンス",
  "game.elius.role": "1区 審問官", "game.elius.h3": "エリウス",
  "game.erika.role": "27区の子ども", "game.erika.h3": "エリカ",
  "game.keya.role": "12区 探査隊員", "game.keya.h3": "ケヤ",
  "game.release.h2": "発売情報",
  "game.spec.platform": "プラットフォーム", "game.spec.platform.v": "PC（Steam）",
  "game.spec.date": "発売", "game.spec.date.v": "アーリーアクセス 2027年第4四半期<br>正式リリース 2028年第1四半期",
  "game.spec.genre": "ジャンル", "game.spec.genre.v": "観戦型ダンジョン設計 · ナラティブ",
  "game.spec.lang": "言語", "game.spec.lang.v": "韓国語 · 英語ほか追加言語を準備中",


  // 데브로그
  "devlog.title": "開発日誌 — Emberseed",
  "devlog.desc": "STALVERON の開発記録。これまでの道のりと、これからの記事。",
  "devlog.h1": "開発日誌",
  "devlog.p1.body": "11月7日に公開します。",
  "devlog.soon": "近日公開",
"devlog.p1.h3": "第1回 開発日誌 — 星の地の夜明け",










  // 스핀오프
  "spin.title": "スピンオフ — Emberseed",
  "spin.desc": "STALVERON スピンオフ小説。本編の5年前、歩く都市27区の蒸気温室で。",
  "spin.h1": "スピンオフ小説", "spin.wt": "（仮題）",
"spin.ep1.when": "2026.11", "spin.ep1.soon": "第1話は準備中です。公開したらお知らせメールでお伝えします。",
  "read.prev": "← 前の話", "read.list": "目次", "read.next": "次の話 →",
  "spin.ep1.h3": "準備中",




  // 연락
  "contact.title": "お問い合わせ — Emberseed",
  "contact.desc": "Emberseed の連絡先とお知らせ登録。",
  "contact.h1": "お問い合わせ",
  "contact.tag": "パブリッシング・協業・取材・テストのお問い合わせはメールでお願いします。",
  "contact.b2c.h3": "プレイヤー向けのお知らせは別です", "contact.b2c.p": "デモ・ストア・連載の知らせを受け取りたい方は、お知らせ登録ページでメールアドレスをお残しください。",
  "nav.notify": "お知らせ登録",
  "notify.title": "お知らせ登録 — Emberseed", "notify.desc": "STALVERON のデモ公開・ストアページ・スピンオフ連載の知らせをメールで受け取ります。",
  "notify.h1": "お知らせ登録", "notify.tag": "新しいお知らせがあればメールでお届けします。",
  "contact.channels.h2": "チャンネル",
  "contact.k.mail": "メール", "contact.k.company": "会社", "contact.company.v": "Emberseed · 韓国・天安",
  "contact.dim": "配信者・テスター向けデモキーのお問い合わせ、パブリッシング・協業のご提案はメールでお願いします。通常、数日以内にお返事します。",
},
zh: {
  // 공통
  "nav.team": "团队介绍", "nav.game": "STALVERON", "nav.intro": "游戏介绍", "nav.devlog": "开发日志", "nav.spinoff": "外传小说", "nav.contact": "联系",
  "team.title": "团队介绍 — Emberseed", "team.desc": "独立游戏开发团队 Emberseed 介绍：是谁、在哪里、在做什么。",
  "team.tag": "韩国天安的小团队。正在制作第一部作品 STALVERON。",
  "team.members.h2": "成员",
  "team.m1.role": "代表", "team.m1.p": "负责策划、开发，以及世界观与剧情。",
  "team.m2.role": "SFX", "team.m2.p": "主要负责 SFX，兼任音效指导。",
  "team.m3.role": "剧本作者", "team.m3.p": "副剧本作者。",
  "team.m4.role": "插画", "team.m4.p": "绘制背景和人物插画。",
  "footer.copy": "© 2026 Emberseed. 韩国·天安.",
  "btn.notify": "订阅消息", "btn.notify.news": "订阅消息",
  "js.mail.subject": "STALVERON 消息订阅", "js.mail.body": "请将 STALVERON 的消息发送到这个邮箱。",
  "js.fallback.p": "发一封邮件即可。主题可以留空。", "js.fallback.btn": "用邮件订阅", "js.iframe.title": "订阅消息",

  // 회사(index)
  "home.title": "Emberseed — 独立游戏开发团队",
  "home.desc": "独立游戏开发团队 Emberseed。正在制作第一部作品 STALVERON。",
  "home.notify.p": "有新消息时，我们会通过邮件通知您。",

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON。观测、计划、执行。然后，怀疑。观战型地牢设计游戏，PC（Steam），2027 年。",
  "game.banner.tag": "观测、计划、执行。然后，怀疑。",
  "game.story.h2": "行走的城市，坠落的星",
  "game.story.p1": "大灾变后两百年。为了躲开身后追来的冬季风暴，人类登上长着腿的巨大城市“余烬行者”，在无尽的冰原上前行。余烬行者的心脏，是一颗从天而降的“星”的核。艾琳娜所在的城市 27 区，核正在冷却，腿也越来越慢。",
  "game.story.p2": "在为寻找新核而抵达的地方，艾琳娜将直面这个世界隐藏的真相与被遗忘的过去。",
  "game.hub.h2": "控制帐篷",
  "game.hub.p1": "在两次探索之间，所有准备都在这里完成。确认即将进入的探索队的职业、性格和能力值，并设定他们请求撤退的状态。",
  "game.hub.p2": "只要能让他们达到请求撤退的状态，做什么都可以。通过前置作业强化或削弱他们，并更换队长，让探索队按你的意图行动。",
  "game.play.h2": "计划、执行，然后修正",
  "game.play.p1": "为了让他们达到请求撤退的状态，请构筑防御设施。不能太多，也不能太少。周密计划，并守望到最后。",
  "game.play.p2": "即使是无名的探索队员，也是为了守护自己的余烬行者、家人或信念，赌上性命进来的人。",
  "game.attune.h2": "感应",
  "game.attune.p1": "艾琳娜通过感应收集信息。但时间有限。选择你想获取的信息，然后感应。",
  "game.chars.h2": "登场人物",
  "game.elina.role": "27 区核心管制官", "game.elina.h3": "艾琳娜", "game.elina.q": "我只是……想把熄灭的火种重新点燃。",
  "game.mira.role": "27 区探索队长", "game.mira.h3": "米拉", "game.mira.q": "反正我们只要把钱拿到手就行了。",
  "game.berto.role": "27 区市长", "game.berto.h3": "贝尔托", "game.berto.q": "在这个地狱般的世界里，我有义务让我们区的市民活下去。",
  "game.kyle.role": "27 区机关部长", "game.kyle.h3": "凯尔",
  "game.hans.role": "27 区警备队长", "game.hans.h3": "汉斯",
  "game.elius.role": "1 区审问官", "game.elius.h3": "埃利乌斯",
  "game.erika.role": "27 区的孩子", "game.erika.h3": "艾莉卡",
  "game.keya.role": "12 区探索队员", "game.keya.h3": "凯雅",
  "game.release.h2": "发售信息",
  "game.spec.platform": "平台", "game.spec.platform.v": "PC（Steam）",
  "game.spec.date": "发售", "game.spec.date.v": "抢先体验 2027 年第 4 季度<br>正式发售 2028 年第 1 季度",
  "game.spec.genre": "类型", "game.spec.genre.v": "观战型地牢设计 · 叙事",
  "game.spec.lang": "语言", "game.spec.lang.v": "韩语 · 英语等更多语言准备中",


  // 데브로그
  "devlog.title": "开发日志 — Emberseed",
  "devlog.desc": "STALVERON 开发记录。走过的路和将要写的文章。",
  "devlog.h1": "开发日志",
  "devlog.p1.body": "11 月 7 日发布。",
  "devlog.soon": "即将发布",
"devlog.p1.h3": "第 1 篇开发日志 — 星之地的黎明",










  // 스핀오프
  "spin.title": "外传 — Emberseed",
  "spin.desc": "STALVERON 外传小说。正篇五年前，行走城市 27 区的蒸汽温室。",
  "spin.h1": "外传小说", "spin.wt": "（暂定名）",
"spin.ep1.when": "2026.11", "spin.ep1.soon": "第 1 话准备中。发布后我们会通过邮件通知。",
  "read.prev": "← 上一话", "read.list": "目录", "read.next": "下一话 →",
  "spin.ep1.h3": "准备中",




  // 연락
  "contact.title": "联系 — Emberseed",
  "contact.desc": "Emberseed 的联系方式和消息订阅。",
  "contact.h1": "联系",
  "contact.tag": "发行、合作、采访、测试咨询请发邮件。",
  "contact.b2c.h3": "玩家消息另行订阅", "contact.b2c.p": "想收到试玩版、商店和连载消息，请在订阅页面留下邮箱。",
  "nav.notify": "订阅消息",
  "notify.title": "订阅消息 — Emberseed", "notify.desc": "通过邮件接收 STALVERON 试玩版公开、商店页面和外传连载消息。",
  "notify.h1": "订阅消息", "notify.tag": "有新消息时，我们会通过邮件通知您。",
  "contact.channels.h2": "渠道",
  "contact.k.mail": "邮件", "contact.k.company": "公司", "contact.company.v": "Emberseed · 韩国天安",
  "contact.dim": "主播·测试者的试玩码咨询，发行·合作提案请发邮件。通常几天内回复。",
}
};
