import type { NextPage } from 'next';
import Feed from '@/components/Feed';

const Home: NextPage = () => {
  return <Feed />;
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Home',
    },
  };
}
