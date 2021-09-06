import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

interface SocialDetail {
  name: any;
  url: string;
}

interface SocialProps {
  social: SocialDetail;
}

const SocialButton = (props: SocialProps) => {
  const { social } = props;

  return (
    <li className="mx-auto md:mx-0 md:mr-6">
      <button
        className="dark:text-white"
        onClick={() => window.open(social.url, "_blank")}
      >
        <FontAwesomeIcon
          icon={["fab", social.name]}
          height="48"
          className="transform hover:-translate-y-1"
        />
      </button>
    </li>
  );
};

export default SocialButton;
