import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur amet, voluptatum magni voluptatem possimus doloremque earum quia, eum corrupti vitae mollitia quas sapiente nostrum optio quod accusamus rem labore ea?
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
