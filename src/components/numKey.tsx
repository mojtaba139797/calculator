interface NumKey {
  numKey: number;
}

const numKey = ({ numKey }: NumKey) => {
  return <div className="w-10 h-10 bg-blue-400 border border-white text-white flex justify-center items-center rounded-2xl">{numKey}</div>;
};

export default numKey;
