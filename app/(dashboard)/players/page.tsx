'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlayerProfile from '@/components/PlayerProfile';
import PlayerPerformance from '@/components/PlayerPerformance';
import { Player } from '@/backend/teams/domain/Player';


export default async function PlayerPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  // const { products, newOffset, totalProducts } = await getProducts(
  //   search,
  //   Number(offset)
  // );

  return (
    <div>
      <PlayerProfile />
      <PlayerPerformance /> 
    </div>
  );
}
