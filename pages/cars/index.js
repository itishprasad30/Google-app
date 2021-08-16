import Link from "next/link";

export default function CarsList({ hee }) {
  // const heell = async () => {
  //   const req = await fetch("http://localhost:3000/ford.json");
  //   const data = await req.json();
  //   console.log(req);
  //   console.log(data);

  //   return {
  //     props: { hee: data },
  //   };
  // };

  return (
    <div>
      <main>
        <h1>Cars list</h1>

        <ul className="font-semibold cursor-pointer hover:bg-green-500">
          <li className="font-semibold cursor-pointer hover:bg-red-600">
            <Link href="/cars/tesla">
              <a>Tesla</a>
            </Link>
          </li>
          <li className="font-semibold cursor-pointer hover:bg-blue-500">
            <Link href="/cars/ford">
              <a>Ford</a>
            </Link>
          </li>
          <li className="font-semibold cursor-pointer hover:bg-yellow-500">
            <Link href="/cars/lambo">
              <a>Lambo</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
