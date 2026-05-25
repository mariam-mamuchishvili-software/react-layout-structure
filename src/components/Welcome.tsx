type WelcomeProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function Welcome(props: WelcomeProps) {
  const { title, description, icon } = props;
  return (
    <section className="app-content">
      <h1 className="page-title">
        <span className="page-icon" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h1>
      <p className="page-copy">{description}</p>
    </section>
  );
}
