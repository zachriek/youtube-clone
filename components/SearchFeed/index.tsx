import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Container } from '@mui/material';
import { fetchApi } from '@/utils/fetchApi';
import Videos from '@/components/Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.searchTerm) return;

    const fetchResult = () => {
      fetchApi(`/search?part=snippet&q=${router.query.searchTerm}`).then((data) => setVideos(data.items));
    };

    fetchResult();
  }, [router.query.searchTerm]);

  return (
    <Container>
      <Box p={2} minHeight="95vh">
        <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: '100px' }}>
          Search Results for <span style={{ color: '#FC1503' }}>{router.query.searchTerm}</span> videos
        </Typography>
        <Box display="flex">
          <Box sx={{ mr: { sm: '100px' } }} />
          {<Videos videos={videos} />}
        </Box>
      </Box>
    </Container>
  );
};

export default SearchFeed;
