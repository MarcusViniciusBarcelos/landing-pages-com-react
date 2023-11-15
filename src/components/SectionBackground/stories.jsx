import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
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
      <SectionBackground {...args} />
    </div>
  );
};
