import { BiSolidCheckCircle } from 'react-icons/bi';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className=''>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px]'>
            <span>Privacy Policy and</span>
            <br />
            <span className='text-purple-50'>Terms</span>
          </h2>
          <p className='text-sm'>Last updated on September 12, 2023</p>
        </div>
        {/* Policies */}
        <div>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div>
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className='flex flex-col gap-6'>
              <div>
                <h3>Licensing Policy</h3>
                <p>Here are terms of our Standard License:</p>
              </div>
              <div>
                <BiSolidCheckCircle color='#2DE100' size={17} />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div>
                <BiSolidCheckCircle color='#2DE100' size={17} />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
          </div>
          {/* Button Here */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
