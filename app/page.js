import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServicesGrid from "@/components/ServicesGrid";
import Doctors from "@/components/Doctors";
import Departments from "@/components/Departments";
import OperationTheatre from "@/components/OperationTheatre";
import Pharmacy from "@/components/Pharmacy";
import AdmissionTimeline from "@/components/AdmissionTimeline";
import Aarogyasri from "@/components/Aarogyasri";
import PatientJourney from "@/components/PatientJourney";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AIAssistant from "@/components/AIAssistant";
import HealthBlog from "@/components/HealthBlog";
import MapAndBooking from "@/components/MapAndBooking";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <Doctors />
      <Departments />
      <OperationTheatre />
      <Pharmacy />
      <AdmissionTimeline />
      <Aarogyasri />
      <PatientJourney />
      <Stats />
      <Testimonials />
      <AIAssistant />
      <HealthBlog />
      <MapAndBooking />
    </main>
  );
}
