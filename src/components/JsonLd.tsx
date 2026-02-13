export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InvisiEdge Marketing LLC',
    url: 'https://www.invisiedge.com',
    logo: 'https://www.invisiedge.com/logo.png',
    sameAs: [
      'https://twitter.com/invisiedge',
      'https://www.linkedin.com/company/invisiedge',
      'https://www.instagram.com/invisiedge'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@invisiedge.com',
      contactType: 'customer support'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
