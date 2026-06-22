type GreetingProps = {
  name: string;
  age: number;
  isVip?: boolean;
};

export default function Greeting({ name, age, isVip }: GreetingProps) {
  return <h2>Hello, {name} </h2>;
}
