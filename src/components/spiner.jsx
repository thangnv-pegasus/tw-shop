import "~/css/spiner.scss";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center mt-28">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
