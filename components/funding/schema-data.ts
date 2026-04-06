export interface FundingSchema {
  id: string;
  headerTitle: string;
  headerSubtitle: string;
  regulatorName: string;
  description: string;
  schemaDescription: string;
  netZeroContribution: string;
  fundingValue: string;
  schemeDuration: string;
  status: string;
  installerOpportunity: string;
  installerOpportunityDescription?: string;
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
    headerSubtitle: "2022–2026",
    regulatorName: "Ofgem",
    description:
      "The UK's largest retrofit programme delivering energy efficiency and low-carbon heating to low-income households.",
    schemaDescription:
      "ECO4 is the UK's flagship domestic retrofit programme, requiring larger energy suppliers to fund energy efficiency and low-carbon heating installations in low-income and vulnerable households. The scheme prioritises whole-house, fabric-first improvements aligned with PAS 2035 retrofit standards.",
    netZeroContribution:
      "Major reduction in domestic emissions and fuel poverty",
    fundingValue: "~£4 Billion",
    schemeDuration: "2022–2026",
    status: "Active 2022–2026",
    installerOpportunity: "Very High – largest retrofit pipeline",
    installerOpportunityDescription:
      "This scheme represents one of the largest market opportunities for installers, with substantial funding, high volume potential, and multi-year commitment.",
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
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
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
    headerTitle: "Great British Insulation Scheme (GBIS)",
    headerSubtitle: "2023–2026",
    regulatorName: "Ofgem",
    description:
      "Supplier-led insulation programme targeting homes with poor energy performance across all income levels.",
    schemaDescription:
      "The Great British Insulation Scheme is a supplier-led programme designed to improve the thermal performance of homes across all income bands. It focuses exclusively on insulation measures and targets properties with Energy Performance Certificate (EPC) ratings of D–G.",
    netZeroContribution: "Improves thermal efficiency across millions of homes",
    fundingValue: "~£1 Billion",
    schemeDuration: "2023–2026",
    status: "Active 2023–2026",
    installerOpportunity: "High-volume insulation installations",
    installerOpportunityDescription:
      "Significant opportunity for installers with strong growth potential and stable funding pipeline.",
    eligibilityCriteria:
      "Households with EPC ratings D–G; both low-income and general households",
    deliveryStructure: "Supplier obligation delivered via approved installers",
    installerRole:
      "Subcontracted through managing agents or obligated suppliers",
    paymentStructure: "Payment on completion through scheme delivery partners",
    approvedMeasures: [
      "Loft insulation, cavity wall insulation, solid wall insulation",
    ],
    approvedMeasureTags: ["Insulation"],
    complianceRequirements: "TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
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
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "la-flex-local-authority-route",
    headerTitle: "Boiler Upgrade Scheme (BUS)",
    headerSubtitle: "2022–2028",
    regulatorName: "Ofgem",
    description:
      "Capital grants for homeowners and small businesses replacing fossil fuel heating with heat pumps.",
    schemaDescription:
      "The Boiler Upgrade Scheme provides upfront capital grants to homeowners and small businesses looking to replace fossil fuel heating systems with low-carbon alternatives. The scheme is installer-led, with approved installers managing the application and redemption process.",
    netZeroContribution: "Accelerates transition to low-carbon heating",
    fundingValue: "~£450 Million",
    schemeDuration: "2022–2028",
    status: "Active 2022–2028",
    installerOpportunity: "Growing – key route for heat pump installers",
    eligibilityCriteria:
      "Homeowners and small businesses replacing fossil fuel heating",
    deliveryStructure:
      "Installer-led grant redeemed through accredited installers",
    installerRole: "Direct application through MCS-certified installers",
    paymentStructure: "Upfront grant redeemed by installer on completion",
    approvedMeasures: [
      "Air source heat pumps, ground source heat pumps, biomass boilers",
    ],
    approvedMeasureTags: ["Heat Pumps", "Biomass"],
    complianceRequirements: "TrustMark, MCS",
    renewablyUKSupport:
      "Renewably UK Support: Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with MCS requirements.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "MCS",
        description: "Microgeneration installer accreditation",
      },
    ],
    businessOpportunityLevel: "Medium",
    businessOpportunityDescription:
      "Regional opportunity dependent on local authority engagement and referral volumes.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "gbis-great-british-insulation-scheme",
    headerTitle: "Home Upgrade Grant (HUG)",
    headerSubtitle: "2023–2025",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Targeted support for off-gas grid properties in low-income areas requiring whole-house retrofit.",
    schemaDescription:
      "HUG2 is a locally-delivered retrofit programme targeting low-income, off-gas grid properties with poor energy performance. Local authorities commission retrofit delivery partners to carry out whole-house improvements in line with PAS 2035 standards.",
    netZeroContribution: "Decarbonizes rural and hard-to-treat homes",
    fundingValue: "~£700 Million",
    schemeDuration: "2023–2026",
    status: "Active 2023–2025",
    installerOpportunity: "Medium – local authority retrofit programmes",
    installerOpportunityDescription:
      "Moderate opportunity with regional or specialist focus. Best suited for established installers with local presence or specific expertise.",
    eligibilityCriteria:
      "Low-income households in off-gas grid homes with EPC D–G",
    deliveryStructure:
      "Local authorities procure retrofit contractors and delivery partners",
    installerRole:
      "Procured through local authority or housing provider frameworks",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: ["Insulation, solar PV, heat pumps, ventilation"],
    approvedMeasureTags: [
      "Insulation",
      "Heat Pumps",
      "Solar PV",
      "Ventilation",
    ],
    complianceRequirements: "TrustMark, PAS 2035",
    renewablyUKSupport:
      "Our platform streamlines GBIS compliance and submission workflows.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "PAS 2035 Installation Standard",
        description: "Whole-house retrofit coordination",
      },
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Large volume single-measure scheme with straightforward delivery pathway.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "social-housing-decarbonization-fund-wave-3",
    headerTitle: "Social Housing Decarbonization Fund",
    headerSubtitle: "2020–2030",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Multi-billion pound programme to decarbonize council and housing association properties across the UK.",
    schemaDescription:
      "The Social Housing Decarbonization Fund provides capital grants to social housing providers to improve the energy performance of their housing stock. The scheme supports comprehensive retrofit programmes that upgrade insulation, heating systems, and renewable energy infrastructure.",
    netZeroContribution: "Decarbonizes social housing stock",
    fundingValue: "~£3.8 Billion",
    schemeDuration: "2024–2030",
    status: "Active 2020–2030",
    installerOpportunity: "High – large portfolio retrofit contracts",
    installerOpportunityDescription:
      "Significant opportunity for installers with strong growth potential and stable funding pipeline.",
    eligibilityCriteria:
      "Social housing owned by councils or housing associations with EPC D–G",
    deliveryStructure:
      "Housing providers deliver retrofit programmes via procurement frameworks",
    installerRole:
      "Procured through local authority or housing provider frameworks",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Whole-house retrofit including insulation, solar PV and heat pumps",
    ],
    approvedMeasureTags: ["Insulation", "Heat Pumps", "Solar PV"],
    complianceRequirements: "TrustMark, PAS 2035",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
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
    businessOpportunityLevel: "Very High",
    businessOpportunityDescription:
      "Large-scale social housing contracts offer significant volume and long-term pipeline.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "home-upgrade-grant-phase-2",
    headerTitle: "Warm Homes Plan",
    headerSubtitle: "2025–2030",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "The government's flagship £13 billion investment to transform domestic heating and tackle fuel poverty.",
    schemaDescription:
      "The Warm Homes Plan represents the UK Government's largest-ever investment in domestic energy efficiency. It aims to upgrade millions of homes, reduce fuel poverty, and accelerate the transition to low-carbon heating systems through a coordinated national retrofit strategy.",
    netZeroContribution:
      "Major driver of residential decarbonization and fuel poverty reduction",
    fundingValue: "~£13 Billion",
    schemeDuration: "2025–2030",
    status: "Active 2025–2030",
    installerOpportunity:
      "Very High – expected to become the UK's largest retrofit programme",
    installerOpportunityDescription:
      "This scheme represents one of the largest market opportunities for installers, with substantial funding, high volume potential, and multi-year commitment.",
    eligibilityCriteria:
      "Social housing owned by councils or housing associations with EPC D–G",
    deliveryStructure:
      "Low-income households, fuel-poor homes, and social housing",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Insulation, solar PV, heat pumps, energy efficiency upgrades",
    ],
    approvedMeasureTags: ["Insulation", "Heat Pumps", "Solar PV"],
    complianceRequirements: "TrustMark, PAS 2035,",
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
    ],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Off-gas-grid specialist opportunity with premium project values due to heating replacement requirements.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "boiler-upgrade-scheme-clean-heat",
    headerTitle: "Warmer Homes Scheme",
    headerSubtitle: "Ongoing",
    regulatorName: "Local Authorities",
    description:
      "Locally-delivered retrofit programmes tailored to regional needs and managed by local authorities.",
    schemaDescription:
      "Warmer Homes programmes are locally-managed initiatives delivered by councils to support vulnerable households with energy efficiency improvements. They typically complement national schemes and are tailored to local housing stock and community needs.",
    netZeroContribution:
      "Supports local fuel poverty reduction and emissions targets",
    fundingValue: "Varies by local authority",
    schemeDuration: "Ongoing",
    status: "Active Ongoing",
    installerOpportunity: "Medium – regional installer opportunities",
    installerOpportunityDescription:
      "Moderate opportunity with regional or specialist focus. Best suited for established installers with local presence or specific expertise.",
    eligibilityCriteria:
      "Low-income households eligible through local authority referral",
    deliveryStructure:
      "Low-income households, fuel-poor homes, and social housing",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Insulation, heating upgrades, renewable heating systems",
    ],
    approvedMeasureTags: ["Insulation", "Heat Pumps"],
    complianceRequirements: "TrustMark, PAS 2030, PAS 2035",
    renewablyUKSupport:
      "Our platform manages BUS voucher applications and MCS compliance documentation.",
    certifications: [
      {
        name: "MCS Certified",
        description: "Microgeneration certification for renewables",
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
      "Consumer grant removes cost barrier to heat pump adoption, supporting private market growth alongside funded schemes.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "public-sector-decarbonisation-scheme-phase-4",
    headerTitle: "Home Energy Scotland Grant and Loan",
    headerSubtitle: "Ongoing",
    regulatorName: "Home Energy Scotland",
    description:
      "Scottish government grants and loans supporting renewable heating and energy efficiency upgrades.",
    schemaDescription:
      "Home Energy Scotland provides financial assistance to Scottish homeowners and private landlords to support the installation of renewable heating systems and energy efficiency measures. The scheme includes both grants and interest-free loans.",
    netZeroContribution: "Supports Scotland's net zero heating transition",
    fundingValue: "~£60 Million annually",
    schemeDuration: "Ongoing",
    status: "Active Ongoing",
    installerOpportunity: "Medium – Scottish market opportunities",
    installerOpportunityDescription:
      "Moderate opportunity with regional or specialist focus. Best suited for established installers with local presence or specific expertise.",
    eligibilityCriteria: "Scottish homeowners and private landlords",
    deliveryStructure:
      "Low-income households, fuel-poor homes, and social housing",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: ["Heat pumps, biomass, solar thermal, insulation"],
    approvedMeasureTags: ["Insulation", "Heat Pumps", "Solar PV", "Biomass"],
    complianceRequirements: "MCS, TrustMark",
    renewablyUKSupport:
      "Our platform supports PSDS project compliance, documentation, and multi-site management.",
    certifications: [
      {
        name: "TrustMark Required",
        description: "Government-endorsed quality scheme",
      },
      {
        name: "MCS Certified",
        description: "Microgeneration installer accreditation",
      },
    ],
    businessOpportunityLevel: "Very High",
    businessOpportunityDescription:
      "Large public sector contracts with long lead times but substantial project values and pipeline visibility.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "nest-wales",
    headerTitle: "Nest (Wales)",
    headerSubtitle: "Ongoing",
    regulatorName: "Welsh Government",
    description:
      "Welsh Government's fuel poverty programme providing free energy efficiency improvements to eligible households.",
    schemaDescription:
      "Nest is the Welsh Government's flagship fuel poverty programme, offering free energy efficiency advice and fully-funded home improvements to eligible households. The scheme targets low-income families and vulnerable residents across Wales.",
    netZeroContribution: "Reduces fuel poverty and carbon emissions in Wales",
    fundingValue: "~£30 Million annually",
    schemeDuration: "Ongoing",
    status: "Active Ongoing",
    installerOpportunity: "Medium – Welsh market opportunities",
    installerOpportunityDescription:
      "Moderate opportunity with regional or specialist focus. Best suited for established installers with local presence or specific expertise.",
    eligibilityCriteria:
      "Welsh households in fuel poverty or on means-tested benefits",
    deliveryStructure:
      "Free energy efficiency advice and improvements delivered through approved installers",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Insulation, boiler upgrades, heating controls, renewable heating",
    ],
    approvedMeasureTags: ["Insulation", "Heating Systems"],
    complianceRequirements: "TrustMark, PAS 2030",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
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
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "public-sector-decarbonisation-scheme",
    headerTitle: "Public Sector Decarbonisation Scheme ",
    headerSubtitle: "2020–2025",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Competitive funding for public buildings including schools, hospitals, and local authority estates.",
    schemaDescription:
      "The Public Sector Decarbonisation Scheme funds capital improvements to public buildings including schools, hospitals, leisure centres, and council offices. It supports the public sector's commitment to achieving net zero carbon emissions ahead of the 2050 national target.",
    netZeroContribution: "Reduces fuel poverty and carbon emissions in Wales",
    fundingValue: "~£1.8 Billion",
    schemeDuration: "2020–2025",
    status: "2020–2025",
    installerOpportunity: "Medium – Welsh market opportunities",
    installerOpportunityDescription:
      "Significant opportunity for installers with strong growth potential and stable funding pipeline.",
    eligibilityCriteria:
      "Public sector buildings including local authorities, NHS, schools",
    deliveryStructure:
      "Competitive grant funding delivered through public sector procurement",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Heat pumps, solar PV, LED lighting, insulation, building management systems",
    ],
    approvedMeasureTags: ["Insulation", "Heat Pumps", "Solar PV", "Biomass"],
    complianceRequirements:
      "Building Regulations, public procurement standards",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
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
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "green-heat-network-fund",
    headerTitle: "Green Heat Network Fund (GHNF)",
    headerSubtitle: "2022–2025",
    regulatorName: "Department for Energy Security and Net Zero",
    description:
      "Capital investment in new low-carbon district heating infrastructure across the UK.",
    schemaDescription:
      "The Green Heat Network Fund supports the development of new low-carbon heat networks across the UK. It provides capital grants for infrastructure including centralised heat pumps, waste heat recovery systems, and thermal storage.",
    netZeroContribution: "Develops low-carbon district heating infrastructure",
    fundingValue: "~£288 Million",
    schemeDuration: "2022–2025",
    status: "2022–2025",
    installerOpportunity: "Specialist – requires heat network expertise",
    installerOpportunityDescription:
      "Requires specific technical expertise or market positioning. Best suited for installers with relevant accreditation and experience.",
    eligibilityCriteria:
      "Heat network developers, local authorities, housing associations",
    deliveryStructure: "Capital grants for new low-carbon heat networks",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "District heating infrastructure, heat pumps, waste heat recovery, thermal storage",
    ],
    approvedMeasureTags: ["Heat Pumps"],
    complianceRequirements:
      "Heat Network Code of Practice, Building Regulations",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
    certifications: [],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "heat-network-efficiency-scheme",
    headerTitle: "Heat Network Efficiency Scheme (HNES)",
    headerSubtitle: "2022–2025",
    regulatorName: "Welsh Government",
    description:
      "Grants to improve the performance and reduce emissions of existing heat networks.",
    schemaDescription:
      "HNES provides capital funding to improve the efficiency of existing heat networks. It supports upgrades to network insulation, control systems, metering infrastructure, and heat interface units to reduce energy waste and carbon emissions.",
    netZeroContribution:
      "Improves efficiency and reduces emissions from existing networks",
    fundingValue: "~£32 Million",
    schemeDuration: "2022–2025",
    status: "2022–2025",
    installerOpportunity: "Specialist – existing heat network operators",
    installerOpportunityDescription:
      "Requires specific technical expertise or market positioning. Best suited for installers with relevant accreditation and experience.",
    eligibilityCriteria: "Existing heat network operators",
    deliveryStructure:
      "Capital grants for improving efficiency of existing heat networks",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Network insulation, controls upgrades, heat interface units, metering",
    ],
    approvedMeasureTags: ["Insulation"],
    complianceRequirements: "Heat Network Code of Practice",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
    certifications: [],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
  {
    id: "warm-homes-local-grant-programme",
    headerTitle: "Net Zero Innovation Portfolio (NZIP)",
    headerSubtitle: "2020–2025",
    regulatorName: "UK Research and Innovation (UKRI)",
    description:
      "R&D funding for breakthrough technologies including hydrogen, carbon capture, and advanced heating systems.",
    schemaDescription:
      "The Net Zero Innovation Portfolio funds research, development, and demonstration of breakthrough technologies essential for achieving the UK's climate targets. It supports innovation in areas including hydrogen, carbon capture, energy storage, and next-generation heating systems.",
    netZeroContribution:
      "Accelerates development of next-generation net zero technologies",
    fundingValue: "~£1 Billion",
    schemeDuration: "2021–2025",
    status: "2021–2025",
    installerOpportunity: "Specialist – innovation and R&D focused",
    installerOpportunityDescription:
      "Requires specific technical expertise or market positioning. Best suited for installers with relevant accreditation and experience.",
    eligibilityCriteria:
      "Businesses, research institutions, innovation consortia",
    deliveryStructure:
      "Competitive R&D funding for low-carbon technology innovation",
    installerRole: "Varies by scheme structure and procurement route",
    paymentStructure:
      "Typically staged payments aligned with project milestones",
    approvedMeasures: [
      "Emerging technologies including hydrogen, carbon capture, energy storage, advanced heat pumps",
    ],
    approvedMeasureTags: ["Heat Pumps"],
    complianceRequirements: "Project-specific R&D compliance",
    renewablyUKSupport:
      "Our platform provides integrated compliance management, documentation storage, and automated submissions aligned with TrustMark requirements.",
    certifications: [],
    businessOpportunityLevel: "High",
    businessOpportunityDescription:
      "Place-based council programmes offer concentrated local pipeline and community partnership opportunities.",
    keyBusinessAdvantages: [
      "Access to government-backed funding removes customer affordability barriers",
      "Structured payment terms and reduced financial risk compared to private market",
      "Long-term market visibility supports business planning and workforce development",
      "Supports business diversification and revenue stream expansion",
    ],
  },
];
