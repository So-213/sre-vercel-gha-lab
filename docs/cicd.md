# CI/CD概要

## 通常のVercel自動デプロイとの違い
通常のVercel自動デプロイはGitHub連携後にVercel側が直接ビルド・デプロイします。  
このプロジェクトでは、GitHub ActionsでCIを通した後にVercel CLIでデプロイします。

## GitHub Actions経由にする理由
- CIの内容を明示的に管理しやすい
- 将来的にTerraformやAWS関連ジョブを同じパイプラインへ追加しやすい
- デプロイ前に必須チェックを強制できる

## PR時のCI
`pull_request` (main向け) で以下を実行します。
- lint
- typecheck
- build

## main push時のProduction Deploy
`push` (main) で以下を順に実行します。
1. lint
2. typecheck
3. build
4. Vercel CLIによるProduction Deploy

## 必要なGitHub Secrets
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Vercelプロジェクト作成時の方針
このリポジトリは「CLI経由デプロイ練習用」です。  
Vercelで新規プロジェクトを作成する際は、GitHub連携の自動デプロイを主経路にせず、GitHub Actions + Vercel CLIでのデプロイフロー確認を優先します。
