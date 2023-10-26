import { Link } from "../Link";
import { useI18n } from "../hooks/useI18n";
import { useQueryParams } from "../hooks/useQueryParams";
import { i18nAbout } from "../languages/i18nAbout";

function AboutPage({ routeParams }) {
  const { i18n } = useI18n(routeParams.lang ?? "es", i18nAbout);

  const query = useQueryParams();
  console.log(query);

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <img src="/avatar.jpg" style={{ borderRadius: '50%', width: '100px'}} />
      <Link to={"/"}>{i18n.button}</Link>
    </>
  );
}

export default AboutPage;
