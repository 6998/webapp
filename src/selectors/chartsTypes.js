import { createSelector } from "reselect";

const chartsTypesEntity = state => state.chartsTypes;

export const chartTypes = createSelector(
  chartsTypesEntity,
  entity => entity.types
);

export const isFetchChartTypes = createSelector(
  chartsTypesEntity,
  entity => entity.isFetch
);
