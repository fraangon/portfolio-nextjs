import Header from "../Header";
import Meta from '../Meta'

export default function Layout(props) {
  return (
    <section>
    <Meta
      siteTitle={props.siteTitle}
      siteDescription={props.siteDescription}
    />
    <Header siteTitle={props.siteTitle} />
    <div className="content">{props.children}</div>
  </section>
  );
}