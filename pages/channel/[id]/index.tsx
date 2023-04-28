import { NextPage } from 'next';
import ChannelDetail from '@/components/ChannelDetail';

const Channel: NextPage = () => {
  return <ChannelDetail />;
};

export default Channel;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Channel Detail',
    },
  };
}
