interface Key {
  operator: string;
}

const key = ({ operator }: Key) => {
  return <div>{operator}</div>;
};

export default key;
