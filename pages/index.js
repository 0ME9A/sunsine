import Image from "next/image";
import Layout from "../components/Layout";
import PhotosList from "../components/PhotosList";

export default function Home({ result }) {
  return (
    <>
      <div className="h-96 lg:h-[60vh] w-full bg-black overflow-hidden relative top-0">
        <Image
          alt="The guitarist in the concert."
          src="https://images.unsplash.com/photo-1666845263024-b0381cb50b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
          fill
          layout="responsive"
          className="w-full h-full object-cover opacity-75"
        />
        <article className="absolute w-full p-5  md:max-w-3xl left-1/2 top-1/2 -translate-x-1/2">
          <h1 className="text-white">Sunsine</h1>
          <p className="text-white">
            The internet’s source for visuals. Powered by creators everywhere.
          </p>
          <hr />
        </article>
      </div>
      <PhotosList />
    </>
  );
}
