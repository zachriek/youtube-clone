import { Stack } from '@mui/material';
import { categories } from '@/utils/constants';

interface IProps {
  selectedCategory: string;
  setSelectedCategory: any;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: IProps) => {
  return (
    <Stack direction="row" sx={{ overflowY: 'auto', height: { xs: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
      {categories.map((category: any, index: number) => (
        <button key={index} className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory ? '#FC1503' : '', color: 'white' }}>
          <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
