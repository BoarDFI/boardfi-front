import IconType from "@/constants/icon-type";
import FlameIcon from "@/assets/icons/flame-icon.svg?react";
import HourglassIcon from "@/assets/icons/hourglass.svg?react";

const Icon = ({
  type,
  className,
  ...restProps
}: {
  type: string;
  className: string;
}) => {
  switch (type) {
    case IconType.FLAME:
      return <FlameIcon className={className} {...restProps} />;
    case IconType.HOURGLASS:
      return <HourglassIcon className={className} {...restProps} />;
    default:
      return null;
  }
};

export default Icon;
