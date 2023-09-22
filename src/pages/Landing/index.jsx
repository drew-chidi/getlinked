import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Home/Introduction';
import Guidelines from '@/components/Home/Guidelines';
import JudgingCriteria from '@/components/Home/JudgingCriteria';
import Faq from '@/components/Home/Faq';
import Timeline from '@/components/Home/Timeline';
import Prizes from '@/components/Home/Prizes';
import PartnersAndSponsors from '@/components/Home/PartnersAndSponsors';
import PrivacyPolicy from '@/components/Home/PrivacyPolicy';
import Divider from '@/components/Divider/Divider';

const index = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <Divider className={'mb-7 tab:mb-[62px]'} />
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <Introduction />
      </div>
      <Divider className={'mt-16'} />
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <Guidelines />
      </div>
      <Divider className={'mb-[74px]'} />
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <JudgingCriteria />
      </div>
      <Divider className={'mb-[60px] mt-[60px]'} />
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <Faq />
      </div>
      <Divider className={'mb-[80px] mt-[48px]'} />
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <Timeline />
      </div>
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <Prizes />
      </div>
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <PartnersAndSponsors />
      </div>
      <div className='px-7 sm:px-14 md:px-16 lg:px-24 2xl:px-28 '>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default index;
