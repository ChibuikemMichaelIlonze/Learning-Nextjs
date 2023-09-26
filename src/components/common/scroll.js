import useReadingProgress from "@/hooks/useReadingProgress";
const Scroll = () => {
  const completion = useReadingProgress();
  console.log({ transform: `translateX(${completion - 100}%)` });
  return (
    <div>
      {" "}
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className=" bg-gradient-to-r from-yellow-500 to-green-500  h-1.5 w-screen top-0 fixed z-50"
      />
    </div>
  );
};

export default Scroll;
