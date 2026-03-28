import Image from "next/image";

export default function BannerPartner() {
  const partnerImages = [
    "/home/banner-partner/ico.png",
    "/home/banner-partner/cyber.png",
    "/home/banner-partner/bluedrop.png",
    "/home/banner-partner/ssl.jpg",
    "/home/banner-partner/aws.png",
  ];

  return (
    <div className='w-full border-b border-border'>
      <div className='bg-background'>
        <p className='text-white text-center py-3'>
          Accredited Partners & Industry Standards
        </p>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-45 py-3 overflow-x-auto'>
        <div className='flex flex-nowrap justify-between items-center min-w-max'>
          {partnerImages.map((src, index) => (
            <div key={index} className='mx-4 md:mx-6 my-3'>
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={140}
                height={72}
                className='w-40 h-22 object-contain opacity-85'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
