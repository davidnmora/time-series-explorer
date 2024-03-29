export const dataConfig = {
  ABBREV_STATE_NAME: 'MI',
  MRLI_TIME_SERIES_TABLE: 'mrli_county_time_series',
  MRLI_FIELDS: {
    MONTH_COLUMN: 'month',
    YEAR_COLUMN: 'year',
    TOTAL_SPEND_COVID_TREND: 'retail_status',
    EATING_COVID_TREND: 'eating_status',
    GROCERY_COVID_TREND: 'grocery_status',
    TOTAL_SPEND_COLUMN: 'total_spend_retail_categories_country_all_origins',
    TOTAL_SPEND_EATING: 'total_spend_eating_places_country_all_origins',
    TOTAL_SPEND_GROCERY:
      'total_spend_grocery_and_food_stores_country_all_origins',
    REGION_COLUMN: 'geoid',
    DISPLAY_NAME_COLUMN: 'name',
    RURAL_PERCENTAGE_COLUMN: 'rural_area_pct_usda',
  },
  trends: {
    boost: 'Boost',
    equal: 'Equal',
    plummet: 'Plummet',
  },
  COUNTY_TABLE: 'attr_county_2018',
  COUNTY_FIELDS: {
    THUMBNAIL: 'thumb',
    NAME: 'name',
    TOTAL_POPULATION: 'total_population_2018',
  },
}
