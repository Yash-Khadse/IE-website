import LegalLayout from '@/components/LegalLayout';
import { privacyContent } from '@/data/common/privacy';

export const metadata = {
  title: 'Privacy Policy | InvisiEdge',
  description: 'InvisiEdge Privacy Policy and Data Protection guidelines.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title={privacyContent.header.title}
      subtitle={privacyContent.header.subtitle}
      description={privacyContent.header.description}
      sections={privacyContent.sections}
      iconType="shield"
    />
  );
}
