interface ILink {
  href: string;
  value?: string;
  children?: React.ReactNode;
}

const Link: React.FC<ILink> = (props) => {
  const { href, value, children } = props;

  return (
    <a
      href={href}
      className="w-full h-auto flex justify-center items-center gap-1.5 p-2! transition-all duration-400 cursor-pointer rounded-3xl bg-linear-to-br from-gray-700 to-gray-900 mt-4 text-center text-white text-[22px] font-semibold"
    >
      {children ? <span>{children}</span> : <h3>{value}</h3>}
    </a>
  );
};

export default Link;
