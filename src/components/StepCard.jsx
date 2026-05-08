import "./StepCard.css";

export default function StepCard({ order, title, content, accent }) {
  return (
    <div
      className="step-card"
      style={accent ? { "--stepAccent": accent } : undefined}
    >
      <div className="step-card-header">
        <div className="step-card-circle">{order}</div>
        {title && <div className="step-card-title">{title}</div>}
      </div>
      {content && (
        <div className="step-card-content">{content}</div>
      )}
    </div>
  );
}
