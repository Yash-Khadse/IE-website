
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SERVICES } from '@/lib/services';
import ServiceDetails from '@/sections/services/ServiceDetails';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | InvisiEdge Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // We can just pass the service object as is because now iconName is a string, not a component.
  // The client component will map the string to the component.
  return <ServiceDetails service={service} />;
}
