import { BiSolidCheckCircle } from 'react-icons/bi';
import Button from '../Button/Button';
import License1 from '@/assets/images/license-bg.png';
import License2 from '@/assets/images/license-key.png';

const PrivacyPolicy = () => {
  return (
    <div className='pb-[83px]'>
      <div className='tab:flex tab:gap-12 items-center'>
        <div className='tab:w-1/2  tab:bg-purple-lens bg-7 bg-104 tab:bg-blend-hard-light'>
          <div className='flex justify-center gap-2.5 tab:gap-4 flex-col items-center text-center tab:items-start tab:text-start'>
            <h2 className='text-xl font-bold leading-[26.6px] tab:text-[2rem]'>
              <span>Privacy Policy and</span>
              <br />
              <span className='text-purple-50'>Terms</span>
            </h2>
            <p className='text-sm text-[rgb(255_255_255/0.75)]'>
              Last updated on September 12, 2023
            </p>
          </div>
          {/* Policies */}
          <div className='text-center mt-7 tab:text-left'>
            <p className='text-sm mb-[30px] tab:mb-16'>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className='border border-purple-50 rounded-[5px] px-3.5 tab:px-10 xl:px-[72px] py-11 tab:py-14 xl:py-[59px]'>
              <p className='mb-5 tab:mb-6 text-xs tab:text-sm'>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className='flex flex-col gap-6 mb-10 text-left'>
                <div>
                  <h3 className='text-[0.8125rem] text-purple-50 font-bold'>
                    Licensing Policy
                  </h3>
                  <p className='text-xs font-bold'>
                    Here are terms of our Standard License:
                  </p>
                </div>
                <div className='flex gap-3.5'>
                  <BiSolidCheckCircle color='#2DE100' size={17} />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className='flex gap-3.5'>
                  <BiSolidCheckCircle color='#2DE100' size={17} />
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
              <div className='text-center'>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative mt-36 tab:mt-0 mx-auto w-1/2'>
          <div className='absolute -top-24 max-w-[249px] mx-auto tab:max-w-[530px]'>
            <img src={License1} alt='' />
          </div>
          <div className='max-w-[262px] tab:max-w-[559px]'>
            <img src={License2} alt='license' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
