import { Link } from "react-router-dom";
import "./Pages.scss"
import Vol1 from "../assets/vol1.png"
import Vol2 from "../assets/RabbitHole_v2.png"
import InstagramLink from "../components/instagramlink";

export default function History() {
  return (
    <div>
      <div className="main-heading">
        <div className="main-h1">Event History</div>
      </div>
      <p>これまでのイベントを紹介します。</p>
      <hr className="divider" />
      <div className="eventhistory">
        <p className="history-text">
          第二回<br />
          Rabbit Hole Volume.2<br />
          2025 / 08 / 24<br />
          <InstagramLink url="https://www.instagram.com/rabbithole0x0/reel/DNsxQn55q4q/" />
        </p>
        <img src={Vol2} alt="Rabbit Hole Vol.2" className="history-icon" />
      </div>
      <hr className="divider" />
      <div className="eventhistory">
        <img src={Vol1} alt="Rabbit Hole Vol.1" className="history-icon" />
        <p className="history-text">
          記念すべき第1回開催<br />
          Rabbit Hole Volume.1<br />
          2025 / 02 / 24<br />
          <InstagramLink url="https://www.instagram.com/rabbithole0x0/p/DLhlXeyx0m_/" />
        </p>
      </div>
    </div>
  );
}