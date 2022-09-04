import setAsMainApp from 'utils/getStaticProps/setAsMainApp';

export async function getStaticProps() {
  return setAsMainApp();
}

export default function Credits() {
  return (
    <ul>
      <li>
        Photo by{' '}
        <a href="https://www.pexels.com/photo/delighted-female-friends-with-laptop-and-smartphone-4353618/">
          Ketut Subiyanto
        </a>
      </li>
    </ul>
  );
}
