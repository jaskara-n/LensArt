import NavBar from "../components/navigation";
function HomePage() {
  // Define a function
  const myFunction = (name: string): string => {
    return `Hello, ${name}!`;
  };

  return (
    <div>
      {/* Use the function in JSX */}
      <NavBar />
      <h1>{myFunction("John")}</h1>
    </div>
  );
}

export default HomePage;
