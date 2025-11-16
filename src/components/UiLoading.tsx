import { OrbitProgress } from "react-loading-indicators";

export default function () {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <OrbitProgress color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
    </div>
  );
}
