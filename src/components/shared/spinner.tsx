import { RotatingLines } from "react-loader-spinner";

interface SpinnerProps {
  color?: string;
  width?: string;
}

const Spinner = ({ color = "#ffff", width = "23" }: SpinnerProps) => {
  return (
    <RotatingLines
      visible={true}
      width={width}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      strokeColor={color}
    />
  );
};

export default Spinner;
