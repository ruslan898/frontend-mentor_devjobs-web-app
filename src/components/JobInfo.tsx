import Button from "./Button";
import Title from "./Title";

export default function JobInfo() {
  return (
    <section className="bg-surface container max-w-182.5 rounded-md px-6 py-10 md:p-11">
      <header className="flex flex-col gap-14 md:flex-row md:items-center md:justify-between">
        <div>
          <ul className="mb-1 flex gap-3 md:mb-1.5">
            <li className="text-lg">1w ago</li>
            <span className="bg-tpg-muted my-auto size-1 rounded-md"></span>
            <li>Part Time</li>
          </ul>
          <Title level={1} variant="lg">
            Senior Software Engineer
          </Title>
          <p className="text-accent mt-1 text-sm font-bold md:mt-1.5">
            United Kingdrom
          </p>
        </div>

        <Button className="max-w-full">Apply Now</Button>
      </header>

      <p className="mt-8 mb-14 md:mt-10 md:mb-11">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna.
      </p>

      <Title level={2} variant="sm">
        Requirements
      </Title>
      <p className="mt-6 mb-8 md:my-6">
        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
        dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
        adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
        pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
        vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
        vulputate vel, nisl.
      </p>
      <ul className="mb-14 flex flex-col gap-2 md:mb-11">
        <li className="before:bg-accent relative pl-9 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full">
          Morbi interdum mollis sapien. Sed
        </li>
        <li className="before:bg-accent relative pl-9 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full">
          Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
          risus
        </li>
        <li className="before:bg-accent relative pl-9 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full">
          Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
          tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
        </li>
        <li className="before:bg-accent relative pl-9 before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full">
          Morbi interdum mollis sapien. Sed
        </li>
      </ul>

      <Title level={2} variant="sm">
        What You Will Do
      </Title>
      <p className="mt-6 mb-8 md:my-6">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
      </p>
      <ol className="flex flex-col gap-2">
        <li className="before:text-accent relative pl-9 before:absolute before:left-0 before:font-bold before:content-['1']">
          Morbi interdum mollis sapien. Sed
        </li>
        <li className="before:text-accent relative pl-9 before:absolute before:left-0 before:font-bold before:content-['2']">
          Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
          risus
        </li>
        <li className="before:text-accent relative pl-9 before:absolute before:left-0 before:font-bold before:content-['3']">
          Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
          tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
        </li>
        <li className="before:text-accent relative pl-9 before:absolute before:left-0 before:font-bold before:content-['4']">
          Morbi interdum mollis sapien. Sed
        </li>
      </ol>
    </section>
  );
}
