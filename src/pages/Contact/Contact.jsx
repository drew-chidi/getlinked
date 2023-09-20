import ContactForm from '@/components/Forms/ContactForm';

const Contact = () => {
  return (
    <div>
      <h1 className='text-purple-50 font-semibold text-xl'>
        Questions or need assistance? <br />
        Let us know about it
      </h1>
      <p className='text-xs'>
        Email us below to any question related to our event
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
