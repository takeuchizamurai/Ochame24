# CLAUDE.md — Ochame24 マルチエージェント設定

## プロジェクト概要
Ochame24は日本の伝統工芸・文化を紹介する多言語コンテンツサイト。
日本語（/ja/）と英語（/en/）の2言語構成。

## ディレクトリ構成
```
/ochame24
├── index.html               # 言語判定＆リダイレクト
├── assets/
│   ├── css/style.css        # 全ページ共通スタイル
│   ├── js/main.js           # アニメーション・言語切り替え
│   └── images/              # 画像群
├── ja/
│   ├── index.html
│   └── categories/          # 記事（例: knife.html）
└── en/
    ├── index.html
    └── categories/          # 記事（例: knife.html）
```

## Git リポジトリ
https://github.com/takeuchizamurai/Ochame24

---

## エージェント構成

タスクを受け取ったら、以下の3つのサブエージェントを適切に呼び出してください。
独立したタスクは **並列で起動** し、依存関係があるものは直列にしてください。

### 1. 企画部エージェント（Planner）
**役割**: 新しいコンテンツのアイデア出し・記事構成の設計
**呼び出し方**:
```
agents/planner.md を読んで、以下を実行してください: {タスク内容}
```
**成果物の保存先**: `shared/plan.md`

### 2. 制作部エージェント（Developer）
**役割**: HTML/CSS/JS の実装、記事ページの新規作成・編集
**呼び出し方**:
```
agents/developer.md を読んで、以下を実装してください: {タスク内容}
```
**参照ファイル**: `shared/plan.md`（企画部の成果物）
**成果物**: 直接 `/ochame24` 配下のファイルを編集

### 3. インフラ部エージェント（Infra）
**役割**: Git操作、ファイル整合性チェック、デプロイ準備
**呼び出し方**:
```
agents/infra.md を読んで、以下を実行してください: {タスク内容}
```
**成果物の保存先**: `shared/deploy_log.md`

---

## 標準ワークフロー：新記事を追加する場合

```
[ユーザー指示]
  ↓
[企画部] トレンド調査 → plan.md に記事構成を保存
  ↓
[制作部] plan.md を読んで ja/ と en/ の両方に HTML を生成
  ↓
[インフラ部] 差分確認 → git add/commit/push
```

---

## コーディングルール（制作部が必ず守ること）

- 記事は **日本語と英語の両方** を必ず同時に作成する
- ファイル名は英小文字・ハイフン区切り（例: `urushi-lacquer.html`）
- 既存の `knife.html` のHTML構造・クラス名を踏襲する
- 画像は `assets/images/` に配置し、相対パスで参照
- `style.css` と `main.js` は共通なので **むやみに変更しない**
- 新しいスタイルが必要な場合は記事ページ内の `<style>` タグに限定する

## 多言語ルール（制作部が必ず守ること）

| 項目 | 日本語版 (/ja/) | 英語版 (/en/) |
|------|----------------|--------------|
| パス | `/ja/categories/xxx.html` | `/en/categories/xxx.html` |
| `lang` 属性 | `ja` | `en` |
| hreflang | `ja` | `en` |
| 画像 | 共通 (`../../assets/images/`) | 共通 (`../../assets/images/`) |

---

## 共有ファイル（エージェント間の受け渡し）

| ファイル | 書き込み | 読み込み | 内容 |
|---------|---------|---------|------|
| `shared/plan.md` | 企画部 | 制作部 | 記事タイトル・構成・キーワード |
| `shared/deploy_log.md` | インフラ部 | - | Git操作ログ |
| `shared/status.json` | 全エージェント | 全エージェント | 進捗状態管理 |

---

## インフラ部が使うGitコマンド

```bash
# 変更確認
git status
git diff

# コミット（メッセージは英語）
git add .
git commit -m "feat: add {article-name} page (ja/en)"

# プッシュ
git push origin main
```

---

## タスク完了の報告フォーマット

各エージェントはタスク完了時に以下の形式で報告してください：

```
✅ [部門名] 完了
- 実施内容: ...
- 作成/変更ファイル: ...
- 次のエージェントへの引き継ぎ: ...
```
