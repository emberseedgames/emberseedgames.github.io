// Emberseed 홈페이지 — 영어·일본어 글 사전. 한국어는 각 HTML 본문이 정본(키 = data-i18n).
// 키가 없으면 한국어가 그대로 보인다. 글을 고칠 땐 HTML(한국어) + 여기(en·ja) 두 곳.
const I18N = {
en: {
  // 공통
  "nav.team": "Team", "nav.game": "STALVERON", "nav.intro": "About the game", "nav.devlog": "Devlog", "nav.spinoff": "Spin-off novel", "nav.contact": "Contact",
  "team.title": "Team — Emberseed", "team.desc": "About Emberseed, an indie game studio: who, where, and what we're making.",
  "team.tag": "A small studio in Cheonan, South Korea. We're making our first game, STALVERON.",
  "team.members.h2": "Members",
  "team.m1.role": "Founder · Development · Design", "team.m1.name": "Name", "team.m1.p": "Writes the code, the game's rules and its screens. Started alone in summer 2026; the team grew from there.",
  "team.m2.role": "Sound", "team.m2.name": "Name", "team.m2.p": "Sound effects and the texture of sound, from the machinery inside the star to the control-room radio.",
  "team.m3.role": "Writing", "team.m3.name": "Name", "team.m3.p": "Co-writes the spin-off novel and the main game's dialogue. Joined November 2026.",
  "team.illust": "Illustration is done with the outside artist Crunchy.",
  "footer.copy": "© 2026 Emberseed. Cheonan, South Korea.",
  "btn.notify": "Get updates", "btn.notify.news": "Sign up for updates", "btn.x.view": "Follow on X", "btn.x.follow": "Follow on X",
  "js.mail.subject": "STALVERON updates sign-up", "js.mail.body": "Please send STALVERON news to this email address.",
  "js.fallback.p": "One email is enough. You can leave the subject empty.", "js.fallback.btn": "Sign up by email", "js.iframe.title": "Sign up for updates",

  // 회사(index)
  "home.title": "Emberseed — indie game studio",
  "home.desc": "Emberseed is an indie game studio. We're making our first game, STALVERON.",







  "home.recent.h2": "Recent",
  "home.r1.h3": "A writer joins", "home.r1.p": "A scenario writer has joined to work on the spin-off novel and the main game's dialogue. Episode 1 of the spin-off is in preparation.",
  "home.r2.h3": "First illustrations delivered", "home.r2.p": "The first batch of background and character art for the intro cutscenes has arrived. The image on this page's first screen is one of them.",
  "home.r3.h3": "Closed test finished", "home.r3.p": "We finished our first closed test with fifteen testers. Its results shaped the rules and screens you'll see now.",
  "home.recent.more": "All devlog posts →",
  "home.notify.h2": "Stay in the loop",
  "home.notify.p": "We'll email you when the demo goes public, the store page opens, or a spin-off episode is released. We don't send often."

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON. You don't walk the labyrinth. You only decide who comes back, and how badly hurt. A spectator dungeon-design game for PC (Steam), 2027.",
  "game.banner.tag": "You don't walk the labyrinth. You only decide who comes back, and how badly hurt.",
  "game.story.h2": "Walking cities, a fallen star",
  "game.story.p1": "Two hundred years after the catastrophe, people live aboard giant walking machine-cities, crossing an endless sheet of ice. Stop, and the winter storm behind them swallows the city. At each city's heart is the core of a ‘star’ that fell from the sky. Where its warmth reaches, and where it doesn't, is what divides this world into classes.",
  "game.story.p2": "The twenty-seventh city, District 27, halts before a new star. Inside, they say, is something that could keep the city walking for another hundred years. The expedition goes in. You, in the control room, prepare the inside of the star so they come back alive.",
  "game.story.quote": "What you see is what actually happens. The dice rolling, who gets hurt and where: all of it is right there on screen.",
  "game.fig.caption": "Work in progress. The gallery inside the star, during the facility-placement phase.",
  "game.how.h2": "How it plays",
  "game.c1.n": "01 · Design", "game.c1.h3": "Build the inside of the star", "game.c1.p": "Place facilities in the galleries, switch lights on and off, decide what to block and what to leave open. All before the expedition walks in.",
  "game.c2.n": "02 · Watch", "game.c2.h3": "Once they're in, you only watch", "game.c2.p": "A team of four walks the paths you built. You can't control them. They make the calls; the results come back through the control-room screen and the radio.",
  "game.c3.n": "03 · Dice", "game.c3.h3": "Every roll is visible", "game.c3.p": "Attack, evade, guard, skill, first aid, resolve. Six kinds of dice roll on screen. There is no hidden probability table.",
  "game.chars.h2": "The people of District 27",
  "game.elina.h3": "Elina", "game.elina.p": "An engineer who has worked close to the core. She takes control of this star.",
  "game.mira.h3": "Mira", "game.mira.p": "Captain of the District 27 expedition. The one who goes in.",
  "game.berto.h3": "Berto", "game.berto.p": "Mayor of District 27. His job is to keep the city walking one more year.",
  "game.release.h2": "Release",
  "game.spec.platform": "Platform", "game.spec.platform.v": "PC (Steam)",
  "game.spec.date": "Release", "game.spec.date.v": "Planned for 2027 · demo first",
  "game.spec.genre": "Genre", "game.spec.genre.v": "Spectator dungeon design · story",
  "game.spec.lang": "Languages", "game.spec.lang.v": "Korean · English and more in preparation",
  "game.spec.dev": "Developer", "game.spec.dev.v": "Emberseed · Godot Engine",
  "game.notify.h2": "We'll tell you when the store page opens",
  "game.notify.p": "Be the first to hear about the demo and the wishlist."

  // 데브로그
  "devlog.title": "Devlog — Emberseed",
  "devlog.desc": "STALVERON development notes. The road so far and the posts to come.",
  "devlog.h1": "Devlog",
  "devlog.tag": "The making of the game, written as it happens. Short updates on X, longer posts here.",
  "devlog.posts.h2": "Posts",
  "devlog.p1.meta": "Next post · November 2026", "devlog.p1.h3": "Devlog #1: Dawn at the star-site", "devlog.p1.p": "The day the first illustration arrived. What we decided on the way from one painting to the game's first screen.", "devlog.p1.link": "We'll announce it on X first →",
  "devlog.p2.meta": "2026-09-06 · first community post", "devlog.p2.h3": "A spectator trap game, made alone", "devlog.p2.p": "I opened with placing facilities and switching on lights, and readers took it for a ‘dungeon management game’. From the next post on, I'll open with people: the four in the expedition, their deaths, and what you see from the control room.",
  "devlog.sofar.h2": "So far",
  "devlog.t1.h3": "A writer joins", "devlog.t1.p": "Working together on six spin-off episodes and the main game's dialogue.",
  "devlog.t2.h3": "Company logo · first illustrations", "devlog.t2.p": "The Emberseed logo was finalized, and the first batch of intro-cutscene backgrounds and characters arrived.",
  "devlog.t3.h3": "Contest entry · channels opened", "devlog.t3.p": "Entered our first contest with the demo build. Opened the X and YouTube channels.",
  "devlog.t4.h3": "Closed test", "devlog.t4.p": "First closed test with fifteen testers. Much of the rules and screens changed here.",
  "devlog.t5.h3": "Emberseed begins", "devlog.t5.p": "Registered as a business in Cheonan. A one-person project became a company.",
  "devlog.notify.h2": "Get notified of new posts",
  "devlog.notify.p": "By email or on X. We don't send often."

  // 스핀오프
  "spin.title": "Spin-off — Emberseed",
  "spin.desc": "STALVERON spin-off novel. Five years before the game, in the steam greenhouse of walking city District 27.",
  "spin.h1": "Spin-off novel", "spin.wt": "(working title)",
  "spin.tag": "The everyday life of the city the game doesn't show. Set five years before the main story.",
  "spin.premise.h2": "2396, on the ice of the North Pacific",
  "spin.p1": "Walking city District 27 has been crossing an endless plain for a month. A young mechanic from the lower-deck steam greenhouse goes down to the cellar every night and writes down, as numbers, the faint pulse rising from beneath his feet. He doesn't know what is pulsing. Only that it has grown clearer since they entered the plain.",
  "spin.p2": "In that greenhouse there is a night-shift worker with three children, and on the next team, someone he knows only by face. They know nothing of each other's lives. They could have. They simply never asked.",
  "spin.quote": "Written so that people who only played the game can read it. It's a place for those who want to know more. The game stands on its own without the novel.",
  "spin.dim": "Six episodes planned. We publish episode 1, see how it lands, then write the next.",
  "spin.ep1.h3": "Episode 1: in preparation", "spin.ep1.p": "Dawn in the steam greenhouse. A stopped circulation pump and one filter that never came.",
  "spin.ep2.h3": "And then", "spin.ep2.p": "Episodes follow one by one after the first. Release days are announced on X and by email.",
  "spin.notify.h2": "We'll tell you when episode 1 is up",
  "spin.notify.p": "By email or on X. Serial news only."

  // 연락
  "contact.title": "Contact — Emberseed",
  "contact.desc": "How to reach Emberseed, and sign up for updates.",
  "contact.h1": "Contact",
  "contact.tag": "Publishing, collaboration, press and testing inquiries: please email us.",
  "contact.b2c.h3": "Player news is separate", "contact.b2c.p": "If you'd like demo, store and serial news, leave your email on the sign-up page.",
  "nav.notify": "Sign up for updates",
  "notify.title": "Sign up for updates — Emberseed", "notify.desc": "Get STALVERON demo, store page and spin-off serial news by email.",
  "notify.h1": "Sign up for updates", "notify.tag": "We'll email you about the demo release, store page opening and spin-off episodes. We don't send often.",
  "contact.channels.h2": "Channels",
  "contact.k.mail": "Email", "contact.k.company": "Company", "contact.company.v": "Emberseed · Cheonan, South Korea",
  "contact.dim": "Streamer and tester demo-key requests, publishing and collaboration proposals: please email. We usually reply within a few days."
},
ja: {
  // 공통
  "nav.team": "チーム紹介", "nav.game": "STALVERON", "nav.intro": "ゲーム紹介", "nav.devlog": "開発日誌", "nav.spinoff": "スピンオフ小説", "nav.contact": "お問い合わせ",
  "team.title": "チーム紹介 — Emberseed", "team.desc": "インディーゲーム開発チーム Emberseed の紹介。誰が、どこで、何を作っているか。",
  "team.tag": "韓国・天安の小さな開発チーム。初作品 STALVERON を制作中です。",
  "team.members.h2": "メンバー",
  "team.m1.role": "代表 · 開発 · 設計", "team.m1.name": "名前", "team.m1.p": "コードとゲームのルール、画面を作ります。2026年夏にひとりで始め、今のチームになりました。",
  "team.m2.role": "サウンド", "team.m2.name": "名前", "team.m2.p": "効果音と音の質感を担当。星の内側の機械音から管制室の無線まで。",
  "team.m3.role": "シナリオ", "team.m3.name": "名前", "team.m3.p": "スピンオフ小説と本編のセリフを一緒に書きます。2026年11月参加。",
  "team.illust": "イラストは外部の作家 Crunchy と共同で制作しています。",
  "footer.copy": "© 2026 Emberseed. 韓国・天安.",
  "btn.notify": "お知らせを受け取る", "btn.notify.news": "お知らせ登録", "btn.x.view": "Xで見る", "btn.x.follow": "Xをフォロー",
  "js.mail.subject": "STALVERON お知らせ登録", "js.mail.body": "このメールアドレスに STALVERON のお知らせを送ってください。",
  "js.fallback.p": "メール一通で十分です。件名は空のままで構いません。", "js.fallback.btn": "メールで登録", "js.iframe.title": "お知らせ登録",

  // 회사(index)
  "home.title": "Emberseed — インディーゲーム開発チーム",
  "home.desc": "インディーゲーム開発チーム Emberseed。初作品 STALVERON を制作中です。",







  "home.recent.h2": "最近のお知らせ",
  "home.r1.h3": "シナリオライターが参加", "home.r1.p": "スピンオフ小説と本編のセリフを一緒に磨くライターが参加しました。スピンオフ第1話を準備中です。",
  "home.r2.h3": "最初のイラスト納品", "home.r2.p": "イントロのカットシーンに使う背景と人物イラストの第1弾が届きました。このページの最初の画面がそのうちの一枚です。",
  "home.r3.h3": "クローズドテスト終了", "home.r3.p": "15名のテスターと行った最初のクローズドテストを終えました。その結果が今のルールと画面になっています。",
  "home.recent.more": "開発日誌をすべて見る →",
  "home.notify.h2": "お知らせを受け取る",
  "home.notify.p": "デモ公開、ストアページ開設、スピンオフ連載のお知らせをメールでお届けします。頻繁には送りません。"

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON。あなたは迷宮を歩かない。誰がどれだけ傷ついて帰るかを決めるだけだ。観戦型ダンジョン設計ゲーム、PC（Steam）、2027年。",
  "game.banner.tag": "あなたは迷宮を歩かない。誰がどれだけ傷ついて帰るかを決めるだけだ。",
  "game.story.h2": "歩く都市、落ちた星",
  "game.story.p1": "大災厄から二百年。人々は脚の付いた巨大な機械都市に乗り、果てしない氷の上を歩き続けています。止まれば、後ろから迫る冬の嵐に呑まれるからです。都市の心臓は空から落ちてきた「星」の核。その温もりが届く場所と届かない場所の差が、この世界の階級そのものです。",
  "game.story.p2": "二十七番目の都市、27区が新しい星の前に止まります。星の中には、都市をあと百年歩かせる何かがあると言われています。中へ入るのは探査隊。そして彼らが無事に帰れるよう星の内側を整えるのが、管制室にいるあなたです。",
  "game.story.quote": "見えるものが、そのまま実際の効果です。サイコロが転がるのも、誰がどこで傷つくのかも、すべて画面にそのまま映ります。",
  "game.fig.caption": "開発中の画面。星の内側の回廊と、設備配置の段階。",
  "game.how.h2": "こんなゲームです",
  "game.c1.n": "01 · 設計", "game.c1.h3": "星の内側を造る", "game.c1.p": "回廊に設備を置き、灯りを点けたり消したり、どこを塞ぎどこを開けておくかを決めます。探査隊が入ってくる前に終えなければなりません。",
  "game.c2.n": "02 · 観戦", "game.c2.h3": "入った後は見守るだけ", "game.c2.p": "四人の探査隊が、あなたの造った道を歩きます。直接操作はできません。判断は彼らがし、結果は管制室の画面と無線で返ってきます。",
  "game.c3.n": "03 · サイコロ", "game.c3.h3": "すべての判定が見える", "game.c3.p": "攻撃・回避・防御・技能・応急・決心。六種類のサイコロが画面の上で転がります。隠された確率表はありません。",
  "game.chars.h2": "27区の人々",
  "game.elina.h3": "エリナ", "game.elina.p": "核の近くで働いてきた技術者。今回の星の管制を担う。",
  "game.mira.h3": "ミラ", "game.mira.p": "27区探査隊長。星の中へ入る側。",
  "game.berto.h3": "ベルト", "game.berto.p": "27区市長。都市をあと一年歩かせることが仕事。",
  "game.release.h2": "発売情報",
  "game.spec.platform": "プラットフォーム", "game.spec.platform.v": "PC（Steam）",
  "game.spec.date": "発売", "game.spec.date.v": "2027年予定 · デモを先行公開",
  "game.spec.genre": "ジャンル", "game.spec.genre.v": "観戦型ダンジョン設計 · ストーリー",
  "game.spec.lang": "言語", "game.spec.lang.v": "韓国語 · 英語ほか追加言語を準備中",
  "game.spec.dev": "開発", "game.spec.dev.v": "Emberseed · Godot Engine",
  "game.notify.h2": "ストアページが開いたらお知らせします",
  "game.notify.p": "デモ公開とウィッシュリスト開設の知らせを、いちばん早く受け取れます。"

  // 데브로그
  "devlog.title": "開発日誌 — Emberseed",
  "devlog.desc": "STALVERON の開発記録。これまでの道のりと、これからの記事。",
  "devlog.h1": "開発日誌",
  "devlog.tag": "作る過程をそのまま書きます。短い知らせは X に、長い文章はここに。",
  "devlog.posts.h2": "記事",
  "devlog.p1.meta": "次の記事 · 2026年11月", "devlog.p1.h3": "第1回 開発日誌 — 星の地の夜明け", "devlog.p1.p": "最初のイラストが届いた日の話。一枚の絵がゲームの最初の画面になるまでに、何を決めたかを書きます。", "devlog.p1.link": "公開したら X で先にお知らせします →",
  "devlog.p2.meta": "2026-09-06 · コミュニティへの最初の投稿", "devlog.p2.h3": "ひとりで作る観戦型トラップゲーム", "devlog.p2.p": "設備を敷き灯りを点ける話から始めたら、「ダンジョン管理ゲーム」と読まれました。次の記事からは人から始めます。探査隊の四人、彼らの死、管制室から見えるものから。",
  "devlog.sofar.h2": "これまで",
  "devlog.t1.h3": "シナリオライターが参加", "devlog.t1.p": "スピンオフ小説六話と本編のセリフを一緒に磨きます。",
  "devlog.t2.h3": "会社ロゴ · 最初のイラスト", "devlog.t2.p": "Emberseed のロゴが決まり、イントロのカットシーン用の背景・人物イラスト第1弾が届きました。",
  "devlog.t3.h3": "コンテスト応募 · チャンネル開設", "devlog.t3.p": "デモビルドで最初のコンテストに応募しました。X と YouTube のチャンネルを開きました。",
  "devlog.t4.h3": "クローズドテスト", "devlog.t4.p": "15名のテスターと最初のクローズドテスト。ルールと画面の多くがここで変わりました。",
  "devlog.t5.h3": "Emberseed 始動", "devlog.t5.p": "忠清南道・天安で事業者登録。ひとりのプロジェクトが会社になりました。",
  "devlog.notify.h2": "新しい記事が出たらお知らせします",
  "devlog.notify.p": "メールまたは X で。頻繁には送りません。"

  // 스핀오프
  "spin.title": "スピンオフ — Emberseed",
  "spin.desc": "STALVERON スピンオフ小説。本編の5年前、歩く都市27区の蒸気温室で。",
  "spin.h1": "スピンオフ小説", "spin.wt": "（仮題）",
  "spin.tag": "ゲームが見せない都市の日常。本編より5年前の物語です。",
  "spin.premise.h2": "2396年、北太平洋の氷の上",
  "spin.p1": "歩く都市27区は、ひと月のあいだ果てしない平原を渡っています。下層の蒸気温室で働く若い整備工は、夜ごと地下室に降りて、足元から上ってくるかすかな鼓動を数字に書き留めます。何の鼓動かは分かりません。ただ、平原に入ってから少しずつはっきりしてきています。",
  "spin.p2": "その温室には子どもが三人いる当直の作業員がいて、隣の班には顔だけ知っている人がいます。互いの暮らしは知りません。知ることはできたのに、尋ねなかっただけです。",
  "spin.quote": "ゲームだけをした方にも読めるように書きます。もっと深く知りたい方のための場所です。ゲームは小説がなくても、それだけで成り立ちます。",
  "spin.dim": "基本は六話。第1話を公開して反応を見てから、次の話を書きます。",
  "spin.ep1.h3": "第1話 — 準備中", "spin.ep1.p": "蒸気温室の夜明け。止まった循環ポンプと、届かなかったフィルターひとつ。",
  "spin.ep2.h3": "続き", "spin.ep2.p": "第1話のあと順に公開します。公開日は X とメールでお知らせします。",
  "spin.notify.h2": "第1話が公開されたらお知らせします",
  "spin.notify.p": "メールまたは X で。連載の知らせだけを送ります。"

  // 연락
  "contact.title": "お問い合わせ — Emberseed",
  "contact.desc": "Emberseed の連絡先とお知らせ登録。",
  "contact.h1": "お問い合わせ",
  "contact.tag": "パブリッシング・協業・取材・テストのお問い合わせはメールでお願いします。",
  "contact.b2c.h3": "プレイヤー向けのお知らせは別です", "contact.b2c.p": "デモ・ストア・連載の知らせを受け取りたい方は、お知らせ登録ページでメールアドレスをお残しください。",
  "nav.notify": "お知らせ登録",
  "notify.title": "お知らせ登録 — Emberseed", "notify.desc": "STALVERON のデモ公開・ストアページ・スピンオフ連載の知らせをメールで受け取ります。",
  "notify.h1": "お知らせ登録", "notify.tag": "デモ公開、ストアページ開設、スピンオフ連載のお知らせをメールでお届けします。頻繁には送りません。",
  "contact.channels.h2": "チャンネル",
  "contact.k.mail": "メール", "contact.k.company": "会社", "contact.company.v": "Emberseed · 韓国・天安",
  "contact.dim": "配信者・テスター向けデモキーのお問い合わせ、パブリッシング・協業のご提案はメールでお願いします。通常、数日以内にお返事します。"
},
zh: {
  // 공통
  "nav.team": "团队介绍", "nav.game": "STALVERON", "nav.intro": "游戏介绍", "nav.devlog": "开发日志", "nav.spinoff": "外传小说", "nav.contact": "联系",
  "team.title": "团队介绍 — Emberseed", "team.desc": "独立游戏开发团队 Emberseed 介绍：是谁、在哪里、在做什么。",
  "team.tag": "韩国天安的小团队。正在制作第一部作品 STALVERON。",
  "team.members.h2": "成员",
  "team.m1.role": "代表 · 开发 · 设计", "team.m1.name": "姓名", "team.m1.p": "负责代码、游戏规则和画面。2026 年夏天一个人开始，发展成现在的团队。",
  "team.m2.role": "音效", "team.m2.name": "姓名", "team.m2.p": "负责音效和声音质感，从星内部的机械声到控制室的无线电。",
  "team.m3.role": "剧本", "team.m3.name": "姓名", "team.m3.p": "共同撰写外传小说和正篇台词。2026 年 11 月加入。",
  "team.illust": "插画与外部画师 Crunchy 合作完成。",
  "footer.copy": "© 2026 Emberseed. 韩国·天安.",
  "btn.notify": "订阅消息", "btn.notify.news": "订阅消息", "btn.x.view": "在 X 上关注", "btn.x.follow": "关注 X",
  "js.mail.subject": "STALVERON 消息订阅", "js.mail.body": "请将 STALVERON 的消息发送到这个邮箱。",
  "js.fallback.p": "发一封邮件即可。主题可以留空。", "js.fallback.btn": "用邮件订阅", "js.iframe.title": "订阅消息",

  // 회사(index)
  "home.title": "Emberseed — 独立游戏开发团队",
  "home.desc": "独立游戏开发团队 Emberseed。正在制作第一部作品 STALVERON。",







  "home.recent.h2": "最近消息",
  "home.r1.h3": "编剧加入", "home.r1.p": "一位编剧加入，将与我们一起打磨外传小说和正篇台词。外传第 1 话正在准备中。",
  "home.r2.h3": "首批插画交付", "home.r2.p": "用于序章过场的背景和人物插画第一批已到。本页首屏的画就是其中一张。",
  "home.r3.h3": "封闭测试结束", "home.r3.p": "与十五位测试者一起完成了第一次封闭测试。它的结果成为了现在的规则和画面。",
  "home.recent.more": "查看全部开发日志 →",
  "home.notify.h2": "订阅消息",
  "home.notify.p": "试玩版公开、商店页面上线、外传连载时，我们会发邮件通知。不会频繁发送。"

  // STALVERON
  "game.title": "STALVERON — Emberseed",
  "game.desc": "STALVERON。你不走迷宫。你只决定谁能回来，伤得多重。观战型地牢设计游戏，PC（Steam），2027 年。",
  "game.banner.tag": "你不走迷宫。你只决定谁能回来，伤得多重。",
  "game.story.h2": "行走的城市，坠落的星",
  "game.story.p1": "大灾变后两百年。人们登上长着腿的巨大机械城市，在无尽的冰原上行走。一旦停下，就会被身后追来的冬季风暴吞没。城市的心脏是一颗从天而降的“星”的核。它的温暖能到达与不能到达的地方之差，就是这个世界的阶级。",
  "game.story.p2": "第二十七座城市，27 区，停在一颗新的星前。据说星的内部有能让城市再走一百年的东西。进去的是探索队；而让他们平安归来、为此整备星内部的，是控制室里的你。",
  "game.story.quote": "看到的就是实际效果。骰子怎么滚，谁在哪里受伤，全部原样显示在画面上。",
  "game.fig.caption": "开发中画面。星内部的回廊，设施布置阶段。",
  "game.how.h2": "这是一款这样的游戏",
  "game.c1.n": "01 · 设计", "game.c1.h3": "建造星的内部", "game.c1.p": "在回廊里放置设施，开灯关灯，决定哪里封住、哪里留开。必须在探索队进来之前完成。",
  "game.c2.n": "02 · 观战", "game.c2.h3": "进去之后只能看", "game.c2.p": "四人探索队走你建的路。你不能直接操控。判断由他们做，结果通过控制室画面和无线电传回来。",
  "game.c3.n": "03 · 骰子", "game.c3.h3": "每次判定都看得见", "game.c3.p": "攻击、回避、防御、技能、急救、决心。六种骰子在画面上滚动。没有隐藏的概率表。",
  "game.chars.h2": "27 区的人们",
  "game.elina.h3": "艾琳娜", "game.elina.p": "一直在核附近工作的技术员。负责这颗星的管制。",
  "game.mira.h3": "米拉", "game.mira.p": "27 区探索队长。走进星里的那一方。",
  "game.berto.h3": "贝尔托", "game.berto.p": "27 区市长。让城市再走一年是他的工作。",
  "game.release.h2": "发售信息",
  "game.spec.platform": "平台", "game.spec.platform.v": "PC（Steam）",
  "game.spec.date": "发售", "game.spec.date.v": "预计 2027 年 · 先公开试玩版",
  "game.spec.genre": "类型", "game.spec.genre.v": "观战型地牢设计 · 剧情",
  "game.spec.lang": "语言", "game.spec.lang.v": "韩语 · 英语等更多语言准备中",
  "game.spec.dev": "开发", "game.spec.dev.v": "Emberseed · Godot Engine",
  "game.notify.h2": "商店页面上线时通知您",
  "game.notify.p": "第一时间收到试玩版公开和愿望单开放的消息。"

  // 데브로그
  "devlog.title": "开发日志 — Emberseed",
  "devlog.desc": "STALVERON 开发记录。走过的路和将要写的文章。",
  "devlog.h1": "开发日志",
  "devlog.tag": "如实记录制作过程。短消息在 X，长文在这里。",
  "devlog.posts.h2": "文章",
  "devlog.p1.meta": "下一篇 · 2026 年 11 月", "devlog.p1.h3": "第 1 篇开发日志 — 星之地的黎明", "devlog.p1.p": "第一张插画到达那天的故事。从一张画到游戏首屏，我们决定了什么。", "devlog.p1.link": "发布时会先在 X 上通知 →",
  "devlog.p2.meta": "2026-09-06 · 发在社区的第一篇", "devlog.p2.h3": "一个人做的观战型陷阱游戏", "devlog.p2.p": "从铺设施、开灯写起，结果被读成了“地牢经营游戏”。从下一篇起，从人写起：探索队四人、他们的死、从控制室看到的东西。",
  "devlog.sofar.h2": "至今为止",
  "devlog.t1.h3": "编剧加入", "devlog.t1.p": "一起打磨外传小说六话和正篇台词。",
  "devlog.t2.h3": "公司标志 · 首批插画", "devlog.t2.p": "Emberseed 的标志定稿，序章过场的背景·人物插画第一批到达。",
  "devlog.t3.h3": "参赛 · 开设频道", "devlog.t3.p": "用试玩版报名了第一个比赛。开设了 X 和 YouTube 频道。",
  "devlog.t4.h3": "封闭测试", "devlog.t4.p": "与十五位测试者的第一次封闭测试。规则和画面的很多部分在这里改变。",
  "devlog.t5.h3": "Emberseed 启动", "devlog.t5.p": "在忠清南道天安完成工商登记。一个人的项目变成了公司。",
  "devlog.notify.h2": "有新文章时通知您",
  "devlog.notify.p": "邮件或 X。不会频繁发送。"

  // 스핀오프
  "spin.title": "外传 — Emberseed",
  "spin.desc": "STALVERON 外传小说。正篇五年前，行走城市 27 区的蒸汽温室。",
  "spin.h1": "外传小说", "spin.wt": "（暂定名）",
  "spin.tag": "游戏里看不到的城市日常。比正篇早五年的故事。",
  "spin.premise.h2": "2396 年，北太平洋的冰面上",
  "spin.p1": "行走城市 27 区已经在无尽的平原上走了一个月。在下层蒸汽温室工作的年轻机修工，每晚下到地下室，把脚下传来的微弱搏动记成数字。他不知道那是什么的搏动。只知道进入平原之后，它越来越清晰。",
  "spin.p2": "那座温室里有一位带着三个孩子的值班工人，隔壁班组有一个只认得脸的人。彼此的生活一无所知。本来可以知道的，只是没有问过。",
  "spin.quote": "写给只玩过游戏的人也能读。这是为想了解更多的人准备的地方。游戏没有小说也能独立成立。",
  "spin.dim": "基本六话。先发第 1 话，看反应再写下一话。",
  "spin.ep1.h3": "第 1 话 — 准备中", "spin.ep1.p": "蒸汽温室的黎明。停转的循环泵，和一个没有送到的滤芯。",
  "spin.ep2.h3": "接下来", "spin.ep2.p": "第 1 话之后依次发布。发布日会在 X 和邮件通知。",
  "spin.notify.h2": "第 1 话发布时通知您",
  "spin.notify.p": "邮件或 X。只发连载消息。"

  // 연락
  "contact.title": "联系 — Emberseed",
  "contact.desc": "Emberseed 的联系方式和消息订阅。",
  "contact.h1": "联系",
  "contact.tag": "发行、合作、采访、测试咨询请发邮件。",
  "contact.b2c.h3": "玩家消息另行订阅", "contact.b2c.p": "想收到试玩版、商店和连载消息，请在订阅页面留下邮箱。",
  "nav.notify": "订阅消息",
  "notify.title": "订阅消息 — Emberseed", "notify.desc": "通过邮件接收 STALVERON 试玩版公开、商店页面和外传连载消息。",
  "notify.h1": "订阅消息", "notify.tag": "试玩版公开、商店页面上线、外传连载时，我们会发邮件通知。不会频繁发送。",
  "contact.channels.h2": "渠道",
  "contact.k.mail": "邮件", "contact.k.company": "公司", "contact.company.v": "Emberseed · 韩国天安",
  "contact.dim": "主播·测试者的试玩码咨询，发行·合作提案请发邮件。通常几天内回复。"
}
};
