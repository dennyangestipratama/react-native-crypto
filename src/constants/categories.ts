import { CategoryListInterface, PickerOption } from '../interfaces/interfaces';

export const categories: CategoryListInterface[] = [
  {
    title: 'New',
    icon: 'dingding',
  },
  {
    title: 'DeFi',
    icon: 'database',
  },
  {
    title: 'NFT/Gaming',
    icon: 'tablet1',
  },
  {
    title: 'CEX',
    icon: 'linechart',
  },
  {
    title: 'DEX',
    icon: 'arrowsalt',
  },
  {
    title: 'Layer-1',
    icon: 'hdd',
  },
  {
    title: 'Infrastructure',
    icon: 'database',
  },
  {
    title: 'Lending',
    icon: 'calendar',
  },
  {
    title: 'Layer-2',
    icon: 'hdd',
  },
  {
    title: 'Ekosistem Stablecoin',
    icon: 'piechart',
  },
];

export const periodOptions: PickerOption[] = [
  { label: 'Default', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' },
];
