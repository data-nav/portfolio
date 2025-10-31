import ContactForm from '../ContactForm';

export default function ContactFormExample() {
  return (
    <div className="p-8 bg-background">
      <ContactForm
        email="navkarancad@gmail.com"
        phone="+1 (514) 804-1045"
        location="Montréal, Canada"
      />
    </div>
  );
}
