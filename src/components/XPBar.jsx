import './XPBar.css';

export default function XPBar({ progress }) {
  return (
    <div className="xp-bar" aria-hidden="true">
      <div className="xp-bar__fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
