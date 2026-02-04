'use client';

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Galeria de Imagens
        </h1>
        
        {/* Aqui será implementada a galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <p className="text-gray-600 dark:text-gray-400">
              Galeria será carregada aqui...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}