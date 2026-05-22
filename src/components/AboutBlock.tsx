interface IAboutBlock {
  title: string;
  description: string;
  src: string;
}

export default function AboutBlock(props: IAboutBlock) {
  const { title, description, src } = props;

  return (
    <div className="w-full h-auto border border-gray-500 bg-white/5 flex flex-col justify-between items-start mt-3 overflow-hidden rounded-[15px] p-3 shadow-[0_0_20px_rgba(100,150,255,0.3)]">
      <div className="w-full h-auto flex justify-between items-start border-b border-gray-500">
        <h2 className="text-white text-[21px] font-semibold pb-1">{title}</h2>
        <img src={src} width="35px" height="35px"></img>
      </div>
      <h3 className="text-gray-500 text-[16px] font-medium mt-1">
        {description}
      </h3>
    </div>
  );
}
