import "../style.css"
import mainIcon from "../assets/RabbitHole_v2.png"

export default function About() {
  return (    
    <div className="about">
      <img src={mainIcon} alt="mainIcon" className="about-icon" />
      <p className="about-text">
        このイベントでは、「深みにハマる」という意味を持つ「Rabbit Hole（ウサギの穴）」をテーマに掲げています。一度足を踏み入れたら抜け出せないような“沼”にハマり、そこから抜け出すどころかさらに深く掘り進めてしまった人たちと、さらなる深みにハマるために企画しました。情熱を注ぎ続ける姿は他人事ながらなぜか共感し、応援したくなるもの。彼らを見ているうちに、気づけばあなた自身もその”沼”の入り口に立っているかもしれません。
      </p>
    </div>
  );
}