# アーキテクチャ概要

```txt
Developer
  ↓ push / PR
GitHub
  ↓
GitHub Actions
  ├─ lint
  ├─ typecheck
  └─ build
  ↓
Vercel Deploy
  ↓
Next.js App
```

## 将来追加する候補
- TerraformでAWS S3を管理
- Terraform stateをS3 backendに移行
- GitHub Actionsでterraform plan
- mainマージ後にterraform apply
- CloudWatchや外形監視の追加
