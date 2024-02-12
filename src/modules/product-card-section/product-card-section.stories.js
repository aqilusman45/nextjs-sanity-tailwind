import ProductCardSection from "./index";
import { mocks } from "./mocks";

const meta = {
  title: "Modules/ProductCardSection",
  component: ProductCardSection,
  parameters: {
    design: [
      {
        type: "figma",
        name: "Desktop",
        url: "",
        allowFullscreen: true,
      },
      {
        type: "figma",
        name: "Mobile",
        url: "",
        allowFullscreen: true,
      },
    ],
  },
};

export default meta;

const Template = (args) => (
    <ProductCardSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...mocks,
};
