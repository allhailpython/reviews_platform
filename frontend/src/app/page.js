import React from 'react';
import CategoryCard from '@/components/CategoryCard';

export default function Home() {
  return (
    <>
      <section className='bg-white pb-10 pt-20 lg:pb-20 lg:pt-[20px]'>
        <div className='w-full container mx-auto px-6'>
          <div className='-mx-4 flex flex-wrap'>
            <CategoryCard
              date='Dec 22, 2023'
              CardTitle='Meet AutoManage, the best AI management tools'
              CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              image='https://i.ibb.co/Cnwd4q6/image-01.jpg'
            />
            <CategoryCard
              date='Dec 22, 2023'
              CardTitle='Meet AutoManage, the best AI management tools'
              CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              image='https://i.ibb.co/Y23YC07/image-02.jpg'
            />
            <CategoryCard
              date='Dec 22, 2023'
              CardTitle='Meet AutoManage, the best AI management tools'
              CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              image='https://i.ibb.co/7jdcnwn/image-03.jpg'
            />
          </div>
        </div>
      </section>
    </>
  );
}
