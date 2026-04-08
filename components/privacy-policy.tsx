import {
  CircleCheckBig,
  Database,
  FileText,
  Lock,
  MailIcon,
  Shield,
} from "lucide-react";
import { InfoCard } from "./shared/info-card";

const PRIMARY = "#0F47A8";

const toRomanPoint = (index: number) => {
  const numerals = ["(i)", "(ii)", "(iii)", "(iv)", "(v)", "(vi)"];
  return numerals[index] ?? `(${index + 1})`;
};

// ─── Shared typography helpers (match existing text colours) ─────────────────
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className='text-xl sm:text-[22px] font-semibold text-[#111827] mt-6 mb-1 px-3 sm:px-5'>
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className='text-[17px] sm:text-[18px] font-semibold text-[#111827] mt-4 mb-1 px-3 sm:px-5'>
    {children}
  </h3>
);

const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className='text-[15px] sm:text-[16px] font-semibold text-[#111827] mt-3 mb-1 px-3 sm:px-5'>
    {children}
  </h4>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className='text-[#364153] text-[15px] sm:text-base leading-snug px-3 sm:px-5'>
    {children}
  </p>
);

const Bullet = () => (
  <span
    className='inline-block w-2.5 h-2.5 rounded-full mt-1 shrink-0'
    style={{ backgroundColor: PRIMARY }}
    aria-hidden='true'
  />
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className='mt-2 space-y-2 px-3 sm:px-5'>
    {items.map((item, i) => (
      <li
        key={i}
        className='flex gap-2 items-start text-[15px] sm:text-base text-[#364153]'>
        <Bullet />
        <span className='leading-snug'>{item}</span>
      </li>
    ))}
  </ul>
);

// ─── Blue highlight card ──────────────────────────────────
const DatabaseIcon = () => <Database color='#0F47A8' />;
const ShieldIcon = () => <Shield color='#0F47A8' />;
const LockIcon = () => <Lock color='#0F47A8' />;

const CARD_CLASS =
  "bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] shadow-sm border border-[#E5E7EB] hover:border-[#b0b1b6] rounded";

const HighlightCard = ({
  icon,
  title,
  description,
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) => (
  <div className={`${CARD_CLASS} p-3 sm:p-4 mx-3 sm:mx-5 my-3 flex gap-3`}>
    {icon && <span className='text-[#0F47A8] mt-0.5 shrink-0'>{icon}</span>}
    <div className='flex-1'>
      <p className='text-[#0F47A8] font-semibold text-[15px] sm:text-base'>
        {title}
      </p>
      {description && (
        <p className='text-[#364153] text-[15px] sm:text-base mt-1 leading-snug'>
          {description}
        </p>
      )}
      {children}
    </div>
  </div>
);

const CardGrid = ({
  items,
}: {
  items: { icon?: React.ReactNode; title: string; description: string }[];
}) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mx-3 sm:mx-5 my-3'>
    {items.map((item, i) => (
      <div key={i} className={`${CARD_CLASS} p-3 sm:p-4 flex gap-3`}>
        {item.icon && (
          <span className='text-[#0F47A8] mt-0.5 shrink-0'>{item.icon}</span>
        )}
        <div>
          <p className='text-[#0F47A8] font-semibold text-[15px] sm:text-base'>
            {item.title}
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base mt-1 leading-snug'>
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default function PrivacyPolicy() {
  // ── existing intro data ─────────────────────────────────────────────────────
  const introductionData = [
    {
      title: "Introduction",
      description:
        "Renewably UK Ltd is committed to protecting your privacy. This Privacy Policy applies to the personal data we collect and process in the course of our business. Renewably UK Ltd acts in different ways when processing data:",
      points: [
        "Renewably UK Ltd acts as a controller of your personal data when you sign up for our products and services, visit our websites or interact with us through other channels (for example in person events). We use this data for a variety of purposes, including to provide our products and services to you, contact you about relevant content, and improve and promote our products and services.",
        "Renewably UK Ltd acts as a processor when our customers use our products and services to collect and process personal data in connection with their sales, marketing, and other business activities. In this case, we act as a processor (or service provider) on behalf of our customers (who are controllers of personal data) under the Renewably UK Ltd Data Processing Agreement included in the Customer Terms of Service.",
        "Renewably UK Ltd also acts as a controller when we collect and process personal data about individuals in their professional capacity and make that information available to customers for their own sales, marketing, and other business activities. This includes personal data we may collect indirectly about you, such as from publicly available sources, our customers, or other third parties.",
      ].map((label, index) => ({
        label,
        icon: (
          <span
            className='text-sm font-semibold mt-0.5 inline-block'
            style={{ color: PRIMARY }}>
            {toRomanPoint(index)}
          </span>
        ),
      })),
    },
  ];

  const purposeData = [
    {
      title: "For the purposes of this Privacy Policy:",
      points: [
        {
          term: "Personal Data",
          text: " means any information relating to an identified or identifiable individual, including customer and policyholder information.",
        },
        {
          term: "Commercial Data",
          text: " means business-to-business contact information, CRM data, and other information related to commercial activities and business relationships.",
        },
      ].map((item) => ({
        label: (
          <>
            <strong style={{ color: PRIMARY }}>{item.term}</strong>
            {item.text}
          </>
        ),
        icon: (
          <span
            className='inline-block w-2.5 h-2.5 rounded-full mt-1 shrink-0'
            style={{ backgroundColor: PRIMARY }}
            aria-hidden='true'
          />
        ),
      })),
    },
  ];

  return (
    <section className='bg-white px-1 sm:px-2 pb-6'>
      {/* ── Introduction (existing) ─────────────────────────────────────── */}
      <div>
        {introductionData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl sm:text-[22px] -mt-2 sm:-mt-4'
            description={cardData.description}
            descriptionClassName='text-[15px] sm:text-base pb-4 text-[#364153]'
            className='bg-transparent'
            points={cardData.points}
            pointClassName='text-[#364153] text-[15px] sm:text-base leading-snug items-start'
          />
        ))}
      </div>

      {/* ── Company Details (existing) ──────────────────────────────────── */}
      <div className='bg-background mx-3 sm:mx-5 my-5 rounded p-4 sm:p-5'>
        <p className='text-white text-xl sm:text-[22px]'>Company Details</p>
        <p className='text-white text-[15px] sm:text-base pt-4'>
          Renewably UK Limited
        </p>
        <p className='text-white text-[15px] sm:text-base'>
          Company Registration No: 16076081
        </p>
        <p className='text-white text-[15px] sm:text-base'>
          ICO Registration No: ZC077762
        </p>
        <p className='text-white text-[15px] sm:text-base'>
          Registered Address: Luneside House, Blythe Gate, Blythe Valley Park,
          Solihull, West Midlands, B90 8AH
        </p>
      </div>

      {/* ── Purpose of Data Processing (existing) ──────────────────────── */}
      <div>
        {purposeData.map((cardData, index) => (
          <InfoCard
            key={index}
            title={cardData.title}
            titleClassName='text-xl sm:text-[22px] -mt-2 sm:-mt-4'
            descriptionClassName='text-[15px] sm:text-base pb-4 text-[#364153]'
            className='bg-transparent'
            points={cardData.points}
            pointClassName='text-[#364153] text-[15px] sm:text-base leading-snug items-center'
          />
        ))}
        <p className='px-3 sm:px-5 -mt-8 text-[#6B7280] text-[15px] sm:text-base'>
          This Privacy Policy describes your choices and rights with respect to
          your Personal Data, including your rights of access and correction.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          NEW SECTIONS BELOW — same padding/font rhythm as above
      ════════════════════════════════════════════════════════════════════ */}

      {/* ── Contents ────────────────────────────────────────────────────── */}
      <div className='px-3 sm:px-5 pt-4 pb-2'>
        <p className='font-semibold text-[#111827] text-xl sm:text-[22px] mb-3'>
          Contents
        </p>
        <ol className='space-y-1 list-decimal list-inside text-[15px] sm:text-base text-[#364153]'>
          {[
            "What Information We Collect and Process",
            "How We Use Personal Data",
            "How We Share Personal Data",
            "Data Storage Location",
            "How We Store and Secure Personal Data",
            "Cookies and Similar Technologies",
            "Your Privacy Rights and Choices",
            "UK GDPR and Data Protection",
            "Contact Us",
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>

      {/* ── 1. What Information We Collect and Process ─────────────────── */}
      <div className='pt-4'>
        <H2>1. What Information We Collect and Process</H2>

        <H3>1.1 Information You Provide to Renewably UK Ltd</H3>
        <Body>
          When you interact with us, including via our websites or any sites or
          services that link to this Privacy Policy, with our representatives,
          at events, or when you use our services, we may collect Personal Data
          and other information from you, as further described below.
        </Body>

        <H4>1.1.1 When You Visit Our Websites</H4>
        <Body>
          We collect Personal Data from you when you submit web forms or
          interact with our websites, for example by subscribing to a Renewably
          UK Ltd newsletter, signing up for a webinar, subscribing to one of our
          services or requesting customer support. We may ask for your email
          address, first and last name, job title, and other similar business
          information. You are free to explore some of our websites without
          providing any Personal Data about yourself.
        </Body>

        <H4>1.1.2 Account and User Information</H4>
        <Body>
          We collect Personal Data when you sign-up for a Renewably UK Ltd
          account, create or modify user information, set preferences, or
          provide any other related information to access or utilize our
          services.
        </Body>

        <H4>1.1.3 Payment Information</H4>
        <Body>
          We collect payment and billing information when you register for or
          purchase paid products or services. For example, we may ask you to
          provide a billing address, or a billing contact for your Renewably UK
          Ltd account. If you give us payment information, we use it solely as
          authorized by you in accordance with this Privacy Policy. We use
          secure third-party payment service providers to process personal and
          financial data.
        </Body>

        <H3>1.2 Information We Collect Automatically</H3>

        <H4>1.2.1 Usage Data</H4>
        <Body>
          We collect usage data when you or your users interact with our
          services. Usage data includes metrics and information regarding your
          use and interaction with our services such as what features you use
          the most and how often certain features are triggered in your account.
        </Body>

        <H4>1.2.2 Log Files</H4>
        <Body>
          Like most websites and technology services delivered over the
          Internet, we automatically collect and store information about your
          computer hardware and software when you visit our websites or use our
          services. This information can include your IP address, browser type,
          domain names, internet service provider (ISP), and the files viewed on
          our websites, your operating system, access times and referring
          website addresses.
        </Body>

        <H3>1.3 Information from Third Parties</H3>
        <Body>
          We may receive information from third party service providers, from
          related companies, and from our business and solution partners. We may
          collect Personal Data about you from other sources, such as third
          party providers and publicly available sources (like social media
          platforms). This may include physical mail addresses, job titles,
          email addresses, phone numbers, IP addresses, and social media
          profiles.
        </Body>
      </div>

      {/* ── 2. How We Use Personal Data ────────────────────────────────── */}
      <div className='pt-4'>
        <H2>2. How We Use Personal Data</H2>

        <H3>2.1 To Communicate with You About Our Services</H3>
        <Body>
          We use the account information you provide to Renewably UK Ltd when
          signing up for our products and services, to send you transactional
          emails or notifications about billing, account management, and other
          administrative matters. We also use your information to recommend new
          products and services and to provide customer support.
        </Body>

        <H3>2.2 To Provide Our Services</H3>
        <Body>
          We use your account information and customer data to provide our
          products and services to you. For example, we use the email address
          you provide when signing up to create your user account, and we use
          your payment information to process payments. We also use this
          information to authenticate you when you log in and to provide
          customer support.
        </Body>

        <H3>2.3 To Improve and Develop Our Services</H3>
        <Body>
          We use the information you provide us, professional data, log files,
          and usage data about how you or your users interact with our services
          to develop and improve our products, services, and communications. For
          example, we use usage data to assess trends and usage across our
          services to help us determine what new features or integrations our
          users may be interested in.
        </Body>

        <H3>2.4 To Secure and Protect Our Services</H3>
        <Body>
          We use your account information to investigate and help prevent
          security incidents. We may also use this information to meet legal
          requirements. We use your information to verify user accounts, new
          product sign-ups, and to detect and prevent product abuse.
        </Body>

        <H3>2.5 To Market and Promote Our Services</H3>
        <Body>
          We use Personal Data to advertise, market, and promote our products,
          services, and other offerings. For example, we use information like
          your email or physical address to send information or content to you
          we think may be of interest to you, including by post, email, or other
          means.
        </Body>
        <div className='mt-2'>
          <Body>
            You may opt out of receiving this promotional content by following
            the instructions contained in each communication that we send to
            you. If you unsubscribe from our marketing lists, we will continue
            to contact you regarding administrative matters, and to respond to
            your requests.
          </Body>
        </div>

        <H3>2.6 Legal Basis for Processing (UK Visitors)</H3>
        <Body>
          Our legal basis for collecting and using the Personal Data described
          above will depend on the Personal Data concerned and the specific
          context in which we collect it. However, we will normally collect
          Personal Data from you only where we have your consent to do so, where
          we need the Personal Data to perform a contract with you, or where the
          processing is in our legitimate interests and not overridden by your
          data protection interests or fundamental rights and freedoms.
        </Body>
      </div>

      {/* ── 3. How We Share Personal Data ──────────────────────────────── */}
      <div className='pt-4'>
        <H2>3. How We Share Personal Data</H2>

        <H3>3.1 Service Providers</H3>
        <Body>
          We may share Personal Data with our third party service providers to
          support our websites, products, and services. For example, we use
          service providers for data hosting, application development,
          marketing, sales support and customer support. These service providers
          are prohibited from using your Personal Data except for these
          purposes, and they are required to maintain the confidentiality of
          your information.
        </Body>

        <H3>3.2 Payment Services</H3>
        <Body>
          We use secure third-party payment service providers to process payment
          and financial data. Your personal and financial data is processed by
          these providers in accordance with their privacy policies and
          applicable UK financial regulations.
        </Body>

        <H3>3.3 Insurance Backed Guarantees</H3>
        <Body>
          For policyholders who have purchased an Insurance Backed Guarantee
          through Renewably UK Ltd, we share necessary personal information with
          Bluedrop Services Limited, our insurance underwriter. This information
          is required to issue, administer, and maintain your insurance policy.
        </Body>
        <BulletList
          items={[
            "Policyholder name and contact details",
            "Installation address and property details",
            "Policy coverage information and installation specifications",
            "Claims information (if applicable)",
          ]}
        />
        <div className='mt-3'>
          <Body>
            Bluedrop Services is required to process this data in accordance
            with UK GDPR and applicable insurance regulations. Renewably UK Ltd
            and Bluedrop Services act as joint data controllers for the purposes
            of insurance underwriting and policy administration.
          </Body>
        </div>

        <H3>3.4 Partners</H3>
        <Body>
          We may share your personal data with Renewably UK Ltd partners to: (i)
          contact you based on your communication preferences; (ii) help us
          perform statistical analysis; (iii) provide sales support; (iv)
          provide customer support; and (v) to improve our partner programs and
          services. Partners are prohibited from using your Personal Data except
          for the purposes stated herein, and they are required to maintain the
          confidentiality of your data.
        </Body>

        <H3>3.5 Corporate Events</H3>
        <Body>
          If we (or our assets) are acquired by another company, whether by
          merger, acquisition, bankruptcy or otherwise, that company would
          receive all information gathered by Renewably UK Ltd. In this event,
          you will be notified via email and/or a prominent notice on our
          website, of any change in ownership, uses of your Personal Data, and
          choices you may have regarding your Personal Data.
        </Body>

        <H3>3.6 Compelled Disclosure</H3>
        <Body>
          We reserve the right to use or disclose your Personal Data if required
          by law or if we reasonably believe that use or disclosure is necessary
          to protect our rights, protect your safety or the safety of others,
          investigate fraud, or comply with a law, court order, or legal
          process.
        </Body>
      </div>

      {/* ── 4. Data Storage Location ────────────────────────────────────── */}
      <div className='pt-4'>
        <H2>4. Data Storage Location</H2>

        <HighlightCard
          icon={<DatabaseIcon />}
          title='Data Storage Location'
          description='Personal Data is stored exclusively within the United Kingdom. Commercial Data is stored within the European Union in compliance with UK GDPR adequacy regulations.'
        />

        <H3>4.1 Personal Data – AWS Europe (London) Region</H3>
        <Body>
          All Personal Data collected and processed by Renewably UK Ltd is
          stored using Amazon Web Services (AWS) Europe (London) region
          (eu-west-2), which is physically located in the United Kingdom. This
          ensures that your data remains subject to UK data protection laws and
          regulations at all times, providing you with the highest level of
          protection under UK GDPR and the Data Protection Act 2018.
        </Body>

        <HighlightCard icon={<DatabaseIcon />} title='Data Storage Location'>
          <p className='text-[#364153] text-base mt-1 leading-snug'>
            Personal Data is stored exclusively within the United Kingdom.
            Commercial Data is stored within the European Union in compliance
            with UK GDPR adequacy regulations.
          </p>
          <BulletList
            items={[
              "Physical data centres located exclusively in the United Kingdom",
              "AWS ISO 27001, ISO 27017, ISO 27018, and SOC 1/2/3 certifications",
              "Enterprise-grade security and compliance frameworks",
              "99.99% availability SLA for critical services",
              "Designed specifically for UK GDPR compliance requirements",
            ]}
          />
        </HighlightCard>

        <CardGrid
          items={[
            {
              icon: <ShieldIcon />,
              title: "UK Data Sovereignty",
              description:
                "Personal Data remains within UK borders, ensuring compliance with UK regulations",
            },
            {
              icon: <LockIcon />,
              title: "Secure Infrastructure",
              description:
                "Enterprise-grade UK data centres with ISO 27001 certification",
            },
          ]}
        />

        <H3>4.3 Data Protection Measures</H3>
        <Body>Our UK-based data centres provide:</Body>
        <BulletList
          items={[
            "24/7 physical security and monitoring",
            "Redundant power and network infrastructure",
            "Industry-standard encryption for data at rest and in transit",
            "Regular security audits and compliance assessments",
            "Disaster recovery and business continuity measures",
            "Full compliance with UK GDPR and Data Protection Act 2018",
          ]}
        />

        <H3>4.2 Commercial Data – HubSpot EU Services</H3>
        <Body>
          Commercial Data, including business contact information and CRM data,
          is stored using HubSpot’s services. This data is primarily hosted in
          HubSpot’s European Union data centre located in Frankfurt, Germany,
          which operates via Amazon Web Services (AWS) infrastructure.
        </Body>

        <HighlightCard
          icon={<DatabaseIcon />}
          title='HubSpot EU Infrastructure'>
          <p className='text-[#364153] text-base mt-1 leading-snug'>
            HubSpot’s European Union data centre provides secure infrastructure
            within the EU:
          </p>
          <BulletList
            items={[
              "Physical data centres located in Frankfurt, Germany",
              "Hosted via AWS infrastructure with enterprise-grade security",
              "ISO 27001, ISO 27018, and SOC 2 Type II certifications",
              "Full compliance with EU GDPR and UK GDPR adequacy requirements",
              "Data Processing Addendum in place ensuring UK GDPR protections",
            ]}
          />
        </HighlightCard>

        {/* Data transfers callout */}
        <div
          className='rounded p-4 mx-3 sm:mx-5 mt-3 mb-2'
          style={{ backgroundColor: PRIMARY }}>
          <p className='text-white text-[15px] sm:text-base leading-snug'>
            <strong className='text-white'>Data Transfers and Adequacy:</strong>{" "}
            The European Union has been recognized by the UK as providing
            adequate data protection under UK GDPR. This means that transfers of
            Commercial Data to EU member states, including Germany where
            HubSpot’s EU data centre is located, are permitted without
            additional safeguards.
          </p>
          <p className='text-white text-[15px] sm:text-base leading-snug mt-3'>
            <strong className='text-white'>Personal Data:</strong> All Personal
            Data remains exclusively within the United Kingdom (AWS London
            region). Commercial Data stored in the EU relates only to business
            contacts and commercial information.
          </p>
        </div>
      </div>

      {/* ── 5. How We Store and Secure Personal Data ───────────────────── */}
      <div className='pt-4'>
        <H2>5. How We Store and Secure Personal Data</H2>

        <H3>5.1 Data Storage and Security</H3>
        <Body>
          We use a variety of security technologies and procedures to help
          protect your data from unauthorized access, use or disclosure. Our
          data is stored across two secure platforms:
        </Body>
        <ul className='mt-2 space-y-2 px-3 sm:px-5'>
          <li className='flex gap-2 items-start text-[15px] sm:text-base text-[#364153]'>
            <Bullet />
            <span className='leading-snug'>
              <strong>Personal Data:</strong> Stored using Amazon Web Services
              (AWS) Europe (London) region (eu-west-2), ensuring your data
              remains physically located within the United Kingdom at all times.
            </span>
          </li>
          <li className='flex gap-2 items-start text-[15px] sm:text-base text-[#364153]'>
            <Bullet />
            <span className='leading-snug'>
              <strong>Commercial Data:</strong> Stored using HubSpot’s European
              Union data centre in Frankfurt, Germany, operating via AWS
              infrastructure with full UK GDPR adequacy protections.
            </span>
          </li>
        </ul>
        <div className='mt-3'>
          <Body>
            We secure all data you provide on computer servers in controlled,
            secure environments, protected from unauthorized access, use or
            disclosure. All data is protected using appropriate physical,
            technical and organizational measures in accordance with
            industry-leading security frameworks and UK GDPR requirements.
          </Body>
        </div>

        <CardGrid
          items={[
            {
              icon: <ShieldIcon />,
              title: "Encryption",
              description:
                "Data encrypted at rest and in transit using industry-standard protocols",
            },
            {
              icon: <LockIcon />,
              title: "Secure Infrastructure",
              description:
                "AWS Europe (London) region (eu-west-2) with enterprise-grade security controls",
            },
            {
              icon: <ShieldIcon />,
              title: "Access Controls",
              description: "Strict access controls and authentication measures",
            },
            {
              icon: <DatabaseIcon />,
              title: "Regular Backups",
              description: "Automated backups and disaster recovery procedures",
            },
          ]}
        />

        <H3>5.2 Retention of Personal Data</H3>
        <Body>
          How long we keep information we collect about you depends on the type
          of information and how we collect and store it. After a reasonable
          period of time, we will either delete or anonymize your information
          or, if this is not possible, then we will securely store your
          information and isolate it from any further use until deletion is
          possible.
        </Body>
        <div className='mt-2'>
          <Body>
            We retain Personal Data that you provide to us where we have an
            ongoing legitimate business need to do so (for example, as needed to
            comply with our legal obligations, resolve disputes and enforce our
            agreements).
          </Body>
        </div>
      </div>

      {/* ── 6. Cookies and Similar Technologies ────────────────────────── */}
      <div className='pt-4 pb-6'>
        <H2>6. Cookies and Similar Technologies</H2>
        <Body>
          When you visit our websites, sign up for a Renewably UK Ltd account,
          or request more information about Renewably UK Ltd, we collect
          information automatically using tracking technologies, like cookies
          and tracking pixels.
        </Body>
        <div className='mt-2'>
          <Body>
            Renewably UK Ltd may use cookies or similar technologies (such as
            web beacons and JavaScript) to analyze trends, administer the
            website, monitor how visitors navigate around the websites, and to
            gather demographic information about our user base as a whole.
          </Body>
        </div>

        <HighlightCard
          icon={<ShieldIcon />}
          title='Managing Cookies'
          description='You can control and manage cookies in your browser settings. Please note that removing or blocking cookies can impact your user experience and some functionality may not work as intended.'
        />
      </div>

      {/* ── 7. Your Privacy Rights and Choices ─────────────────────────── */}
      <div className='pt-4'>
        <H2>7. Your Privacy Rights and Choices</H2>
        <Body>
          Under UK GDPR and the Data Protection Act 2018, you have the following
          data protection rights:
        </Body>

        <ul className='mt-3 space-y-3 px-3 sm:px-5'>
          {[
            {
              title: "Right to Access",
              text: "You can request access to your Personal Data and receive a copy of the information we hold about you.",
            },
            {
              title: "Right to Rectification",
              text: "You can request that we correct any inaccurate or incomplete Personal Data.",
            },
            {
              title: "Right to Erasure",
              text: "You can request deletion of your Personal Data in certain circumstances.",
            },
            {
              title: "Right to Restrict Processing",
              text: "You can request that we restrict the processing of your Personal Data in certain circumstances.",
            },
            {
              title: "Right to Data Portability",
              text: "You can request a copy of your Personal Data in a structured, commonly used, and machine-readable format.",
            },
            {
              title: "Right to Object",
              text: "You can object to the processing of your Personal Data in certain circumstances.",
            },
            {
              title: "Right to Withdraw Consent",
              text: "Where we process your Personal Data based on consent, you can withdraw your consent at any time.",
            },
          ].map((item, i) => (
            <li key={i} className='flex gap-2 items-center'>
              <CircleCheckBig color='#0F47A8' size={18} />
              <span className='text-[15px] sm:text-base text-[#364153] leading-snug'>
                <strong className='text-[#111827]'>{item.title}</strong>
                <br />
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <HighlightCard
          icon={<ShieldIcon />}
          title='How to Exercise Your Rights'>
          <p className='text-[#364153] text-base mt-1 leading-snug'>
            To exercise any of these rights, please contact us at:
          </p>
          <p className='text-[#364153] text-base mt-2 leading-snug'>
            <strong>Email:</strong>{" "}
            <span className='text-[#0F47A8]'>privacy@renewably.energy</span>
          </p>
          <p className='text-[#364153] text-base mt-1 leading-snug'>
            <strong>Post:</strong> Data Protection Officer, Renewably UK
            Limited, Luneside House, Blythe Gate, Blythe Valley Park, Solihull,
            West Midlands, B90 8AH
          </p>
          <p className='text-[#364153] text-base mt-2 leading-snug'>
            We will respond to your request within one month of receipt. In
            certain circumstances, we may extend this period by a further two
            months where necessary, taking into account the complexity and
            number of requests.
          </p>
        </HighlightCard>

        <H3>Unsubscribe from Marketing Communications</H3>
        <Body>You may unsubscribe from our marketing communications by:</Body>
        <BulletList
          items={[
            `Clicking the "unsubscribe" link in any marketing email`,
            "Updating your communication preferences in your account settings",
            "Contacting us at privacy@renewably.energy",
          ]}
        />
        <div className='mt-2'>
          <Body>
            Please note that you cannot opt out of receiving transactional
            emails related to your account or our services.
          </Body>
        </div>
      </div>

      {/* ── 8. UK GDPR and Data Protection ─────────────────────────────── */}
      <div className='pt-4'>
        <H2>8. UK GDPR and Data Protection</H2>
        <Body>
          As a UK-based company, Renewably UK Ltd is subject to the UK General
          Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          We are committed to complying with all applicable data protection laws
          and regulations.
        </Body>

        <H4>ICO Registration</H4>
        <Body>
          Renewably UK Ltd is registered with the Information Commissioner’s
          Office (ICO) under registration number <strong>ZC077762</strong>. You
          can verify our registration on the ICO website.
        </Body>

        <H4>Right to Lodge a Complaint</H4>
        <Body>
          If you believe we have not handled your Personal Data in accordance
          with applicable data protection laws, you have the right to lodge a
          complaint with the Information Commissioner’s Office (ICO):
        </Body>

        <div className={`${CARD_CLASS} p-3 sm:p-4 mx-3 sm:mx-5 my-3`}>
          <p className='text-[#111827] font-semibold text-[15px] sm:text-base mb-2'>
            Information Commissioner’s Office
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            Wycliffe House
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            Water Lane
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            Willow
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            Cheshire
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug mb-2'>
            SK9 5AF
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            <strong>Tel:</strong> 0303 123 1113
          </p>
          <p className='text-[#364153] text-[15px] sm:text-base leading-snug'>
            <strong>Website:</strong>{" "}
            <span className='text-[#0F47A8]'>www.ico.org.uk</span>
          </p>
        </div>
      </div>

      {/* ── 9. Contact Us ───────────────────────────────────────────────── */}
      <div className='pt-4'>
        <H2>9. Contact Us</H2>
        <Body>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us:
        </Body>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mx-3 sm:mx-5 my-3'>
          <InfoCard
            icon={<MailIcon size={16} color='#0F47A8' />}
            title='Email'
            titleClassName='text-[16px]'
            description='privacy@renewably.energy'
            descriptionClassName='text-[15px] sm:text-base pb-4 text-[#364153]'
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] cursor-pointer'
          />

          <InfoCard
            icon={<FileText size={16} color='#0F47A8' />}
            title='Post'
            titleClassName='text-[16px]'
            description={
              <div className='flex flex-col gap-0.5 '>
                <p>Data Protection Officer</p>
                <p>Renewably UK Limited</p>
                <p>Luneside House, Blythe Gate</p>
                <p>Blythe Valley Park, Solihull</p>
                <p>West Midlands, B90 8AH</p>
              </div>
            }
            descriptionClassName='text-[15px] sm:text-base pb-4 text-[#364153]'
            iconBgClassName='bg-[#B4CDF7]'
            className='bg-[linear-gradient(110deg,#F5F8FF_0%,#DBEAFE_60%)] cursor-pointer'
          />
        </div>

        <div className='bg-[#0F47A8] rounded p-4 mx-3 sm:mx-5 mt-3'>
          <p className='text-white font-semibold text-[15px] sm:text-base mb-2'>
            Policy Updates
          </p>
          <p className='text-white text-[15px] sm:text-base leading-snug'>
            We update this Privacy Policy from time to time and encourage you to
            review this Privacy Policy periodically. We will post any Privacy
            Policy changes on this page and, if the changes are material, notify
            you directly (for example, by sending you an email notification).
          </p>
          <p className='text-white text-[15px] sm:text-base mt-2'>
            Last Updated: March 2026
          </p>
        </div>
      </div>
    </section>
  );
}
