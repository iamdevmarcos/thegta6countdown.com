export const TrailerPreview = () => (
  <div className="w-[310px] h-[170px] overflow-hidden bg-secondary-gradient border-[2px] border-transparent rounded-sm shadow-secondary">
    <div className="w-full h-full rounded-sm bg-white">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/QdBZY2fkU-0?si=zKHa_Y_GQeUEpvBJ"
        title="GTA 6 Trailer"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; controls;"
      ></iframe>
    </div>
  </div>
)
