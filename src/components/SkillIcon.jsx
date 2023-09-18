import { Icon } from "@iconify/react";
import "../styles/components/SkillIcon.scss";

function SkillIcon({ name, icon, bgColor }) {
  return (
    <div className={`skill`}>
      <span className="icon" style={{ backgroundColor: bgColor }}>
        <Icon icon={icon} className="w-[50px]" />
      </span>
      <p className="name text-dark dark:text-light">{name}</p>
    </div>
  );
}

export default SkillIcon;
