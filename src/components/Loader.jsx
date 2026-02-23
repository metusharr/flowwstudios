const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <div className="flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-white text-lg tracking-wider">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loader;