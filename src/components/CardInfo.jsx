import { MoreVertical } from "lucide-react";
import styles from "../styles/Home.module.css";
import { differenceInHours } from "date-fns";

function tsagiinZoruu(postedTime) {
  const today = new Date();
  const tsag = differenceInHours(today, postedTime);
  const isItDay = tsag >= 24;

  if (isItDay) {
    const dayDiff = `${tsag / 24}`.split(".")[0];
    if (dayDiff >= 31) {
      const monthDiff = `${dayDiff / 30}`.split(".")[0];
      if (monthDiff >= 12) {
        const yearDiff = `${monthDiff / 12}`.split(".")[0];
        return `${yearDiff} ${yearDiff === "1" ? "year ago" : "years ago"}`;
      }
      return `${monthDiff} ${monthDiff === "1" ? "month ago" : "months ago"}`;
    }
    return `${dayDiff} ${dayDiff === "1" ? "day ago" : "days ago"}`;
  }

  return `${tsag} ${tsag === 1 ? "hour ago" : "hours ago"}`;
}

export default function CardInfo({ profilepic, title, subsname, views, time }) {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.icon}>
        <MoreVertical size={18} />
      </div>
      <img src={profilepic} className={styles.profile} alt="profile" />
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subs}>
          <span className={styles.subHover}>{subsname}</span>
        </p>
        <p className={styles.details}>
          {views} views • {tsagiinZoruu(new Date(time))}
        </p>
      </div>
    </div>
  );
}
