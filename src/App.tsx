function App() {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <>
      <h1>HI, {user?.first_name}!</h1>
    </>
  );
}

export default App;
