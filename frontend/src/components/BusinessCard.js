import Image from 'next/image';
import Review from './Review';

export default function BusinessCard({ image, CardTitle, CardDescription }) {
  return (
    <>
      <div className='row mb-5'>
        <ul className='list-group'>
          <li className='list-group-item'>Business Name: </li>
          <li className='list-group-item'>$$$ </li>
          <li className='list-group-item'>Website: </li>
          <li className='list-group-item'>Phone: </li>
          <li className='list-group-item'>Address: </li>
          <li className='list-group-item'>Business Hours: </li>
          <li className='list-group-item'>Description: </li>
        </ul>
      </div>
      <div className='row mb-5'>
        <Review />
      </div>
    </>
  );
}
