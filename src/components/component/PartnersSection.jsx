import Image from 'next/image';

const partners = [
  { id: 3, name: 'DataDynamics', logo: '/placeholder.svg?height=100&width=100', url: 'https://datadynamics.example.com' },
  { id: 4, name: 'CloudWave', logo: '/placeholder.svg?height=100&width=100', url: 'https://cloudwave.example.com' },
];

export function PartnersSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={100}
                className="mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}