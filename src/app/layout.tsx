import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Education',
  description: 'Educational website to fine multilingual online courses',
  openGraph: {
    type: 'website',
    title: 'Edusite',
    images: [{url: "https://github.com/Timcodes117/Ca/blob/main/eduog.PNG?raw=true"}],
    
    
  }
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

        <body>{children}</body>
    </html>
  )
}
