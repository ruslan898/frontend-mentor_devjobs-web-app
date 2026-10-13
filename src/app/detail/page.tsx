import CompanyLabel from "@/components/CompanyLabel";
import JobInfo from "@/components/JobInfo";

export default function Detail() {
  return (
    <div className="flex -translate-y-10 flex-col gap-6 md:gap-8">
      <CompanyLabel />
      <JobInfo />
    </div>
  );
}
