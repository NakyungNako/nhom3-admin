import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    PermIdentity,
    Storefront,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side">
        <div className="side-wrap">
        <div className="side-menu">
          <h3 className="side-title">Dashboard</h3>
          <ul className="side-list">
            <Link to="/" className="link">
              <li className="side-listItem">
                <LineStyle className="side-icon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="side-menu">
          <h3 className="side-title">Quick Menu</h3>
          <ul className="side-list">
              <Link to="/users" className="link">
                <li className="side-listItem">
                <PermIdentity className="side-icon" />
                Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="side-listItem">
                  <Storefront className="side-icon" />
                  Products
                </li>
              </Link>
            <li className="side-listItem">
              <BarChart className="side-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="side-menu">
          <h3 className="side-title">Notifications</h3>
          <ul className="side-list">
            <li className="side-listItem">
              <MailOutline className="side-icon" />
              Mail
            </li>
            <li className="side-listItem">
              <DynamicFeed className="side-icon" />
              Feedback
            </li>
            <li className="side-listItem">
              <ChatBubbleOutline className="side-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="side-menu">
          <h3 className="side-title">Staff</h3>
          <ul className="side-list">
            <li className="side-listItem">
              <WorkOutline className="side-icon" />
              Manage
            </li>
            <li className="side-listItem">
              <Timeline className="side-icon" />
              Analytics
            </li>
            <li className="side-listItem">
              <Report className="side-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
