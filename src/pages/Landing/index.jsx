import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Home/Introduction';
import Guidelines from '@/components/Home/Guidelines';
import JudgingCriteria from '@/components/Home/JudgingCriteria';
import Faq from '@/components/Home/Faq';
import Timeline from '@/components/Home/Timeline';

const index = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='px-7'>
        <Introduction />
      </div>
      <div className='px-7'>
        <Guidelines />
      </div>
      <div className='px-7'>
        <JudgingCriteria />
      </div>
      <div className='px-7'>
        <Faq />
      </div>
      <div className='px-7'>
        <Timeline />
      </div>
    </div>
  );
};

export default index;
