import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/portfolio";

interface BeforeAfterProps {
  title: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  title,
  description,
  beforeSrc,
  afterSrc,
}) => {
  return (
    <div className="card card-bordered bg-base-100 shadow-sm mb-12">
      <div className="card-body">
        <h3 className="card-title text-xl font-semibold">{title}</h3>
        <p className="text-base-content">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Before Column */}
          <div>
            <h4 className="text-lg font-medium mb-2">Before</h4>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={beforeSrc}
                alt={`${title} - Before`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* After Column */}
          <div>
            <h4 className="text-lg font-medium mb-2">After</h4>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={afterSrc}
                alt={`${title} - After`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold text-base-content mb-4">Our Work</h1>

      <Link href="/" className="btn btn-link mb-6">
        &larr; Back to Home
      </Link>

      {portfolio.map((item, index) => (
        <BeforeAfter
          key={index}
          title={item.title}
          description={item.description}
          beforeSrc={item.beforeSrc}
          afterSrc={item.afterSrc}
        />
      ))}
    </>
  );
}
