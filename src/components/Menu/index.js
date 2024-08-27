function Menu() {

  const arrayMenu = [
    'Trang chu',
    'San pham',
    'Tin tuc',
    'Gioi thieu',
    'Lien he'
  ];

  return (
    <>
      <ul>
        {arrayMenu.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          );
        })}
      </ul>

    </>
  );
}

export default Menu;