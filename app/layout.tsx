import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lucas Freitas — Senior Software Engineer",
    template: "%s | Lucas Freitas",
  },
  description:
    "Senior Software Engineer building scalable systems and solving complex problems for startups and established companies.",
  metadataBase: new URL("https://joselucasapp.com"),

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Lucas Freitas — Senior Software Engineer",
    description:
      "Senior Software Engineer building scalable systems and high-performance platforms.",
    url: "https://joselucasapp.com",
    siteName: "Lucas Freitas",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Freitas — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas Freitas — Senior Software Engineer",
    description:
      "Senior Software Engineer building scalable systems and solving complex problems.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org – identidade e logo para o Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Freitas",
              url: "https://joselucasapp.com",
              logo: "https://joselucasapp.com/icon.png",
              sameAs: [
                "https://www.linkedin.com/in/jlgf524150",
                "https://github.com/joselucasapp",
              ],
              jobTitle: "Senior Software Engineer",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
