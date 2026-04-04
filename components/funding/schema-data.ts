export interface FundingSchema {
  id: string;
  headerTitle: string;
  headerSubtitle: string;
  regulatorName: string;
  description: string;
  netZeroContribution: string;
  fundingValue: string;
  schemeDuration: string;
  status: string;
  installerOpportunity: string;
  eligibilityCriteria: string;
  deliveryStructure: string;
  installerRole: string;
  paymentStructure: string;
  approvedMeasures: string[];
  approvedMeasureTags: Array<
    | string
    | {
        label: string;
        icon?: string;
      }
  >;
  complianceRequirements: string;
  renewablyUKSupport: string;
  certifications: {
    name: string;
    description: string;
  }[];
  businessOpportunityLevel: string;
  businessOpportunityDescription: string;
  keyBusinessAdvantages: string[];
}

export const schema: FundingSchema[] = [
  {
    id: "eco4-energy-company-obligation",
    headerTitle: "Energy Company Obligation Phase 4 (ECO4)",
    headerSubtitle: "Ofgem · 2022–2026",
    regulatorName: "Ofgem",
    description:
      "ECO4 is the UK's flagship domestic retrofit programme, requiring larger energy suppliers to fund energy efficiency.",
    netZeroContribution:
      "Major reduction in domestic emissions and fuel poverty",
    fundingValue: "~£4 Billion",
    schemeDuration: "2022–2026",
    status: "Active 2022–2026",
    installerOpportunity: "Very High – largest retrofit pipeline",
    eligibilityCriteria:
      "Low-income households, benefits recipients, EPC D–G homes, local authority flexible eligibility",
    deliveryStructure:
      "Obligated energy suppliers fund retrofit through managing agents, retrofit coordinators and installer networks",
    installerRole:
      "Subcontracted through managing agents or obligated suppliers",
    paymentStructure: "Payment on completion through scheme delivery partners",
    approvedMeasures: [
      "Insulation",
      "Solar PV",
      "Heat Pumps",
      "Heating Upgrades",
      "Ventilation",
    ],
    approvedMeasureTags: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Ventilation",
    ],
    complianceRequirements: "TrustMark, PAS 2030, PAS 2035",
    renewablyUKSupport:
      " Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Retrofit Standard",
        description: "Whole-house retrofit coordination",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "Very High – largest retrofit pipeline",
    businessOpportunityDescription:
      "This scheme represents one of the largest market opportunities for installers, with substantial funding, high volume potential, and multi-year commitment.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "warm-homes-plan-transition-funding",
    headerTitle: "Warm Homes Plan",
    headerSubtitle: "UK Government · Transition Funding",
    regulatorName: "UK Government",
    description:
      "Bridging allocation supporting domestic retrofit while funding transitions from ECO4.",
    netZeroContribution: "Reduction in domestic emissions through retrofit",
    fundingValue: "GBP 1.5B",
    schemeDuration: "2024–2028",
    status: "Active",
    installerOpportunity: "High",
    eligibilityCriteria:
      "Low-income households transitioning from ECO4 eligibility",
    deliveryStructure:
      "Delivered through local authorities and approved installers",
    installerRole: "Approved installer networks",
    paymentStructure: "Payment on completion",
    approvedMeasures: ["Insulation", "Heat Pumps", "Heating Upgrades"],
    approvedMeasureTags: ["Insulation", "Heat Pumps"],
    complianceRequirements: "TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform supports compliance tracking and documentation for Warm Homes Plan submissions.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Bridging funding ensures pipeline continuity between ECO4 and future schemes.",
    keyBusinessAdvantages: [
      "Continuity of pipeline between major schemes",
      "Government-backed funding reduces customer cost barriers",
      "Supports installer workforce planning",
    ],
  },
  {
    id: "la-flex-local-authority-route",
    headerTitle: "Local Authority Flex",
    headerSubtitle: "Local Authorities · LA Flex Route",
    regulatorName: "Local Authorities",
    description:
      "Enables councils to identify vulnerable homes for energy efficiency support under ECO frameworks.",
    netZeroContribution:
      "Targeted reduction in fuel poverty through local delivery",
    fundingValue: "Regional",
    schemeDuration: "Ongoing",
    status: "Active",
    installerOpportunity: "Medium – regionally variable",
    eligibilityCriteria:
      "Vulnerable households identified by local authorities",
    deliveryStructure:
      "Councils refer eligible households to obligated suppliers",
    installerRole: "Subcontracted through supplier networks",
    paymentStructure: "Scheme-dependent payment terms",
    approvedMeasures: ["Insulation", "Heating Upgrades"],
    approvedMeasureTags: ["Insulation"],
    complianceRequirements: "TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform helps track LA Flex referrals and compliance documentation.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
    ],
    businessOpportunityLevel: "Medium",
    businessOpportunityDescription:
      "Regional opportunity dependent on local authority engagement and referral volumes.",
    keyBusinessAdvantages: [
      "Access to hard-to-reach vulnerable households",
      "Council partnerships support community presence",
    ],
  },
  {
    id: "gbis-great-british-insulation-scheme",
    headerTitle: "Great British Insulation Scheme",
    headerSubtitle: "Ofgem Regulated · GBIS Delivery",
    regulatorName: "Ofgem Regulated",
    description:
      "Targets single insulation measures to improve EPC ratings for eligible households.",
    netZeroContribution: "Improved EPC ratings and reduced energy consumption",
    fundingValue: "GBP 1B",
    schemeDuration: "2023–2026",
    status: "Active",
    installerOpportunity: "High – focused single-measure pipeline",
    eligibilityCriteria: "EPC D–G homes, council tax bands A–D",
    deliveryStructure:
      "Obligated suppliers fund measures through approved installer networks",
    installerRole: "Approved installers under obligated suppliers",
    paymentStructure: "Payment on completion",
    approvedMeasures: [
      "Cavity Wall Insulation",
      "Loft Insulation",
      "Solid Wall Insulation",
    ],
    approvedMeasureTags: ["Insulation"],
    complianceRequirements: "TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform streamlines GBIS compliance and submission workflows.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Large volume single-measure scheme with straightforward delivery pathway.",
    keyBusinessAdvantages: [
      "Simplified single-measure delivery reduces project complexity",
      "High volume pipeline supports business scaling",
      "Government-backed funding removes affordability barriers",
    ],
  },
  {
    id: "social-housing-decarbonisation-fund-wave-3",
    headerTitle: "Social Housing Decarbonisation Fund",
    headerSubtitle: "DESNZ · Wave 3",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Supports local authorities and housing providers to retrofit social homes at scale.",
    netZeroContribution: "Large-scale decarbonisation of social housing stock",
    fundingValue: "GBP 800M",
    schemeDuration: "2024–2028",
    status: "Active",
    installerOpportunity: "Very High – large-scale social housing contracts",
    eligibilityCriteria: "Social housing with EPC below C",
    deliveryStructure:
      "Local authorities and housing associations lead projects with approved contractors",
    installerRole: "Subcontracted under housing provider frameworks",
    paymentStructure: "Milestone-based payments",
    approvedMeasures: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Ventilation",
      "Heating Upgrades",
    ],
    approvedMeasureTags: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Ventilation",
    ],
    complianceRequirements: "PAS 2035, TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform supports multi-property project management and compliance documentation for SHDF.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Retrofit Standard",
        description: "Whole-house retrofit coordination",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "Very High",
    businessOpportunityDescription:
      "Large-scale social housing contracts offer significant volume and long-term pipeline.",
    keyBusinessAdvantages: [
      "Large multi-property contracts support economies of scale",
      "Long-term pipeline through housing authority frameworks",
      "Supports workforce development and training investment",
      "Diversifies revenue beyond ECO4",
    ],
  },
  {
    id: "home-upgrade-grant-phase-2",
    headerTitle: "Home Upgrade Grant",
    headerSubtitle: "Local Authorities · Phase 2",
    regulatorName: "Local Authorities",
    description:
      "Funds off-gas-grid, low-income homes with insulation and clean heating improvements.",
    netZeroContribution: "Decarbonisation of hard-to-treat off-gas-grid homes",
    fundingValue: "GBP 700M",
    schemeDuration: "2023–2025",
    status: "Active",
    installerOpportunity: "High – off-gas-grid specialist opportunity",
    eligibilityCriteria: "Off-gas-grid homes, low-income households, EPC D–G",
    deliveryStructure:
      "Local authorities manage delivery through approved contractors",
    installerRole: "Approved contractors under local authority frameworks",
    paymentStructure: "Payment on completion",
    approvedMeasures: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Heating Upgrades",
    ],
    approvedMeasureTags: ["Insulation", "Heat Pumps", "Solar PV"],
    complianceRequirements: "TrustMark, PAS 2035, PAS 2030, MCS",
    renewablyUKSupport:
      "Our platform supports HUG2 compliance tracking and multi-measure project coordination.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Retrofit Standard",
        description: "Whole-house retrofit coordination",
      },
      {
        name: "MCS Certified",
        description: "Microgeneration certification for renewables",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Off-gas-grid specialist opportunity with premium project values due to heating replacement requirements.",
    keyBusinessAdvantages: [
      "Higher average project values than ECO4",
      "Specialist off-gas-grid market with lower competition",
      "Whole-house retrofit approach supports comprehensive delivery",
    ],
  },
  {
    id: "boiler-upgrade-scheme-clean-heat",
    headerTitle: "Boiler Upgrade Scheme",
    headerSubtitle: "MCS and Ofgem · Clean Heat Incentive",
    regulatorName: "MCS and Ofgem",
    description:
      "Provides grants for heat pumps and biomass boilers to accelerate low-carbon heating.",
    netZeroContribution:
      "Direct displacement of gas boilers with low-carbon alternatives",
    fundingValue: "Up to GBP 7,500",
    schemeDuration: "2022–2028",
    status: "Active",
    installerOpportunity: "High – consumer-facing heat pump pipeline",
    eligibilityCriteria:
      "Any household replacing fossil fuel heating with heat pump or biomass boiler",
    deliveryStructure:
      "MCS-certified installers apply directly on behalf of customers",
    installerRole: "MCS-certified installers submit voucher applications",
    paymentStructure: "Voucher redeemed at point of installation",
    approvedMeasures: [
      "Air Source Heat Pumps",
      "Ground Source Heat Pumps",
      "Biomass Boilers",
    ],
    approvedMeasureTags: ["Heat Pumps"],
    complianceRequirements: "MCS certification required",
    renewablyUKSupport:
      "Our platform manages BUS voucher applications and MCS compliance documentation.",
    certifications: [
      {
        name: "MCS Certified",
        description: "Microgeneration certification for renewables",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Consumer grant removes cost barrier to heat pump adoption, supporting private market growth alongside funded schemes.",
    keyBusinessAdvantages: [
      "Opens private market alongside funded scheme work",
      "Straightforward voucher process with fast payment",
      "Supports premium heat pump installation business",
      "Growing demand as boiler replacement market transitions",
    ],
  },
  {
    id: "public-sector-decarbonisation-scheme-phase-4",
    headerTitle: "Public Sector Decarbonisation Scheme",
    headerSubtitle: "Salix Finance · Phase 4",
    regulatorName: "Salix Finance",
    description:
      "Supports schools, hospitals, and public buildings with energy-efficiency and heat decarbonisation works.",
    netZeroContribution: "Decarbonisation of public sector building stock",
    fundingValue: "GBP 1.4B",
    schemeDuration: "2024–2028",
    status: "Active",
    installerOpportunity: "Very High – large public sector contracts",
    eligibilityCriteria:
      "Public sector organisations: schools, NHS, councils, universities",
    deliveryStructure:
      "Salix administers grants; public bodies procure approved contractors",
    installerRole: "Contractors procured through public sector frameworks",
    paymentStructure: "Grant funding disbursed through Salix to public bodies",
    approvedMeasures: [
      "Heat Pumps",
      "Solar PV",
      "Insulation",
      "Building Controls",
      "LED Lighting",
    ],
    approvedMeasureTags: ["Heat Pumps", "Solar PV", "Insulation"],
    complianceRequirements: "TrustMark, PAS 2030, MCS",
    renewablyUKSupport:
      "Our platform supports PSDS project compliance, documentation, and multi-site management.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "MCS Certified",
        description: "Microgeneration certification for renewables",
      },
    ],
    businessOpportunityLevel: "Very High",
    businessOpportunityDescription:
      "Large public sector contracts with long lead times but substantial project values and pipeline visibility.",
    keyBusinessAdvantages: [
      "Large contract values support business investment",
      "Reliable public sector client base",
      "Framework agreements provide pipeline visibility",
      "Supports diversification beyond residential retrofit",
    ],
  },
  {
    id: "energy-company-obligation-rural-obligation",
    headerTitle: "ECO Rural Obligation",
    headerSubtitle: "Ofgem Regulated · Rural Uplift",
    regulatorName: "Ofgem Regulated",
    description:
      "Prioritises hard-to-treat and fuel-poor rural properties with enhanced support routes.",
    netZeroContribution: "Targeted fuel poverty reduction in rural communities",
    fundingValue: "Targeted Allocation",
    schemeDuration: "2022–2026",
    status: "Active",
    installerOpportunity: "Medium – specialist rural market",
    eligibilityCriteria: "Rural fuel-poor households, hard-to-treat properties",
    deliveryStructure:
      "Delivered through ECO4 framework with rural-specific uplifts",
    installerRole: "ECO4 approved installers with rural specialism",
    paymentStructure: "Enhanced payment rates for rural uplift properties",
    approvedMeasures: [
      "Insulation",
      "Heating Upgrades",
      "Solid Wall Insulation",
    ],
    approvedMeasureTags: ["Insulation"],
    complianceRequirements: "TrustMark, PAS 2030, PAS 2035",
    renewablyUKSupport:
      "Our platform supports rural project compliance and documentation under ECO frameworks.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Retrofit Standard",
        description: "Whole-house retrofit coordination",
      },
    ],
    businessOpportunityLevel: "Medium",
    businessOpportunityDescription:
      "Specialist rural market with enhanced payment rates offsetting logistical complexity.",
    keyBusinessAdvantages: [
      "Enhanced payment rates compensate for rural logistics",
      "Lower installer competition in rural areas",
      "Supports community presence and local reputation",
    ],
  },
  {
    id: "warm-homes-local-grant-programme",
    headerTitle: "Warm Homes Local Grant",
    headerSubtitle: "UK Government · Local Delivery",
    regulatorName: "UK Government",
    description:
      "Place-based retrofit funding delivered through councils to upgrade poor-performing homes.",
    netZeroContribution:
      "Place-based decarbonisation of worst-performing housing",
    fundingValue: "Multi-year",
    schemeDuration: "2025–2028",
    status: "Active",
    installerOpportunity: "High – council-led retrofit programmes",
    eligibilityCriteria:
      "Poor-performing homes (EPC E–G) in priority areas identified by councils",
    deliveryStructure:
      "Councils lead place-based programmes with approved contractors",
    installerRole: "Contractors approved under council frameworks",
    paymentStructure: "Grant funding through local authority disbursement",
    approvedMeasures: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Heating Upgrades",
      "Ventilation",
    ],
    approvedMeasureTags: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Ventilation",
    ],
    complianceRequirements: "TrustMark, PAS 2035, PAS 2030",
    renewablyUKSupport:
      "Our platform supports council-led programme compliance and multi-measure project tracking.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Retrofit Standard",
        description: "Whole-house retrofit coordination",
      },
      {
        name: "PAS 2030 Installation Standard",
        description: "Energy efficiency installation quality",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Concentrated local pipeline reduces travel and logistics costs",
      "Council partnerships build long-term local market presence",
      "Whole-house approach supports comprehensive project delivery",
      "Multi-year programme provides forward pipeline visibility",
    ],
  },
];
