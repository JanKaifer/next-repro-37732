/** Add your relevant code here for the issue to reproduce */
export default function Home({ test }) {
  return <p>{JSON.stringify(test)}</p>;
}

export async function getServerSideProps({ resolvedUrl }) {
  const name = "test";
  console.log(resolvedUrl);
  const test = require(`../${name}.json`);
  return {
    props: {
      test,
    },
  };
}
