import { OverviewContainer } from './overview/overview';
import { AnalysisContainer } from './analysis/analysis';

export const routes = [
  {
    path: '/',
    component: OverviewContainer,
    title: 'Market Overview',
  },
  {
    path: '/liquidity',
    component: AnalysisContainer,
    title: 'Liquidity Analysis',
  },
]
