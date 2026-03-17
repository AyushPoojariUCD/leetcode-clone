export default function CourseCard({
  title,
  subtitle,
  chapters,
  items,
  progress,
  image
}) {
  return (
    <div className="group min-w-[230px] rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">

      {/* Top Section */}
      <div className="relative h-[130px] overflow-hidden">

        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-[11px] opacity-80">{subtitle}</p>
          <h3 className="font-semibold text-md leading-tight">{title}</h3>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center px-4 py-3">

        <div className="text-center">
          <p className="font-semibold text-sm">{chapters}</p>
          <p className="text-gray-400 text-[11px]">Chapters</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-sm">{items}</p>
          <p className="text-gray-400 text-[11px]">Items</p>
        </div>

        {/* Play Button */}
        <div className="flex flex-col items-center">

          <div className="w-10 h-10 rounded-full border-4 border-green-400 flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-110 group-hover:border-green-500">
            ▶
          </div>

          <p className="text-[11px] text-gray-400 mt-1">{progress}%</p>

        </div>

      </div>

    </div>
  );
}