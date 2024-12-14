import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";
import adsSec from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      {/* Ads section */}
      <div>
        <img className="rounded-md w-full" src={adsSec} />
      </div>
    </div>
  );
};

export default RightNav;
