import { IconEnum } from "@/enums";
import FlameIcon from "@/assets/icons/flame-icon.svg?react";
import HourglassIcon from "@/assets/icons/hourglass.svg?react";

const IconCard = ({
  type,
  className,
  ...restProps
}: {
  type: string;
  className: string;
}) => {
  const { FLAME, HOURGLASS } = IconEnum;
  switch (type) {
    case FLAME:
      return <FlameIcon className={className} {...restProps} />;
    case HOURGLASS:
      return <HourglassIcon className={className} {...restProps} />;
    default:
      return null;
  }
};

export default IconCard;
