interface IAboutBlock {
  title: string;
  description: string;
}

export default function AboutBlock(props: IAboutBlock) {
  const { title, description } = props;

  return (
    <div className="w-full h-[20%] border border-white bg-white/10 flex flex-col justify-between items-start mt-6 overflow-hidden rounded-[15px] p-2">
      <h2 className="text-white text-[28px] font-semibold">{title}</h2>
      <h3 className="text-gray-500 text-[20px] font-medium">{description}</h3>
    </div>
  );
}
