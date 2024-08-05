import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import WeaponsTable from '../components/WeaponsTable';
import WeaponFilters from '../components/WeaponFilters';
import WeaponStats from '../components/WeaponStats';

const Index = () => {
  const [filters, setFilters] = useState({});
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const { data: weapons, isLoading, error } = useQuery({
    queryKey: ['weapons', filters],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/api/weapons', { params: filters });
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center mt-8">Loading weapons...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error loading weapons: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Destiny 2 Weapon Analyzer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <WeaponFilters setFilters={setFilters} />
          <WeaponsTable weapons={weapons} setSelectedWeapon={setSelectedWeapon} />
        </div>
        <div>
          <WeaponStats weapon={selectedWeapon} />
        </div>
      </div>
    </div>
  );
};

export default Index;
