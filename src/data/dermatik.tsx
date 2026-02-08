// ============================================
// Dermatik Case Study Data
// All content data for the Dermatik case study page
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: 'http://localhost:3845/assets/logo-dermatik.png', // Will use placeholder
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
        Dermatik is a digital healthcare platform connecting patients with dermatologists
        through AI-powered preliminary diagnosis and seamless telemedicine consultations.
      </p>
      <p className="mt-4">
        The challenge was to design an intuitive patient journey—from booking appointments
        to receiving AI-assisted preliminary analysis and communicating with healthcare
        providers—all while maintaining medical accuracy and patient trust.
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
        <p>A validated patient journey from symptom check to specialist consultation</p>
        <p>AI-powered preliminary diagnosis interface with 89% user satisfaction</p>
        <p>Seamless appointment booking reducing no-shows by 35%</p>
        <p>HIPAA-compliant chat system with integrated medical history</p>
      </div>
    ),
  },
};

// Design Process Section
export const designProcessData = {
  label: 'DESIGN PROCESS',
  title: 'From problem to solution',
  description:
    'A structured approach to healthcare UX, balancing medical requirements with patient needs.',
  timeline: [
    { label: 'Research', value: 'User interviews, competitor analysis' },
    { label: 'Define', value: 'Patient journey mapping' },
    { label: 'Ideate', value: 'Concept workshops' },
    { label: 'Prototype', value: 'High-fidelity mockups' },
    { label: 'Test', value: 'Usability testing with patients' },
  ],
  image: {
    src: 'http://localhost:3845/assets/design-process-dermatik.png',
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
    'The platform combines AI technology with human expertise to provide comprehensive dermatology care.',
  features: [
    {
      title: 'Smart Appointment Booking',
      description:
        'Calendar integration with real-time availability, automated reminders, and easy rescheduling.',
    },
    {
      title: 'AI-Powered Preliminary Analysis',
      description:
        'Image recognition for skin conditions with confidence scoring and severity assessment.',
    },
    {
      title: 'Secure Medical Chat',
      description:
        'HIPAA-compliant messaging with file sharing for images and medical documents.',
    },
    {
      title: 'Personal Health Records',
      description:
        'Centralized history of appointments, diagnoses, and treatment plans.',
    },
    {
      title: 'Doctor Matching',
      description:
        'Intelligent matching based on condition type, language, and availability.',
    },
    {
      title: 'Treatment Tracking',
      description:
        'Progress monitoring with photo timelines and medication reminders.',
    },
  ],
};

// Patient Flow Section
export const patientFlowData = {
  label: 'PATIENT FLOW',
  title: 'End-to-end patient journey',
  description:
    'A streamlined three-step process from booking to consultation, designed to reduce anxiety and build trust.',
  steps: [
    {
      number: '01',
      title: 'Book Your Appointment',
      description: (
        <>
          <p>
            Patients can easily view available time slots in a calendar interface. The system
            shows doctor availability in real-time and allows filtering by specialty,
            language, and preferred time.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>Visual calendar with clear availability indicators</li>
            <li>One-tap appointment selection</li>
            <li>Automatic timezone detection</li>
            <li>Push notification reminders</li>
          </ul>
        </>
      ),
      image: {
        src: 'http://localhost:3845/assets/appointment-calendar.png',
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
            Before the consultation, patients can upload photos of their skin condition for
            AI analysis. The system provides a preliminary assessment with confidence scores,
            helping patients understand the urgency of their condition.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>Clear photo capture guidance</li>
            <li>Progressive disclosure of AI results</li>
            <li>Confidence indicators to set expectations</li>
            <li>Clear disclaimer about AI limitations</li>
          </ul>
        </>
      ),
      image: {
        src: 'http://localhost:3845/assets/ai-diagnosis.png',
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
            The chat interface enables secure communication between patients and doctors.
            Medical history is accessible during the conversation, and doctors can provide
            prescriptions and follow-up recommendations.
          </p>
          <p className="mt-2">
            Key design decisions:
          </p>
          <ul className="list-disc ml-5 space-y-1 mt-1">
            <li>Familiar chat interface (WhatsApp-like)</li>
            <li>In-context medical history access</li>
            <li>Image sharing for visual references</li>
            <li>Read receipts for message confirmation</li>
          </ul>
        </>
      ),
      image: {
        src: 'http://localhost:3845/assets/doctor-chat.png',
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
        The Dermatik platform successfully bridges the gap between patients and dermatologists,
        reducing wait times and improving access to specialized care. The AI-powered
        preliminary analysis helps prioritize urgent cases while providing peace of mind
        for patients with minor concerns.
      </p>
      <p className="mt-4">
        Key metrics achieved:
      </p>
      <ul className="list-disc ml-5 space-y-1 mt-2">
        <li>89% user satisfaction rate</li>
        <li>35% reduction in appointment no-shows</li>
        <li>2.5x faster patient onboarding</li>
        <li>95% of patients successfully completed AI analysis</li>
      </ul>
    </>
  ),
};

// Profile Screen Section
export const profileData = {
  image: {
    src: 'http://localhost:3845/assets/profile-screen.png',
    alt: 'Patient Profile Screen',
    width: 349,
    height: 621,
  },
  content: {
    title: 'Medical History & Profile',
    description: (
      <>
        <p>
          The profile section serves as a comprehensive health record, giving both patients
          and doctors quick access to medical history, previous appointments, and treatment
          outcomes.
        </p>
        <p className="mt-4">
          Design considerations for medical records:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>Chronological timeline of appointments</li>
          <li>Visual treatment progress tracking</li>
          <li>Searchable medical history</li>
          <li>Secure document storage</li>
        </ul>
      </>
    ),
  },
};
