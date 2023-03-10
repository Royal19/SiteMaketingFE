import Head      from 'next/head'
import Image     from 'next/image'
import { Inter } from '@next/font/google'
import styles    from '@/styles/Home.module.css'
import Link     from 'next/link';

const inter = Inter ( { subsets: [ 'latin' ] } )

//@ts-ignore
export default function Home( { news }) {
	console.log(news)
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>SITO VETRINA</h1>
				
				<p>----------------</p>
				<h1 className="title">
					Visita le nostre <Link href="/news/list-news">news</Link>
				</h1>
				<ul>
					{news.map((item) => (
					<li key={item.slug}>
						<Link href={`/news/${item.slug}/`}>
                            {item.title}
                        </Link>
					</li>
					))}
					
				</ul>
				
			
			</main>
		</>
	)
}

export async function getStaticProps() {
//	const res = await fetch ( `http://127.0.0.1:8000/api/news/${params.slug}` );
//	const single_news = await res.json ();
	
	const ress = await fetch ( "http://127.0.0.1:8000/api/v1/news/" );
	console.log(ress.status)
	const news = await ress.json();
	console.log("news => ", news);
	
	return {
		props: {
//			single_news,
			news
		},
	};
}