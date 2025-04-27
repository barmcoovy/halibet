import "../styles/ProgressBar.css";
type ProgressBarProps = {
  progress: number;
}; // e.g., "50%" or "100%"
const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-bar-container">
      <span className="step">1/4</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: progress + "%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
