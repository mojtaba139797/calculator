interface NumKey {
  numKey: number;
}

const numKey = ({ numKey }: NumKey) => {
  return <div className="w-10 h-10 bg-blue-500 text-white">{numKey}</div>;
};

export default numKey;
