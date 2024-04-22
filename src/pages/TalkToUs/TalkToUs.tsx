import { useLocation } from "react-router-dom";
import ContactsSection from "./Sections/Contacts/Contacts";
import SignUpSection from "./Sections/SignUp/SignUp";
import { useEffect } from "react";

const TalkToUsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <>
      <SignUpSection />
      <ContactsSection />
    </>
  );
};

export default TalkToUsPage;
