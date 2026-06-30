interface Key {
  operator: string;
}

const key = ({ operator }: Key) => {
  return <div className="w-20 h-10 bg-blue-400 border border-white text-white flex justify-center items-center rounded-2xl">{operator}</div>;
};

export default key;
