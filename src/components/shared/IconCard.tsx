import { IconEnum } from "@/enums";
import FlameIcon from "@/assets/icons/flame-icon.svg?react";
import HourglassIcon from "@/assets/icons/hourglass.svg?react";

type Props = {
  type: string;
  className?: string;
};
const IconCard = ({ type, className, ...restProps }: Props) => {
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
