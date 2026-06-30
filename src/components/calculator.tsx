interface CalculatorProp {
  children: React.ReactNode;
}

const calculator = (prop: CalculatorProp) => {
  const { children } = prop;
  return <div className="w-104 h-104 bg-black">{children}</div>;
};

export default calculator;
