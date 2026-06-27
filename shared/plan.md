# Japan Crafts — SEO戦略企画書
**作成日**: 2026-06-28  
**企画部エージェント** 作成  
**対象ドメイン**: `https://japan-crafts.com`（実際のドメインに随時置換すること）

---

## 現状の課題サマリー

| 項目 | 現状 | 問題点 |
|------|------|--------|
| titleタグ | 記事ごとに書式が不統一 | 「Japan Crafts」のみ/「\| Ochame24」混在でブランド力が弱い |
| descriptionタグ | 60〜100文字程度 | 推奨120〜155文字（日）/150〜160文字（英）に対して短い |
| OGPタグ | title・description・imageのみ | og:type / og:url / og:locale / og:site_name が欠如 |
| hreflangタグ | 相対パスで設定 | 絶対URLが必須。x-default が全ページで欠如 |
| 構造化データ | なし | Article / BreadcrumbList / WebSite / Organization が未実装 |
| canonical タグ | なし | 重複コンテンツリスクあり |
| robots.txt | 存在しない | Googlebot のクロール制御ができていない |
| sitemap.xml | 存在しない | 全25ページがGoogleに認識されない可能性がある |
| 画像alt属性 | CSS背景画像のため設定不可 | alt テキストによるキーワード訴求がゼロ |
| H2セクション数 | 記事により2〜5と不均一 | knife.html は H2 が2つのみで E-E-A-T が弱い |
| 内部リンク | 記事間リンクなし | トピカルオーソリティが形成されない |

---

## 1. SEOターゲットキーワード戦略

### 1-0. サイト全体（トップページ用）

#### 日本語版 (/ja/index.html)

| 種別 | キーワード | 月間検索ボリューム目安 |
|------|-----------|----------------------|
| メインKW | 日本 伝統工芸 | 中（1万〜10万） |
| メインKW | 日本の伝統工芸 種類 | 中 |
| ロングテール | 日本の伝統工芸 一覧 わかりやすく | 低（〜1万） |
| ロングテール | 日本の職人 ものづくり 種類 | 低 |
| ロングテール | 伝統工芸 英語 で説明 | 低（競合小・狙い目） |

#### 英語版 (/en/index.html)

| 種別 | キーワード | 月間検索ボリューム目安 |
|------|-----------|----------------------|
| メインKW | Japanese traditional crafts | 高（10万〜） |
| メインKW | Japan artisan crafts | 中 |
| ロングテール | traditional Japanese crafts guide | 低（競合小・狙い目） |
| ロングテール | Japanese handcraft culture explained | 低 |
| ロングテール | Japan crafts for tourists | 低（インバウンド需要） |

---

### 1-1. knife（堺包丁 / Sakai Knives）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 堺包丁 |
| メインKW | 堺包丁 特徴 |
| ロングテール | 堺包丁 職人 作り方 |
| ロングテール | 堺包丁 なぜ有名 理由 |
| ロングテール | 堺包丁 歴史 由来 |
| ロングテール | 堺包丁 種類 おすすめ 選び方 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Sakai knives |
| メインKW | Japanese kitchen knives Sakai |
| ロングテール | Sakai knives history and craftsmanship |
| ロングテール | why are Sakai knives famous |
| ロングテール | Sakai knife forging technique Japan |
| ロングテール | best Japanese chef knives Sakai Osaka |

---

### 1-2. urushi-lacquer（漆器 / Japanese Lacquerware）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 日本 漆器 |
| メインKW | 漆器 伝統工芸 |
| ロングテール | 漆器 作り方 工程 職人 |
| ロングテール | 日本漆器 歴史 縄文時代 |
| ロングテール | 漆器 手入れ 洗い方 |
| ロングテール | 漆器 産地 種類 違い |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Japanese lacquerware |
| メインKW | urushi lacquer Japan |
| ロングテール | Japanese urushi lacquer history |
| ロングテール | how is Japanese lacquerware made |
| ロングテール | types of Japanese lacquerware urushi |
| ロングテール | urushi craft technique explained |

---

### 1-3. arita-porcelain（有田焼 / Arita Porcelain）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 有田焼 |
| メインKW | 有田焼 特徴 歴史 |
| ロングテール | 有田焼 伊万里焼 違い |
| ロングテール | 有田焼 絵付け 柄 種類 |
| ロングテール | 有田焼 起源 朝鮮陶工 |
| ロングテール | 有田焼 おすすめ 購入方法 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Arita porcelain |
| メインKW | Arita ware Japan |
| ロングテール | Arita porcelain history tradition |
| ロングテール | Arita vs Imari porcelain difference |
| ロングテール | Japanese white porcelain Arita Saga |
| ロングテール | Arita ceramics European royalty history |

---

### 1-4. nishijin-weaving（西陣織 / Nishijin Weaving）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 西陣織 |
| メインKW | 西陣織 特徴 技法 |
| ロングテール | 西陣織 歴史 京都 起源 |
| ロングテール | 西陣織 帯 種類 選び方 |
| ロングテール | 西陣織 着物 違い |
| ロングテール | 西陣織 職人 作り方 工程 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Nishijin weaving |
| メインKW | Nishijin textile Kyoto |
| ロングテール | Nishijin silk weaving history Japan |
| ロングテール | Nishijin obi belt traditional craft |
| ロングテール | traditional Japanese silk weaving Kyoto |
| ロングテール | Nishijin ori weaving technique explained |

---

### 1-5. nambu-ironware（南部鉄器 / Nambu Ironware）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 南部鉄器 |
| メインKW | 南部鉄瓶 |
| ロングテール | 南部鉄器 歴史 岩手 由来 |
| ロングテール | 南部鉄瓶 お手入れ 使い方 さび |
| ロングテール | 南部鉄器 種類 違い 急須 鉄瓶 |
| ロングテール | 南部鉄器 鉄分 健康 効果 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Nambu ironware |
| メインKW | Japanese cast iron teapot |
| ロングテール | Nambu ironware history Japan Iwate |
| ロングテール | Japanese cast iron kettle tetsubin care |
| ロングテール | Nambu tetsubin iron teapot tradition |
| ロングテール | Japanese ironwork artisan craft Morioka |

---

### 1-6. edo-kiriko（江戸切子 / Edo Kiriko）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 江戸切子 |
| メインKW | 江戸切子 特徴 |
| ロングテール | 江戸切子 歴史 起源 1834年 |
| ロングテール | 江戸切子 薩摩切子 違い |
| ロングテール | 江戸切子 模様 種類 意味 |
| ロングテール | 江戸切子 グラス 購入 おすすめ |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Edo Kiriko |
| メインKW | Japanese cut glass Tokyo |
| ロングテール | Edo Kiriko glass history origin |
| ロングテール | Edo Kiriko vs Satsuma Kiriko difference |
| ロングテール | traditional Japanese cut glass patterns |
| ロングテール | Edo period cut glass craft Tokyo |

---

### 1-7. yuzen-dyeing（友禅染め / Yuzen Dyeing）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 友禅染め |
| メインKW | 京友禅 加賀友禅 |
| ロングテール | 友禅染め 歴史 宮崎友禅斎 起源 |
| ロングテール | 京友禅 加賀友禅 違い 特徴 |
| ロングテール | 友禅染め 工程 技法 防染糊 |
| ロングテール | 友禅染め 着物 柄 種類 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Yuzen dyeing |
| メインKW | Kyo Yuzen Japan |
| ロングテール | Yuzen dyeing history technique Japan |
| ロングテール | Kyo Yuzen vs Kaga Yuzen difference |
| ロングテール | Japanese kimono dyeing art tradition |
| ロングテール | traditional Japanese textile dyeing resist |

---

### 1-8. mokuhanga-woodblock（木版画 / Mokuhanga Woodblock Print）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 木版画 |
| メインKW | 浮世絵 版画 技法 |
| ロングテール | 木版画 歴史 浮世絵 江戸時代 |
| ロングテール | 木版画 作り方 多色刷り 工程 |
| ロングテール | 北斎 広重 木版画 代表作 |
| ロングテール | ジャポニスム 西洋絵画 浮世絵 影響 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | mokuhanga woodblock print |
| メインKW | Japanese woodblock printing ukiyo-e |
| ロングテール | mokuhanga printmaking history Japan |
| ロングテール | how to make Japanese woodblock print |
| ロングテール | Hokusai Hiroshige woodblock technique |
| ロングテール | ukiyo-e influence on Western art Japonisme |

---

### 1-9. kumihimo（組紐 / Kumihimo Braiding）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 組紐 |
| メインKW | くみひも 伝統工芸 |
| ロングテール | 組紐 歴史 奈良時代 起源 |
| ロングテール | 組紐 作り方 丸台 技法 |
| ロングテール | 組紐 アクセサリー 現代 ファッション |
| ロングテール | 組紐 刀 下緒 武具 用途 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | kumihimo braiding |
| メインKW | Japanese braiding art |
| ロングテール | kumihimo braiding history Japan |
| ロングテール | traditional Japanese cord braiding technique |
| ロングテール | kumihimo modern fashion accessories |
| ロングテール | how to make kumihimo step by step |

---

### 1-10. washi-paper（和紙 / Washi Paper）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 和紙 |
| メインKW | 手漉き和紙 伝統工芸 |
| ロングテール | 和紙 ユネスコ 無形文化遺産 |
| ロングテール | 和紙 楮 三椏 作り方 工程 |
| ロングテール | 和紙 産地 種類 越前 西ノ内 |
| ロングテール | 和紙 現代 使われ方 アート 建築 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | washi paper |
| メインKW | Japanese handmade paper tradition |
| ロングテール | washi paper UNESCO intangible heritage |
| ロングテール | how is washi paper made traditional process |
| ロングテール | types of Japanese washi paper kozo |
| ロングテール | washi paper modern uses art architecture |

---

### 1-11. bizen-pottery（備前焼 / Bizen Pottery）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 備前焼 |
| メインKW | 備前焼 特徴 無釉 |
| ロングテール | 備前焼 歴史 六古窯 |
| ロングテール | 備前焼 緋襷 牡丹餅 模様 意味 |
| ロングテール | 備前焼 作家 有名 人間国宝 |
| ロングテール | 備前焼 購入 岡山 産地 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | Bizen pottery |
| メインKW | Bizen ware Japan |
| ロングテール | Bizen pottery history Six Ancient Kilns |
| ロングテール | unglazed Japanese pottery Bizen technique |
| ロングテール | Bizen ware natural ash glaze firing |
| ロングテール | Japanese stoneware Okayama traditional |

---

### 1-12. kintsugi（金継ぎ / Kintsugi）

#### 日本語版

| 種別 | キーワード |
|------|-----------|
| メインKW | 金継ぎ |
| メインKW | 金継ぎ やり方 材料 |
| ロングテール | 金継ぎ 歴史 起源 室町時代 |
| ロングテール | 金継ぎ 簡単 初心者 キット |
| ロングテール | 金継ぎ 哲学 侘び さび 意味 |
| ロングテール | 金継ぎ 本漆 合成漆 違い |
| ロングテール | 金継ぎ ワークショップ 体験 |

#### 英語版

| 種別 | キーワード |
|------|-----------|
| メインKW | kintsugi |
| メインKW | kintsugi gold repair ceramics |
| ロングテール | kintsugi history Japan origin |
| ロングテール | kintsugi philosophy wabi sabi explained |
| ロングテール | how to do kintsugi at home beginner |
| ロングテール | kintsugi kit beginner guide |
| ロングテール | kintsugi as metaphor resilience meaning |

---

## 2. メタ情報の最適化方針

### 2-1. titleタグ

**統一フォーマット（日本語版）:**
```
{記事名} | {15〜20字のキャッチコピー} — Japan Crafts
```
目標文字数: 全角28〜36文字（Googleスニペット上限の約60文字相当）

**統一フォーマット（英語版）:**
```
{Article Name} | {Short Tagline} — Japan Crafts
```
目標文字数: 半角50〜65文字

**各記事の推奨title:**

| ファイル | 日本語版title | 英語版title |
|---------|-------------|------------|
| knife | 堺包丁 \| 世界のシェフが信頼する日本の刃 — Japan Crafts | Sakai Knives \| The Art of Japanese Blade Forging — Japan Crafts |
| urushi-lacquer | 漆器 \| 9000年の技が宿る日本の伝統工芸 — Japan Crafts | Japanese Lacquerware \| 9,000 Years of Urushi Craft — Japan Crafts |
| arita-porcelain | 有田焼 \| 欧州王侯を魅了した白磁の美 — Japan Crafts | Arita Porcelain \| Japan's Royal White Porcelain Tradition — Japan Crafts |
| nishijin-weaving | 西陣織 \| 1200年続く京都の絹織物の頂点 — Japan Crafts | Nishijin Weaving \| 1,200 Years of Kyoto Silk Tradition — Japan Crafts |
| nambu-ironware | 南部鉄器 \| 岩手が守る鉄の美と機能 — Japan Crafts | Nambu Ironware \| The Beauty of Japanese Cast Iron — Japan Crafts |
| edo-kiriko | 江戸切子 \| 光を纏う東京のガラス工芸 — Japan Crafts | Edo Kiriko \| Tokyo's Glittering Cut Glass Tradition — Japan Crafts |
| yuzen-dyeing | 友禅染め \| 京と加賀が育んだ染めの芸術 — Japan Crafts | Yuzen Dyeing \| Japan's Magnificent Kimono Dyeing Art — Japan Crafts |
| mokuhanga-woodblock | 木版画 \| 北斎・広重が世界を変えた多色刷り技術 — Japan Crafts | Mokuhanga \| The Woodblock Print Art That Changed the World — Japan Crafts |
| kumihimo | 組紐 \| 平安から現代ファッションへ続く紐の芸術 — Japan Crafts | Kumihimo \| Japan's Ancient Braiding Art in Modern Fashion — Japan Crafts |
| washi-paper | 和紙 \| ユネスコ遺産、千年の紙が生まれる技 — Japan Crafts | Washi Paper \| UNESCO Heritage of Japan's Handmade Paper — Japan Crafts |
| bizen-pottery | 備前焼 \| 炎と偶然が生む、日本六古窯の美 — Japan Crafts | Bizen Pottery \| Japan's Ancient Unglazed Kiln Tradition — Japan Crafts |
| kintsugi | 金継ぎ \| 壊れた器を金で甦らせる不完全さの哲学 — Japan Crafts | Kintsugi \| The Japanese Art of Repairing with Gold — Japan Crafts |

### 2-2. descriptionタグ

**目標文字数:**
- 日本語: 120〜155文字（全角）
- 英語: 140〜165文字（半角）

**各記事の推奨description:**

**knife（堺包丁）**
- JA: `堺包丁は大阪・堺で400年以上受け継がれる、日本刀の鍛造技術から生まれた職人包丁です。緻密な鍛造と研ぎの工程、世界のトップシェフが愛用する理由、種類と選び方まで詳しく解説します。` （90文字→追記が必要）
- EN: `Sakai knives are hand-forged Japanese chef's knives with over 400 years of heritage in Osaka. Discover the ancient forging techniques, artisan traditions, and why the world's top chefs trust them.`

**urushi-lacquer（漆器）**
- JA: `縄文時代にさかのぼる9000年の歴史を持つ日本の漆器。漆（うるし）が持つ天然の輝きと、職人が積み重ねる塗りの工程、産地ごとの種類と特徴、日々の手入れ方法まで丁寧に紹介します。`
- EN: `Japanese urushi lacquerware has a history spanning 9,000 years to the Jomon period. Explore the natural beauty of lacquer, traditional production techniques, regional varieties, and care tips.`

**arita-porcelain（有田焼）**
- JA: `有田焼は佐賀県有田で400年以上作られてきた日本初の磁器。ヨーロッパ王侯貴族を魅了した白磁の美、伊万里焼との違い、絵付けの種類と技法、現代での楽しみ方を解説します。`
- EN: `Arita porcelain is Japan's first porcelain, crafted in Saga for over 400 years. Learn about the luminous white ceramics that fascinated European royalty, its history, styles, and how to appreciate it today.`

**nishijin-weaving（西陣織）**
- JA: `京都・西陣で1200年以上受け継がれる絹織物の最高峰。西陣織の歴史と技法、帯や着物への使われ方、先染め糸が生み出す精緻な紋様の美しさ、現代ファッションへの応用まで紹介します。`
- EN: `Nishijin weaving is Kyoto's pinnacle silk textile tradition, spanning over 1,200 years. Discover the intricate pre-dyed silk techniques, gorgeous patterns, and the craft's role in kimono and modern fashion.`

**nambu-ironware（南部鉄器）**
- JA: `岩手県の職人が守り続ける南部鉄器。鉄瓶・急須・フライパンなど種類と違い、丈夫さと熱伝導率の高さが生む機能美、鉄分補給の効果、正しいお手入れ方法を詳しく解説します。`
- EN: `Nambu ironware is a cast iron craft from Iwate, Japan, prized for its durability and heat retention. Explore the history, types of iron teapots and cookware, health benefits, and how to care for them.`

**edo-kiriko（江戸切子）**
- JA: `1834年に東京・江戸で生まれたカットガラス工芸、江戸切子。鋭利な切子模様が光を乱反射する独自の美、薩摩切子との違い、代表的な文様の種類と意味、購入の際のポイントを紹介します。`
- EN: `Edo Kiriko is Tokyo's traditional cut glass craft born in 1834. Discover the razor-sharp geometric patterns that scatter light, the difference from Satsuma Kiriko, and how this art form thrives today.`

**yuzen-dyeing（友禅染め）**
- JA: `江戸中期に確立された友禅染めは、防染糊と多色染料で緻密な図柄を表現する京都発の手描き染色技法。京友禅と加賀友禅の違い、工程の詳細、現代における着物文化への貢献を解説します。`
- EN: `Yuzen dyeing is Japan's exquisite hand-painted textile art, developed in mid-Edo period Kyoto. Learn the resist-dyeing technique, the differences between Kyo-Yuzen and Kaga-Yuzen, and its role in kimono culture.`

**mokuhanga-woodblock（木版画）**
- JA: `江戸時代に花開いた木版画（浮世絵）は、北斎や広重が世界を魅了した多色刷り技術。版木の彫り・摺りの工程、ゴッホやモネに与えた影響、現代のアーティストへの継承を詳しく解説します。`
- EN: `Japanese woodblock printing (mokuhanga) peaked in the Edo period with masters like Hokusai and Hiroshige. Explore the multi-color printing process, its influence on Western Impressionism, and its modern legacy.`

**kumihimo（組紐）**
- JA: `奈良時代以前から続く組紐は、複数の糸を規則的に組む日本伝統の紐工芸。刀の下緒・帯締めとして武家文化を支えた歴史、丸台を使った製法、現代アクセサリーへの応用を紹介します。`
- EN: `Kumihimo is Japan's ancient braided cord craft, predating the Nara period. Discover the intricate braiding techniques using the marudai stand, its samurai heritage in sword and kimono accessories, and modern uses.`

**washi-paper（和紙）**
- JA: `ユネスコ無形文化遺産に登録された和紙は、楮・三椏・雁皮などの植物繊維を手で漉く日本固有の紙。強度と繊細さを兼ね備えた和紙の種類、産地、製法、現代の活用法を詳しく紹介します。`
- EN: `Washi, Japan's UNESCO-listed handmade paper, is crafted from kozo and other plant fibres and lasts over 1,000 years. Explore traditional production methods, regional varieties, and its uses in art and conservation.`

**bizen-pottery（備前焼）**
- JA: `日本六古窯の一つ、岡山・備前焼。釉薬を使わず高温で焼き締める独自技法が生む、緋襷・牡丹餅など炎の偶然の美。備前焼の歴史と工程、著名作家の作品、購入・鑑賞のポイントを解説します。`
- EN: `Bizen pottery is one of Japan's Six Ancient Kilns, known for unglazed high-fire stoneware from Okayama. Explore the unique fire-marking patterns, kiln history, famous artists, and tips for appreciating this timeless art.`

**kintsugi（金継ぎ）**
- JA: `金継ぎは割れた陶器を漆と金粉で修復する日本の伝統技法。傷を隠さず美として昇華する侘び・さびの哲学、室町時代から続く歴史、伝統工程から初心者向けキットまで詳しく解説します。`
- EN: `Kintsugi is the Japanese art of repairing broken ceramics with lacquer and gold powder, celebrating imperfection as beauty. Learn the wabi-sabi philosophy, the step-by-step repair process, and how to start at home.`

---

### 2-3. OGPタグの追加方針

現状の `og:title`, `og:description`, `og:image` に加えて以下を全ページに追加する。

**記事ページ（日本語版）:**
```html
<meta property="og:type" content="article">
<meta property="og:url" content="https://japan-crafts.com/ja/categories/{slug}.html">
<meta property="og:locale" content="ja_JP">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:site_name" content="Japan Crafts">
```

**記事ページ（英語版）:**
```html
<meta property="og:type" content="article">
<meta property="og:url" content="https://japan-crafts.com/en/categories/{slug}.html">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="ja_JP">
<meta property="og:site_name" content="Japan Crafts">
```

**トップページ（日本語版）:**
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://japan-crafts.com/ja/">
<meta property="og:locale" content="ja_JP">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:site_name" content="Japan Crafts">
<meta property="og:title" content="Japan Crafts — 日本の伝統工芸を、世界へ">
<meta property="og:description" content="職人の技と美意識が宿る日本の伝統工芸を紹介するメディアサイト。堺包丁・漆器・有田焼・西陣織など12の工芸を日英2言語で深く掘り下げます。">
<meta property="og:image" content="https://japan-crafts.com/assets/images/image001.png">
```

---

## 3. 構造化データ（JSON-LD）方針

### 3-1. トップページ用JSON-LD雛形

`/ja/index.html` および `/en/index.html` の `</head>` 直前に追加。

**WebSite（トップページ共通）:**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Japan Crafts",
  "url": "https://japan-crafts.com",
  "description": "日本の伝統工芸・文化を日本語と英語で紹介するメディアサイト",
  "inLanguage": ["ja", "en"],
  "publisher": {
    "@type": "Organization",
    "name": "Japan Crafts",
    "url": "https://japan-crafts.com"
  }
}
</script>
```

**Organization（トップページ共通）:**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Japan Crafts",
  "url": "https://japan-crafts.com",
  "sameAs": [
    "https://github.com/takeuchizamurai/Ochame24"
  ]
}
</script>
```

---

### 3-2. 記事ページ用JSON-LD雛形

各記事ページの `</head>` 直前に追加。スラグ・タイトル・説明・画像・言語を各ページで置換する。

**Article（記事ページ）— 堺包丁（日本語版）の例:**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "堺包丁 | 世界のシェフが信頼する日本の刃",
  "description": "堺包丁は大阪・堺で400年以上受け継がれる職人包丁です。鍛造技術と研ぎの工程、世界のシェフが愛用する理由を解説します。",
  "image": "https://japan-crafts.com/assets/images/image001.png",
  "url": "https://japan-crafts.com/ja/categories/knife.html",
  "inLanguage": "ja",
  "datePublished": "2026-06-27",
  "dateModified": "2026-06-28",
  "author": {
    "@type": "Organization",
    "name": "Japan Crafts",
    "url": "https://japan-crafts.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Japan Crafts",
    "url": "https://japan-crafts.com"
  }
}
</script>
```

**BreadcrumbList（記事ページ共通）— 日本語版の例:**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Japan Crafts ホーム",
      "item": "https://japan-crafts.com/ja/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "堺包丁",
      "item": "https://japan-crafts.com/ja/categories/knife.html"
    }
  ]
}
</script>
```

**各ページのJSON-LD置換変数一覧:**

| ファイル | headline (JA) | headline (EN) | image | url (JA) | url (EN) | datePublished |
|---------|--------------|--------------|-------|---------|---------|--------------|
| knife | 堺包丁 \| 世界のシェフが信頼する日本の刃 | Sakai Knives \| The Art of Japanese Blade Forging | image001.png | /ja/categories/knife.html | /en/categories/knife.html | 2026-06-27 |
| urushi-lacquer | 漆器 \| 9000年の技が宿る日本の伝統工芸 | Japanese Lacquerware \| 9,000 Years of Urushi Craft | image002.png | /ja/categories/urushi-lacquer.html | /en/categories/urushi-lacquer.html | 2026-06-27 |
| arita-porcelain | 有田焼 \| 欧州王侯を魅了した白磁の美 | Arita Porcelain \| Japan's Royal White Porcelain | image003.png | /ja/categories/arita-porcelain.html | /en/categories/arita-porcelain.html | 2026-06-27 |
| nishijin-weaving | 西陣織 \| 1200年続く京都の絹織物の頂点 | Nishijin Weaving \| 1,200 Years of Kyoto Silk | image004.png | /ja/categories/nishijin-weaving.html | /en/categories/nishijin-weaving.html | 2026-06-27 |
| nambu-ironware | 南部鉄器 \| 岩手が守る鉄の美と機能 | Nambu Ironware \| The Beauty of Japanese Cast Iron | image005.png | /ja/categories/nambu-ironware.html | /en/categories/nambu-ironware.html | 2026-06-27 |
| edo-kiriko | 江戸切子 \| 光を纏う東京のガラス工芸 | Edo Kiriko \| Tokyo's Glittering Cut Glass Tradition | image006.png | /ja/categories/edo-kiriko.html | /en/categories/edo-kiriko.html | 2026-06-27 |
| yuzen-dyeing | 友禅染め \| 京と加賀が育んだ染めの芸術 | Yuzen Dyeing \| Japan's Magnificent Kimono Dyeing Art | image007.png | /ja/categories/yuzen-dyeing.html | /en/categories/yuzen-dyeing.html | 2026-06-27 |
| mokuhanga-woodblock | 木版画 \| 北斎・広重が世界を変えた多色刷り | Mokuhanga \| The Woodblock Print That Changed the World | image008.png | /ja/categories/mokuhanga-woodblock.html | /en/categories/mokuhanga-woodblock.html | 2026-06-27 |
| kumihimo | 組紐 \| 平安から現代ファッションへ続く紐の芸術 | Kumihimo \| Japan's Ancient Braiding Art in Modern Fashion | image009.png | /ja/categories/kumihimo.html | /en/categories/kumihimo.html | 2026-06-27 |
| washi-paper | 和紙 \| ユネスコ遺産、千年の紙が生まれる技 | Washi Paper \| UNESCO Heritage of Japan's Handmade Paper | image010.png | /ja/categories/washi-paper.html | /en/categories/washi-paper.html | 2026-06-27 |
| bizen-pottery | 備前焼 \| 炎と偶然が生む、日本六古窯の美 | Bizen Pottery \| Japan's Ancient Unglazed Kiln Tradition | image011.png | /ja/categories/bizen-pottery.html | /en/categories/bizen-pottery.html | 2026-06-27 |
| kintsugi | 金継ぎ \| 壊れた器を金で甦らせる不完全さの哲学 | Kintsugi \| The Japanese Art of Repairing with Gold | image012.png | /ja/categories/kintsugi.html | /en/categories/kintsugi.html | 2026-06-27 |

---

## 4. サイト全体SEO施策

### 4-1. sitemap.xml（作成先: `/sitemap.xml`）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- トップページ（言語判定リダイレクト） -->
  <url>
    <loc>https://japan-crafts.com/</loc>
    <lastmod>2026-06-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- 日本語トップ -->
  <url>
    <loc>https://japan-crafts.com/ja/</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/"/>
    <lastmod>2026-06-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- 英語トップ -->
  <url>
    <loc>https://japan-crafts.com/en/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/"/>
    <lastmod>2026-06-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- 記事ページ（日本語） -->
  <url><loc>https://japan-crafts.com/ja/categories/knife.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/knife.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/knife.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/knife.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/urushi-lacquer.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/urushi-lacquer.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/urushi-lacquer.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/urushi-lacquer.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/arita-porcelain.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/arita-porcelain.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/arita-porcelain.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/arita-porcelain.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/nishijin-weaving.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/nishijin-weaving.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/nishijin-weaving.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/nishijin-weaving.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/nambu-ironware.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/nambu-ironware.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/nambu-ironware.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/nambu-ironware.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/edo-kiriko.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/edo-kiriko.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/edo-kiriko.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/edo-kiriko.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/yuzen-dyeing.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/yuzen-dyeing.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/yuzen-dyeing.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/yuzen-dyeing.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/mokuhanga-woodblock.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/mokuhanga-woodblock.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/mokuhanga-woodblock.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/mokuhanga-woodblock.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/kumihimo.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/kumihimo.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/kumihimo.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/kumihimo.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/washi-paper.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/washi-paper.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/washi-paper.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/washi-paper.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/bizen-pottery.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/bizen-pottery.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/bizen-pottery.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/bizen-pottery.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/ja/categories/kintsugi.html</loc>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/kintsugi.html"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/kintsugi.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/kintsugi.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>

  <!-- 記事ページ（英語） -->
  <url><loc>https://japan-crafts.com/en/categories/knife.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/knife.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/knife.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/knife.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/urushi-lacquer.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/urushi-lacquer.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/urushi-lacquer.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/urushi-lacquer.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/arita-porcelain.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/arita-porcelain.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/arita-porcelain.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/arita-porcelain.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/nishijin-weaving.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/nishijin-weaving.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/nishijin-weaving.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/nishijin-weaving.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/nambu-ironware.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/nambu-ironware.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/nambu-ironware.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/nambu-ironware.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/edo-kiriko.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/edo-kiriko.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/edo-kiriko.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/edo-kiriko.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/yuzen-dyeing.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/yuzen-dyeing.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/yuzen-dyeing.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/yuzen-dyeing.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/mokuhanga-woodblock.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/mokuhanga-woodblock.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/mokuhanga-woodblock.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/mokuhanga-woodblock.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/kumihimo.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/kumihimo.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/kumihimo.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/kumihimo.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/washi-paper.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/washi-paper.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/washi-paper.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/washi-paper.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/bizen-pottery.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/bizen-pottery.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/bizen-pottery.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/bizen-pottery.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>
  <url><loc>https://japan-crafts.com/en/categories/kintsugi.html</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/kintsugi.html"/>
    <xhtml:link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/kintsugi.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/kintsugi.html"/>
    <lastmod>2026-06-27</lastmod><changefreq>monthly</changefreq><priority>0.9</priority>
  </url>

</urlset>
```

---

### 4-2. robots.txt（作成先: `/robots.txt`）

```
User-agent: *
Allow: /

# Google AdSense
User-agent: Mediapartners-Google
Allow: /

Sitemap: https://japan-crafts.com/sitemap.xml
```

---

### 4-3. canonicalタグ設定方針

**設定原則**: 各ページは自分自身のURLを `<link rel="canonical">` で明示する。  
絶対URLで記述すること（相対パス不可）。

**テンプレート（各ページの `<link rel="stylesheet">` の直前に追加）:**

```html
<!-- 日本語記事ページの例 -->
<link rel="canonical" href="https://japan-crafts.com/ja/categories/knife.html">

<!-- 英語記事ページの例 -->
<link rel="canonical" href="https://japan-crafts.com/en/categories/knife.html">

<!-- 日本語トップページ -->
<link rel="canonical" href="https://japan-crafts.com/ja/">

<!-- 英語トップページ -->
<link rel="canonical" href="https://japan-crafts.com/en/">
```

---

### 4-4. hreflangの完全実装（x-default含む）

**現状の問題点:**
1. 相対パスで記述されている（Googleは絶対URLを要求）
2. `x-default` が存在しない
3. `index.html`（ルート）は言語判定リダイレクトのみでhreflangなし

**修正後のテンプレート（記事ページ 日本語版）:**
```html
<link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/categories/knife.html">
<link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/categories/knife.html">
<link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/categories/knife.html">
```

**修正後のテンプレート（トップページ 日本語版）:**
```html
<link rel="alternate" hreflang="ja" href="https://japan-crafts.com/ja/">
<link rel="alternate" hreflang="en" href="https://japan-crafts.com/en/">
<link rel="alternate" hreflang="x-default" href="https://japan-crafts.com/en/">
```

**x-defaultの設定方針**: 英語版をデフォルトとする（インバウンド向けサイトとして海外ユーザーへのアピールを優先）

---

## 5. コンテンツSEO方針

### 5-1. 各記事ページに追加すべきH2構造（E-E-A-Tフレームワーク）

Google の E-E-A-T（経験・専門性・権威性・信頼性）の観点から、各記事に以下の5〜6のH2セクションを設ける。  
現状の `knife.html` はH2が2つ（最低ライン）なので、全記事を以下の構成に統一することを目標とする。

**推奨H2構成（全記事共通フレームワーク）:**

| H2番号 | テーマ（日本語） | テーマ（英語） | 目的 |
|-------|---------------|-------------|------|
| H2-1 | 特徴と概要 | Overview and Key Features | ファーストインプレッション・検索意図への直接回答 |
| H2-2 | 歴史と起源 | History and Origins | 権威性（Authoritativeness）訴求 |
| H2-3 | 製法・技法の詳細 | Techniques and Crafting Process | 専門性（Expertise）訴求 |
| H2-4 | 産地・種類・流派 | Regional Varieties and Styles | 網羅性・ロングテールKW対策 |
| H2-5 | 現代での意義と世界への影響 | Modern Significance and Global Impact | トピカルオーソリティ形成 |
| H2-6（任意）| 鑑賞・購入・体験ガイド | How to Experience and Purchase | コンバージョン誘導・ユーザー価値 |

**現状不足が最も深刻な記事:**
- `knife.html`: H2が2つのみ → H2-2〜H2-5の追記が急務
- `urushi-lacquer.html`: コンテンツ量を要確認
- その他の記事: `kintsugi.html` はH2が5つあり、基準として参照する

---

### 5-2. 内部リンク戦略（記事間の相互リンク）

**方針**: 各記事末尾に「関連記事」セクションを設け、テーマ的に近い記事へリンクする。  
これにより以下の効果を得る:
- クロール効率の向上
- ページランクの分散
- 滞在時間の延長（直帰率の低下）
- トピカルオーソリティの形成

**推奨リンクマップ（双方向）:**

| 記事 | 関連リンク先（優先度順）|
|------|---------------------|
| 堺包丁 | 南部鉄器（金属工芸）、漆器（日本の道具文化）|
| 漆器 | 金継ぎ（漆を使う技法）、備前焼（器の文化）、有田焼（器の文化）|
| 有田焼 | 備前焼（陶芸）、金継ぎ（陶磁器修復）、漆器（器の文化）|
| 西陣織 | 友禅染め（染織）、組紐（帯締め・武家文化）|
| 南部鉄器 | 堺包丁（金属工芸）|
| 江戸切子 | 和紙（日本の伝統素材）、漆器（器・インテリア）|
| 友禅染め | 西陣織（染織・着物）、組紐（帯締め）|
| 木版画 | 和紙（版画の素材）|
| 組紐 | 西陣織（帯締め・着物）、友禅染め（着物文化）|
| 和紙 | 木版画（和紙を使う工芸）|
| 備前焼 | 有田焼（陶芸）、金継ぎ（陶磁器修復）、漆器（器の文化）|
| 金継ぎ | 備前焼（陶芸）、有田焼（陶磁器）、漆器（漆の技法）|

**実装テンプレート（記事末尾の `</article>` 直前に挿入）:**
```html
<section class="content-section related-articles fade-in">
  <h2>関連記事</h2>
  <ul>
    <li><a href="../../ja/categories/nambu-ironware.html">南部鉄器 — 岩手が守る鉄の美と機能</a></li>
    <li><a href="../../ja/categories/urushi-lacquer.html">漆器 — 9000年の技が宿る日本の伝統工芸</a></li>
  </ul>
</section>
```

---

### 5-3. Core Web Vitals 改善のためのHTML/CSS最適化指針

#### LCP（Largest Contentful Paint）改善 — 目標: 2.5秒以内

**問題**: ヒーロー画像がCSS背景画像として実装されているため、ブラウザの優先読み込み対象にならない。

**対策1 — ヒーロー画像を `<img>` タグに変換:**
```html
<!-- 変更前（CSS背景） -->
<div class="hero-image-placeholder"></div>

<!-- 変更後（imgタグ） -->
<img
  src="../../assets/images/image001.png"
  alt="堺包丁 — 職人が鍛造した日本の伝統的な料理包丁"
  width="1200"
  height="600"
  loading="eager"
  fetchpriority="high"
  class="hero-image"
>
```

**対策2 — WebP形式への対応（`<picture>` タグ）:**
```html
<picture>
  <source srcset="../../assets/images/image001.webp" type="image/webp">
  <img src="../../assets/images/image001.png" alt="堺包丁" width="1200" height="600"
       loading="eager" fetchpriority="high" class="hero-image">
</picture>
```

**対策3 — Googleフォントのpreload追加:**
```html
<!-- 既存のpreconnectに加えて以下を追加 -->
<link rel="preload" href="../../assets/css/style.css" as="style">
```

#### CLS（Cumulative Layout Shift）改善 — 目標: 0.1以下

**問題**: 画像コンテナに高さが明示されていないため、フォント・画像の読み込み時にレイアウトシフトが発生する。

**対策 — ヒーロー画像に明示的なアスペクト比を設定:**
```css
/* style.css または各記事の <style> に追加 */
.article-hero {
  aspect-ratio: 16 / 9; /* 固定アスペクト比を指定 */
  min-height: 60vh;
}
```

#### INP（Interaction to Next Paint）改善 — 目標: 200ms以内

**問題**: `main.js` のアニメーション処理がメインスレッドをブロックする可能性がある。

**対策:**
- `IntersectionObserver` を使ったフェードインの実装は既に良い設計（非同期）
- `requestAnimationFrame` の適切な使用を確認する
- `main.js` を `defer` 属性付きで読み込む（現状は `</body>` 直前なので問題なし）

#### 画像alt属性について

現状はCSS背景画像のためalt属性が設定できないが、`<img>` タグへの変換後は以下の命名規則でalt属性を記述する:

```
alt="{工芸品名} — {職人/産地/時代の概要説明}"
```

例:
- `alt="堺包丁 — 大阪・堺の職人が鍛造する日本の伝統的な料理包丁"`
- `alt="有田焼 — 佐賀県有田町で400年以上作られる日本の白磁磁器"`
- `alt="金継ぎ — 割れた陶器を漆と金粉で修復する日本の伝統技法"`

---

## 6. 優先実装ロードマップ

制作部エージェントへの引き継ぎにあたり、優先度順に整理する。

### 優先度 HIGH（即時対応）

| タスク | 対象 | 理由 |
|-------|------|------|
| robots.txt 作成 | `/robots.txt` | Googlebot制御の基盤 |
| sitemap.xml 作成 | `/sitemap.xml` | 25ページのインデックス促進 |
| hreflang を絶対URLに修正 + x-default 追加 | 全27ページ | 多言語SEOの根幹 |
| canonical タグ追加 | 全27ページ | 重複コンテンツ回避 |
| OGP og:type / og:url / og:locale / og:site_name 追加 | 全27ページ | SNS拡散時のリッチ表示 |

### 優先度 MEDIUM（1〜2週間以内）

| タスク | 対象 | 理由 |
|-------|------|------|
| title / description の全面改訂 | 全26ページ（トップ2+記事24） | 検索結果CTR向上の最重要施策 |
| JSON-LD 構造化データの追加 | 全26ページ | リッチリザルト獲得 |
| knife.html のコンテンツ拡充（H2を5つに） | knife.html (ja/en) | コンテンツが最も薄い記事 |
| 内部リンク「関連記事」セクション追加 | 全24記事ページ | トピカルオーソリティ形成 |

### 優先度 LOW（1ヶ月以内）

| タスク | 対象 | 理由 |
|-------|------|------|
| ヒーロー画像を `<img>` タグに変換（LCP改善） | 全24記事ページ | Core Web Vitals対応 |
| WebP画像の生成と `<picture>` タグ実装 | assets/images/ | 読み込み高速化 |
| 薄いコンテンツの全記事H2拡充 | urushi-lacquer等 | E-E-A-T強化 |

---

## 7. 制作部への引き継ぎ事項

- **ドメイン**: 本書では `https://japan-crafts.com` をプレースホルダーとして使用。実際のデプロイドメインに全箇所を置換すること。
- **優先実装**: まず robots.txt・sitemap.xml・hreflang絶対URL化・canonical・OGP補足の5点を全ページに適用する。これは既存HTMLの最小限の変更で実現できる。
- **構造化データ**: JSON-LDは `</head>` 直前に `<script type="application/ld+json">` ブロックとして挿入する。既存のCSSやJSには触れない。
- **コンテンツ拡充**: knife.html を最優先で5H2構成に拡充し、その構成を他の記事拡充時のモデルとする。
- **`kintsugi.html` を手本にすること**: 既存記事の中で最も E-E-A-T が充実しており（H2×5・詳細な工程・哲学解説・現代的意義）、コンテンツ品質の基準とする。

---

*企画部エージェント 完了 — 2026-06-28*
