import Judges from '@/assets/images/judges.png';
import { keyAttributes } from '../../content';

const JudgingCriteria = () => {
  return (
    <div>
      <div className=''>
        <div className='w-[75%] mx-auto'>
          <img src={Judges} alt='rules and guidelines' />
        </div>
        <div className='flex justify-center gap-2.5 lg:gap-4 flex-col items-center text-center mt-[58px]'>
          <h2 className='text-xl font-bold leading-[26.6px]'>
            <span>Judging Criteria</span>
            <br />
            <span className='text-purple-50'>Key attributes</span>
          </h2>
          <div className='flex flex-col gap-5'>
            {keyAttributes.map(({ id, attribute, description }) => (
              <div key={id} className='text-[0.8125rem]'>
                <span className='text-[#FF26B9]'>{attribute}</span>
                <span>{description}</span>
              </div>
            ))}
          </div>
          {/* Button Here */}
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteria;
