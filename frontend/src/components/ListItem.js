export default function ListItem({ children, NavLink }) {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className='flex py-2 text-base font-medium text-body-color text-dark lg:mr-12 lg:inline-flex'
        >
          {children}
        </a>
      </li>
    </>
  );
}
