import Image from 'next/image'
import Link from 'next/link';
import { portfolio } from '@/portfolio';

interface BeforeAfterProps {
    title: string;
    description: string;
    beforeSrc: string;
    afterSrc: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ title, description, beforeSrc, afterSrc }) => (
    <div className="mb-12">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
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
            <div className="flex-1">
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
)

export default function Page() {
    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
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
    )
}