import Paragraph from './paragraph';
import Title from './title';

type TypographyProps = typeof Paragraph & {
  Paragraph: typeof Paragraph;
  Title: typeof Title;
};

const Typography = Paragraph as TypographyProps;
Typography.Paragraph = Paragraph;
Typography.Title = Title;

export default Typography;
