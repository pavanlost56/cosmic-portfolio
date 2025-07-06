export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Test Page</h1>
      
      <section className="mb-8 p-4 border border-white">
        <h2 className="text-2xl mb-4">Section 1: Direct Content</h2>
        <p>This is direct content without any wrappers.</p>
      </section>
      
      <section className="mb-8 p-4 border border-white">
        <h2 className="text-2xl mb-4">Section 2: With Background</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p>This has a background color.</p>
        </div>
      </section>
      
      <section className="mb-8 p-4 border border-white">
        <h2 className="text-2xl mb-4">Section 3: Stats Preview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-gray-400">Projects</p>
          </div>
        </div>
      </section>
    </div>
  );
}
