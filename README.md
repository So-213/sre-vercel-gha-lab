# SRE Vercel GHA Lab

Next.js + Vercel + GitHub Actions で、CI/CDと将来のIaC連携を学ぶための練習用プロジェクトです。

## このプロジェクトの目的
- GitHub Actionsで `lint / typecheck / build` を実行する実践
- `main` へのpushを起点に、Vercel CLI経由でProduction Deployする流れの理解
- 将来のTerraformやAWS連携を見据えた土台づくり

## ディレクトリ構成

```txt
sre-vercel-gha-lab/
  app/
  public/
  .github/
    workflows/
      ci.yml
      deploy-vercel.yml
  terraform/
    README.md
  docs/
    architecture.md
    cicd.md
  package.json
  README.md
```

## ローカル起動手順
```bash
cd sre-vercel-gha-lab
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## GitHub Secrets 設定手順
GitHubリポジトリの `Settings > Secrets and variables > Actions` で以下を登録します。

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Vercel Project 作成手順（CLI経由デプロイ練習）
1. Vercelで新規プロジェクトを作成する
2. 本リポジトリを紐づける場合でも、練習目的としてはGitHub連携の自動デプロイ依存にしない
3. GitHub Actions内のVercel CLIコマンドでProduction Deployする運用を使う

## `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` の取得方法
ローカルで以下を実行すると、`.vercel/project.json` が生成されます。

```bash
npm i -g vercel
vercel login
vercel link
cat .vercel/project.json
```

`project.json` 内の `orgId` と `projectId` を、それぞれ  
`VERCEL_ORG_ID` と `VERCEL_PROJECT_ID` に設定してください。  
認証トークンは `vercel token` で作成し、`VERCEL_TOKEN` として登録します。

## CI/CD の流れ
1. PR作成時:
   - `.github/workflows/ci.yml` が起動
   - `npm ci` → `npm run lint` → `npm run typecheck` → `npm run build`
2. `main` へpush時:
   - `.github/workflows/deploy-vercel.yml` が起動
   - CI相当チェック成功後、Vercel CLIでProduction Deploy

## 今後の拡張予定
- TerraformでAWS S3を管理
- Terraform stateをS3 backendに移行
- GitHub Actionsに `terraform plan` を追加
- `main` マージ後に `terraform apply` を実行
- CloudWatchや外形監視を追加
