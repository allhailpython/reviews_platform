import CategoryCard from '@/components/CategoryCard';
import axios from 'axios';

export default async function Categories() {
  const categories = await getCategories();
  return (
    <div className='row mb-5'>
      {categories.map((category) => (
        <CategoryCard
          key={category.order}
          CardTitle={category.name}
          CardDescription={`See all ${category.name} businesses`}
        />
      ))}
    </div>
  );
}

async function getCategories() {
  const { data } = await axios.get('http://127.0.0.1:8000/api/categories/');
  return data.results;
}
