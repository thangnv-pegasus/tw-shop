const PageTitle = ({ title = "page title", className = "" }) => {
  return (
    <div className={`bg-pageTitle w-full h-auto py-28 mb-3 ${className}`}>
      <div className="max-w-container mx-auto text-white text-3xl font-semibold">{title}</div>
    </div>
  );
};

export default PageTitle;
