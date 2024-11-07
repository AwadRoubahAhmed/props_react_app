import Button from "./Button";
function Articles({ id, title, children }) {
  console.log(title);
  return (
    <div className="container max-w-lg h-fit my-4 mx-auto p-4 text-white font bg-blue-950 rounded-md">
      <h3 className="text-xl font-semibold my-1 p-2 underline">
        {id}. {title}
      </h3>
      <p>{children}</p>
      <p className="font-bold my-2">Counter: </p>
      <Button id={id}>
        Click here
      </Button>
    </div>
  );
}

export default Articles;
