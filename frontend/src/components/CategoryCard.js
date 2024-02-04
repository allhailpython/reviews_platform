import Image from 'next/image';

export default function CategoryCard({
  image,
  date,
  CardTitle,
  CardDescription,
}) {
  return (
    <>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-10 w-full'>
          <div className='mb-8 overflow-hidden rounded'>
            <Image
              src={image}
              alt=''
              width='200'
              height='200'
              className='w-full'
            />
          </div>
          <div>
            {date && (
              <span className='mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-black'>
                {date}
              </span>
            )}
            <h3>
              <a
                href='/#'
                className='mb-4 inline-block text-xl font-semibold text-dark sm:text-2xl lg:text-xl xl:text-2xl'
              >
                {CardTitle}
              </a>
            </h3>
            <p className='text-base text-body-color text-dark'>
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
