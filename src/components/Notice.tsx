interface Props {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  description?: string | JSX.Element;
}
/**
 *
 *  A base component to display something (notation) to the user
 *  It is supposed to be extended only
 */
function Notice(props: Props) {
  const { title, subtitle, description } = props;

  return (
    <div className="my-10 text-center pb-10">
      <h1 className="text-7xl mt-7">{title}</h1>
      <h2 className="text-2xl mt-5 mb-2">{subtitle}</h2>
      <span className="text-gray-500">{description}</span>
    </div>
  );
}

export default Notice;
