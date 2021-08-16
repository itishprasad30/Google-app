import Head from "next/dist/next-server/lib/head";
import HeaderSearch from "../components/HeaderSearch";
import Response from "../Response";
import { API_KEY, Context_Key } from "../key";
import { useRouter } from "next/router";
import SearchResult from "../components/SearchResult";

function Search({ results }) {
  const router = useRouter();
  // console.log(results);
  console.clear();
  console.log(
    "Oh, Hello my Curious Friend!\n\nThanks for testing my Build.\n\nI have used Google API's to fetch data and done Sever-Side Rendering of those data. Here is the Example Output of the Data you just Fetched: \n\n",
    results,
    "\n\nHappy Hunting!! 😉\n\n~ Itish\nhttp://github.com/itishprasad30"
  );
  return (
    <div>
      <Head>
        <title>{router.query.term} -Google Search</title>
        <link rel="Icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <HeaderSearch />
      {/* results */}

      <SearchResult results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const dummyData = false;
  const startIndex = context.query.start || "0";
  const data = dummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_Key}&q=${context.query.term} &start=${startIndex} `
      ).then((response) => response.json());
  // After the Server has rendered... Pass the result to the client.....
  return {
    props: {
      results: data,
    },
  };
}

// export async function getServerSideProps(context) {
//   const useDummyData = false;
//   const startIndex = context.query.start || "0";

//   const data = useDummyData
//     ? Response
//     : fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_Key}&q=${context.query.term}&start=${startIndex} `
//       ).then((response) => response.json());

//   // After the Server has rendered... Pass the result to the client.....
//   return {
//     props: {
//       results: data,
//     },
//   };
// }
