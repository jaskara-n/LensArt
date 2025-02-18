import { SocialIcon } from "react-social-icons";
import Link from "next/link";
export function Footer() {
  return (
    <footer
      className=" text-white  p-16 flex flex-row justify-between"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex justify-start  pb-6 gap-4">
        <SocialIcon
          url="https://www.instagram.com"
          href="https://www.instagram.com/lensart"
        />

        <SocialIcon
          url="https://www.facebook.com"
          href="https://www.facebook.com/lensart"
        />

        <SocialIcon
          url="https://www.linkedin.com"
          href="https://www.linkedin.com/in/lensart"
        />

        <SocialIcon
          url="https://www.twitter.com"
          href="https://www.twitter.com/lensart"
        />
      </div>
      <div>
        <div>
          Contact Us Have questions or need assistance? <br /> Reach out to our
          team anytime at <br /> support@yourcompany.com.
        </div>
      </div>
    </footer>
  );
}
