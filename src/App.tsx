function App() {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  // const theme = window.Telegram?.WebApp?.themeParams;

  // const bgColor = theme?.bg_color || "#0a0a0a";
  // const textColor = theme?.text_color || "ffffff";
  // const buttonColor = theme?.button_color || "#3b82f6";
  // const linkColor = theme?.link_color || "06b6d4";
  // const hintColor = theme?.hint_color || "6b7280";

  return (
    <>
      <h1>HI, {user?.first_name}!</h1>
      <h2>КАК ОНО?</h2>
    </>
  );
}

export default App;
