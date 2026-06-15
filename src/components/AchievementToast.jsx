import './AchievementToast.css';

export default function AchievementToast({ achievement }) {
  return (
    <div className={`achievement-toast ${achievement ? 'achievement-toast--show' : ''}`}>
      {achievement && (
        <div className="achievement-toast__inner">
          <i className={`${achievement.icon} achievement-toast__icon`} />
          <div>
            <div className="achievement-toast__title">
              🏆 {achievement.title}
            </div>
            <div className="achievement-toast__desc">{achievement.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}
