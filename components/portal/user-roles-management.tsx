import { InfoCard } from "../shared/info-card";
import { Building2, CircleCheckBig, UserCheck, Users } from "lucide-react";
import SectionHeader from "../shared/section-header";

export default function UserRolesAndManagement() {
  const managementData = [
    {
      title: "Account Owner",
      description:
        "Full system access including billing, user management, and all documents across all projects.",
      icon: <Building2 color='#0F47A8' strokeWidth={1.5} />,
      points: [
        {
          label: "Manage team members",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "Access all projects",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "Billing & subscription control",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
      ],
    },
    {
      title: "Project Manager",
      description:
        "Submit projects, generate IBGs, upload documents, view reports. Cannot manage users or billing.",
      icon: <Users color='#0F47A8' strokeWidth={1.5} />,
      points: [
        {
          label: "Create & edit projects",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "Generate IBGs",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "Upload/download documents",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
      ],
    },
    {
      title: "View-Only Access",
      description:
        "Read-only access to assigned projects. Ideal for accountants, surveyors, or external auditors.",
      icon: <UserCheck color='#0F47A8' strokeWidth={1.5} />,
      points: [
        {
          label: "View project details",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "Download documents",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
        {
          label: "No edit permissions",
          icon: <CircleCheckBig color='#FFFFFF' className='w-4 h-4' strokeWidth={1.5} />,
        },
      ],
    },
  ];
  return (
    <section className='bg-background py-15'>
      <SectionHeader
        title='User Roles & Management'
        titleClassName='text-white'
        subTitle='Control who sees what with granular permission settings'
        subTitleClassName='text-white font-medium text-[16px] max-w-160 mx-auto text-center'
      />
      <div className='mx-6 lg:mx-35 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 py-15'>
          {managementData.map((cardData, index) => (
            <InfoCard
              key={index}
              title={cardData.title}
              titleClassName='text-2xl text-white'
              align='center'
              description={cardData.description}
              descriptionClassName='max-w-80 text-base text-white'
              icon={cardData.icon}
              iconBgClassName='bg-white rounded-full'
              iconWrapperClassName='w-16 h-16 [&>svg]:w-8 [&>svg]:h-8'
              className='bg-[#FFFFFF33] border border-[#E5E7EB] hover:border-[#6e6eaf] rounded-[10px]! [&_ul]:w-full [&_ul]:items-start'
              points={cardData.points}
              pointClassName='w-full justify-start text-left text-[#6B7280] text-base font-medium text-white'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
