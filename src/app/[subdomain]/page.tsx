import { useRouter } from 'next/router';

const SubdomainHomePage = () => {
  const router = useRouter();
  const { subdomain } = router.query;

  return (
    <div>
      <h1>Welcome to the {subdomain} subdomain</h1>
      <p>This is the homepage for {subdomain}.</p>
    </div>
  );
};

export default SubdomainHomePage;
