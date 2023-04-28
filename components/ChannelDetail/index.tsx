import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Videos from '@/components/Videos';
import ChannelCard from '@/components/ChannelCard';
import { fetchApi } from '@/utils/fetchApi';
import { useRouter } from 'next/router';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<any>({});
  const [videos, setVideos] = useState<any>([]);

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;

    const fetchResults = () => {
      fetchApi(`/channels?part=snippet&id=${router.query.id}`).then((data) => setChannelDetail(data?.items[0]));

      fetchApi(`/search?channelId=${router.query.id}&part=snippet%2Cid&order=date`).then((data) => setVideos(data?.items));
    };

    fetchResults();
  }, [router.query.id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Container>
        <Box p={2} display="flex">
          <Videos videos={videos} justifyContent="center" />
        </Box>
      </Container>
    </Box>
  );
};

export default ChannelDetail;
