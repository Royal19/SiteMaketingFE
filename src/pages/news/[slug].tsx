import { useRouter } from 'next/router'


const fetcher = async ( url: string ) => {
	const res = await fetch ( url );
	const data = await res.json ();
	
	if ( res.status != 200 ) {
		throw new Error ( data.message );
	}
	
	return data;
	
}


export default function Home({single_news, news}) {
	const router = useRouter ();
	console.log("single news", single_news);
	
	if ( router.isFallback ) {
		return <div>Loading . . .</div>;
	}
	
	return (
		<>
		<h1>{single_news.title}</h1>
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: [ { params: { slug: "test" } } ],
		fallback: true,
	};
}

//@ts-ignore
export async function getStaticProps( { params } ) {
	const res = await fetch ( `http://127.0.0.1:8000/api/v1/news/${params.slug}/` );
	const single_news = await res.json ();
	
	const ress = await fetch ( "http://127.0.0.1:8000/api/v1/news/" );
	const news = await ress.json();
	console.log("news => ", news);
	
	return {
		props: {
			single_news,
			news
		},
	};
}