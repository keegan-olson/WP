import Gallery from "@/components/gallery";

export default function Portfolio({ firstImage }) {
  return (
    <>
  <div className="flex-col flex-1">
      <h1 className='text-white font-permanent-marker text-center text-[4rem] font-bold bg-gray-800'>
        Our Work
      </h1>
    <Gallery/>
    </div>
    </>
  );
}
