import { MemeGeneratorForm } from '../components/MemeGeneratorForm';

export default function Page() {
  return (
    <main className="w-full min-h-screen py-20">
      <section className="max-w-[568px] w-full mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10">Meme generator</h1>
        <MemeGeneratorForm />
      </section>
    </main>
  );
}
