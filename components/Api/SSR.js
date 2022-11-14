export const getServerSideProps = async () => {
  console.log("hello this is server side");
  return {
    props: {
      name: "Omni man",
    },
  };
};
