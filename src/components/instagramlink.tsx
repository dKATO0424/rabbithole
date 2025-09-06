import instagramIcon from "../assets/Instagram_icon.png"
import "./components.scss"

type InstagramLinkProps = {
  url: string;
}

export default function InstagramLink({ url }: InstagramLinkProps) {
  return (
    <a
      className="instagram-link"
      href={url}
      target="_black"
      rel="noopener noreferrer"
    >
      <img src={instagramIcon} alt="Instagram" />
    </a>
  );
}