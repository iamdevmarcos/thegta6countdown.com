const trailers = [
  {
    src: 'https://www.youtube.com/embed/QdBZY2fkU-0',
    title: 'GTA 6 Trailer 1',
  },
  {
    src: 'https://www.youtube.com/embed/VQRLujxTm3c',
    title: 'GTA 6 Trailer 2',
  },
]

export const TrailerPreview = () => (
  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
    {trailers.map((trailer) => (
      <div
        key={trailer.src}
        className="w-[310px] h-[170px] overflow-hidden bg-secondary-gradient border-[2px] border-transparent rounded-sm shadow-secondary"
      >
        <div className="w-full h-full rounded-sm bg-white">
          <iframe
            className="w-full h-full"
            src={trailer.src}
            title={trailer.title}
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; controls;"
          ></iframe>
        </div>
      </div>
    ))}
  </div>
)
