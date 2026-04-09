import Image from "next/image";

export default function BannerPartner() {
  const partnerImages = [
    { src: "/home/banner-partner/ico.png" },
    { src: "/home/banner-partner/cyber.png" },
    { src: "/home/banner-partner/bluedrop.png" },
    { src: "/home/banner-partner/ssl.jpg" },
    { src: "/home/banner-partner/aws.png" },
    {
      src: "/home/banner-partner/stripei.png",
      href: "https://climate.stripe.com/giN6qL",
    },
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
          {partnerImages.map((partner, index) => (
            <div key={index} className='mx-4 md:mx-6 my-3'>
              {partner.href ? (
                <a
                  href={partner.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`Open partner link for Partner ${index + 1}`}>
                  <Image
                    src={partner.src}
                    alt={`Partner ${index + 1}`}
                    width={140}
                    height={72}
                    className='w-40 h-22 object-contain opacity-85'
                  />
                </a>
              ) : (
                <Image
                  src={partner.src}
                  alt={`Partner ${index + 1}`}
                  width={140}
                  height={72}
                  className='w-40 h-22 object-contain opacity-85'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
