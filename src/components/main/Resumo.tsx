interface IProps {
  title: string;
  children: React.ReactNode;
}
export const Resumo = ({ title, children }: IProps) => {
  return (
    <div className="flex w-full min-h-32 max-h-36 flex-row bg-zinc-100 rounded-lg">
      <div className="flex justify-start w-[28%] w-min-[38%] bg-zinc-200 items-center pl-14 px-6 rounded-l-lg">
        <h1 className="font-bold text-lg text-green-800">{title}</h1>
      </div>
      <div
        className="w-0 h-32
  border-t-[70px] border-t-transparent
  border-l-[50px] border-l-zinc-200
  border-b-[70px] border-b-transparent"
      ></div>
      <div className="flex flex-1">{children}</div>
    </div>
  );
};
