import './GameStats.css';

export default function GameStats({ level, xpInCurrentLevel, xpPerLevel, achievementCount, totalAchievements }) {
  return (
    <div className="game-stats">
      <div className="game-stats__item">
        <span className="game-stats__label">Level:</span>
        <span className="game-stats__value">{level}</span>
      </div>
      <div className="game-stats__item">
        <span className="game-stats__label">XP:</span>
        <span className="game-stats__value">{xpInCurrentLevel}/{xpPerLevel}</span>
      </div>
      <div className="game-stats__item">
        <span className="game-stats__label">Achievements:</span>
        <span className="game-stats__value">{achievementCount}/{totalAchievements}</span>
      </div>
    </div>
  );
}
