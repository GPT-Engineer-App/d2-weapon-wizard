import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const WeaponFilters = ({ setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Search by name"
          onChange={(e) => handleFilterChange('name', e.target.value)}
          className="w-full sm:w-auto"
        />
        <Select onValueChange={(value) => handleFilterChange('weapon_type', value)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Weapon Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Auto Rifle">Auto Rifle</SelectItem>
            <SelectItem value="Hand Cannon">Hand Cannon</SelectItem>
            <SelectItem value="Pulse Rifle">Pulse Rifle</SelectItem>
            <SelectItem value="Scout Rifle">Scout Rifle</SelectItem>
            <SelectItem value="Fusion Rifle">Fusion Rifle</SelectItem>
            <SelectItem value="Sniper Rifle">Sniper Rifle</SelectItem>
            <SelectItem value="Shotgun">Shotgun</SelectItem>
            <SelectItem value="Submachine Gun">Submachine Gun</SelectItem>
            <SelectItem value="Rocket Launcher">Rocket Launcher</SelectItem>
            <SelectItem value="Sword">Sword</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange('rarity', value)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Rarity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Common">Common</SelectItem>
            <SelectItem value="Uncommon">Uncommon</SelectItem>
            <SelectItem value="Rare">Rare</SelectItem>
            <SelectItem value="Legendary">Legendary</SelectItem>
            <SelectItem value="Exotic">Exotic</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilterChange('damage_type', value)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Damage Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Kinetic">Kinetic</SelectItem>
            <SelectItem value="Arc">Arc</SelectItem>
            <SelectItem value="Solar">Solar</SelectItem>
            <SelectItem value="Void">Void</SelectItem>
            <SelectItem value="Stasis">Stasis</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={() => setFilters({})}
          variant="outline"
          className="w-full sm:w-auto"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default WeaponFilters;
