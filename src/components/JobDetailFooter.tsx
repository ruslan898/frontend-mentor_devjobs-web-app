import Button from "./Button";
import Title from "./Title";

export default function JobDetailFooter() {
  return (
    <footer className="bg-surface py-6.5 md:py-5">
      <div className="container max-w-182.5 md:flex md:items-center md:justify-between">
        <div className="hidden md:block">
          <Title level={3} variant="sm">
            Senior Software Engineer
          </Title>
          <p className="mt-1.5">So Digital Inc.</p>
        </div>
        <Button className="max-md:w-full max-md:max-w-full">Apply Now</Button>
      </div>
    </footer>
  );
}
