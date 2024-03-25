import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="80"
      width="80"
      color="grey"
      strokeWidth="5"
      animationDuration="1"
      timeout={3000}
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
