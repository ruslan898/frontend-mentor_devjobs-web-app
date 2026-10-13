import CompanyLabel from "@/components/CompanyLabel";
import JobDetailFooter from "@/components/JobDetailFooter";
import JobInfo from "@/components/JobInfo";

export default function Detail() {
  return (
    <>
      <div className="mb-16 flex -translate-y-10 flex-col gap-6 md:mb-13.25 md:gap-8">
        <CompanyLabel />
        <JobInfo />
      </div>
      <JobDetailFooter />
    </>
  );
}
