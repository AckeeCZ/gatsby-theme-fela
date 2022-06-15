import SpaceMono from './SpaceMono-Regular.ttf';
import SpaceMonoBold from './SpaceMono-Bold.ttf';
import SpaceMonoItalic from './SpaceMono-Italic.ttf';
import SpaceMonoBoldItalic from './SpaceMono-BoldItalic.ttf';

const fonts = [
  {
    name: 'SpaceMono',
    files: [SpaceMono],
    options: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'swap',
    },
  },
  {
    name: 'SpaceMono',
    files: [SpaceMonoBold],
    options: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
  },
  {
    name: 'SpaceMono',
    files: [SpaceMonoItalic],
    options: {
      fontStyle: 'italic',
      fontWeight: '400',
      fontDisplay: 'swap',
    },
  },
  {
    name: 'SpaceMono',
    files: [SpaceMonoBoldItalic],
    options: {
      fontStyle: 'italic',
      fontWeight: '700',
      fontDisplay: 'swap',
    },
  },
];

export default fonts;
