import {
  CircleCheckBig,
  ClipboardCheck,
  FileText,
  Mail,
  ShieldCheck,
  Shield,
  Award,
  Database,
  BadgeCheck,
  FileCheck,
  Zap,
  MailIcon,
  Clock,
} from "lucide-react";
import { StepCardList } from "@/components/shared/step-card";
import SectionHeader from "../shared/section-header";

export default function HowIBGWorks() {
  const STEPS = [
    {
      icon: <ClipboardCheck color='#FFFFFF' />,
      title: "Registration & Qualification",
      description:
        "Join the network of elite installers backed by Renewably UK. Our comprehensive qualification process verifies your MCS certification, TrustMark registration, and business PAS compliance. Bluedrop Services conducts thorough checks of your Professional Indemnity, Public Liability, and Employers Liability Insurances, ensuring you meet the highest standards to deliver premium Insurance Backed Guarantees.",
      badges: [
        {
          icon: <CircleCheckBig color='#0F47A8' size={16} />,
          label: "MCS Certified",
        },
        { icon: <Shield color='#0F47A8' size={16} />, label: "TrustMark" },
        { icon: <Award color='#0F47A8' size={16} />, label: "PAS 2030" },
        { icon: <Award color='#0F47A8' size={16} />, label: "PAS 2035" },
        {
          icon: <BadgeCheck color='#0F47A8' size={16} />,
          label: "FCA Compliant",
        },
        {
          icon: <Database color='#0F47A8' size={16} />,
          label: "ICO Registered",
        },
      ],
    },
    {
      icon: <FileText color='#FFFFFF' />,
      title: "Installation & Documentation",
      description:
        "Complete your renewable energy installation to industry standards (MCS, PAS 2030, PAS 2035). Simply enter the installation address, policy holder details, and select the measure from the platform.",
      subDescription:
        'Click "Generate Certificates" and the system instantly creates your Insurance Backed Guarantee certificates with all compliance validated automatically.',
      badges: [
        {
          icon: <FileCheck color='#0F47A8' size={16} />,
          label: "Complete Installation",
        },
        {
          icon: <FileText color='#0F47A8' size={16} />,
          label: "Enter Details",
        },
        {
          icon: <Zap color='#0F47A8' size={16} />,
          label: "Generate Certificates",
        },
      ],
    },
    {
      icon: <Mail color='#FFFFFF' />,
      title: "IBG Policy Issuance",
      description:
        "Upon certificate generation, policy holders instantly receive their Insurance Backed Guarantee policy document via email. The FCA-regulated certificate, issued through Bluedrop Services, includes full policy details, coverage information, and claims procedures. This immediate delivery ensures customers have instant proof of protection and complete peace of mind.",
      badges: [
        {
          icon: <MailIcon color='#0F47A8' size={16} />,
          label: "Instant Email Delivery",
        },
        {
          icon: <BadgeCheck color='#0F47A8' size={16} />,
          label: "FCA Regulated",
        },
        {
          icon: <FileCheck color='#0F47A8' size={16} />,
          label: "Full Policy Details",
        },
      ],
    },
    {
      icon: <ShieldCheck color='#FFFFFF' />,
      title: "Ongoing Protection & Claims",
      description:
        "The IBG provides continuous protection throughout the full warranty period (2–25 years depending on the measure). If the installer ceases trading or is unable to honor warranties, customers can submit claims directly through Bluedrop Services. The insurance provider handles all claims processing, arranges necessary repairs or replacements, and covers all costs, protecting both the customer's investment and the installer's reputation.",
      badges: [
        {
          icon: <Shield color='#0F47A8' size={16} />,
          label: "2–25 Year Coverage",
        },
        {
          icon: <Clock color='#0F47A8' size={16} />,
          label: "Continuous Protection",
        },
        {
          icon: <FileCheck color='#0F47A8' size={16} />,
          label: "Direct Claims Process",
        },
      ],
    },
  ];

  return (
    <section className='mx-6 lg:mx-35 px-4 py-15'>
      <SectionHeader
        title='How Insurance Backed Guarantees Work'
        subTitle='A simple, streamlined process that protects all parties while maintaining compliance'
        subTitleClassName='text-(--text-muted) font-medium text-[16px] max-w-210 mx-auto text-center'
      />

      <StepCardList
        cards={STEPS}
        className='pt-15'
        cardClassName='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] border border-[#E5E7EB] hover:border-[#b0b1b6] rounded-[10px]! '
      />
    </section>
  );
}
