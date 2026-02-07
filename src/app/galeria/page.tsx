"use client";

import { Template, ImageCard, Button, InputText } from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources/image/image.service";
import { useState } from 'react';
import Link from "next/link";

export default function GaleriaPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    setLoading(true);
    try {
      const result = await useService.buscar(query, extension);
      const normalized = Array.isArray(result)
        ? result
        : Array.isArray((result as { content?: Image[] })?.content)
        ? (result as { content?: Image[] }).content ?? []
        : [];
      setImages(normalized);
    } finally {
      setLoading(false);
    }
  }

  function renderImageCard(image: Image){
    return (
      <ImageCard key={image.url}
        nome={image.name} 
        src={image.url} 
        extension={image.extension}
        tamanho={image.size} 
        dataUpload={image.uploadDate} />
    )
  }

  function renderImageCards(){
    return images.map(renderImageCard);
  }

  return (
    <Template loading={loading}>

     <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <InputText placeholder="Digite nome ou Tags" onChange={(event) => setQuery((event.target as HTMLInputElement).value)} 
                 className="border px-3 py-2 rounded-lg text-gray-900" />
          <select onChange={(event) => setExtension((event.target as HTMLSelectElement).value)} 
                  className="border px-4 py-2 text-gray-900 px-3 py-2 rounded-lg">
            <option value="">Todas as categorias</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
            <option value="WEBP">WEBP</option>
            <option value="BMP">BMP</option>
          </select>
          <Button color="blue" label="Buscar" onClick={searchImages} />
          <Link href="/formulario">
          <Button color="yellow" label="+ Imagem" onClick={searchImages} />
          </Link>
          
        </div>
     </section>

      <section className="grid grid-cols-4 gap-4">  
        {renderImageCards()}
      </section>
    </Template>
  );
}