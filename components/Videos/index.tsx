import { Box, Stack } from '@mui/material';
import Loader from '@/components/Loader';
// import ChannelCard from '@/components/ChannelCard';
import VideoCard from '@/components/VideoCard';

const Videos = ({ videos, direction, justifyContent }: any) => {
  return (
    <>
      {videos?.length < 1 ? (
        <Loader />
      ) : (
        <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent={justifyContent ? justifyContent : 'start'} alignItems="start" gap={2}>
          {videos?.map((video: any, index: number) => (
            <Box key={index}>
              {video.id.videoId && <VideoCard video={video} snippet={video.snippet} />}
              {/* {video.id.channelId && <ChannelCard channelDetail={video} />} */}
            </Box>
          ))}
        </Stack>
      )}
    </>
  );
};

export default Videos;
