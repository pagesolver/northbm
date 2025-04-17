import Image from "next/image";
import Link from "next/link";

interface ComparisonResponse {
  comparisons: Comparison[];
}

interface Comparison {
  title: string;
  description?: string;
  business_id: string;
  before_url: string;
  after_url: string;
  created_at: string;
}

function ComparisonCard({comparison}: {comparison: Comparison}) {
  return (
    <div className="card card-bordered bg-base-100 shadow-sm mb-12">
      <div className="card-body">
        <h3 className="card-title text-xl font-semibold">{comparison.title}</h3>
        <p className="text-base-content">{comparison.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Before Column */}
          <div>
            <h4 className="text-lg font-medium mb-2">Before</h4>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={comparison.before_url}
                alt={`${comparison.title} - Before`}
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
                src={comparison.after_url}
                alt={`${comparison.title} - After`}
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
}

export default async function Page() {
  const comparisonResponse = await fetch('https://pagesolver.com/api/northbm/comparisons');

  if (!comparisonResponse.ok) {
    throw new Error('Failed to fetch portfolio data');
  }

  const comparisonData: ComparisonResponse = await comparisonResponse.json();
  console.log(comparisonData)

  return (
    <>
      <h1 className="text-3xl font-bold text-base-content mb-4">Our Work</h1>

      <Link href="/" className="btn btn-link mb-6">
        &larr; Back to Home
      </Link>

      {comparisonData.comparisons.map((comparison, index) => (
        <ComparisonCard
          key={index}
          comparison={comparison}
        />
      ))}
    </>
  );
}
