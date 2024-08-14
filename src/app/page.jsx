import { HomeComponent } from '@/components/component/HomeComponent';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4 md:p-8 lg:p-16 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center flex-grow">
        <HomeComponent />
      </div>
    </main>
  );
}
