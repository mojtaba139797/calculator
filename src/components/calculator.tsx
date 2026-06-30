interface CalculatorProp {
  children: React.ReactNode;
}

const calculator = (prop: CalculatorProp) => {
  const { children } = prop;
  return <div className="w-104 h-104">{children}</div>;
};

export default calculator;
