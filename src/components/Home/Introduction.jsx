import Idea from '@/assets/images/the-big-idea.png';

const Introduction = () => {
  return (
    <div className=''>
      <div className='w-[68%] mx-auto'>
        <img src={Idea} alt='the big idea' />
      </div>
      <div className='flex justify-center gap-2 lg:gap-4 flex-col items-center text-center mt-[58px]'>
        <h2 className='text-xl font-bold leading-[26.6px]'>
          <span>Introduction to getlinked</span>
          <br />
          <span className='text-purple-50'>tech Hackathon 1.0</span>
        </h2>
        <p className='text-sm'>{`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!`}</p>
      </div>
    </div>
  );
};

export default Introduction;
