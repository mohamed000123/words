export const ProgressBar = ({ progress }) => {
  return (
    <div className="progress mt-5">
      <div
        className="progress-bar "
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
