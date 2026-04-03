export interface FundingSchema {
  id: string;
  headerTitle: string;
  headerSubtitle: string;
  regulatorName: string;
  description: string;
  fundingValue: string;
}

export const schema: FundingSchema[] = [
  {
    id: "eco4-energy-company-obligation",
    headerTitle: "Energy Company Obligation",
    headerSubtitle: "ECO4 Scheme",
    regulatorName: "Ofgem Regulated",
    description:
      "Supports low-income households with insulation, heating upgrades, and low-carbon measures.",
    fundingValue: "GBP 4B+",
  },
  {
    id: "warm-homes-plan-transition-funding",
    headerTitle: "Warm Homes Plan",
    headerSubtitle: "Transition Funding",
    regulatorName: "UK Government",
    description:
      "Bridging allocation supporting domestic retrofit while funding transitions from ECO4.",
    fundingValue: "GBP 1.5B",
  },
  {
    id: "la-flex-local-authority-route",
    headerTitle: "Local Authority Flex",
    headerSubtitle: "LA Flex Route",
    regulatorName: "Local Authorities",
    description:
      "Enables councils to identify vulnerable homes for energy efficiency support under ECO frameworks.",
    fundingValue: "Regional",
  },
  {
    id: "gbis-great-british-insulation-scheme",
    headerTitle: "Great British Insulation Scheme",
    headerSubtitle: "GBIS Delivery",
    regulatorName: "Ofgem Regulated",
    description:
      "Targets single insulation measures to improve EPC ratings for eligible households.",
    fundingValue: "GBP 1B",
  },
  {
    id: "social-housing-decarbonisation-fund-wave-3",
    headerTitle: "Social Housing Decarbonisation Fund",
    headerSubtitle: "Wave 3",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Supports local authorities and housing providers to retrofit social homes at scale.",
    fundingValue: "GBP 800M",
  },
  {
    id: "home-upgrade-grant-phase-2",
    headerTitle: "Home Upgrade Grant",
    headerSubtitle: "Phase 2",
    regulatorName: "Local Authorities",
    description:
      "Funds off-gas-grid, low-income homes with insulation and clean heating improvements.",
    fundingValue: "GBP 700M",
  },
  {
    id: "boiler-upgrade-scheme-clean-heat",
    headerTitle: "Boiler Upgrade Scheme",
    headerSubtitle: "Clean Heat Incentive",
    regulatorName: "MCS and Ofgem",
    description:
      "Provides grants for heat pumps and biomass boilers to accelerate low-carbon heating.",
    fundingValue: "Up to GBP 7,500",
  },
  {
    id: "public-sector-decarbonisation-scheme-phase-4",
    headerTitle: "Public Sector Decarbonisation Scheme",
    headerSubtitle: "Phase 4",
    regulatorName: "Salix Finance",
    description:
      "Supports schools, hospitals, and public buildings with energy-efficiency and heat decarbonisation works.",
    fundingValue: "GBP 1.4B",
  },
  {
    id: "energy-company-obligation-rural-obligation",
    headerTitle: "ECO Rural Obligation",
    headerSubtitle: "Rural Uplift",
    regulatorName: "Ofgem Regulated",
    description:
      "Prioritises hard-to-treat and fuel-poor rural properties with enhanced support routes.",
    fundingValue: "Targeted Allocation",
  },
  {
    id: "warm-homes-local-grant-programme",
    headerTitle: "Warm Homes Local Grant",
    headerSubtitle: "Local Delivery",
    regulatorName: "UK Government",
    description:
      "Place-based retrofit funding delivered through councils to upgrade poor-performing homes.",
    fundingValue: "Multi-year",
  },
];
