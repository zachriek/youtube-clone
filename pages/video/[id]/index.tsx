import VideoDetail from '@/components/VideoDetail';
import { NextPage } from 'next';

const Video: NextPage = () => {
  return <VideoDetail />;
};

export default Video;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Video Detail',
    },
  };
}
