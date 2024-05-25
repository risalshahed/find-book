import { FaHeart } from 'react-icons/fa';
import star from '../assets/star.svg'
import { IoCartOutline } from 'react-icons/io5';

export default function EachBook({ book, onFav }) {
  const { id, img, title, author, price, isFavorite, published_in } = book;

  return (
    <div className="space-y-3">
      {/* thumbnail */}
      <div
        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
      >
        <img className="w-full h-48" src={img} alt="book name" />
      </div>
      {/* info */}
      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{title}</h4>
        <p className="text-xs lg:text-sm">
          By: <strong>{author}</strong> in {published_in}
        </p>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
          {/* stars */}
          <div className="flex items-center space-x-1">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <span className="text-xs lg:text-sm">(4 Star)</span>
          </div>
          {/* stars ends */}
        </div>

        <div className="flex items-center gap-3 text-xs lg:text-sm">
          <button
            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
          >
            <IoCartOutline size={20} />
            Add to Cart
          </button>
          {/* Favorite Button */}
          <button
            className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${isFavorite ? 'bg-[#dc2954]/[14%] text-[#dc2954] hover:bg-[#dc2954]/[24%]' : 'bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]'} transition-all py-1.5 lg:py-1.5`}
            onClick={() => onFav(id)}
          >
            <FaHeart size={16} color={`${isFavorite ? '#dc2954' : '#1C4336'}`} />
            Favourite
          </button>
        </div>
      </div>
    </div>
  )
}
