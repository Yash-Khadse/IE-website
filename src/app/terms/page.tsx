import LegalLayout from '@/components/LegalLayout';
import { termsContent } from '@/data/common/terms';

export const metadata = {
  title: 'Terms of Service | InvisiEdge',
  description: 'InvisiEdge Terms of Service and usage guidelines.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title={termsContent.header.title}
      subtitle={termsContent.header.subtitle}
      description={termsContent.header.description}
      sections={termsContent.sections}
      iconType="file"
    />
  );
}
