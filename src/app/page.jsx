export default function Home() {
  return (
    <div className="bg-gray-100 w-fit rounded-[40px]">
      <div className="p-2 w-fit">
        <img src="/profile.png" className="w-full h-[320px]" alt="profile" />
        <div className="py-4 px-7">
          <h1 className="text-2xl font-medium">Sophie Bennett</h1>
          <p className="w-[224px]">
            Product Designer who focuses on simplicity & usability.{" "}
          </p>
        </div>

        <div className="flex justify-between p-6">
          <div className="flex items-center gap-1">
            <img className="h-4.5 w-4.5" src="file.svg" alt="file" />
            <div className="">312</div>
          </div>
          <div className="flex items-center gap-1">
            <img className="h-4.5 w-4.5" src="globe.svg" alt="globe" />
            <div className="">48</div>
          </div>

          <button className="bg-gray-200 rounded-4xl  w-27.25 h-11">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
}
