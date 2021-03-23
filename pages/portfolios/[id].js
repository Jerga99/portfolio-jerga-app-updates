
import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router" ;

const Portfolio = () => {
  const router = useRouter();

  return (
    <BaseLayout>
        <h1>I am Portfolio Page</h1>
        <h2>{router.query.id}</h2>
    </BaseLayout>
  )
}

export default Portfolio;
