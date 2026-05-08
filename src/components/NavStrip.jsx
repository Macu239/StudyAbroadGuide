import Link from "next/link";
import "./NavStrip.css";

export default function NavStrip({ items }) {
  return (
    <div className="nav-strip">
      {items.map((item) =>
        item.external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-strip-card"
          >
            <span className="nav-strip-icon">{item.icon}</span>
            <span className="nav-strip-body">
              <span className="nav-strip-title">{item.title}</span>
              <span className="nav-strip-desc">{item.description}</span>
            </span>
            <span className="nav-strip-arrow">→</span>
          </a>
        ) : (
          <Link key={item.href} href={item.href} className="nav-strip-card">
            <span className="nav-strip-icon">{item.icon}</span>
            <span className="nav-strip-body">
              <span className="nav-strip-title">{item.title}</span>
              <span className="nav-strip-desc">{item.description}</span>
            </span>
            <span className="nav-strip-arrow">→</span>
          </Link>
        )
      )}
    </div>
  );
}
