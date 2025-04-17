/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vmbknpp2dlaevhxn.public.blob.vercel-storage.com',
                port: '',
                pathname: '/*/**'
            }
        ]
    }
};

export default nextConfig;
