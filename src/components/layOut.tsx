interface LayOutProp {
  children: React.ReactNode;
}

const layOut = (prop: LayOutProp) => {
  const { children } = prop;
  return <div className="flex justify-center">{children}</div>;
};

export default layOut;
