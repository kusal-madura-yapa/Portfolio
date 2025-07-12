export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Kusal Yapa | Software Engineer & AI Innovator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Kusal Yapa - Software Engineering Undergraduate | Innovator in AI & Full-Stack Development" />
        <meta name="keywords" content="Kusal Yapa, Software Engineer, AI, Full-Stack, Portfolio, Developer" />
        <meta name="author" content="Kusal Yapa" />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}