import { useState, useEffect } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import Videos from '@/components/Videos';
import { fetchApi } from '@/utils/fetchApi';

const Feed = () => {
  const [videos, setVideos] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('New');

  useEffect(() => {
    fetchApi(`/search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ height: { xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright © {new Date().getFullYear()} JSM Media
        </Typography>
      </Box>

      <Container>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={5} sx={{ color: 'white' }}>
            {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Container>
    </Stack>
  );
};

export default Feed;
