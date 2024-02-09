import FlameIcon from "@/assets/icons/flame-icon.svg?react";
import Hourglass from "@/assets/icons/hourglass.svg?react";
import IconType from "@/constants/icon-type";

const SwitchIcon = ({
  icon,
  className,
}: {
  icon: string;
  className: string;
}) => {
  let selectedIcon = null;

  switch (icon) {
    case IconType.FLAME:
      selectedIcon = <FlameIcon className={className} />;
      break;
    case IconType.HOURGLASS:
      selectedIcon = <Hourglass className={className} />;
      break;
    default:
      selectedIcon = <div>No matching icon</div>;
  }

  return selectedIcon;
};

export default SwitchIcon;
