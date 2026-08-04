/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.nordevit.it',
	generateRobotsTxt: true,
	changefreq: 'weekly',
	priority: 0.7,
	// /dashboard e /demo non sono linkate dal sito, mostrano solo dati/contenuti
	// demo e ora hanno anche `robots: noindex` nella loro metadata: non ha senso
	// suggerirle ai crawler tramite la sitemap.
	exclude: ['/dashboard', '/dashboard/*', '/demo'],
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/', disallow: ['/dashboard', '/dashboard/*', '/demo'] },
		],
	},
}