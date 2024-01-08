import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '@/components/layout/nav'
const Conten_Chouse_us = dynamic(() => import('@/components/conten_chose_us'), { ssr: true })
const Conten_vps_m = dynamic(() => import('@/components/conten_vps_m'), { ssr: true })
const Conten_statistics = dynamic(() => import('@/components/conten_statistics'), { ssr: true })
const Conten_weuse = dynamic(() => import('@/components/conten_weues'), { ssr: true })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>TCNE | บริการให้เช่า Cloud Hosting | Colo VPS Server</title>
        <meta name="description" content="TCNE บริการให้เช่า Cloud Hosting และ Colo VPS Server ด้วยความเชื่อมั่นในคุณภาพสูงสุด มีความเสถียรและประสิทธิภาพสูง" />
        <meta name="keywords" content="Cloud Hosting, Colo VPS Server, Cloud VPS Hosting, Virtual Private Server (VPS), High-performance Hosting, High-quality Hosting, Server Hosting Solutions, Reliable Hosting Services, TCNE Hosting, Dedicated Server Hosting, vps, virtual private server, vps hosting, vps server, cloud vps, colocation vps" />
        <meta name="author" content="TCNE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Facebook Meta Tags  */}
        <meta property="og:title" content="บริการ Cloud VPS ราคาประหยัด | TCNE" />
        <meta property="og:description" content="TCNE ให้บริการ Cloud VPS คุณภาพสูงที่มาพร้อมกับราคาประหยัด พร้อมบริการแบบครบวงจร รองรับงานต่าง ๆ ด้วยทีมงานมืออาชีพ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tcne.in.th/" />
        <meta property="og:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="TCNE"></meta>
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="บริการ Cloud VPS ราคาประหยัด | TCNE" />
        <meta name="twitter:description" content="TCNE ให้บริการ Cloud VPS คุณภาพสูงที่มาพร้อมกับราคาประหยัด พร้อมบริการแบบครบวงจร รองรับงานต่าง ๆ ด้วยทีมงานมืออาชีพ" />
        <meta name="twitter:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
        <meta name="twitter:site" content="https://www.tcne.in.th/" />
        <meta name="twitter:creator" content="https://www.tcne.in.th/" />
        {/* Google Meta Tags */}
        <meta itemProp="name" content="บริการ Cloud VPS ราคาประหยัด | TCNE" />
        <meta itemProp="description" content="TCNE ให้บริการ Cloud VPS คุณภาพสูงที่มาพร้อมกับราคาประหยัด พร้อมบริการแบบครบวงจร รองรับงานต่าง ๆ ด้วยทีมงานมืออาชีพ" />
        <meta itemProp="image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
      </Head>

      <NavBar>
        <Conten_Chouse_us  />
        <Conten_vps_m />
        <Conten_statistics />
        <Conten_weuse />
      </NavBar>
    </>
  )
}
