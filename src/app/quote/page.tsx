import type { Metadata } from "next";
import Link from "next/link";

const QUOTE =
  "Mistakes aren't bugs in your journey — they're commits. Make them, learn from them, and push a better version of yourself every single time.";
const AUTHOR = "Dipnarayan Nandi";
const PAGE_URL = "https://www.dipnarayan.in/quote";

export const metadata: Metadata = {
  title: `"Mistakes aren't bugs, they're commits" – Quote by ${AUTHOR}`,
  description: `"${QUOTE}" — an original quote by ${AUTHOR} (Infinite), Security Engineer.`,
  alternates: { canonical: PAGE_URL },
  authors: [{ name: AUTHOR, url: "https://www.dipnarayan.in" }],
  openGraph: {
    title: `"Mistakes aren't bugs, they're commits" – ${AUTHOR}`,
    description: QUOTE,
    url: PAGE_URL,
    siteName: "Dipnarayan Nandi",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `"Mistakes aren't bugs, they're commits" – ${AUTHOR}`,
    description: QUOTE,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Quotation",
  text: QUOTE,
  url: PAGE_URL,
  inLanguage: "en",
  dateCreated: "2026-10-05",
  creator: {
    "@type": "Person",
    name: AUTHOR,
    alternateName: "Infinite",
    jobTitle: "Security Engineer",
    url: "https://www.dipnarayan.in",
    sameAs: [
      "https://github.com/Dip0375",
      "https://www.linkedin.com/in/dipnarayan-nandi-95b6a21b3/",
      "https://medium.com/@dipnarayan.n",
    ],
  },
};

export default function QuotePage() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center px-4 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl w-full text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyber-accent mb-8">
          A quote by {AUTHOR}
        </p>

        <figure>
          <blockquote>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              &ldquo;{QUOTE}&rdquo;
            </h1>
          </blockquote>
          <figcaption className="mt-8 text-base sm:text-lg text-muted-foreground">
            — <cite className="not-italic font-semibold text-foreground">{AUTHOR}</cite>{" "}
            (Infinite), Security Engineer · 2026
          </figcaption>
        </figure>

        <section className="mt-14 text-left sm:text-center space-y-4 text-muted-foreground text-sm sm:text-base">
          <h2 className="text-lg font-semibold text-foreground">What it means</h2>
          <p>
            In Git, every commit is a saved step forward — including the ones
            that fix what went wrong. I see mistakes the same way: not as
            failures, but as recorded progress. Each one is a chance to learn,
            refactor and ship a better version of yourself.
          </p>
          <p>
            First published on{" "}
            <Link
              href="https://github.com/Dip0375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              my GitHub profile
            </Link>{" "}
            in October 2026.
          </p>
        </section>

        <div className="mt-12">
          <Link href="/" className="text-sm text-cyber-accent hover:underline">
            ← Back to dipnarayan.in
          </Link>
        </div>
      </article>
    </main>
  );
}
