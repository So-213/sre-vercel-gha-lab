export default function Home() {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV ?? "local or unknown";
  const deployedAt = new Date().toISOString();

  return (
    <main className="container">
      <h1>SRE Vercel GHA Lab</h1>
      <p>GitHub Actions経由でVercelデプロイを学ぶための練習用アプリ</p>

      <section className="panel">
        <h2>現在の環境</h2>
        <p>
          <strong>NEXT_PUBLIC_APP_ENV:</strong> {appEnv}
        </p>
      </section>

      <section className="panel">
        <h2>デプロイ時刻(擬似)</h2>
        <p>{deployedAt}</p>
      </section>
    </main>
  );
}
