import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export async function loaderMenu() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
