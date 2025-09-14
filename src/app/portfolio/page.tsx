import Link from "next/link";
import { PageSolverClient, ComparisonImage } from "@pagesolver/sdk";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

function ComparisonCard({ comparison }: { comparison: ComparisonImage }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-medium">{comparison.title}</h3>

        <div className="relative aspect-[4/3] w-full mb-3 mt-2 overflow-hidden rounded-lg">
          <BeforeAfterSlider
            beforeImage={comparison.before_url}
            afterImage={comparison.after_url}
            beforeAlt={`${comparison.title} - Before`}
            afterAlt={`${comparison.title} - After`}
          />
        </div>

        {comparison.description && (
          <div className="text-sm text-base-content/80 line-clamp-2">
            {comparison.description}
          </div>
        )}
      </div>
    </div>
  );
}

export const revalidate = 600;

export default async function Page() {
  const client = new PageSolverClient(process.env.PAGESOLVER_API_KEY!);
  const comparisons = await client.getComparisons();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-base-content">Portfolio</h1>
          <p className="text-base-content/70 mt-1">
            Before and after transformations by North Brisbane Maintenance
          </p>
        </div>
        <Link href="/" className="btn btn-outline mt-2 md:mt-0">
          &larr; Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisons.map((comparison: ComparisonImage, index: number) => (
          <ComparisonCard key={index} comparison={comparison} />
        ))}
      </div>
    </div>
  );
}
