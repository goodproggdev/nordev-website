/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/images/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,OPTIONS' },
					{ key: 'Access-Control-Allow-Headers', value: 'Content-Type' }
				],
			},
		]
	}
}

module.exports = nextConfig
