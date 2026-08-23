
import PortlandChicken from "@/public/assets/images/menu_page/portland_chicken.jpeg";
import PortlandChicken2 from "@/public/assets/images/menu_page/portlandChicken2.jpeg";
import MaxJerkChicken from "@/public/assets/images/menu_page/maxjerkchiken.jpeg";
import MaxJerkChickenLeg from "@/public/assets/images/menu_page/chicken_leg.jpeg";
import MaxJerkChickenWings from "@/public/assets/images/menu_page/chicken_wings.jpeg";
import MaxJerkChickenPopCorn from "@/public/assets/images/menu_page/CHICKENPOPCORN.jpeg";
import MaxJerkCoconutChicken from "@/public/assets/images/menu_page/coconut_chicken.jpeg";
import MaxJerkCoconutChickenRice from "@/public/assets/images/menu_page/chicken_coconut_rice.jpeg";

import CoconutRice from "@/public/assets/images/menu_page/coconut_rice.jpeg";
import VeganLentils from "@/public/assets/images/menu_page/Vegan_stir_frie.jpeg";
import RiceAndPeas from "@/public/assets/images/menu_page/rice_and_peas.jpeg";
import VeganRedLentilPatties from "@/public/assets/images/menu_page/vegan_red_lentil.jpeg";
import Breadsticks from "@/public/assets/images/menu_page/bread.jpg";
import lalaleBurguer from "@/public/assets/images/menu_page/lalale_jeck_burguer.jpeg";
import VeganCoconutDrops from "@/public/assets/images/menu_page/VEGANCOCONUTDROPS.jpeg";
import VeganCoconutCake from "@/public/assets/images/menu_page/grater_cake.jpeg";
import CoconutCake from "@/public/assets/images/menu_page/coconut_cake.png";
import SliceCoconutCake from "@/public/assets/images/menu_page/slicecoconutcake.jpeg";
import IrishMossSlices from "@/public/assets/images/menu_page/irish_moss_slices.jpeg";
import GizadaDish from "@/public/assets/images/menu_page/gizzada.jpeg";
import RedvelvetCake from "@/public/assets/images/menu_page/redvelvetcake.jpeg";
import BananaCake from "@/public/assets/images/menu_page/banancake.jpeg";
import CarrotCake from "@/public/assets/images/menu_page/carrotcake.jpeg";
import GengibreDrink from "@/public/assets/images/menu_page/gengibre.jpeg";

import type { StaticImageData } from "next/image";

export type Category =
  | "CHICKEN"
  | "MEAT"
  | "RICE"
  | "VEGAN"
  | "FESTIVALS"
  | "DESSERTS"
  | "DRINKS";

export type Dish = {
  title: string;
  text: string;
  image: StaticImageData;
  align: "left" | "right";
  categories: Category[];
};

export const dishes: Dish[] = [
  {
    title: "Portland Style Jerk Chicken",
    text: "Chicken marinated in jerk seasoning, slowly smoked and finished with an intense and spicy crust.",
    image: PortlandChicken,
    align: "right",
    categories: ["CHICKEN"],
  },
  {
    title: "Portland Chicken",
    text: "Chicken in Jamaican curry sauce with a rich, hearty broth, soft potatoes, and a warm aroma of spices.",
    image: PortlandChicken2,
    align: "left",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Jerk-fried Chicken",
    text: "Golden, crispy fried chicken with a deeply seasoned, crunchy crust, juicy interior, and a rich blend of warm, aromatic spices.",
    image: MaxJerkChicken,
    align: "right",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Jerk-fried Chicken Leg and Thiegh",
    text: "Crispy, golden-brown fried chicken served with vibrant vine cherry tomatoes, charred red onion, fresh parsley, and a splash of bright lemon.",
    image: MaxJerkChickenLeg,
    align: "left",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Jerk-fried Chicken Wings",
    text: "Crispy golden fried chicken paired with roasted onions, vine tomatoes, fresh herbs, and a signature house-made hot sauce.",
    image: MaxJerkChickenWings,
    align: "right",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Jerk-fried Chicken Pop-corn",
    text: "Crispy fried chicken bites with fresh parsley, served with a side of vibrant hot sauce on a wooden board.",
    image: MaxJerkChickenPopCorn,
    align: "left",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Coconut Chicken",
    text: "Toasted coconut strips, roasted peppers, croutons, and zesty hot sauce for a perfect balance of flavor and texture.",
    image: MaxJerkCoconutChicken,
    align: "right",
    categories: ["CHICKEN"],
  },
  {
    title: "Max Coconut Chicken and Coconut Rice",
    text: "Toasted coconut strips, roasted peppers, croutons, and coconut rice, and zesty hot sauce for a perfect balance of flavor and texture.",
    image: MaxJerkCoconutChickenRice,
    align: "left",
    categories: ["CHICKEN", "RICE"],
  },
  {
    title: "Coconut Rice",
    text: "Fragrant coconut turmeric rice topped with juicy cherry tomatoes and fresh parsley.",
    image: CoconutRice,
    align: "right",
    categories: ["RICE"],
  },
  {
    title: "Vegan stir-fried spicy lentils",
    text: "Mama ‘G’ vegan stir-fried spicy lentils tossed with diced bell peppers and garnished with fresh parsley.",
    image: VeganLentils,
    align: "left",
    categories: ["VEGAN"],
  },
  {
    title: "Traditional rice and peas",
    text: "Traditional Jamaican rice and peas cooked with kidney beans, topped with colorful cherry tomatoes and fresh herbs.",
    image: RiceAndPeas,
    align: "right",
    categories: ["RICE", "VEGAN"],
  },
  {
    title: "Vegan red lentil patties",
    text: "Golden vegan red lentil patties, garnished with cherry tomatoes, fresh basil, spring onions, and roasted onion.",
    image: VeganRedLentilPatties,
    align: "left",
    categories: ["VEGAN"],
  },
  {
    title: "Breadsticks",
    text: "Golden, oven-baked breadsticks, crisp on the outside, warm and soft inside, brushed with butter and herbs.",
    image: Breadsticks,
    align: "right",
    categories: ["FESTIVALS"],
  },
  {
    title: "LALALE Jerk Burguer",
    text: "LALALE Jerk Burger: Crispy jerk chicken, melted cheese, fresh lettuce, and tomato on a toasted seeded bun.",
    image: lalaleBurguer,
    align: "left",
    categories: ["FESTIVALS", "MEAT"],
  },
  {
    title: "Vegan Coconut Drops",
    text: "Diced fresh coconut simmered in caramelized brown sugar and ginger for a sweet, chewy bite.",
    image: VeganCoconutDrops,
    align: "right",
    categories: ["DESSERTS", "VEGAN"],
  },
  {
    title: "Vegan Grater Cake",
    text: "Sweet shredded coconut caramelized to perfection into rich, chewy, delicious bite-sized clusters.",
    image: VeganCoconutCake,
    align: "left",
    categories: ["DESSERTS", "VEGAN"],
  },
  {
    title: "Coconut Cake",
    text: "Moist sponge layered with rich coconut cream and topped with toasted, caramelized coconut crunch.",
    image: CoconutCake,
    align: "right",
    categories: ["DESSERTS"],
  },
  {
    title: "Coconut Cake Slice",
    text: "Ultra-creamy coconut layer topped with toasted coconut, drizzled with rich red berry coulis.",
    image: SliceCoconutCake,
    align: "left",
    categories: ["DESSERTS"],
  },
  {
    title: "Max Irish Moss Slices with Wild Berry Coulis",
    text: "Smooth Irish moss slices topped and served with vibrant, tart wild berry coulis.",
    image: IrishMossSlices,
    align: "right",
    categories: ["DESSERTS"],
  },
  {
    title: "Mother ‘G’ Vegan Gizzada",
    text: "Crispy pastry crust filled with sweet, spiced shredded coconut for an authentic Jamaican treat.",
    image: GizadaDish,
    align: "left",
    categories: ["DESSERTS", "VEGAN"],
  },
  {
    title: "LALALE Redvelvet cake",
    text: "Slices of rich, moist red velvet cake with creamy frosting, topped with berries and chocolate, on a sleek black slate.",
    image: RedvelvetCake,
    align: "right",
    categories: ["DESSERTS"],
  },
  {
    title: "Honey Pecan Sweetheart Banana Cake",
    text: "Heart-shaped moist banana cake studded with crunchy pecans and drizzled with sweet honey.",
    image: BananaCake,
    align: "left",
    categories: ["DESSERTS"],
  },
  {
    title: "Summer Time Carrot Cake with Strawberries & 'Posh' Cream",
    text: "Soft carrot cake topped with creamy 'posh' frosting, fresh strawberries, and fruit drizzle.",
    image: CarrotCake,
    align: "right",
    categories: ["DESSERTS"],
  },
  {
    title: "Max Aged Ginger-Beer",
    text: "Bold, fiery, and perfectly aged ginger beer served ice-cold for a refreshing, zesty kick.",
    image: GengibreDrink,
    align: "right",
    categories: ["DRINKS"],
  },
];