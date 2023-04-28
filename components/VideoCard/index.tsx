import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '@/utils/constants';
import Link from 'next/link';

const VideoCard = ({ video, snippet }: any) => {
  return (
    <Card sx={{ width: { xs: '330px', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link href={video.id.videoId ? `/video/${video.id.videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} sx={{ width: { xs: '330px', sm: '358px' }, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link href={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 70)}
          </Typography>
        </Link>
        <Link href={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
