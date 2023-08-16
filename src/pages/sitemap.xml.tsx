import { GetServerSideProps } from 'next'

const SiteMap = () => {
    return null
}

export default SiteMap

// export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
//     const xml = await generateSitemap();
//     ctx.res.write(xml);
//     ctx.res.end();
//     return { props: {} }
// }

// export const generateSitemap = async () => {

//     // TODO get list of pages
//     // const pages = getPagesFromAPI()

//     return `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     //TODO Loop through below code with all your pages
//       <url>
//         // TODO Loop through all the pages you want to have in sitemap
//         {pages?.map((val)=>{
//             <loc>https://www.example.com/foo.html</loc>
//             <lastmod>2022-06-04</lastmod>
//         }).join('')}
//       </url>
//     </urlset>`
// }