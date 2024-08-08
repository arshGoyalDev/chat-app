const ImageUpload = ({ pic, setPic, completeProfile }) => {
  return (
    <div className="w-[85%] md:w-[450px] py-6 md:pt-8 md:pb-6 px-5 md:px-8 bg-white dark:bg-zinc-850 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-none">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          completeProfile();
        }}
      >
        <div className="bg-gray-50 dark:bg-zinc-800 p-6 relative rounded-xl cursor-pointer">
          <input
            type="file"
            id="pic"
            className="w-full h-full top-0 left-0 absolute opacity-0 cursor-pointer"
            onChange={(e) => {
              setPic(e.target.files[0]);
            }}
          />
          <div className="flex gap-1 items-center z-100 cursor-pointer">
            <label htmlFor="pic" className="text-primary cursor-pointer">
              Click here
            </label>
            <p className="cursor-pointer">to upload files</p>
          </div>
        </div>

        <div className="mt-5 border-4 border-primary rounded-xl overflow-hidden">
          <img
            src={URL.createObjectURL(pic)}
            alt="profile-pic"
            className="w-full"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="btn-primary py-2 px-4 rounded-md ml-auto">
            <span className="font-semibold text-white pt-0.5">
              Complete Profile
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default ImageUpload;
