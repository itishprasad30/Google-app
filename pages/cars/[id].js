import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

function CarList({ cars }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div>
      <Head>
        <title>
          {cars.color} {cars.id}
        </title>
      </Head>
      <h1 className="ml-5 justify-center items-center mt-5">
        cars name u enterd: {id}
      </h1>
      <img src={cars.image} width="720 px" />
    </div>
  );
}

export default CarList;

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      cars: data,
    },
  };
}

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3000/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
