import { Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { logo } from '@/utils/constants';
import SearchBar from '@/components/SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={logo} alt="logo" sizes="100vw" width={0} height={0} style={{ width: 'auto', height: 45 }} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
