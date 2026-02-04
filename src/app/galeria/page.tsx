import { Template } from "@/components";
import { ImageCard } from "@/components";

export default function GaleriaPage() {
  return (
    <Template>
        <section className="grid grid-cols-3 gap-8">
        <ImageCard nome="Montanha" dataUpload="04/02/2026" tamanho="2mb" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="/>
        <ImageCard src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70"/>
        <ImageCard />
        </section>
    </Template>
  );
}