export default function CategoryCard({ CardTitle, CardDescription }) {
  return (
    <div className='col-sm-6 col-lg-4 mb-5'>
      <div className='card' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>{CardTitle}</h5>
          <p className='card-text'>{CardDescription}</p>
          <a href='#' className='card-link'>
            Card link
          </a>
          <a href='#' className='card-link'>
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}
