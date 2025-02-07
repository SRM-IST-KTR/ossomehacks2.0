import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="OSSome Hacks 2.0 — A 36-hour hackathon on 10th-11th March 2025 at SRM Institute of Science and Technology. Join developers, innovators, and tech enthusiasts for an incredible coding competition organized by GCSRM." />
        <meta name="keywords" content="hackathon, hackathon near me, tech events, hackathon Chennai, hackathon India 2025, coding competition, SRM University events, OSSome Hacks, developer meetups, tech innovation event, GCSRM hackathon, Github Community SRM, gcsrm, GCSRM" />
        <meta name="author" content="GitHub Community SRM (GCSRM)" />
        <meta name="theme-color" content="#000000" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OSSome Hacks 2.0 | 36-Hour Hackathon | SRM Institute of Science and Technology" />
        <meta property="og:description" content="OSSome Hacks 2.0 — a 36-hour hackathon on 10th-11th March 2025, where developers and innovators gather to create tech solutions. Hosted at SRM IST and organized by GCSRM." />
        <meta property="og:image" content="https://res.cloudinary.com/doslhy0tq/image/upload/v1738955948/Frame_8_g8qr5z.png" />
        <meta property="og:url" content="https://ossomehacks.githubsrmist.tech/" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OSSome Hacks 2.0 | Hackathon Chennai 2025" />
        <meta name="twitter:description" content="Join OSSome Hacks 2.0 — 36 hours of tech innovation and collaboration at SRM IST. Don't miss this chance to build, innovate, and win!" />
        <meta name="twitter:image" content="https://res.cloudinary.com/doslhy0tq/image/upload/v1738955948/Frame_8_g8qr5z.png" />
        <meta name="twitter:image:alt" content="OSSome Hacks 2.0 event cover image" />

        {/* Crawlers and Indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://ossomehacks.githubsrmist.tech/" />

        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "OSSome Hacks 2.0",
            "description": "OSSome Hacks 2.0 is a 36-hour hackathon on 10th-11th March 2025 at SRM Institute of Science and Technology, organized by GitHub Community SRM (GCSRM).",
            "startDate": "2025-03-10T09:00:00+05:30",
            "endDate": "2025-03-11T21:00:00+05:30",
            "location": {
              "@type": "Place",
              "name": "SRM Institute of Science and Technology",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SRM Nagar, Kattankulathur",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "603203",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "GitHub Community SRM (GCSRM)",
              "url": "https://githubsrmist.tech/"
            },
            "image": "https://res.cloudinary.com/doslhy0tq/image/upload/v1738955948/Frame_8_g8qr5z.png",
            "url": "https://ossomehacks.githubsrmist.tech/",
            "offers": {
              "@type": "Offer",
              "url": "https://ossomehacks.githubsrmist.tech/",
              "availability": "https://schema.org/InStock",
              "price": "Free",
              "priceCurrency": "INR"
            },
            "sameAs": [
              "https://www.githubsrmist.tech/",
              "https://www.instagram.com/githubsrm/"
            ]
          })}
        </script>
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}