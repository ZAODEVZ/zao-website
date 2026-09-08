import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { MemberCard } from '@/components/MemberCard'
import { ARTIST_CATEGORIES } from '@/lib/webflowMembers'

// These paths existed on the Webflow site and are live today. They are rebuilt
// here so inbound links keep resolving after the switch instead of 404ing.
export const dynamicParams = false

export function generateStaticParams() {
  return ARTIST_CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = ARTIST_CATEGORIES.find((c) => c.slug === slug)
  if (!category) return {}
  const description = `${category.members.length} ${category.name} ${
    category.members.length === 1 ? 'member' : 'members'
  } of The ZAO.`
  return {
    alternates: { canonical: `/artist-category/${category.slug}` },
    title: `${category.name} - The ZAO`,
    description,
    openGraph: {
      title: `${category.name} - The ZAO`,
      description,
      url: `https://thezao.com/artist-category/${category.slug}`,
      siteName: 'The ZAO',
      type: 'website',
      images: ['https://zao-website.vercel.app/og-image.png'],
    },
  }
}

export default async function ArtistCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = ARTIST_CATEGORIES.find((c) => c.slug === slug)
  if (!category) notFound()

  return (
    <main className="min-h-screen">
      <Nav />

      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <Link
            href="/community"
            className="text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
            style={{ color: 'var(--zao-cream-dim)' }}
          >
            &larr; Community
          </Link>
          <div className="mt-8 space-y-6">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              {category.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--zao-text)' }}>
              {category.members.length}{' '}
              {category.members.length === 1 ? 'member' : 'members'} of The ZAO.
            </p>
          </div>
        </Container>
      </section>

      <Section heading="Members">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {category.members.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
