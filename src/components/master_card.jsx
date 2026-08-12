function MasterCard({ image, name, position, experience, description, imageClass }) {
  return (
    <div className="flex w-full max-w-[60vw] h-[260px] rounded-2xl overflow-hidden bg-[#e8e4df] border border-[#e8dccb] shadow-sm">

      {/* Фото слева */}
      <div className="w-[38%] h-full">
        <img src={image} alt={name} className={`w-full h-full object-contain ${imageClass}`} />
      </div>


      {/* Информация справа */}
      <div className="flex flex-col justify-center gap-2 p-6 w-[62%]">

        <h3 className="text-2xl font-manrope text-[#2b2620] font-medium">
          {name}
        </h3>

        <span className="text-base text-[#2c2c2c] font-manrope">
          {position}
        </span>

        <p className="text-sm text-[#373737] font-manrope">
          Опыт работы: {experience}
        </p>

        <p className="text-sm text-[#464646] leading-relaxed font-manrope">
          {description}
        </p>


        <div className="flex gap-3 mt-3">

          <button className="px-5 py-2 rounded-lg border border-[#363636] text-[#464646] text-sm hover:bg-[#d5d0ca] transition">
            Записаться
          </button>

          <button className="px-5 py-2 rounded-lg border border-[#363636] text-[#3d372f] text-sm hover:bg-[#d5d0ca] transition">
            Примеры работ
          </button>

        </div>

      </div>

    </div>
  );
}

export default MasterCard;