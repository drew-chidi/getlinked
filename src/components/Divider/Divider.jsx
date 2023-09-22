const Divider = ({ className }) => {
  return (
    <div>
      <hr
        className={`${
          className && className
        } h-[1px] border-t-0 bg-[rgba(255_255_255/0.18)] opacity-100`}
      />
    </div>
  );
};

export default Divider;
