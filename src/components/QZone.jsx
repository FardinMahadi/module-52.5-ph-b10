import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-gray-100 p-5 flex flex-col gap-3 rounded-md">
      <h2 className="text-2xl font-semibold mb-3">Q-Zone</h2>
      <img src={swimmingImg} />
      <img src={classImg} />
      <img src={playGround} />
    </div>
  );
};

export default QZone;
