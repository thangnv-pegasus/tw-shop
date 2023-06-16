const PageTitle = ({ title = "page title", className = "" }) => {
  return (
    <div className={`bg-pageTitle w-full h-auto py-28 mb-3 ${className}`}>
      <div className="lg:max-w-container lg:mx-auto max-w-full px-4 lg:px-0 text-white text-3xl font-semibold">{title}</div>
    </div>
  );
};

export default PageTitle;
