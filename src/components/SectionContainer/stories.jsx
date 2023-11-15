import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quas, voluptas voluptatibus dolores
          exercitationem voluptatem quod natus quia doloribus. Voluptate
          voluptas, quas voluptatibus, quia, quibusdam voluptatem voluptatum
          quod natus quia doloribus. Voluptate voluptas, quas voluptatibus,
          quia, quibusdam voluptatem voluptatum.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
