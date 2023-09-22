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
      <div className='px-7'>
        <Introduction />
      </div>
      <Divider className={'mt-16'} />
      <div className='px-7'>
        <Guidelines />
      </div>
      <Divider className={'mb-[74px]'} />
      <div className='px-7'>
        <JudgingCriteria />
      </div>
      <Divider className={'mb-[60px] mt-[60px]'} />
      <div className='px-7'>
        <Faq />
      </div>
      <Divider className={'mb-[80px] mt-[48px]'} />
      <div className='px-7'>
        <Timeline />
      </div>
      <div className='px-7'>
        <Prizes />
      </div>
      <div className='px-7'>
        <PartnersAndSponsors />
      </div>
      <div className='px-7'>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default index;
