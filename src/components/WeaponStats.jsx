import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const WeaponStats = ({ weapon }) => {
  if (!weapon) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weapon Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Select a weapon to view its stats</p>
        </CardContent>
      </Card>
    );
  }

  const stats = [
    { name: 'Impact', value: weapon.impact },
    { name: 'Range', value: weapon.range },
    { name: 'Stability', value: weapon.stability },
    { name: 'Handling', value: weapon.handling },
    { name: 'Reload', value: weapon.reload },
    { name: 'Aim Assist', value: weapon.aa },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{weapon.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p><strong>Type:</strong> {weapon.weapon_type}</p>
            <p><strong>Rarity:</strong> {weapon.rarity}</p>
            <p><strong>Damage Type:</strong> {weapon.damage_type}</p>
            <p><strong>Ammo Type:</strong> {weapon.ammo_type}</p>
            <p><strong>Craftable:</strong> {weapon.is_craftable ? 'Yes' : 'No'}</p>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeaponStats;
