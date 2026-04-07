export default function ProjectPage({ params }) {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl">{params.slug}</h1>
      <p className="mt-4 text-gray-400">Detailed case study coming soon...</p>
    </div>
  );
}
