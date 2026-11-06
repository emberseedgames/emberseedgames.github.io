// Emberseed 홈페이지 — 영어·일본어 글 사전. 한국어는 각 HTML 본문이 정본(키 = data-i18n).
// 키가 없으면 한국어가 그대로 보인다. 글을 고칠 땐 HTML(한국어) + 여기(en·ja) 두 곳.
const I18N = {
en: {
  // 공통
  "nav.team": "Team", "nav.game": "STALVERON", "nav.intro": "About the game", "nav.devlog": "Devlog", "nav.spinoff": "Spin-off novel", "nav.contact": "Contact",
  "team.title": "Team — Emberseed", "team.desc": "About Emberseed, an indie game studio: who, where, and what we're making.",
  "team.tag": "A small studio in Cheonan, South Korea. We're making our first game, STALVERON.",
  "team.letter.h2": "A word from us",
  "team.letter.p1": "Hello. We are Emberseed. <br>Thank you for your interest. We hope you'll look forward to the Emberseed universe as it unfolds.",
  "team.letter.p2": "We will share our progress through regular updates and devlogs, and do our best to keep to the planned schedule so the release is not delayed.",
  "team.letter.p3": "To players abroad, we apologize first: the text on this site and our channels goes through machine translation, so it may read awkwardly. As soon as we are able, we will make this a top priority so that players overseas are not inconvenienced.",
  "team.letter.p4": "We are preparing Korean, English, Japanese, and Simplified and Traditional Chinese, and are also considering translation into languages not on that list. Thank you for your patience.",
  "team.members.h2": "Members",
  "team.m1.role": "Founder", "team.m1.p": "Game design, development, and the world and its story.",
  "team.m2.role": "SFX", "team.m2.p": "Mainly SFX, and sound direction alongside it.",
  "team.m3.role": "Writer", "team.m3.p": "Assistant writer. Thank you for your interest and support.",
  "team.m4.role": "Illustrator", "team.m4.p": "In charge of background and character illustration.",
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
  "game.spec.date": "Release", "game.spec.date.v": "Early Access Q4 2027 <br>Full release Q1 2028",
  "game.spec.genre": "Genre", "game.spec.genre.v": "Spectator dungeon design · narrative",
  "game.spec.lang": "Languages", "game.spec.lang.v": "Korean · English and more in preparation",


  // 데브로그
  "devlog.title": "Devlog — Emberseed",
  "devlog.desc": "STALVERON development notes. The road so far and the posts to come.",
  "devlog.h1": "Devlog",
  "devlog.p1.h3": "Hello. Nice to meet you.",
  "devlog.p1.b1": "Hello. Nice to meet you. We are Emberseed.",
  "devlog.p1.b2": "We started in April 2026, and for about seven months we have been working on our first title, STALVERON. We now have an alpha build in which the main systems and the game loop run from start to finish without critical bugs.",
  "devlog.p1.b3": "STALVERON is a spectator dungeon-design game. In the control tent, the player checks the stats, personalities, jobs and other details of the four-member expedition team entering the dungeon, and sets a target for how badly to hurt them before sending them back. Then, in the execution phase, the player chooses traps and places them carefully, so that the team is sent back in exactly the state that was set.",
  "devlog.p1.b4": "The expedition team moves according to its own situation and conditions. The player watches them and responds by moving the Maintenance Unit, the playable character, to place additional traps or repair existing ones.",
  "devlog.p1.b5": "STALVERON consists of 10 chapters. We expect about 90 minutes of play per chapter, and are developing toward a total play time of around 15 hours.",
  "devlog.p1.b6": "Our goal is to give you the thrill of watching and studying how each expedition team tackles the dungeon differently, and in the end seeing everything go exactly as you planned.",
  "devlog.p1.b7": "From here on, our main focus will be a UI overhaul, along with stronger 3D modeling and animation. If possible, we will put together a development roadmap and post it as soon as we can.",
  "devlog.p1.b8": "STALVERON is set in the late period of the Emberseed universe. We hope you will look forward to a steampunk-style apocalyptic world where magic and technology coexist: how people live through a newly arrived ice age, and what conflicts they face.",
  "devlog.p1.b9": "As a rule, the devlog will be posted every two weeks, and we will share our progress whenever there is news.",
  "devlog.p1.b10": "Thank you again for your interest. We hope you will look forward to the Emberseed universe and STALVERON.",
  "devlog.p1.b11": "Thank you.",










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
  "nav.notify": "Sign up for updates",
  "notify.title": "Sign up for updates — Emberseed", "notify.desc": "Get STALVERON demo, store page and spin-off serial news by email.",
  "notify.h1": "Sign up for updates", "notify.tag": "We'll email you when there's news.",
  "contact.channels.h2": "Channels",
  "contact.k.mail": "Email", "contact.k.company": "Company", "contact.company.v": "Emberseed · Cheonan, South Korea",
  "contact.dim": "Streamer and tester demo-key requests, publishing and collaboration proposals: please email.",
},
ja: {
  // 공통
  "nav.team": "チーム紹介", "nav.game": "STALVERON", "nav.intro": "ゲーム紹介", "nav.devlog": "開発日誌", "nav.spinoff": "スピンオフ小説", "nav.contact": "お問い合わせ",
  "team.title": "チーム紹介 — Emberseed", "team.desc": "インディーゲーム開発チーム Emberseed の紹介。誰が、どこで、何を作っているか。",
  "team.tag": "韓国・天安の小さな開発チーム。初作品 STALVERON を制作中です。",
  "team.letter.h2": "ごあいさつ",
  "team.letter.p1": "こんにちは。Emberseed です。 <br>たくさんのご関心に感謝いたします。これから広がる Emberseed ユニバースを楽しみにしていただければ幸いです。",
  "team.letter.p2": "継続的な発信と開発日誌で開発状況を共有し、計画した日程を守ってリリースが遅れないよう最善を尽くします。",
  "team.letter.p3": "海外のプレイヤーの皆さまには、まずお詫び申し上げます。このサイトや各チャンネルの文章は翻訳ツールを通しているため、不自然な部分があるかもしれません。環境が整い次第、この点を最優先課題として、海外のプレイヤーの皆さまにご不便をおかけしないようにいたします。",
  "team.letter.p4": "韓国語・英語・日本語・中国語（簡体・繁体）を準備していますが、それ以外の言語への翻訳も検討しています。もう少々お待ちいただければ幸いです。",
  "team.members.h2": "メンバー",
  "team.m1.role": "代表", "team.m1.p": "企画・開発、そして世界観とストーリーを担当しています。",
  "team.m2.role": "SFX", "team.m2.p": "SFX を主に担当し、サウンドディレクションも兼ねています。",
  "team.m3.role": "シナリオライター", "team.m3.p": "サブシナリオ担当です。どうぞよろしくお願いいたします。",
  "team.m4.role": "イラストレーター", "team.m4.p": "背景とキャラクターのイラストを担当しています。",
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
  "game.spec.date": "発売", "game.spec.date.v": "アーリーアクセス 2027年第4四半期 <br>正式リリース 2028年第1四半期",
  "game.spec.genre": "ジャンル", "game.spec.genre.v": "観戦型ダンジョン設計 · ナラティブ",
  "game.spec.lang": "言語", "game.spec.lang.v": "韓国語 · 英語ほか追加言語を準備中",


  // 데브로그
  "devlog.title": "開発日誌 — Emberseed",
  "devlog.desc": "STALVERON の開発記録。これまでの道のりと、これからの記事。",
  "devlog.h1": "開発日誌",
  "devlog.p1.h3": "こんにちは。はじめまして。",
  "devlog.p1.b1": "こんにちは。はじめまして。Emberseed です。",
  "devlog.p1.b2": "2026年4月から現在までおよそ7か月間、私たちの最初の作品である STALVERON の制作を進めてきました。そして、メインシステムとゲームループが致命的なバグなく一巡するアルファ版が完成しました。",
  "devlog.p1.b3": "STALVERON は観戦型ダンジョン設計ゲームです。プレイヤーは、ダンジョンに入ってくる4人の探査隊の能力値・性格・職業などの情報を管制テントで確認し、どの程度まで負傷させて帰すのか、目標値を自分で設定します。その後の実行段階では、探査隊を設定した目標値に合わせるために罠を選び、適切に設置して、彼らを帰さなければなりません。",
  "devlog.p1.b4": "探査隊は、自分たちの状況と条件に合わせて動きます。プレイヤーは彼らを観察し、プレイアブルキャラクターである整備機を動かして、罠を追加で設置したり修理したりして対応します。",
  "devlog.p1.b5": "STALVERON は全10章で構成され、1章あたり90分ほどのプレイ時間を想定し、合計15時間ほどのプレイ時間を目標に開発を進めています。",
  "devlog.p1.b6": "私たちの目標は、探査隊ごとに変わる攻略の仕方を観察し、研究して、最後には自分の計画どおりに進む快感を皆さまにお届けすることです。",
  "devlog.p1.b7": "今後は、UI の刷新とともに、3D モデリングとアニメーション表現の強化を主な目標として開発を進める予定です。可能であれば開発ロードマップをまとめ、できるだけ早く公開します。",
  "devlog.p1.b8": "STALVERON は Emberseed の世界観の後期を主な舞台としています。新たに訪れた氷河期のなかで人々がどのように生きているのか、どんな対立があるのか。魔法と技術が混在するスチームパンク風のアポカリプス世界を、楽しみにしていただければ幸いです。",
  "devlog.p1.b9": "開発日誌は隔週連載を基本とし、新しいお知らせがあるたびに開発状況を共有します。",
  "devlog.p1.b10": "あらためて、関心をお寄せいただきありがとうございます。Emberseed ユニバースと STALVERON を楽しみにしていただければ幸いです。",
  "devlog.p1.b11": "ありがとうございます。",










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
  "nav.notify": "お知らせ登録",
  "notify.title": "お知らせ登録 — Emberseed", "notify.desc": "STALVERON のデモ公開・ストアページ・スピンオフ連載の知らせをメールで受け取ります。",
  "notify.h1": "お知らせ登録", "notify.tag": "新しいお知らせがあればメールでお届けします。",
  "contact.channels.h2": "チャンネル",
  "contact.k.mail": "メール", "contact.k.company": "会社", "contact.company.v": "Emberseed · 韓国・天安",
  "contact.dim": "配信者・テスター向けデモキーのお問い合わせ、パブリッシング・協業のご提案はメールでお願いします。",
},
zh: {
  // 공통
  "nav.team": "团队介绍", "nav.game": "STALVERON", "nav.intro": "游戏介绍", "nav.devlog": "开发日志", "nav.spinoff": "外传小说", "nav.contact": "联系",
  "team.title": "团队介绍 — Emberseed", "team.desc": "独立游戏开发团队 Emberseed 介绍：是谁、在哪里、在做什么。",
  "team.tag": "韩国天安的小团队。正在制作第一部作品 STALVERON。",
  "team.letter.h2": "致大家的话",
  "team.letter.p1": "大家好，我们是 Emberseed。 <br>感谢大家的关注，希望大家期待即将展开的 Emberseed 宇宙。",
  "team.letter.p2": "我们会通过持续的沟通和开发日志分享开发进度，并尽力遵守计划日程，不让发售延期。",
  "team.letter.p3": "首先要向海外玩家致歉：本站及各沟通渠道的文字经过机器翻译，可能会有不自然之处。条件允许后，我们会把这一问题列为首要任务，尽量不让海外玩家感到不便。",
  "team.letter.p4": "我们正在准备韩语、英语、日语、简体中文和繁体中文，不在其中的语言也在考虑翻译，请再稍等片刻，谢谢。",
  "team.members.h2": "成员",
  "team.m1.role": "代表", "team.m1.p": "负责策划、开发，以及世界观与剧情。",
  "team.m2.role": "SFX", "team.m2.p": "主要负责 SFX，兼任音效指导。",
  "team.m3.role": "剧本作者", "team.m3.p": "副剧本作者。敬请多多关注。",
  "team.m4.role": "插画师", "team.m4.p": "负责背景与角色插画。",
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
  "game.spec.date": "发售", "game.spec.date.v": "抢先体验 2027 年第 4 季度 <br>正式发售 2028 年第 1 季度",
  "game.spec.genre": "类型", "game.spec.genre.v": "观战型地牢设计 · 叙事",
  "game.spec.lang": "语言", "game.spec.lang.v": "韩语 · 英语等更多语言准备中",


  // 데브로그
  "devlog.title": "开发日志 — Emberseed",
  "devlog.desc": "STALVERON 开发记录。走过的路和将要写的文章。",
  "devlog.h1": "开发日志",
  "devlog.p1.h3": "大家好，初次见面。",
  "devlog.p1.b1": "大家好，初次见面。我们是 Emberseed。",
  "devlog.p1.b2": "从 2026 年 4 月开始到现在，大约 7 个月的时间里，我们一直在制作我们的第一部作品 STALVERON。现在，主要系统和游戏循环能够在没有致命漏洞的情况下完整运转的 Alpha 版本已经完成。",
  "devlog.p1.b3": "STALVERON 是一款观战型地下城设计游戏。玩家在控制帐篷中确认进入地下城的 4 人探索队的能力值、性格、职业等各种信息，并亲自设定目标值：要让他们受多重的伤再送回去。之后在执行阶段，玩家需要选择陷阱并合理布置，让探索队达到自己设定的目标值，再把他们送回去。",
  "devlog.p1.b4": "探索队会根据自身的处境和条件行动。玩家需要观察他们，操作可操控角色“维修机”，追加布置陷阱或进行修理来应对。",
  "devlog.p1.b5": "STALVERON 共由 10 章构成，预计每章游玩时间约 90 分钟，我们以总计约 15 小时的游玩时间为目标进行开发。",
  "devlog.p1.b6": "我们的目标，是让各位观察并研究每支探索队各不相同的攻略方式，最终体验到一切按自己的计划进行的快感。",
  "devlog.p1.b7": "今后的开发重点是 UI 改版，以及强化 3D 建模和动画表现。如果可能，我们会整理出开发路线图，并尽快公布。",
  "devlog.p1.b8": "STALVERON 以 Emberseed 世界观的后期为主要舞台。希望各位期待这个魔法与技术并存的蒸汽朋克风末日世界：在新降临的冰河期里，人们如何生活，又有着怎样的冲突。",
  "devlog.p1.b9": "开发日志原则上每两周更新一次，有新消息时也会随时分享开发进展。",
  "devlog.p1.b10": "再次感谢各位的关注，希望各位期待 Emberseed 宇宙和 STALVERON。",
  "devlog.p1.b11": "谢谢大家。",










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
  "nav.notify": "订阅消息",
  "notify.title": "订阅消息 — Emberseed", "notify.desc": "通过邮件接收 STALVERON 试玩版公开、商店页面和外传连载消息。",
  "notify.h1": "订阅消息", "notify.tag": "有新消息时，我们会通过邮件通知您。",
  "contact.channels.h2": "渠道",
  "contact.k.mail": "邮件", "contact.k.company": "公司", "contact.company.v": "Emberseed · 韩国天安",
  "contact.dim": "主播·测试者的试玩码咨询，发行·合作提案请发邮件。",
}
};
