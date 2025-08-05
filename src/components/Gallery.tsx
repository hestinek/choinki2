import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/02d66d00-771c-490d-94f4-de138ccec901.png",
      alt: "Choinki na plantacji"
    },
    {
      src: "/lovable-uploads/297ea240-18e9-4aa6-b3ff-77bcb89fe24c.png", 
      alt: "Rzędy choinek w złotym świetle"
    },
    {
      src: "/lovable-uploads/58c46bc0-3626-473b-ad17-0bcbb16baad1.png",
      alt: "Choinki w delikatnym świetle"
    },
    {
      src: "/lovable-uploads/6abac2b8-e062-49cf-80af-c8fcc36908ce.png",
      alt: "Pojedyncza choinka na plantacji"
    },
    {
      src: "/lovable-uploads/e0515892-02bb-4b7c-a8a8-364603a3e361.png",
      alt: "Młoda choinka w złotym świetle"
    },
    {
      src: "/lovable-uploads/eac0c5d4-a542-4675-8532-777597e3b650.png",
      alt: "Plantacja choinek w mglisty poranek"
    }
  ];

  return (
    <section id="drzewka" className="section-padding bg-forest-50">
      <div className="text-center mb-12">
        <p className="text-forest-600 uppercase tracking-wider font-medium">Nasze drzewka</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-3">
          Galeria Zdjęć
        </h2>
        <p className="text-forest-700 mt-4 max-w-2xl mx-auto">
          Zapraszamy do obejrzenia naszych pięknych choinek rosnących na plantacji w malowniczych okolicach Giżycka
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white border-forest-200 text-forest-700 hover:text-forest-900" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white border-forest-200 text-forest-700 hover:text-forest-900" />
        </Carousel>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-forest-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;