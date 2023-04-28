import { NextPage } from 'next';
import SearchFeed from '@/components/SearchFeed';

const SearchFeedPage: NextPage = () => {
  return <SearchFeed />;
};

export default SearchFeedPage;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Search Feed',
    },
  };
}
