import contact from "../assets/contact/contact.png";
import ContactCard from "../components/contact/ContactCard";
import ContactForm from "../components/contact/ContactForm";
import Social from "../components/main/Social";

const Contact = () => {
  return (
    <main>
      <section
        className="flex justify-center items-center h-[573px]"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="text-white flex flex-col items-center gap-10 mt-24">
          <h1 className="text-5xl font-bold">
            CONTACT <span className="font-normal">US</span>
          </h1>
          <p className="text-xl max-w-[70%] text-center">
            We offer commercial and domestic flooring at great prices. Contact
            us today for a free estimate.
          </p>
        </div>
      </section>
      <ContactCard />
      <ContactForm />
      <Social />
    </main>
  );
};

export default Contact;
