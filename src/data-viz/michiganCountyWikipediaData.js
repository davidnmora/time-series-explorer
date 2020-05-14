import { smartDisplayValue } from './utilsData'

const getRegion = (regionName) =>
  michiganCountyWikipediaData[`${regionName} County`]

export const wikipediaURL = (regionName) => getRegion(regionName).image

export const totalPopulation2017 = (regionName) =>
  smartDisplayValue(getRegion(regionName).total_population_2017)

const michiganCountyWikipediaData = {
  'Chippewa County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0618-Soo-ChippewaCtyCt.jpg',
    total_population_2017: 38000,
  },
  'Delta County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/DeltaCountyMichiganBuilding.jpg',
    total_population_2017: 36400,
  },
  'Marquette County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0618-UP-MarquetteCtyCourthouse.jpg',
    total_population_2017: 67100,
  },
  'Isabella County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Isabella%20County.jpg',
    total_population_2017: 70600,
  },
  'Livingston County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Livingston%20County%20Courthouse%20Michigan.JPG',
    total_population_2017: 187000,
  },
  'Alger County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0618-Munising-AlgerCtyCourt.jpg',
    total_population_2017: 9250,
  },
  'Lenawee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Lenawee%20County%20Courthouse%202010.JPG',
    total_population_2017: 98600,
  },
  'Otsego County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Frank%20A.%20and%20Rae%20E.%20Harris%20Kramer%20House.jpg',
    total_population_2017: 24200,
  },
  'Newaygo County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Croton%20dam%20Brian.H%20Flickr%20102843790%209ae9b1a96d%20o.jpg',
    total_population_2017: 47900,
  },
  'Leelanau County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/State%20Theater%20in%20Traverse%20City%20%281%29.jpg',
    total_population_2017: 21600,
  },
  'Luce County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0618-Newberry-LuceCtyBuilding.jpg',
    total_population_2017: 6410,
  },
  'Roscommon County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Roscommon%20County%20Building%20%28Michigan%29.jpg',
    total_population_2017: 23900,
  },
  'Mason County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Mason%20County%20courthouse%20clock%20tower.jpg',
    total_population_2017: 28800,
  },
  'Presque Isle County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Forty%20Mile%20Point%20Light%20Station%20-%20Michigan.jpg',
    total_population_2017: 12900,
  },
  'Benzie County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/LightningVolt%20Frankfort%20Lighthouse.jpg',
    total_population_2017: 17500,
  },
  'Gratiot County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Gratiot%20County%20MI%20Courthouse%20c1908.jpg',
    total_population_2017: 41300,
  },
  'Clare County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Clare%20Congregational%20Church-Clare.jpg',
    total_population_2017: 30600,
  },
  'Manistee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Manistee%20Courthouse%20Fountain.jpg',
    total_population_2017: 24400,
  },
  'Washtenaw County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Washtenaw%20County%20Downtown%20Ann%20Arbor%20Campus.JPG',
    total_population_2017: 362000,
  },
  'Emmet County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Emmet%20County%20Michigan%20Building.jpg',
    total_population_2017: 33000,
  },
  'Oceana County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Little%20Sable%20Lighthouse%20at%20Sunset.jpg',
    total_population_2017: 26300,
  },
  'Branch County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Lanphere-Pratt%20House.jpg',
    total_population_2017: 43500,
  },
  'Muskegon County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Muskegon%20County%20Courthouse%2C%201885.jpg',
    total_population_2017: 173000,
  },
  'Cass County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Dowagiac%20Depot.jpg',
    total_population_2017: 51400,
  },
  'Midland County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Midland%20County%20%28Michigan%29%20Courthouse.jpg',
    total_population_2017: 83500,
  },
  'Clinton County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Clinton%20County%20MI%20Courthouse.JPG',
    total_population_2017: 77300,
  },
  'Gladwin County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Cedar%20River%20Gladwin%20Michigan.jpg',
    total_population_2017: 25300,
  },
  'Calhoun County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Michigan%20Central%20Depot%20Post%20Card%20Battle%20Creek%20MI.jpg',
    total_population_2017: 134000,
  },
  'Huron County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Port%20Austin%20Reef.jpg',
    total_population_2017: 31800,
  },
  'Mackinac County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Governor%27s%20Mansion%20%28MI%29%20-%20panoramio.jpg',
    total_population_2017: 10800,
  },
  'Gogebic County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Gogebic%20County%20Courthouse.JPG',
    total_population_2017: 15600,
  },
  'Monroe County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/MonroeMIcourthouse.jpg',
    total_population_2017: 150000,
  },
  'Oscoda County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Oscoda%20County%20Courthouse.jpg',
    total_population_2017: 8300,
  },
  'Macomb County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/EdselFordHouseSide.jpg',
    total_population_2017: 864000,
  },
  'St. Clair County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Fort%20Gratiot%20Lighthouse%204.jpg',
    total_population_2017: 160000,
  },
  'Wayne County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/DEtroitRivericeflowscityview.jpg',
    total_population_2017: 1760000,
  },
  'Ogemaw County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Downtown%20West%20Branch..JPG',
    total_population_2017: 21000,
  },
  'Lapeer County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Lapeer%20County%20Courthouse.jpg',
    total_population_2017: 88200,
  },
  'Wexford County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Charles%20T.%20Mitchell%20House.jpg',
    total_population_2017: 32900,
  },
  'Van Buren County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Pawpawcourthouse.jpg',
    total_population_2017: 75200,
  },
  'Crawford County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Crawford%20County%20Building%20%28Michigan%29.jpg',
    total_population_2017: 13800,
  },
  'Alcona County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Sturgeon%20Point%20Lighthouse.jpg',
    total_population_2017: 10400,
  },
  'Eaton County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Eaton%20County%20Courthouse%2C%20Charlotte.jpg',
    total_population_2017: 109000,
  },
  'Grand Traverse County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/NorthernMichiganAsylumCTraverseCityMI.JPG',
    total_population_2017: 91200,
  },
  'Alpena County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Alpena%20County%20Courthouse%20-%20Alpena%20Michigan.jpg',
    total_population_2017: 28700,
  },
  'Mecosta County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Nisbett-Fairman%20Residences.JPG',
    total_population_2017: 43200,
  },
  'Iron County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Courthouse%20Crystal%20Falls%20MI.jpg',
    total_population_2017: 11300,
  },
  'Baraga County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Baraga%20County%20Courthouse%20and%20Annex.JPG',
    total_population_2017: 8580,
  },
  'Ontonagon County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/OntonagonCourthouse.jpg',
    total_population_2017: 6070,
  },
  'Jackson County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Michigan%20State%20Prison%20Jackson%20B.JPG',
    total_population_2017: 159000,
  },
  'Kalkaska County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Hotel%20Sieting.jpg',
    total_population_2017: 17400,
  },
  'Osceola County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Swedish%20Evangical%20Lutheran%20Church.jpg',
    total_population_2017: 23200,
  },
  'Montmorency County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/1842%20Negissee%20Okkuddo%20Cheonoquet%20Wabbassee%20Shawwano%20Oscoda%20counties%20Michigan.jpg',
    total_population_2017: 9290,
  },
  'Missaukee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/1842%20Manistee%20Kawtawwabet%20Missaukee%20Mickenauk%20Ogemaw%20Kanotin%20Notipeskago%20Aishcum%20Unwattin%20Kaykakee%20Gladwin%20Arenac%20counties%20Michigan.jpg',
    total_population_2017: 15000,
  },
  'Lake County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Phil%20Giles%20Hotel%2C%20Idlewild%2C%20Mich%20%2881314%29.jpg',
    total_population_2017: 11700,
  },
  'Charlevoix County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Charlesvoix%20County%20Michigan%20Building.jpg',
    total_population_2017: 26200,
  },
  'Barry County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/HastingsCourthouse.jpg',
    total_population_2017: 59600,
  },
  'Ingham County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Ingham%20county%20courthouse%20night.jpg',
    total_population_2017: 286000,
  },
  'Houghton County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Houghton%20County%20Courthouse.jpg',
    total_population_2017: 36300,
  },
  'Bay County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Bay%20City%20Masonic%20Temple%20in%202014.jpg',
    total_population_2017: 105000,
  },
  'Montcalm County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Giles%20Gilbert%20House.jpg',
    total_population_2017: 63000,
  },
  'St. Joseph County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/White%20Pigeon%20land%20office.jpg',
    total_population_2017: 60900,
  },
  'Schoolcraft County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Seul%20Choix-Light.jpg',
    total_population_2017: 8110,
  },
  'Shiawassee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Shiawassee%20County%20Courthouse%202.jpg',
    total_population_2017: 68600,
  },
  'Oakland County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Detroit%20Zoo%20seal%20in%20Rackham%20Fountain%20%285679%29.jpg',
    total_population_2017: 1240000,
  },
  'Menominee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0619-Menominee-CtyCt.jpg',
    total_population_2017: 23400,
  },
  'Antrim County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Antrim%20County%20Courthouse.jpg',
    total_population_2017: 23100,
  },
  'Arenac County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Michigan%20Central%20Railroad%20Depot%20-%20Standish%20Michigan.jpg',
    total_population_2017: 15200,
  },
  'Kalamazoo County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Kalamazoo%20County%20Courthouse.jpg',
    total_population_2017: 260000,
  },
  'Ionia County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/IoniaCountyCouthouseIoniaMi.jpg',
    total_population_2017: 64100,
  },
  'Dickinson County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/2009-0619-IronMountain-Courthouse.jpg',
    total_population_2017: 25700,
  },
  'Allegan County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/All%20Saints%20Episcopal%20Church-Saugatuck.jpg',
    total_population_2017: 114000,
  },
  'Cheboygan County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Poe%20Reef%20Light.JPG',
    total_population_2017: 25500,
  },
  'Sanilac County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Sanilar%20Petroglyphs%20-%20Archer.jpg',
    total_population_2017: 41500,
  },
  'Iosco County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Tawas%20Point%20Light2.jpg',
    total_population_2017: 25300,
  },
  'Berrien County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Barrien%20Springs%20Courthouse.jpg',
    total_population_2017: 155000,
  },
  'Hillsdale County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Hillsdale%20County%20Courthouse.jpg',
    total_population_2017: 45900,
  },
  'Saginaw County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Saginaw%20County%20Governmental%20Center.JPG',
    total_population_2017: 194000,
  },
  'Keweenaw County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Keweenaw%20County%20Courthouse.jpg',
    total_population_2017: 2140,
  },
  'Genesee County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Genesee%20County%20MI%20Courthouse.JPG',
    total_population_2017: 411000,
  },
  'Kent County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Kent%20County%20Courthouse%2C%20Grand%20Rapids%2C%20MI.jpg',
    total_population_2017: 636000,
  },
  'Tuscola County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Indian%20Fields%20park%20caro.JPG',
    total_population_2017: 53600,
  },
  'Ottawa County': {
    image:
      'http://commons.wikimedia.org/wiki/Special:FilePath/Holland%20Harbor%20Light%20%28Big%20Red%29%20-%20Holland%2C%20Michigan.jpg',
    total_population_2017: 280000,
  },
}
