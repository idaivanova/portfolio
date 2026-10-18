// ============================================
// Dermatik Case Study Data
// All content data for the Dermatik case study page
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: '/assets/dermatik/placeholder.svg',
    alt: 'Dermatik Logo',
    width: 213,
    height: 213,
  },
  title: (
    <>
      <span className="font-extrabold">Healthcare UX: </span>
      <span className="font-normal">Telemedicine for Dermatology Care</span>
    </>
  ),
  description: (
    <>
      <p>
        Dermatik is a digital healthcare platform where patients meet dermatologists. An AI
        looks at your photos first, then a real person picks up the conversation.
      </p>
      <p className="mt-4">
        I spent two weeks on it as a concept: what a patient journey could look like from
        booking an appointment, through the AI-assisted first look, to talking with a
        provider. The part I cared about most was keeping the patient calm throughout.
      </p>
    </>
  ),
  tags: [
    { label: 'UX Research' },
    { label: 'UX Audit' },
    { label: 'Concept Ideation' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Design and Research, UI Design' },
      { label: 'Tools', value: 'Figma, Miro' },
      {
        label: 'Skills involved',
        value:
          'user research, healthcare UX, patient journey mapping, AI integration design, mobile-first design',
      },
      { label: 'Team', value: 'collaboration with medical experts and developers' },
      { label: 'Time frame', value: 'two weeks' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>
          A structured patient journey concept from symptom check to specialist consultation
        </p>
        <p>
          Designed in collaboration with medical experts and developers over two weeks
        </p>
        <p>
          A concept, not a shipped product — built to explore how AI-assisted triage could
          sit inside a telemedicine flow
        </p>
      </div>
    ),
  },
};

// Design Process Section
export const designProcessData = {
  label: 'DESIGN PROCESS',
  title: 'From problem to solution',
  description:
    'Healthcare UX has its own constraints. The medical side sets some of them, and everything else has to earn its place by making people feel calmer.',
  timeline: [
    { label: 'Research', value: 'User interviews, competitor analysis' },
    { label: 'Define', value: 'Patient journey mapping' },
    { label: 'Ideate', value: 'Concept workshops' },
    { label: 'Prototype', value: 'High-fidelity mockups' },
    { label: 'Test', value: 'Usability testing with patients' },
  ],
  image: {
    src: '/assets/dermatik/placeholder.svg',
    alt: 'Design Process Diagram',
    width: 500,
    height: 96,
  },
};

// Key Features Section
export const keyFeaturesData = {
  label: 'KEY FEATURES',
  title: 'Core functionality for patient care',
  description:
    'AI does the sorting, dermatologists do the thinking. My job was to make both halves feel like one calm experience.',
  features: [
    {
      title: 'Smart Appointment Booking',
      description:
        'A calendar with live availability, reminders sent automatically, and rescheduling in two taps.',
    },
    {
      title: 'AI-Powered Preliminary Analysis',
      description:
        'Photo analysis for skin conditions, with a confidence score and a severity read so patients know how urgent they are.',
    },
    {
      title: 'Secure Medical Chat',
      description:
        'A messaging concept where patients can attach images and documents, built with privacy requirements in mind.',
    },
    {
      title: 'Personal Health Records',
      description:
        'One place for appointments, diagnoses and treatment plans.',
    },
    {
      title: 'Doctor Matching',
      description:
        'Matching on condition, language and when people are actually free.',
    },
    {
      title: 'Treatment Tracking',
      description:
        'Photo timelines and medication reminders, so progress is visible.',
    },
  ],
};

// Patient Flow Section
export const patientFlowData = {
  label: 'PATIENT FLOW',
  title: 'End-to-end patient journey',
  description:
    'Three steps from booking to consultation. Nobody should feel rushed while they wait for a doctor to answer.',
  steps: [
    {
      number: '01',
      title: 'Book Your Appointment',
      description: (
        <>
          <p>
            Patients see real availability in a calendar, filtered by specialty, language and
            the time of day that actually suits them.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>A calendar that shows open slots at a glance</li>
            <li>One tap to pick a time</li>
            <li>Automatic timezone detection</li>
            <li>Push notification reminders</li>
          </ul>
        </>
      ),
      image: {
        src: '/assets/dermatik/placeholder.svg',
        alt: 'Appointment Booking Screen',
        width: 246,
        height: 438,
      },
    },
    {
      number: '02',
      title: 'AI-Powered Preliminary Analysis',
      description: (
        <>
          <p>
            Before the consultation, patients upload photos and get a first assessment with a
            confidence score. It tells them how urgent this is, without pretending to be a
            diagnosis.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>Guidance while taking the photo, since bad photos give bad answers</li>
            <li>Results revealed a layer at a time</li>
            <li>Confidence shown up front, not buried</li>
            <li>A clear disclaimer about what the AI can&rsquo;t do</li>
          </ul>
        </>
      ),
      image: {
        src: '/assets/dermatik/placeholder.svg',
        alt: 'AI Diagnosis Screen',
        width: 291,
        height: 517,
      },
    },
    {
      number: '03',
      title: 'Connect with Your Doctor',
      description: (
        <>
          <p>
            The chat is where the human part happens. Medical history sits right there in
            the conversation, so the doctor doesn&rsquo;t have to ask again, and they can send
            prescriptions and follow-up notes through the same thread.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>A familiar chat layout, WhatsApp-style</li>
            <li>Medical history in reach, not behind a menu</li>
            <li>Image sharing when a photo says more than a paragraph</li>
            <li>Read receipts, because waiting in silence is worse than waiting</li>
          </ul>
        </>
      ),
      image: {
        src: '/assets/dermatik/placeholder.svg',
        alt: 'Doctor Chat Screen',
        width: 305,
        height: 543,
      },
    },
  ],
};

// Results/Reflection Section
export const reflectionData = {
  label: 'RESULTS',
  title: 'Impact and outcomes',
  description: (
    <>
      <p>
        Dermatik was a two-week concept, not a shipped product. The goal was to sketch a
        patient journey that feels calm under stress — from noticing something on your skin
        to sitting in front of an actual specialist — and to figure out where AI-assisted
        triage could help without getting in the way.
      </p>
      <p className="mt-4">
        What I took away from it:
      </p>
      <ul className="list-disc ml-5 space-y-1 mt-2">
        <li>Healthcare UX is mostly about lowering anxiety, not adding features</li>
        <li>Working with medical experts early saved me from some very confident mistakes</li>
        <li>Two weeks is short, and honestly, the concept shows it — that&rsquo;s part of the point</li>
      </ul>
    </>
  ),
};

// Profile Screen Section
export const profileData = {
  image: {
    src: '/assets/dermatik/placeholder.svg',
    alt: 'Patient Profile Screen',
    width: 349,
    height: 621,
  },
  content: {
    title: 'Medical History & Profile',
    description: (
      <>
        <p>
          One health record for both sides. Patients can find their own history, and a
          doctor opening a file sees the whole story in a second.
        </p>
        <p className="mt-4">
          What I had to design for:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Appointments on a chronological timeline</li>
          <li>Treatment progress you can see at a glance</li>
          <li>A history you can actually search</li>
          <li>Documents stored where only the patient and their doctor can get them</li>
        </ul>
      </>
    ),
  },
};
